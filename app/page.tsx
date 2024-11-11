
import { CybersecurityInstituteComponent } from "@/components/cybersecurity-institute";
import { ThemeProvider } from "@/components/theme-provider";
// import {FocusCards} from "@/components/focus-cards"

export default function Home() {
  return (
    <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
    <CybersecurityInstituteComponent />
    </ThemeProvider>
    
  );
}
