/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Tomorrow } from "next/font/google";
import Image from "next/image";
import { FlipWords } from "./ui/flip-words";
import { LazyMotion, domAnimation, motion, AnimatePresence } from "@/components/_motion";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { TypingAnimation } from "./ui/typing-animation-hero";
import { BorderBeam } from "./magicui/border-beam";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import dynamic from "next/dynamic";

const CanvasRevealGate = dynamic(() => import("./ui/CanvasRevealGate"), {
  ssr: false,
});

const tomorrow = Tomorrow({
  subsets: ["latin"],
  weight: "600",
  style: "normal",
  display: "swap",
  fallback: ["sans-serif"],
});

// 🔹 Use the same container as Gallery + Testimonials
const sectionInnerClass = "max-w-7xl mx-auto px-6";

export function CybersecurityInstituteComponent() {
  const router = useRouter();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  const handleCEHClick = () => {
    console.log("CEH card clicked");
    router.push("/ceh");
  };

  const handleSOCClick = () => {
    console.log("SOC card clicked");
    router.push("/soc");
  };

  const handleWAPTClick = () => {
    console.log("WAPT card clicked");
    router.push("/wapt");
  };

  const typewriter_words = [
    { text: "The" },
    { text: "Hackersdemy", className: "text-red-500 dark:text-red-500" },
    { text: "Difference" },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-12 md:pt-20 pb-0 relative">
          <div className={sectionInnerClass}>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-center">
              <FlipWords
                words={["Secure", "Respond", "Mitigate", "Harden", "Lead"]}
                duration={1500}
              />
            </h1>
            <h2 className="text-xl md:text-3xl lg:text-4xl mb-6 md:mb-8 text-center">
              Turn Your Passion for Cybersecurity into a Professional Career
            </h2>
            <h1
              className={`pt-10 md:pt-16 lg:pt-20 mb-0 w-full md:max-w-[50vw] ${tomorrow.className}`}
            >
              <TypingAnimation>
                Dive into the World of Cybersecurity with Hands-On Training at
                Hackersdemy.
              </TypingAnimation>
            </h1>
          </div>
        </section>

        {/* Cyber Insights */}
        <section className="mt-16 md:mt-24">
          <div className={sectionInnerClass}>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-10 text-center">
              Cyber Insights
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-7">
              {[
                {
                  label: "Worldwide estimated annual cost of cybercrime by 2025.",
                  value: "$10.5 Trillion",
                },
                {
                  label:
                    "Organizations hit worldwide by ransomware attacks (2024)",
                  value: "59%",
                },
                {
                  label:
                    "Customers face attacks daily as reported by Microsoft",
                  value: "600 M",
                },
                {
                  label:
                    "Cybersecurity jobs vacant reported by World Economic Forum",
                  value: "4M",
                },
                {
                  label:
                    "Surge in cyberattacks in India alone in Q2 (2024)",
                  value: "115%",
                },
                {
                  label:
                    "Organizations have unfulfilled Cybersecurity positions (2024)",
                  value: "71%",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-4 md:p-6 rounded-lg shadow-md text-center relative"
                >
                  <BorderBeam duration={8} size={100} />
                  <p className="text-xl md:text-2xl font-bold mb-2">
                    {stat.value}
                  </p>
                  <p className="text-base md:text-lg">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Network Security paragraph */}
        <section className="mt-16 md:mt-24">
          <div className={sectionInnerClass}>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="text-center md:text-left w-full md:w-2/3">
                <p className="text-lg md:text-2xl">
                  As cyber threats become increasingly sophisticated, there is a
                  growing demand for skilled professionals to protect
                  organizations from potential attacks. At Hackersdemy, we
                  provide courses that give you industry-ready skills, helping
                  you to level up your cybersecurity knowledge and open the
                  doors to a wide range of job opportunities within the
                  ever-evolving world of cybersecurity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="mt-16 md:mt-24" id="courses">
          <div className={sectionInnerClass}>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Courses Offered
            </h2>
            <div className="mt-12 md:mt-16">
              <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-6 md:gap-8 mx-auto">
                <div onClick={handleCEHClick} className="w-full max-w-sm">
                  <Card
                    title="Certified Ethical Hacking"
                    icon={
                      <Image
                        src="/CEH.png"
                        alt="CEH"
                        width={600}
                        height={600}
                      />
                    }
                    text="Master the skills to think and act like a hacker to protect systems from cyber threats"
                  >
                    <CanvasRevealGate
                      animationSpeed={3}
                      containerClassName="bg-black"
                      colors={[
                        [244, 63, 94],
                        [251, 113, 133],
                      ]}
                      rootMargin="600px"
                    />
                  </Card>
                </div>

                <div onClick={handleWAPTClick} className="w-full max-w-sm">
                  <Card
                    title="Web Application Penetration Testing"
                    icon={
                      <Image
                        src="/WAPT.png"
                        alt="WAPT"
                        width={600}
                        height={600}
                      />
                    }
                    text="Uncover vulnerabilities in web apps and secure them from real-world attacks."
                  >
                    <CanvasRevealGate
                      animationSpeed={3}
                      containerClassName="bg-sky-600"
                      rootMargin="600px"
                    />
                  </Card>
                </div>

                <div onClick={handleSOCClick} className="w-full max-w-sm">
                  <Card
                    title="SOC"
                    icon={
                      <Image
                        src="/SOC.png"
                        alt="CEH"
                        width={600}
                        height={600}
                      />
                    }
                    text="Detect, analyze, and respond to cyber threats in real-time as a SOC expert."
                  >
                    <CanvasRevealGate
                      animationSpeed={3}
                      containerClassName="bg-emerald-900"
                      rootMargin="600px"
                    />
                    <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Hackersdemy Difference */}
        <section className="mt-16 md:mt-24">
          <div className={sectionInnerClass}>
            <div className="flex flex-col items-center justify-center mb-8">
              <TypewriterEffectSmooth words={typewriter_words} />
            </div>
            <p className="text-lg md:text-2xl pb-8 md:pb-10 text-center md:text-left">
              At Hackersdemy. we empower you to achieve the tech career you
              deserve with top-tier courses, certifications and expert knowledge
              by providing immersive training with industry-standard
              applications ensuring real-world relevance. Our courses in Ethical
              Hacking, Advanced Penetration Testing, Cyber Forensics and SOC
              Analysis are designed to prepare you for the ever-evolving
              cybersecurity challenges across all domains.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                {
                  label: "Experience delivering cybersecurity trainings",
                  value: "7+ years",
                },
                {
                  label: "Countries' students recognize us globally",
                  value: "12+",
                },
                {
                  label: "Students trained and counting",
                  value: "4000+",
                },
                {
                  label: "Companies have employed our students worldwide",
                  value: "26+",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-4 md:p-6 rounded-lg shadow-md text-center"
                >
                  <p className="text-2xl md:text-3xl font-bold mb-2">
                    {stat.value}
                  </p>
                  <p className="text-base md:text-lg">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </LazyMotion>
  );
}

/* Card/Icons unchanged */
const Card = ({
  title,
  icon,
  children,
  text,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  text: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative h-[30rem]"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-4xl font-bold px-6">
                {text} <br /> <span className="text-sm">Click to know more</span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
