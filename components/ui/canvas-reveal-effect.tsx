/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { cn } from "@/lib/utils";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import * as THREE from "three";

/**
 * 🎨 CanvasRevealEffect (final optimized)
 * -------------------------------------------------
 * - Matches Aceternity UI animation visually.
 * - Keeps `u_time` advancing every frame for smooth reveals.
 * - Limits FPS to 60 (throttled GPU loop).
 * - Uses `powerPreference: "low-power"` and capped DPR for perf.
 */

export const CanvasRevealEffect = ({
  animationSpeed = 0.4,
  opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
  colors = [[0, 255, 255]],
  containerClassName,
  dotSize,
  showGradient = true,
}: {
  animationSpeed?: number;
  opacities?: number[];
  colors?: number[][];
  containerClassName?: string;
  dotSize?: number;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn("relative h-full w-full overflow-hidden", containerClassName ?? "bg-black")}
    >
      <DotMatrix
        colors={colors}
        dotSize={dotSize ?? 3}
        opacities={opacities}
        shader={`
          // ✨ Controls reveal timing and smooth fade per pixel
          float animation_speed_factor = ${animationSpeed.toFixed(1)};
          float intro_offset = distance(u_resolution / 2.0 / u_total_size, st2) * 0.01 + (random(st2) * 0.15);
          opacity *= step(intro_offset, u_time * animation_speed_factor);
          opacity *= clamp((1.0 - step(intro_offset + 0.1, u_time * animation_speed_factor)) * 1.25, 1.0, 1.25);
        `}
        center={["x", "y"]}
      />

      {/* optional soft fade gradient from top → bottom */}
      {showGradient && (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/60 via-black/10 to-transparent" />
      )}
    </div>
  );
};

/* ---------------- DotMatrix Shader Wrapper ---------------- */
interface DotMatrixProps {
  colors?: number[][];
  opacities?: number[];
  totalSize?: number;
  dotSize?: number;
  shader?: string;
  center?: ("x" | "y")[];
}

const DotMatrix: React.FC<DotMatrixProps> = ({
  colors = [[255, 255, 255]],
  opacities = [0.04, 0.04, 0.04, 0.04, 0.04, 0.08, 0.08, 0.08, 0.08, 0.14],
  totalSize = 4,
  dotSize = 2,
  shader = "",
  center = ["x", "y"],
}) => {
  // 🔹 Precompute uniforms only when dependencies change
  const uniforms = useMemo(() => {
    // Normalize colors (support up to 3 tones)
    let colorsArray = [colors[0], colors[0], colors[0], colors[0], colors[0], colors[0]];
    if (colors.length === 2) {
      colorsArray = [colors[0], colors[0], colors[0], colors[1], colors[1], colors[1]];
    } else if (colors.length === 3) {
      colorsArray = [colors[0], colors[0], colors[1], colors[1], colors[2], colors[2]];
    }

    return {
      u_colors: {
        value: colorsArray.map(
          (c) => new THREE.Vector3(c[0] / 255, c[1] / 255, c[2] / 255)
        ),
      },
      u_opacities: { value: opacities },
      u_total_size: { value: totalSize },
      u_dot_size: { value: dotSize },
    };
  }, [colors, opacities, totalSize, dotSize]);

  return (
    <Shader
      source={`
        precision mediump float;
        in vec2 fragCoord;

        uniform float u_time;
        uniform float u_opacities[10];
        uniform vec3 u_colors[6];
        uniform float u_total_size;
        uniform float u_dot_size;
        uniform vec2 u_resolution;
        out vec4 fragColor;

        float PHI = 1.61803398874989484820459;
        float random(vec2 xy) {
          return fract(tan(distance(xy * PHI, xy) * 0.5) * xy.x);
        }

        void main() {
          vec2 st = fragCoord.xy;

          // Center alignment of dot grid
          ${center.includes("x") ? "st.x -= abs(floor((mod(u_resolution.x, u_total_size) - u_dot_size) * 0.5));" : ""}
          ${center.includes("y") ? "st.y -= abs(floor((mod(u_resolution.y, u_total_size) - u_dot_size) * 0.5));" : ""}

          float opacity = step(0.0, st.x) * step(0.0, st.y);
          vec2 st2 = vec2(int(st.x / u_total_size), int(st.y / u_total_size));

          // Random per-cell reveal pattern
          float frequency = 5.0;
          float show_offset = random(st2);
          float rand = random(st2 * floor((u_time / frequency) + show_offset + frequency) + 1.0);

          // Dot transparency and grid shape
          opacity *= u_opacities[int(rand * 10.0)];
          opacity *= 1.0 - step(u_dot_size / u_total_size, fract(st.x / u_total_size));
          opacity *= 1.0 - step(u_dot_size / u_total_size, fract(st.y / u_total_size));

          vec3 color = u_colors[int(show_offset * 6.0)];
          ${shader}

          fragColor = vec4(color, opacity);
          fragColor.rgb *= fragColor.a;
        }
      `}
      uniforms={uniforms}
      maxFps={60}
    />
  );
};

/* ---------------- ShaderMaterial (GPU program) ---------------- */
type Uniforms = Record<string, { value: any }>;

const ShaderMaterial = ({
  source,
  uniforms,
  maxFps = 60,
}: {
  source: string;
  uniforms: Uniforms;
  maxFps?: number;
}) => {
  const { gl } = useThree();
  const ref = useRef<THREE.Mesh>();
  const tmp = new THREE.Vector2();
  let lastFrameTime = 0;

  // ⚙️ Throttled time updates — capped at 60 FPS
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    if (t - lastFrameTime < 1 / maxFps) return;
    lastFrameTime = t;

    const mat: any = ref.current.material;
    mat.uniforms.u_time.value = t;

    // ✅ Keep resolution synced dynamically
    gl.getDrawingBufferSize(tmp);
    const res = mat.uniforms.u_resolution.value as THREE.Vector2;
    res.set(tmp.x, tmp.y);
  });

  // Build uniforms (initial state)
  const getUniforms = () => ({
    ...uniforms,
    u_time: { value: 0 },
    u_resolution: { value: gl.getDrawingBufferSize(new THREE.Vector2()) },
  });

  // ✅ Memoized shader material (no re-creation on each frame)
  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader: `
        precision mediump float;
        uniform vec2 u_resolution;
        out vec2 fragCoord;
        void main() {
          gl_Position = vec4(position.xy, 0.0, 1.0);
          fragCoord = (position.xy + vec2(1.0)) * 0.5 * u_resolution;
          fragCoord.y = u_resolution.y - fragCoord.y;
        }
      `,
      fragmentShader: source,
      uniforms: getUniforms(),
      glslVersion: THREE.GLSL3,
      blending: THREE.CustomBlending,
      blendSrc: THREE.SrcAlphaFactor,
      blendDst: THREE.OneFactor,
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [source]);

  return (
    <mesh ref={ref as any}>
      <planeGeometry args={[2, 2]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
};

/* ---------------- Three.js Canvas ---------------- */
const Shader: React.FC<ShaderProps> = ({ source, uniforms, maxFps = 60 }) => (
  <Canvas
    className="absolute inset-0 h-full w-full"
    frameloop="always"           // ensures shader time continuity
    dpr={[1, 1.25]}              // performance-friendly pixel ratio cap
    gl={{ powerPreference: "low-power", antialias: false }}
  >
    <ShaderMaterial source={source} uniforms={uniforms} maxFps={maxFps} />
  </Canvas>
);

interface ShaderProps {
  source: string;
  uniforms: Uniforms;
  maxFps?: number;
}
