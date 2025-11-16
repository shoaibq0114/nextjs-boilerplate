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
    <div
      className="min-h-screen text-white p-4 md:p-6 mx-auto"
      style={{ backgroundColor: "rgba(5,6,17,1)" }}
    >
      {/* Hero Section */}
      <section className="h-auto md:h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-3xl py-12 md:py-0">
        {/* Radial mask overlay */}
        <div
          className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none"
        ></div>
        <FlickeringGrid
          className="absolute inset-0 z-0 size-full"
          squareSize={10}
          gridGap={4}
          // color="#006D32" // Green color
          // color="#fc0000" // Red color
          color="#38bdf8" // Blue color
          maxOpacity={0.5}
          flickerChance={0.1}
        />
        {/* Foreground content */}
        <div className="relative z-30 px-4 md:px-0">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-center leading-tight">
            SOC Analysis &amp; SIEM Operations
          </h1>
          <p className="text-base md:text-xl text-center mx-auto max-w-2xl leading-relaxed">
            Become a Job-Ready Security Operations Center (SOC) Analyst with
            Real-World Lab Experience and 24x7 Attack Simulations
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
            {
              title: "30+",
              description: "Hours of mentor-led live SOC training",
            },
            {
              title: "80:20",
              description: "Hands-on to theory ratio with real alerts",
            },
            {
              title: "Real-Time Labs",
              description: "Simulated enterprise SOC environment",
            },
            {
              title: "Resume & Interview",
              description: "SOC-focused resume building & mock interviews",
            },
            {
              title: "1 Year",
              description: "Access to recordings & updated course content",
            },
            {
              title: "Multi-Tool",
              description: "Work on QRadar, Splunk, Wazuh & more",
            },
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
              <p className="text-base text-zinc-300">
                Guided alert-handling scenarios &amp; incident case studies
              </p>
            </div>
          </div>

          <div className="hidden lg:block" />
        </div>
      </section>

      {/* About / Curriculum / FAQ Tabs */}
      <Tabs
        defaultValue="about"
        className="pb-12 py-4 max-w-4xl mx-auto px-8 md:px-0"
      >
        <TabsList
          style={{ backgroundColor: "rgba(5, 6, 17, 1)" }}
          className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 mt-6 mb-24"
        >
          <TabsTrigger
            value="about"
            className="text-base sm:text-lg px-6 sm:px-8 py-3 w-full sm:w-auto rounded-lg"
          >
            About the Course
          </TabsTrigger>
          <TabsTrigger
            value="curriculum"
            className="text-base sm:text-lg px-6 sm:px-8 py-3 w-full sm:w-auto rounded-lg"
          >
            Curriculum
          </TabsTrigger>
          <TabsTrigger
            value="faq"
            className="text-base sm:text-lg px-6 sm:px-8 py-3 w-full sm:w-auto rounded-lg"
          >
            FAQs
          </TabsTrigger>
        </TabsList>

        {/* ABOUT TAB */}
        <TabsContent value="about" className="space-y-6 md:space-y-8 mt-8">
          <div className="grid md:grid-cols-1 gap-6 md:gap-8 text-base md:text-xl">
            <h2 className="text-xl md:text-2xl font-semibold md:mb-6">
              About the course
            </h2>

            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Modern organizations generate millions of security logs and
                alerts every single day. Someone has to monitor, investigate,
                and respond to them before an attacker turns a small alert into
                a full-blown breach. That&apos;s where a{" "}
                <span className="font-bold">SOC Analyst</span> comes in. The
                SOC Analysis &amp; SIEM Operations course at Hackersdemy is
                designed to transform you into a{" "}
                <span className="font-bold">
                  job-ready, practical SOC Analyst
                </span>{" "}
                who can confidently handle real-world security incidents.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                In this course, you&apos;ll deep dive into{" "}
                <span className="font-bold">
                  log analysis, SIEM tools, alert triaging, threat hunting,
                  incident response, and reporting
                </span>
                . You&apos;ll learn to detect attacks like brute force, data
                exfiltration, malware, web exploits, insider threats, and more
                using industry-leading tools. Every concept is backed by{" "}
                <span className="font-bold">
                  hands-on labs and real use-case based scenarios
                </span>{" "}
                that mirror how global Security Operations Centers work.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                The program focuses on making you comfortable with{" "}
                <span className="font-bold">
                  SIEM platforms like IBM QRadar, Splunk, and Wazuh
                </span>
                , along with exposure to EDR, firewalls, and other security
                tools. You&apos;ll learn how to{" "}
                <span className="font-bold">
                  investigate alerts end-to-end
                </span>
                , map them to frameworks like{" "}
                <span className="font-bold">MITRE ATT&amp;CK</span>, and
                document your findings in a professional way. By the end of the
                course, you&apos;ll be able to walk into an SOC interview and
                confidently talk about real alerts you&apos;ve handled in the
                lab.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                This course is ideal for{" "}
                <span className="font-bold">
                  freshers, IT support engineers, NOC engineers, system/network
                  admins, and aspiring cybersecurity professionals
                </span>{" "}
                who want to break into SOC roles. At Hackersdemy, we simplify
                complex SOC workflows into{" "}
                <span className="font-bold">clear, beginner-friendly steps</span>{" "}
                using real-time examples and guided investigations. Even if
                you&apos;re completely new to cybersecurity, this course will
                help you build a{" "}
                <span className="font-bold">
                  strong, practical foundation in SOC operations
                </span>{" "}
                and push you towards your first cybersecurity job.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Hackersdemy is built for students from{" "}
                <span className="font-bold">any educational background</span>.
                If you&apos;re serious about starting your cybersecurity career
                with a powerful and in-demand role like SOC Analyst, we&apos;ll
                walk with you step-by-step until you&apos;re confident with
                real-world skills, not just theory. Let&apos;s turn your
                interest in cybersecurity into a{" "}
                <span className="font-bold">career that actually pays</span>.
              </p>
            </div>
          </div>
        </TabsContent>

        {/* CURRICULUM TAB */}
        <TabsContent value="curriculum" className="space-y-6 md:space-y-8 mt-8">
          <div className="text-base md:text-xl">
            <div className="space-y-6">
              <h2 className="text-xl md:text-xl font-semibold mb-4 md:mb-6">
                Curriculum
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 md:gap-6">
                {[
                  "Module 01: Networking & Security Fundamentals for SOC Analysts",
                  "Module 02: Operating Systems & Command Line for SOC (Windows & Linux)",
                  "Module 03: Introduction to SOC, SIEM & Security Monitoring",
                  "Module 04: Log Sources, Log Collection & Normalization",
                  "Module 05: Use Cases, Correlation Rules & Alert Tuning",
                  "Module 06: Working with IBM QRadar – Dashboards, Rules, Offenses & Reports",
                  "Module 07: Working with Splunk for Security – Searches, Alerts & Visualizations",
                  "Module 08: Working with Wazuh / Open-Source SIEM Platforms",
                  "Module 09: Monitoring Firewalls, IDS/IPS, Proxies & VPN Logs",
                  "Module 10: Endpoint Security & EDR Concepts for SOC Analysts",
                  "Module 11: Threat Intelligence, Feeds, IOC Enrichment & Reputation Checks",
                  "Module 12: MITRE ATT&CK Framework & Detection Engineering Basics",
                  "Module 13: Alert Triage, Incident Prioritization & Escalation Matrix",
                  "Module 14: Phishing Investigation, Email Header Analysis & User Awareness",
                  "Module 15: Web, Brute Force, Malware & Lateral Movement Attack Scenarios",
                  "Module 16: Incident Investigation, Documentation & Ticketing Best Practices",
                  "Module 17: Incident Response Lifecycle & Coordination with Other Teams",
                  "Module 18: Real-Time SOC Case Studies, Hands-On Labs & Playbooks",
                  "Module 19: Interview Preparation, Resume Building & SOC Career Roadmap",
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

        {/* FAQ TAB */}
        <TabsContent value="faq" className="space-y-6 md:space-y-8 mt-8">
          <Accordion
            type="single"
            collapsible
            className="w-full text-base md:text-xl mb-8 md:mb-12 space-y-4"
          >
            <AccordionItem
              value="item-1"
              className="border rounded-lg px-4"
            >
              <AccordionTrigger className="text-base md:text-xl py-4">
                Is the SOC Analysis course beginner-friendly?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-xl leading-relaxed pb-4">
                <span className="font-bold">Yes</span>, this course is designed
                to be beginner-friendly while still being highly practical. We
                start from fundamentals like networking, operating systems and
                basic security concepts before moving into SIEM, alerts and
                real-time investigations. Even if you are new to cybersecurity,
                we gradually build your confidence step-by-step.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border rounded-lg px-4"
            >
              <AccordionTrigger className="text-base md:text-xl py-4">
                Do I need programming knowledge or prior cybersecurity
                experience?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-xl leading-relaxed pb-4">
                <span className="font-bold">No</span>. You do not need
                programming knowledge or prior cybersecurity experience to begin
                this course. Basic familiarity with computers is enough. While
                scripting can be helpful later in your career, SOC roles mainly
                require strong{" "}
                <span className="font-bold">
                  analytical thinking, log reading and investigation skills
                </span>
                , which we focus on throughout this training.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border rounded-lg px-4"
            >
              <AccordionTrigger className="text-base md:text-xl py-4">
                Who all is this SOC Analysis course suitable for?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-xl leading-relaxed pb-4">
                This course is ideal for{" "}
                <span className="font-bold">
                  fresh graduates, career switchers, IT support engineers, NOC
                  engineers, desktop support, system administrators and network
                  engineers
                </span>{" "}
                who want to enter cybersecurity. At Hackersdemy, we cover
                essential fundamentals like networking basics, Windows &amp;
                Linux essentials and security concepts before diving into SIEM
                and SOC workflows, making it accessible for learners from any
                domain and age group.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border rounded-lg px-4"
            >
              <AccordionTrigger className="text-base md:text-xl py-4">
                How long does it take to complete the SOC Analysis training?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-xl leading-relaxed pb-4">
                The course typically spans around{" "}
                <span className="font-bold">45 days</span> with flexible batch
                options. Weekday batches run from Monday to Friday with
                one-hour sessions, while weekend batches are designed for
                working professionals with two-hour sessions on Saturdays and
                Sundays. The exact duration may vary slightly depending on
                additional labs and doubt-clearing sessions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="border rounded-lg px-4"
            >
              <AccordionTrigger className="text-base md:text-xl py-4">
                Will I get hands-on experience and work on real tools?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-xl leading-relaxed pb-4">
                <span className="font-bold">Yes</span>. Hands-on practice is the
                core of this course. You will work in a{" "}
                <span className="font-bold">
                  simulated enterprise SOC environment
                </span>{" "}
                with real-time security logs, alerts and attack scenarios. You
                will get guided practical exposure to tools like{" "}
                <span className="font-bold">
                  IBM QRadar, Splunk, Wazuh and other security solutions
                </span>
                , so you can confidently handle investigations like a real SOC
                Analyst.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-6"
              className="border rounded-lg px-4"
            >
              <AccordionTrigger className="text-base md:text-xl py-4">
                Is SOC Analyst a good career option for beginners?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-xl leading-relaxed pb-4">
                <span className="font-bold">Absolutely</span>. SOC Analyst is
                one of the most in-demand entry-level roles in cybersecurity
                globally. Almost every medium to large organization runs a
                Security Operations Center to monitor attacks 24x7 and they need
                skilled analysts who can triage alerts and respond to incidents.
                With the right training, SOC roles offer{" "}
                <span className="font-bold">
                  strong job opportunities, growth and salary progression
                </span>
                .
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-7"
              className="border rounded-lg px-4"
            >
              <AccordionTrigger className="text-base md:text-xl py-4">
                What job opportunities can I get after this SOC course?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-xl leading-relaxed pb-4">
                After completing this course, you can aim for roles such as{" "}
                <span className="font-bold">
                  SOC Analyst (L1/L2), Security Analyst, Cybersecurity
                  Operations Analyst, Incident Response Analyst, Threat
                  Monitoring Analyst
                </span>{" "}
                and more. With experience, you can grow into{" "}
                <span className="font-bold">
                  Threat Hunter, Senior SOC Analyst, Incident Responder or
                  Security Engineer
                </span>
                . We also guide you on how to present your skills and labs
                effectively in your resume and interviews.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-8"
              className="border rounded-lg px-4"
            >
              <AccordionTrigger className="text-base md:text-xl py-4">
                Will I be ready to work as an SOC Analyst after completing this
                course from Hackersdemy?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-xl leading-relaxed pb-4">
                <span className="font-bold">Yes</span>, the SOC Analysis
                training at Hackersdemy is carefully designed to make you{" "}
                <span className="font-bold">job-ready</span>. You will work on
                practical alert scenarios, investigations, documentation and
                incident workflows that closely resemble real SOC operations. We
                also cover{" "}
                <span className="font-bold">
                  interview questions, resume preparation and mock discussions
                </span>{" "}
                so that you are confident not only technically, but also during
                SOC interviews.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-9"
              className="border rounded-lg px-4"
            >
              <AccordionTrigger className="text-base md:text-xl py-4">
                Are class recordings and course material provided?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-xl leading-relaxed pb-4">
                <span className="font-bold">Yes</span>, along with live classes
                you will receive access to{" "}
                <span className="font-bold">
                  session recordings and detailed course material
                </span>
                . This helps you revise complex investigations at your own pace,
                revisit important topics, and catch up easily if you miss
                anything during the live session.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-10"
              className="border rounded-lg px-4"
            >
              <AccordionTrigger className="text-base md:text-xl py-4">
                What bonus content and resources are included with the course?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-xl leading-relaxed pb-4">
                Along with the core SOC training, you&apos;ll get{" "}
                <span className="font-bold">
                  extensive bonus resources and reference materials
                </span>
                , including{" "}
                <span className="font-bold">
                  sample use cases, incident reports, playbooks, investigation
                  checklists and additional video materials
                </span>{" "}
                to strengthen your understanding. These resources help you think
                like a professional SOC Analyst and give you a strong advantage
                during interviews and on the job.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-11"
              className="border rounded-lg px-4"
            >
              <AccordionTrigger className="text-base md:text-xl py-4">
                What should I do if I miss a session or have doubts later?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-xl leading-relaxed pb-4">
                If you miss a class, you can watch the{" "}
                <span className="font-bold">recorded session</span> and then
                reach out to us on{" "}
                <span className="font-bold">
                  WhatsApp, Telegram or Discord channels
                </span>{" "}
                shared with you. You can also request{" "}
                <span className="font-bold">
                  dedicated doubt-clearing sessions on weekends
                </span>
                . For multiple missed sessions, the trainer may also allow you
                to attend those topics in{" "}
                <span className="font-bold">alternate running batches</span> to
                ensure you don&apos;t fall behind.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-12"
              className="border rounded-lg px-4"
            >
              <AccordionTrigger className="text-base md:text-xl py-4">
                Which SIEM and security tools will I learn in this course?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-xl leading-relaxed pb-4">
                In this course, you will get guided exposure to{" "}
                <span className="font-bold">
                  IBM QRadar, Splunk, Wazuh (or similar open-source SIEM), EDR
                  concepts, firewall logs, IDS/IPS, proxy and VPN logs
                </span>
                . The aim is to make you comfortable working with multiple tool
                interfaces so that you can adapt quickly to different SOC
                environments in the real world.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-13"
              className="border rounded-lg px-4"
            >
              <AccordionTrigger className="text-base md:text-xl py-4">
                What is the cancellation and refund policy at Hackersdemy?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-xl leading-relaxed pb-4">
                At Hackersdemy, we want you to join only if the course truly
                adds value to you. That&apos;s why we offer the{" "}
                <span className="font-bold">
                  first three classes as free demo sessions
                </span>{" "}
                so you can experience the teaching style, content and lab
                quality before making any commitment. After the demo, payment
                can be made, and if you feel the course isn&apos;t the right
                fit,{" "}
                <span className="font-bold">
                  you can request a cancellation or refund within the first 7
                  classes, including the demo sessions
                </span>
                . After the first 7 classes, candidates are not eligible for a
                refund or cancellation.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
      </Tabs>
    </div>
  );
}
