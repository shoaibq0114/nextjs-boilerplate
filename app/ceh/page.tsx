// import Link from "next/link";
"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "@/components/ui/download";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { GlowingEffect } from "@/components/magicui/glowing-effect";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="min-h-screen text-white p-6 mx-auto" style={{ backgroundColor: 'rgba(5,6,17,1)' }}>
      

      {/* Hero Section */}
      
      <section className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-3xl">
      {/* Radial mask overlay */}
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" ></div>
      <FlickeringGrid
        className="absolute inset-0 z-0 size-full"
        squareSize={10}
        gridGap={4}
       /* color="#006D32" */    // Green color 
        color="#fc0000"         // Red color
        maxOpacity={0.5}
        flickerChance={0.1}
      />
      {/* Foreground content */}
      <div className="relative z-30">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Certified Ethical Hacking V13
        </h1>
        <p className="text-lg md:text-xl text-center mx-auto">
          Launch Your Cybersecurity Journey with the Most Recognized Certification
        </p>
      </div>
    </section>


      {/* Core Highlights */}


      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Core Highlights
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: "35+", description: "Hours of Live training content" },
          { title: "70:30", description: "Practical to Theory Ratio" },
          { title: "Resume Building", description: "Service provided for free after course" },
          { title: "1 Year", description: "Access to Recorded Sessions" },
          { title: "2 Installments", description: "Payments accepted for students" },
          { title: "3", description: "Demo classes can be attended for free" },
        ].map((item, idx) => (
          <div key={idx} className="relative p-[1px] rounded-2xl h-full">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className="relative bg-zinc-900 text-white p-6 rounded-2xl h-full flex flex-col justify-center items-center gap-4 text-center min-h-[180px]">
              <h3 className="text-3xl font-semibold">{item.title}</h3>
              <p className="text-base text-zinc-300">{item.description}</p>
            </div>
          </div>
        ))}

        {/* Spacer to push 50+ card to center */}
        <div className="hidden lg:block" />
        
        <div className="relative p-[1px] rounded-2xl h-full">
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <div className="relative bg-zinc-900 text-white p-6 rounded-2xl h-full flex flex-col justify-center items-center gap-4 text-center min-h-[180px]">
            <h3 className="text-3xl font-semibold">50+</h3>
            <p className="text-base text-zinc-300">Hours of Bonus content provided</p>
          </div>
        </div>

        <div className="hidden lg:block" />
      </div>
    </section>

      {/* About The Course */}
      
      <Tabs defaultValue="about" className="pb-12 py-4 max-w-4xl mx-auto">
      <TabsList style={{ backgroundColor: 'rgba(5, 6, 17, 1)' }} className="flex justify-center">
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

        <TabsContent value="about" className="space-y-4 mt-12">
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
                within an organization. It is a broad practice that
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
            {/* <div className="space-y-4">
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
            </div> */}

            <div className="space-y-4">
              <p className="text-gray-300">
                At Hackersdemy, we focus on breaking down complex cybersecurity
                topics into simple, relatable concepts. Our teaching includes
                real-time examples and hands-on training with industry-relevant
                tools, so students are not only well-prepared but confident in
                their skills. Whether it&apos;s ethical hacking, SOC analysis,
                penetration testing, or cyber forensics, we ensure students
                have a solid foundation to build successful career in
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

        <TabsContent value="curriculum" className="space-y-4 mt-12">
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
              <AccordionTrigger className=" text-xl">Do I need programming knowledge for CEH?</AccordionTrigger>
              <AccordionContent className=" text-xl">
              <span className="font-bold">No</span>. Programming knowledge is not required to get started with CEH. Although as you progress to higher fields and job roles in cybersecurity, 
              understanding basic scripting languages like Python or Bash is beneficial to automate certain tasks. However, please note, this course
              <span className="font-bold"> does not require</span> you to learn any programming language as it primarily focuses on tools and techniques rather than coding.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className=" text-xl">Who all is this CEH v13 course suitable for?</AccordionTrigger>
              <AccordionContent className=" text-xl">
              <span className="font-bold">Anyone</span> with an interest in cybersecurity can join CEH v13, regardless of their background. At Hackersdemy, we’ve made the course 
              accessible to learners from all domains of all age groups by covering essential fundamentals like Networking basics, Linux commands, 
              and Virtualization prior to the course curriculum. Whether you&apos;re a high school student or a working professional from any field, this 
              course is designed to help you build a strong foundation in ethical hacking from scratch with ease.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className=" text-xl">How long does it take to complete CEH v13 training?</AccordionTrigger>
              <AccordionContent className=" text-xl">
              The course spans <span className="font-bold">45 days</span> and is available in two flexible batch options. The weekday batch runs from Monday to Friday, 
              with one-hour sessions each day. Alternatively, the weekend batch is designed for those with a busy schedule, offering 
              two-hour classes exclusively on Saturdays and Sundays.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className=" text-xl">Will I get hands-on experience in this course?</AccordionTrigger>
              <AccordionContent className=" text-xl">
              <span className="font-bold">Yes</span>. Our training at Hackersdemy provides a practical learning experience with real-world hacking techniques and security tools. 
                You will work in a virtual lab environment to simulate cyberattacks and defenses using the same tools used in organizations with real-time 
                scenarios. Hands-on practice ensures that you can apply theoretical knowledge effectively, which is what is <span className="font-bold">prioritized</span> at Hackersdemy.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className=" text-xl">Is CEH certification worth it for career growth?</AccordionTrigger>
              <AccordionContent className=" text-xl">
              <span className="font-bold">Yes</span>, CEH is a well-respected certification that can help you get jobs like Ethical Hacker, Penetration Tester, 
              or SOC Analyst. Many organizations require CEH-certified professionals to secure their networks. It adds 
              credibility to your resume and increases your earning potential.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className=" text-xl">What job opportunities can I get after CEH?</AccordionTrigger>
              <AccordionContent className=" text-xl">
              After completing CEH, you can work as an <span className="font-bold">Ethical Hacker, Penetration Tester, SOC Analyst, Security Administrator, 
              Security Consultant, Cyber Defense Analyst</span> and a lot more job roles. To get a comprehensive list of 45+ job roles 
              you can apply for, please visit the official EC-Council webpage for CEH.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger className=" text-xl">Will I be ready to write the CEH Certification Exam after completing this course from Hackersdemy?</AccordionTrigger>
              <AccordionContent className=" text-xl">
              <span className="font-bold">Yes</span>, upon completing the CEH v13 course at Hackersdemy, you will be well-prepared to take the CEH certification 
              exam. Our training covers all essential topics in-depth, including hands-on practicals and real-world scenarios, 
              ensuring you understand both theoretical concepts with their practical applications. Additionally, we provide 
              guidance on exam patterns, question types, and also conduct mock exams to boost your confidence and readiness for 
              the certification.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger className=" text-xl">Along with the live classes, will I be getting the recordings and the course material as well?</AccordionTrigger>
              <AccordionContent className=" text-xl">
              <span className="font-bold">Yes</span>, along with the live classes, you will receive both class recordings and comprehensive course material as well. 
              This allows you to revisit the lessons at your convenience, reinforce your understanding, and catch up on any 
              missed sessions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10">
              <AccordionTrigger className=" text-xl">What other bonus content is provided with the course?</AccordionTrigger>
              <AccordionContent className=" text-xl">
              Along with the core training, you’ll receive up to <span className="font-bold">15GB of bonus resources</span> to enhance your learning experience. 
              This includes <span className="font-bold">comprehensive courseware</span> covering the entire syllabus, a detailed 
              <span className="font-bold">lab manual</span> for hands-on practice, <span className="font-bold">additional books and exclusive video materials </span> 
              to deepen your knowledge and explore advanced cybersecurity topics. These resources ensure you gain both theoretical understanding and practical expertise, setting you on the right 
              path in cybersecurity.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-11">
              <AccordionTrigger className=" text-xl">What should I do if I miss a session and still have questions after watching the recordings?</AccordionTrigger>
              <AccordionContent className=" text-xl">
              If you have any doubts after reviewing the recordings, you can reach out to us on <span className="font-bold">WhatsApp, Telegram or 
              Discord channels</span> shared to you. Additionally, you can also schedule a <span className="font-bold">doubt-clearing session over the weekends</span>. 
              If a student misses multiple sessions, the trainer will also allow you to attend those missed classes in 
              <span className="font-bold"> alternate running batches</span>. All possible steps will be taken to ensure you fully understand every concept.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-12">
              <AccordionTrigger className=" text-xl">What is the CEH Exam pattern, duration and passing score?</AccordionTrigger>
              <AccordionContent className=" text-xl">
              The CEHv13 exam is a <span className="font-bold">4-hour</span> test consisting of <span className="font-bold">125 multiple-choice questions</span>. To pass the exam, 
              you need to score between <span className="font-bold">60% and 80%</span>, with the passing percentage depending on the difficulty level 
              of the questions. The exam has no negative marking, so you can attempt all questions without the risk 
              of losing points for incorrect answers.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-13">
              <AccordionTrigger className=" text-xl">What is the cancellation and refund policy at Hackersdemy?</AccordionTrigger>
              <AccordionContent className=" text-xl">
              At Hackersdemy, we understand that flexibility is important. That&apos;s why we offer the first three 
              classes as free demo sessions, allowing you to experience the course before making any commitment. 
              After the demo, payment can be made, and if you feel the course isn&apos;t the right fit, <span className="font-bold">you can request 
              a cancellation or refund within the first 7 classes, including the demo sessions.</span> We want to ensure 
              you&apos;re completely satisfied with your learning experience, and we&apos;re here to help you make the best 
              decision. However, after the first 7 classes, candidates are not eligible for a refund or cancellation.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
      </Tabs>
    </div>
  );
}

