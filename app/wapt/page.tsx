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
    <div className="min-h-screen text-white p-4 md:p-6 mx-auto" style={{ backgroundColor: 'rgba(5,6,17,1)' }}>
      

      {/* Hero Section */}
      
      <section className="h-auto md:h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-3xl py-12 md:py-0">
      {/* Radial mask overlay */}
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" ></div>
      <FlickeringGrid
        className="absolute inset-0 z-0 size-full"
        squareSize={10}
        gridGap={4}
        color="#00c05aff"    // Green color 
        maxOpacity={0.5}
        flickerChance={0.1}
      />
      {/* Foreground content */}
      <div className="relative z-30 px-4 md:px-0">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-center leading-tight">
          Web Application Penetration Testing
        </h1>
        <p className="text-base md:text-xl text-center mx-auto max-w-2xl leading-relaxed"> 
        Master web application security by exploiting and securing vulnerabilities, including the OWASP Top 10 and beyond.
        </p>
      </div>
    </section>


      {/* Core Highlights */}


      <section className="py-12 md:py-16 px-4 md:px-12 max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-16 leading-tight">
        Core Highlights
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {[
          { title: "25+", description: "Hours of Live training content" },
          { title: "80:20", description: "Practical to Theory Ratio" },
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
            <h3 className="text-3xl font-semibold">20+</h3>
            <p className="text-base text-zinc-300">Hours of Bonus content provided</p>
          </div>
        </div>

        <div className="hidden lg:block" />
      </div>
    </section>

      {/* About The Course */}
      
      <Tabs defaultValue="about" className="pb-12 py-4 max-w-4xl mx-auto px-8 md:px-0">
      <TabsList style={{ backgroundColor: 'rgba(5, 6, 17, 1)' }} className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 mt-6 mb-24">

          <TabsTrigger value="about" className="text-base sm:text-lg px-6 sm:px-8 py-3 w-full sm:w-auto rounded-lg">
            About the Course
          </TabsTrigger>
          <TabsTrigger value="curriculum" className="text-base sm:text-lg px-6 sm:px-8 py-3 w-full sm:w-auto rounded-lg">
            Curriculum
          </TabsTrigger>
          <TabsTrigger value="faq" className="text-base sm:text-lg px-6 sm:px-8 py-3 w-full sm:w-auto rounded-lg">
            FAQs
          </TabsTrigger>
        </TabsList>

        <TabsContent value="about" className="space-y-6 md:space-y-8 mt-8">
          <div className="grid md:grid-cols-1 gap-6 md:gap-8 text-base md:text-xl">
            <h2 className="text-xl md:text-2xl font-semibold md:mb-6">About the course</h2>

            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
              In today&apos;s digital era, web applications are integral to business operations, facilitating services from online banking 
              to e-commerce. However, this reliance has made them prime targets for cyberattacks. In 2024 alone, there was a 20% increase 
              in exploited security vulnerabilities compared to the previous year. As web applications continue to be prime targets for cybercriminals, 
              understanding how to secure them is more important than ever. The global penetration testing market is projected to exceed $5 billion annually by 2031.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
              The Web Application Penetration Testing course at Hackersdemy dives deep into identifying and exploiting vulnerabilities within web 
                applications based on the OWASP Top 10 Framework – the industry&apos;s benchmark for the most critical web application security risks, helping 
                you learn how attackers breach these systems and how to protect them.  Beyond these, the curriculum explores advanced vulnerabilities and 
                attack vectors, ensuring participants are equipped to tackle both prevalent and emerging threats. It is perfect for aspiring penetration 
                testers, security analysts, and developers who want to enhance their ability to secure web applications.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
              This course is ideal for aspiring ethical hackers, cybersecurity professionals, SOC analysts, web developers, IT administrators, 
              and anyone passionate about securing web applications against real-world cyber threats and with the increasing frequency of cyberattacks 
              and the expanding penetration testing market, there&apos;s no better time to equip yourself with the skills that organizations worldwide are seeking.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
              Embark on a journey to become a pivotal player in the cybersecurity landscape. Secure your future by securing the web.
              </p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="curriculum" className="space-y-6 md:space-y-8 mt-8">
          <div className="text-base md:text-xl">
            <div className="space-y-6">
              <h2 className="text-xl md:text-xl font-semibold mb-4 md:mb-6">Curriculum</h2>
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 md:gap-6">
                {[
                  "Module 01: Introduction to Web Applications Pentesting",
                  "Module 02: How the Internet Works",
                  "Module 03: Setting up the Lab Environment",
                  "Module 04: Information Gathering on Web Applications",
                  "Module 05: Enumerating Web Applications",
                  "Module 06: Information Gathering",
                  "Module 07: Scanning and Enumeration",
                  "Module 08: Injection Attacks",
                  "Module 09: Setting Up and Using Burp Suite",
                  "Module 10: Cross-Site Request Forgery (CSRF)",
                  "Module 11: Server-Side Request Forgery (SSRF)",
                  "Module 12: XML External Entity (XXE) Injection",
                  "Module 13: Indirect Object Reference (IDOR)",
                  "Module 14: Remote Code Execution Attacks(RCE)",
                  "Module 15: File Inclusion Attacks (LFI/RFI)",
                  "Module 16: File Upload Vulnerabilities",
                  "Module 17: Sensitive Data Exposure and Information Disclosure",
                  "Module 18: Using Automated Tools for scanning Vulnerabilities",
                  "Module 19: Insufficient Logging and Monitoring",
                  "Module 20: Post-Exploitation Techniques",
                  "Module 21: Bonus Resources"
                ].map((module, index) => (
                  <p key={index} className="text-gray-300 leading-relaxed">
                    {module}
                  </p>
                ))}
              </div>
              <p className="text-gray-300 mt-6 md:mt-8">
                For complete info, click here{" "}
                <Button variant={"ghost"} className="ml-2">
                  Download
                  <DownloadIcon className="ml-2" />
                </Button>
              </p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="faq" className="space-y-6 md:space-y-8 mt-8">
          <Accordion type="single" collapsible className="w-full text-base md:text-xl mb-8 md:mb-12 space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-4">
              <AccordionTrigger className="text-base md:text-xl py-4">Is WAPT a beginner-friendly course?</AccordionTrigger>
              <AccordionContent className="text-base md:text-xl leading-relaxed pb-4">
                <span className="font-bold">Yes</span>, it is designed for beginners and professionals who want to enhance their cybersecurity skills. The course starts with foundational concepts and gradually moves to advanced topics.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border rounded-lg px-4">
              <AccordionTrigger className="text-base md:text-xl py-4">Do I need programming knowledge for WAPT?</AccordionTrigger>
              <AccordionContent className="text-base md:text-xl leading-relaxed pb-4">
                <span className="font-bold">No</span>. Programming knowledge is not required to get started with CEH. Although as you progress to higher fields and job roles in cybersecurity, 
                understanding basic scripting languages like Python or Bash is beneficial to automate certain tasks. However, please note, this course
                <span className="font-bold"> does not require</span> you to learn any programming language as it primarily focuses on tools and techniques rather than coding.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border rounded-lg px-4">
              <AccordionTrigger className="text-base md:text-xl py-4">Who is this WAPT course suitable for?</AccordionTrigger>
              <AccordionContent className="text-base md:text-xl leading-relaxed pb-4">
                <span className="font-bold">Anyone</span> with an interest in cybersecurity can join CEH v13, regardless of their background. At Hackersdemy, we&apos;ve made the course 
                accessible to learners from all domains of all age groups by covering essential fundamentals like Networking basics, Linux commands, 
                and Virtualization prior to the course curriculum. Whether you&apos;re a high school student or a working professional from any field, this 
                course is designed to help you build a strong foundation in ethical hacking from scratch with ease.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border rounded-lg px-4">
              <AccordionTrigger className="text-base md:text-xl py-4">How long does it take to complete WAPT training?</AccordionTrigger>
              <AccordionContent className="text-base md:text-xl leading-relaxed pb-4">
                The course spans <span className="font-bold">45 days</span> and is available in two flexible batch options. The weekday batch runs from Monday to Friday, 
                with one-hour sessions each day. Alternatively, the weekend batch is designed for those with a busy schedule, offering 
                two-hour classes exclusively on Saturdays and Sundays.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border rounded-lg px-4">
              <AccordionTrigger className="text-base md:text-xl py-4">Will I get hands-on experience in this course?</AccordionTrigger>
              <AccordionContent className="text-base md:text-xl leading-relaxed pb-4">
                <span className="font-bold">Yes</span>. Our training at Hackersdemy provides a practical learning experience with real-world hacking techniques and security tools. 
                  You will work in a virtual lab environment to simulate cyberattacks and defenses using the same tools used in organizations with real-time 
                  scenarios. Hands-on practice ensures that you can apply theoretical knowledge effectively, which is what is <span className="font-bold">prioritized</span> at Hackersdemy.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6" className="border rounded-lg px-4">
              <AccordionTrigger className="text-base md:text-xl py-4">Do I need any specific software or tools to join the course?</AccordionTrigger>
              <AccordionContent className="text-base md:text-xl leading-relaxed pb-4">
                <span className="font-bold">Yes</span>, CEH is a well-respected certification that can help you get jobs like Ethical Hacker, Penetration Tester, 
                or SOC Analyst. Many organizations require CEH-certified professionals to secure their networks. It adds 
                credibility to your resume and increases your earning potential.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7" className="border rounded-lg px-4">
              <AccordionTrigger className="text-base md:text-xl py-4">What job opportunities can I get after CEH?</AccordionTrigger>
              <AccordionContent className="text-base md:text-xl leading-relaxed pb-4">
                After completing CEH, you can work as an <span className="font-bold">Ethical Hacker, Penetration Tester, SOC Analyst, Security Administrator, 
                Security Consultant, Cyber Defense Analyst</span> and a lot more job roles. To get a comprehensive list of 45+ job roles 
                you can apply for, please visit the official EC-Council webpage for CEH.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8" className="border rounded-lg px-4">
              <AccordionTrigger className="text-base md:text-xl py-4">Can I start my own penetration testing career after completing this course?</AccordionTrigger>
              <AccordionContent className="text-base md:text-xl leading-relaxed pb-4">
                <span className="font-bold">Yes</span>, upon completing the CEH v13 course at Hackersdemy, you will be well-prepared to take the CEH certification 
                exam. Our training covers all essential topics in-depth, including hands-on practicals and real-world scenarios, 
                ensuring you understand both theoretical concepts with their practical applications. Additionally, we provide 
                guidance on exam patterns, question types, and also conduct mock exams to boost your confidence and readiness for 
                the certification.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9" className="border rounded-lg px-4">
              <AccordionTrigger className="text-base md:text-xl py-4">Along with the live classes, will I be getting the recordings and the course material as well?</AccordionTrigger>
              <AccordionContent className="text-base md:text-xl leading-relaxed pb-4">
                <span className="font-bold">Yes</span>, along with the live classes, you will receive both class recordings and comprehensive course material as well. 
                This allows you to revisit the lessons at your convenience, reinforce your understanding, and catch up on any 
                missed sessions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10" className="border rounded-lg px-4">
              <AccordionTrigger className="text-base md:text-xl py-4">What other bonus content is provided with the course?</AccordionTrigger>
              <AccordionContent className="text-base md:text-xl leading-relaxed pb-4">
                Along with the core training, you&apos;ll receive up to <span className="font-bold">15GB of bonus resources</span> to enhance your learning experience. 
                This includes <span className="font-bold">comprehensive courseware</span> covering the entire syllabus, a detailed 
                <span className="font-bold">lab manual</span> for hands-on practice, <span className="font-bold">additional books and exclusive video materials </span> 
                to deepen your knowledge and explore advanced cybersecurity topics. These resources ensure you gain both theoretical understanding and practical expertise, setting you on the right 
                path in cybersecurity.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-11" className="border rounded-lg px-4">
              <AccordionTrigger className="text-base md:text-xl py-4">What should I do if I miss a session and still have questions after watching the recordings?</AccordionTrigger>
              <AccordionContent className="text-base md:text-xl leading-relaxed pb-4">
                If you have any doubts after reviewing the recordings, you can reach out to us on <span className="font-bold">WhatsApp, Telegram or 
                Discord channels</span> shared to you. Additionally, you can also schedule a <span className="font-bold">doubt-clearing session over the weekends</span>. 
                If a student misses multiple sessions, the trainer will also allow you to attend those missed classes in 
                <span className="font-bold"> alternate running batches</span>. All possible steps will be taken to ensure you fully understand every concept.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-12" className="border rounded-lg px-4">
              <AccordionTrigger className="text-base md:text-xl py-4">What is the WAPT Certification Exam pattern, duration and passing score?</AccordionTrigger>
              <AccordionContent className="text-base md:text-xl leading-relaxed pb-4">
                The CEHv13 exam is a <span className="font-bold">4-hour</span> test consisting of <span className="font-bold">125 multiple-choice questions</span>. To pass the exam, 
                you need to score between <span className="font-bold">60% and 80%</span>, with the passing percentage depending on the difficulty level 
                of the questions. The exam has no negative marking, so you can attempt all questions without the risk 
                of losing points for incorrect answers.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-13" className="border rounded-lg px-4">
              <AccordionTrigger className="text-base md:text-xl py-4">What is the cancellation and refund policy at Hackersdemy?</AccordionTrigger>
              <AccordionContent className="text-base md:text-xl leading-relaxed pb-4">
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