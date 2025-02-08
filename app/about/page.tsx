"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Footer from "@/components/Footer";
import Image from "next/image";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { Boxes } from "@/components/ui/background-boxes";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils"
import { Highlight } from "@/components/ui/highlight-about";

export default function AboutUs() {
  const router = useRouter();
  return (
      <div className="min-h-screen bg-black text-white p-6 mx-auto">
      <section className="relative">
        <div className="container mx-auto flex justify-between items-center relative z-10">
          <div className="flex items-center space-x-4">
            <Image
              src="/logo.png"
              alt="Palo Alto Networks Logo"
              width={300}
              height={300}
            />
          </div>
          <div className="flex items-center space-x-4">
            <ShinyButton onClick={() => router.push("/")}>Home</ShinyButton>
            <ShinyButton onClick={() => router.push("/about")}>
              About Us
            </ShinyButton>
            <ShinyButton onClick={() => router.push("/blog")}>Blog</ShinyButton>
            <ShinyButton onClick={() => router.push("#footer")}>
              test
            </ShinyButton>
          </div>
        </div>
      </section>
      <div className="h-96 relative w-full overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20 py-10")}>In a world driven by technology, cybersecurity isn&apos;t optional -
       <Highlight><span className="text-red-600">it&apos;s essential.</span></Highlight></h1>
      <h2 className={cn("md:text-3xl text-l text-white relative z-20")}> At HackerAcademy, we are building a safer tomorrow one professional at
      a time.</h2>
    </div>

      <Tabs defaultValue="who" className="mb-12">
        <TabsList className=" bg-black flex justify-center">
          <TabsTrigger value="who" className="text-lg px-6 py-2">
            Who we are
          </TabsTrigger>
          <TabsTrigger value="mission" className="text-lg px-6 py-2">
            Our mission
          </TabsTrigger>
          <TabsTrigger value="why" className="text-lg px-6 py-2">
            Why HackerAcademy
          </TabsTrigger>
        </TabsList>

        <TabsContent value="who" className="space-y-4 mt-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>{/*image here*/}</div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Leading the Change</h2>
              <p className="text-gray-300">
                Our team consists of industry veterans and cybersecurity experts
                committed to sharing their expertise with the next generation of
                security professionals.
              </p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="mission" className="space-y-4 mt-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Our Mission</h2>
              <p className="text-gray-300 text-xl">
                Our mission? To deliver exceptional cybersecurity education,
                combining hands-on training with expert knowledge. Whether
                you&apos;re starting from scratch or refining your skills, we
                prepare you to defend networks, applications, and organizations
                against the most advanced cyber threats. Regardless of their
                background, we ensure every student masters essential concepts
                with ease. Unlike traditional theory-heavy approaches, our focus
                is on practical, hands-on training using industry-relevant tools
                and evolving techniques. Our mission is to empower students with
                the skills and confidence needed to excel in the ever-changing
                world of cybersecurity.
              </p>
            </div>
            <div><Image src="/placeholder.jpg" alt="image here" width={200} height={200}></Image></div>
            <div><Image src="/placeholder.jpg" alt="image here" width={200} height={200}></Image></div>
            <div>
              <p>
                At Hackersdemy, we empower you to achieve the tech career you
                deserve with top-tier certifications, courses, and expert
                knowledge by providing immersive training with industry-standard
                applications ensuring real-world relevance. Our courses in
                Ethical Hacking, Advanced Penetration Testing, Cyber Forensics
                and SOC Analysis are designed to prepare you for the
                ever-evolving cybersecurity challenges across all domains.{" "}
              </p>
            </div>
            <div>
              <p>
                As cyber threats become increasingly sophisticated, there is a
                growing demand for skilled professionals to protect
                organizations from potential attacks. At Hackersdemy, we provide
                courses that give you industry-ready skills, helping you to
                level up your cybersecurity knowledge and open the doors to a
                wide range of job opportunities within the ever-evolving world
                of cybersecurity.
              </p>
            </div>
              <div><Image src="/placeholder.jpg" alt="image here" width={200} height={200}></Image></div>
          </div>
        </TabsContent>

        <TabsContent value="why" className="space-y-4 mt-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>{/*image here*/}</div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Why Choose Us</h2>
              <p className="text-gray-300">
                Hackersdemy is a leading institute dedicated to empowering
                individuals with the skills and certifications needed to excel
                in the dynamic field of cybersecurity. Our mission is to provide
                students, regardless of their educational background, with a
                strong foundation in both theoretical concepts and practical
                applications, preparing them to thrive in their careers with
                confidence. What truly sets Hackersdemy apart is our focus on
                hands-on, industry-relevant training. We ensure students gain
                proficiency in cutting-edge tools and techniques widely used by
                cybersecurity professionals today. Our curriculum evolves
                continually, staying aligned with the latest advancements to
                equip students with the knowledge and skills necessary to tackle
                real-world challenges. We take pride in our ability to simplify
                complex cybersecurity topics. Our trainers, who are experienced
                professionals with exceptional communication skills, break down
                intricate concepts into easy-to-understand ideas. By integrating
                real-time, practical examples into our teaching, we bridge the
                gap between theory and application, making learning both
                engaging and impactful. Whether it&apos;s ethical hacking, SOC
                analysis, advanced penetration testing, or cyber forensics, our
                approach ensures students can grasp even the most challenging
                topics with ease. Hackersdemy&apos;s trainers have a global
                teaching footprint, having mentored students from countries such
                as the United States, Canada, Iran, Bangladesh, Kenya, the
                Netherlands, and Australia, among others. Their international
                experience, combined with fluency in regional languages like
                Hindi and Telugu for Indian students, creates an inclusive and
                supportive learning environment for all. Whether you&apos;re an
                international learner or from India, we make cybersecurity
                education accessible and tailored to your needs. Our commitment
                to excellence is reflected in the success of our students, who
                have gone on to secure roles in both innovative startups and
                renowned corporations. At Hackersdemy, we don’t just provide
                training; we transform students into industry-ready
                professionals, prepared to excel in the ever-evolving world of
                cybersecurity.
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <Footer />
    </div>
  );
}
