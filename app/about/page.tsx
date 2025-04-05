"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Footer from "@/components/Footer";
import Image from "next/image";
import { ShinyButton } from "@/components/magicui/shiny-button";
// import { Boxes, BoxesCore } from "@/components/ui/background-boxes";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Highlight } from "@/components/ui/highlight-about";
import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

export default function AboutUs() {
  const router = useRouter();
  return (
    <div className="min-h-screen text-white p-6 mx-auto" style={{ backgroundColor: 'rgba(5,6,17,1)' }}>


      <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-3xl">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
 
      <FlickeringGrid
        className="absolute inset-0 z-0 size-full"
        squareSize={10}
        gridGap={4}
        color="#006D32"
        maxOpacity={0.5}
        flickerChance={0.1}
      />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
      In a world driven by technology, cybersecurity isn&apos;t optional - <Highlight>it&apos;s essential</Highlight>.
      </h1>
      <p className="text-2xl text-center mt-2 text-neutral-300 relative z-20">
      At HackerAcademy, we are building a safer tomorrow one professional at a time.
      </p>
    </div>

      <Tabs defaultValue="mission" className="mb-12 py-4 max-w-4xl mx-auto">
        <TabsList className="bg-black flex justify-center">
          <TabsTrigger value="mission" className="text-lg px-6 py-2">Our mission</TabsTrigger>
          <TabsTrigger value="who" className="text-lg px-6 py-2">Who we are</TabsTrigger>
          <TabsTrigger value="why" className="text-lg px-6 py-2">Why Hackersdemy</TabsTrigger>
        </TabsList>

        <TabsContent value="who" className="space-y-4 mt-6">
          <div className="grid md:grid-cols-1 gap-8 text-xl">
            <h2 className="text-2xl font-semibold">Who We Are</h2>
            <p className="text-gray-300">
              Welcome to Hackersdemy! I&apos;m Mohammed Shoaib, a cybersecurity professional and educator with over 7 years of experience in this dynamic and ever-growing field. Cybersecurity has been my passion for years, and I&apos;ve made it my mission to share what I&apos;ve learned through hands-on experience with students from all walks of life.
            </p>
            <p className="text-gray-300">
              I hold certifications such as Certified Ethical Hacker (CEH), Splunk Cybersecurity Defense Analyst (SPLK-5001), and eWPT (eLearnSecurity Web Application Penetration Tester), among others. Over the course of my career, I&apos;ve trained more than 4,000 students—both online and offline—from India and 12+ countries, including the United States, Canada, Iran, Australia, and Bangladesh.
            </p>
            <p className="text-gray-300">
              My teaching journey began at renowned institutes like Entersoft Labs and Durgasoft Solutions in Hyderabad, as well as Apponix Technologies in Bengaluru. However, after COVID-19, I decided to pursue my vision of creating my own institute. I founded Zeroday Hackers, which later evolved into Hackersdemy—a name that emphasizes our dedication to simplifying and teaching cybersecurity concepts with a focus on practical application.
            </p>
            <p className="text-gray-300">
              Currently, I work as a Senior Security Analyst at Symbiosys Technologies in Visakhapatnam, actively engaging in the same domain I teach. This allows me to provide students with real-time insights into the tools, techniques, and methodologies used in today&apos;s cybersecurity landscape. I believe in teaching what I&apos;ve learned over the years from my own practical experience in the industry, ensuring that students gain not just theoretical knowledge but a deep understanding of how to apply it in real-world scenarios.
            </p>
            <p className="text-gray-300">
              At Hackersdemy, I focus on breaking down complex cybersecurity topics into simple, relatable concepts. My teaching includes real-time examples and hands-on training with industry-relevant tools, so students are not only well-prepared but confident in their skills. Whether it&apos;s ethical hacking, SOC analysis, penetration testing, or cyber forensics, I ensure my students have a solid foundation to build successful careers in cybersecurity.
            </p>
            <p className="text-gray-300">
              Hackersdemy is an inclusive space for students from all educational backgrounds. Whether you&apos;re a beginner or looking to advance your skills, I&apos;m here to guide you every step of the way. If you&apos;re ready to take the next step in your cybersecurity journey, let&apos;s make it happen together!
            </p>
          </div>
        </TabsContent>

        <TabsContent value="mission" className="space-y-4 mt-6">
          <div className="grid md:grid-cols-2 gap-8 text-xl">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Our Mission</h2>
              <p className="text-gray-300 text-xl">
                Our mission? To deliver exceptional cybersecurity education, combining hands-on training with expert knowledge. Whether you&apos;re starting from scratch or refining your skills, we prepare you to defend networks, applications, and organizations against the most advanced cyber threats. Regardless of their background, we ensure every student masters essential concepts with ease. Unlike traditional theory-heavy approaches, our focus is on practical, hands-on training using industry-relevant tools and evolving techniques. Our mission is to empower students with the skills and confidence needed to excel in the ever-changing world of cybersecurity.
              </p>
            </div>
            <Image src="/placeholder.jpg" alt="image here" width={200} height={200} />
            <Image src="/placeholder.jpg" alt="image here" width={200} height={200} />
            <p>
              At Hackersdemy, we empower you to achieve the tech career you deserve with top-tier certifications, courses, and expert knowledge by providing immersive training with industry-standard applications ensuring real-world relevance. Our courses in Ethical Hacking, Advanced Penetration Testing, Cyber Forensics and SOC Analysis are designed to prepare you for the ever-evolving cybersecurity challenges across all domains.
            </p>
            <p>
              As cyber threats become increasingly sophisticated, there is a growing demand for skilled professionals to protect organizations from potential attacks. At Hackersdemy, we provide courses that give you industry-ready skills, helping you to level up your cybersecurity knowledge and open the doors to a wide range of job opportunities within the ever-evolving world of cybersecurity.
            </p>
            <Image src="/placeholder.jpg" alt="image here" width={200} height={200} />
          </div>
        </TabsContent>

        <TabsContent value="why" className="space-y-4 mt-6">
          <div className="grid md:grid-cols-1 gap-8 text-xl">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Why Choose Us</h2>
              <p className="text-gray-300">
                Hackersdemy is a leading institute dedicated to empowering individuals with the skills and certifications needed to excel in the dynamic field of cybersecurity. Our mission is to provide students, regardless of their educational background, with a strong foundation in both theoretical concepts and practical applications, preparing them to thrive in their careers with confidence.
              </p>
              <p className="text-gray-300">
                What truly sets Hackersdemy apart is our focus on hands-on, industry-relevant training. We ensure students gain proficiency in cutting-edge tools and techniques widely used by cybersecurity professionals today. Our curriculum evolves continually, staying aligned with the latest advancements to equip students with the knowledge and skills necessary to tackle real-world challenges.
              </p>
              <p className="text-gray-300">
                We take pride in our ability to simplify complex cybersecurity topics. Our trainers, who are experienced professionals with exceptional communication skills, break down intricate concepts into easy-to-understand ideas. By integrating real-time, practical examples into our teaching, we bridge the gap between theory and application, making learning both engaging and impactful.
              </p>
              <p className="text-gray-300">
                Whether it&apos;s ethical hacking, SOC analysis, advanced penetration testing, or cyber forensics, our approach ensures students can grasp even the most challenging topics with ease. Hackersdemy&apos;s trainers have a global teaching footprint, having mentored students from countries such as the United States, Canada, Iran, Bangladesh, Kenya, the Netherlands, and Australia, among others.
              </p>
              <p className="text-gray-300">
                Their international experience, combined with fluency in regional languages like Hindi and Telugu for Indian students, creates an inclusive and supportive learning environment for all. Whether you&apos;re an international learner or from India, we make cybersecurity education accessible and tailored to your needs.
              </p>
              <p className="text-gray-300">
                Our commitment to excellence is reflected in the success of our students, who have gone on to secure roles in both innovative startups and renowned corporations. At Hackersdemy, we don&apos;t just provide training; we transform students into industry-ready professionals, prepared to excel in the ever-evolving world of cybersecurity.
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
    </div>
  );
}
