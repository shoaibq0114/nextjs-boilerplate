// app/page.tsx
import dynamicImport from "next/dynamic";
import { CybersecurityInstituteComponent } from "@/components/cybersecurity-institute";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import ClientDeferred from "@/components/ClientDeferred";

/** Fully static for fastest TTFB */
export const dynamic = "error";
export const revalidate = false;

/** Lazy-load heavy client widgets; avoid sending their JS on first paint */
const Gallery = dynamicImport(() => import("@/components/ui/Gallery"), { ssr: false });
const Testimonials = dynamicImport(() => import("@/components/Testimonials"), { ssr: false });

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      {/* Lightweight, server-rendered hero */}
      <CybersecurityInstituteComponent />

      {/* Defer Gallery until near viewport (or idle), with a tiny skeleton */}
      <ClientDeferred
        rootMargin="240px"
        fallback={
          <div className="my-12 grid grid-cols-2 md:grid-cols-3 gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-[4/3] rounded-xl bg-zinc-900/40 animate-pulse" />
            ))}
          </div>
        }
      >
        <Gallery />
      </ClientDeferred>

      {/* Defer Testimonials similarly */}
      <section id="testimonials" className="mt-12">
        <ClientDeferred
          rootMargin="240px"
          fallback={<div className="my-16 h-48 rounded-2xl bg-zinc-900/40 animate-pulse" />}
        >
          <Testimonials />
        </ClientDeferred>
      </section>

      <Footer />
    </ThemeProvider>
  );
}
