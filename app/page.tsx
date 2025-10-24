import { CybersecurityInstituteComponent } from "@/components/cybersecurity-institute";
import Gallery from "@/components/ui/Gallery";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

export default function Home() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {/* Hero + Courses */}
      <CybersecurityInstituteComponent />

      {/* Gallery Section */}
      <Gallery />

      {/* ✅ Only ONE Testimonials section */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* Footer */}
      <Footer />
    </ThemeProvider>
  );
}
