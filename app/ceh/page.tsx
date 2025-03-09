// import Link from "next/link";
"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "@/components/ui/download";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="min-h-screen text-white bg-black">
      {/* Navigation */}
      {/* <nav className="flex justify-end p-6">
        <div className="flex space-x-4">
          <Link
            href="/"
            className="bg-[#d9d9d9] text-black px-4 py-2 rounded-full text-sm font-medium"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="bg-[#d9d9d9] text-black px-4 py-2 rounded-full text-sm font-medium"
          >
            About us
          </Link>
          <Link
            href="/blog"
            className="bg-[#d9d9d9] text-black px-4 py-2 rounded-full text-sm font-medium"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="bg-[#d9d9d9] text-black px-4 py-2 rounded-full text-sm font-medium"
          >
            Contact us
          </Link>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Certified Ethical Hacking V13
        </h1>
        <p className="text-lg md:text-xl">
          Launch Your Cybersecurity Journey with the Most Recognized
          Certification
        </p>
      </section>

      {/* Core Highlights */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Core Highlights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <HighlightCard
            title="35+"
            description="Hours of Live training content"
          />
          <HighlightCard
            title="70:30"
            description="Practical to Theory Ratio"
          />
          <HighlightCard
            title="Resume Building"
            description="Service provided for free after course"
          />
          <HighlightCard
            title="1 Year"
            description="Access to Recorded Sessions"
          />
          <HighlightCard
            title="2 Installments"
            description="Payments accepted for students"
          />
          <HighlightCard
            title="3"
            description="Organizations have unfulfilled Cybersecurity positions (2024)"
          />
        </div>

        <div className="flex justify-center mt-6">
          <HighlightCard
            title="50+"
            description="Hours of Bonus content provided"
          />
        </div>
      </section>

      {/* About The Course */}
      {/* <section className="py-8 px-6 md:px-12 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About The Course</h2>

        <div className="space-y-6 text-[#d9d9d9]">
          <p>
            In today&apos;s world, where cyber threats are constantly evolving, ethical hackers play a crucial role in
            safeguarding organizations&apos; digital assets. The Certified Ethical Hacking V13 course by EC-Council of
            Hackersdemy equips you with the latest tools and techniques to identify, exploit, and protect systems from
            vulnerabilities. Organizations hire Certified Ethical Hackers either on a contract or as full-time employees
            to improve their security posture. Obtaining a CEH certification is often a baseline requirement for many
            job roles. Ethical hacking involves the methodical practice of identifying, evaluating, testing, and
            reporting vulnerabilities within an organization. Ethical hacking is a broad practice that covers various
            technologies. You will learn to think like a hacker to understand their methods and defend against attacks
            effectively.
          </p>

          <p>
            By systematically applying CEH methodologies, ethical hackers can evaluate almost any application or
            infrastructure, identify potential vulnerabilities, and provide remediation recommendations. With CEH v13,
            Certified Ethical Hackers also use AI tools and techniques to enhance their ability to identify, exploit,
            and secure vulnerabilities in systems and networks. By integrating AI into their skills, they automate
            threat detection, predict security breaches, and respond swiftly to cyber incidents. Moreover, they also
            have the knowledge to hack AI systems.
          </p>

          <p>
            This course is ideal for aspiring cybersecurity professionals, IT administrators, and network specialists
            who want to pursue a career in ethical hacking and penetration testing.
          </p>
        </div>
      </section> */}
      <Tabs defaultValue="about" className="pb-12 py-4 max-w-4xl mx-auto">
        <TabsList className=" bg-black flex justify-center">
          <TabsTrigger value="about" className="text-lg px-6 py-2">
            About the Course
          </TabsTrigger>
          <TabsTrigger value="curriculum" className="text-lg px-6 py-2">
            Curriculum
          </TabsTrigger>
          <TabsTrigger value="faq" className="text-lg px-6 py-2">
            FAQs
          </TabsTrigger>
        </TabsList>

        <TabsContent value="about" className="space-y-4 mt-6">
          <div className="grid md:grid-cols-1 gap-8 text-xl">
            <h2 className="text-2xl font-semibold">About the course</h2>

            <div className="space-y-4">
              <p className="text-gray-300">
                In today&apos;s world, where cyber threats are constantly
                evolving, ethical hackers play a crucial role in safeguarding
                organizations&apos; digital assets. The Certified Ethical
                Hacking V13 course by EC-Council at Hackersdemy equips you with
                the latest tools and techniques to identify, exploit, and
                protect systems from vulnerabilities. Organizations hire
                Certified Ethical Hackers either on a contract or as full-time
                employees to improve their security posture. Obtaining a CEH
                certification is often a baseline requirement for many job
                roles. Ethical hacking involves the methodical practice of
                identifying, evaluating, testing, and reporting vulnerabilities
                within an organization. Ethical hacking is a broad practice that
                covers various technologies. You will learn to think like a
                hacker to understand their methods and defend against attacks
                effectively.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-gray-300">
                By systematically applying CEH methodologies, ethical hackers
                can evaluate almost any application or infrastructure, identify
                potential vulnerabilities, and provide remediation
                recommendations. With CEH v13, Certified Ethical Hackers also
                use AI tools and techniques to enhance their ability to
                identify, exploit, and secure vulnerabilities in systems and
                networks. By integrating AI into their skills, they automate
                threat detection, predict security breaches, and respond swiftly
                to cyber incidents. Moreover, they also have the knowledge to
                hack AI systems.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-300">
                This course is ideal for aspiring cybersecurity professionals,
                IT administrators, and network specialists who want to pursue a
                career in ethical hacking and penetration testing
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-gray-300">
                Currently, I work as a Senior Security Analyst at Symbiosys
                Technologies in Visakhapatnam, actively engaging in the same
                domain I teach. This allows me to provide students with
                real-time insights into the tools, techniques, and methodologies
                used in today&apos;s cybersecurity landscape. I believe in
                teaching what I&apos;ve learned over the years from my own
                practical experience in the industry, ensuring that students
                gain not just theoretical knowledge but a deep understanding of
                how to apply it in real-world scenarios.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-300">
                At Hackersdemy, I focus on breaking down complex cybersecurity
                topics into simple, relatable concepts. My teaching includes
                real-time examples and hands-on training with industry-relevant
                tools, so students are not only well-prepared but confident in
                their skills. Whether it&apos;s ethical hacking, SOC analysis,
                penetration testing, or cyber forensics, I ensure my students
                have a solid foundation to build successful careers in
                cybersecurity.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-gray-300">
                Hackersdemy is an inclusive space for students from all
                educational backgrounds. Whether you&apos;re a beginner or
                looking to advance your skills, I&apos;m here to guide you every
                step of the way. If you&apos;re ready to take the next step in
                your cybersecurity journey, let&apos;s make it happen together!
              </p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="curriculum" className="space-y-4 mt-6">
          <div className=" text-xl">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Curriculum</h2>
              <p className="text-gray-300 text-xl">
                Module 01: Prerequisites for Ethical Hacking
              </p>
              <p className="text-gray-300 text-xl">
                Module 02: Footprinting and Reconnaissance
              </p>
              <p className="text-gray-300 text-">
                Module 03: Scanning Networks
              </p>
              <p className="text-gray-300 text-">Module 04: Enumeration </p>
              <p className="text-gray-300 text-">Module 05: System Hacking </p>
              <p className="text-gray-300 text-">
                {" "}
                Module 06: Malware Threats{" "}
              </p>
              <p className="text-gray-300 text-">Module 07: Sniffing</p>
              <p className="text-gray-300 text-">
                Module 08: DOS and DDOS Attacks
              </p>
              <p className="text-gray-300 text-">
                Module 09: Social Engineering
              </p>
              <p className="text-gray-300 text-">
                Module 10: Vulnerability Analysis{" "}
              </p>
              <p className="text-gray-300 text-xl">
                Module 11: Evading IDS, Firewalls, and Honeypots{" "}
              </p>
              <p className="text-gray-300 text-">
                Module 12: Hacking Web Servers{" "}
              </p>
              <p className="text-gray-300 text-">
                Module 13: Hacking Web Applications{" "}
              </p>
              <p className="text-gray-300 text-">
                Module 14: Hacking Wireless Networks
              </p>
              <p className="text-gray-300 text-">
                Module 15: Hacking Mobile Platforms{" "}
              </p>
              <p className="text-gray-300 text-">Module 16: Cryptography </p>
              <p className="text-gray-300 text-">Module 17: IoT Hacking </p>
              <p className="text-gray-300 text-">Module 18: Cloud Computing </p>
              <p className="text-gray-300 text-">Module 19: Bonus Module</p>
              <p className="text-gray-300">
                For complete info, click here{" "}
                <Button variant={"ghost"}>
                  Download
                  <DownloadIcon />
                </Button>
              </p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="faq" className="space-y-4 mt-6">
          <Accordion type="single" collapsible className="w-full text-xl mb-12">
            <AccordionItem value="item-1">
              <AccordionTrigger className=" text-xl">Is CEH a beginner-friendly course?</AccordionTrigger>
              <AccordionContent className=" text-xl">
              <span className="font-bold">Yes</span>, it is designed for beginners and professionals who want to enhance their cybersecurity skills. The course starts with foundational concepts and gradually moves to advanced topics. It is structured to be accessible to both beginners and experienced professionals.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className=" text-xl">Is it styled?</AccordionTrigger>
              <AccordionContent className=" text-xl">
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className=" text-xl">Is it animated?</AccordionTrigger>
              <AccordionContent className=" text-xl">
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className=" text-xl">Is it animated?</AccordionTrigger>
              <AccordionContent className=" text-xl">
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className=" text-xl">Is it animated?</AccordionTrigger>
              <AccordionContent className=" text-xl">
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className=" text-xl">Is it animated?</AccordionTrigger>
              <AccordionContent className=" text-xl">
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className=" text-xl">Is it animated?</AccordionTrigger>
              <AccordionContent className=" text-xl">
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className=" text-xl">Is it animated?</AccordionTrigger>
              <AccordionContent className=" text-xl">
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className=" text-xl">Is it animated?</AccordionTrigger>
              <AccordionContent className=" text-xl">
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className=" text-xl">Is it animated?</AccordionTrigger>
              <AccordionContent className=" text-xl">
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className=" text-xl">Is it animated?</AccordionTrigger>
              <AccordionContent className=" text-xl">
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className=" text-xl">Is it animated?</AccordionTrigger>
              <AccordionContent className=" text-xl">
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className=" text-xl">Is it animated?</AccordionTrigger>
              <AccordionContent className=" text-xl">
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function HighlightCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-[#1a1a24] rounded-3xl p-8 flex flex-col items-center text-center">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-[#aca8de]">{description}</p>
    </div>
  );
}
