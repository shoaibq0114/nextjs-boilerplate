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
          Web Application Penetration Testing
        </h1>
        <p className="text-lg md:text-xl">
        Master web application security by exploiting and securing vulnerabilities, including the OWASP Top 10 and beyond.
        </p>
      </section>

      {/* Core Highlights */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Core Highlights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <HighlightCard
            title="20+"
            description="Hours of Live training content"
          />
          <HighlightCard
            title="80:20"
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
            description="Demo classes can be attended for free"
          />
        </div>

        <div className="flex justify-center mt-6">
          <HighlightCard
            title="35+"
            description="Hours of Bonus content provided"
          />
        </div>
      </section>

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
              In today's digital era, web applications are integral to business operations, facilitating services from online banking 
              to e-commerce. However, this reliance has made them prime targets for cyberattacks. In 2024 alone, there was a 20% increase 
              in exploited security vulnerabilities compared to the previous year. As web applications continue to be prime targets for cybercriminals, 
              understanding how to secure them is more important than ever. The global penetration testing market is projected to exceed $5 billion annually by 2031.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-gray-300">
                The Web Application Penetration Testing course at Hackersdemy dives deep into identifying and exploiting vulnerabilities within web 
                applications based on the OWASP Top 10 Framework – the industry's benchmark for the most critical web application security risks, helping 
                you learn how attackers breach these systems and how to protect them.  Beyond these, the curriculum explores advanced vulnerabilities and 
                attack vectors, ensuring participants are equipped to tackle both prevalent and emerging threats. It is perfect for aspiring penetration 
                testers, security analysts, and developers who want to enhance their ability to secure web applications.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-300">
              By joining our course, you'll gain hands-on experience in identifying, exploiting, and securing web applications. 
              This course is ideal for aspiring ethical hackers, cybersecurity professionals, SOC analysts, web developers, IT administrators, 
              and anyone passionate about securing web applications against real-world cyber threats and with the increasing frequency of cyberattacks 
              and the expanding penetration testing market, there's no better time to equip yourself with the skills that organizations worldwide are seeking.​
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-gray-300">
              Embark on a journey to become a pivotal player in the cybersecurity landscape. Secure your future by securing the web.
              </p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="curriculum" className="space-y-4 mt-6">
          <div className=" text-xl">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Curriculum</h2>
              <p className="text-gray-300 text-xl">
                Module 01: Introduction to Web Applications Pentesting
              </p>
              <p className="text-gray-300 text-xl">
                Module 02: Information Gathering and Reconnaissance
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
