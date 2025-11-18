// app/page.tsx
import dynamicImport from "next/dynamic";
import { CybersecurityInstituteComponent } from "@/components/cybersecurity-institute";
import { ThemeProvider } from "@/components/theme-provider";
import ClientDeferred from "@/components/ClientDeferred";
import { BackgroundBeams } from "@/components/ui/background-beams";

/** Fully static for fastest TTFB */
export const dynamic = "error";
export const revalidate = false;

/** Lazy-load heavy client widgets; avoid sending their JS on first paint */
const Gallery = dynamicImport(() => import("@/components/ui/Gallery"), { ssr: false });
const Testimonials = dynamicImport(() => import("@/components/Testimonials"), { ssr: false });

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      <div className="relative">
        <BackgroundBeams mode="auto" className="z-0" />

        <main className="relative z-10">
          <CybersecurityInstituteComponent />

          {/* Gallery */}
          <section id="gallery" className="mt-16 md:mt-24">
            <ClientDeferred
              rootMargin="240px"
              fallback={
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="aspect-[4/3] rounded-xl bg-zinc-900/40 animate-pulse"
                    />
                  ))}
                </div>
              }
            >
              <Gallery />
            </ClientDeferred>
          </section>

          {/* Testimonials */}
          <section id="testimonials" className="mt-16 md:mt-24 mb-16 md:mb-24">
            <ClientDeferred
              rootMargin="240px"
              fallback={
                <div className="h-48 rounded-2xl bg-zinc-900/40 animate-pulse" />
              }
            >
              <Testimonials />
            </ClientDeferred>
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
}
