/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import {Tomorrow} from "next/font/google"
import Image from 'next/image'
import { BackgroundBeams } from './ui/background-beams'
import { FlipWords } from './ui/flip-words'
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
  import React, { useEffect } from 'react'
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect'
import { Testimonials } from './Testimonials'
import { useRouter } from 'next/navigation'
import { TypingAnimation } from "./ui/typing-animation-hero"

const tomorrow = Tomorrow(
 {
  subsets: ["latin"],
  weight: "600",
  style: "normal",
  display: "swap",
  fallback: ["sans-serif"],
 }
)
export function CybersecurityInstituteComponent() {
  const router = useRouter()

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = ''; // Reset on unmount
    };
  }, []);

  // const [setRef, isIntersecting] = useIntersectionObserver({ threshold: 0.99 });

  const handleCEHClick = () => {
    console.log("CEH card clicked")
    router.push('/ceh')

  }

  const handleSOCClick = () => {
    console.log("SOC card clicked")
    router.push('/soc')

  }

  const handleWAPTClick = () => {
    console.log("WAPT card clicked")
    router.push('/wapt')

  }
  const typewriter_words = [
    {
      text: "The",
    },
    {
      text: "Hackersdemy",
      className: "text-red-500 dark:text-red-500",
    },
    {
      text: "Difference",
    }
  ];



  return (
    <div className="min-h-screen">
              <BackgroundBeams />

      {/* Hero Section */}
      <section className="py-20 relative">
        
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center"><FlipWords words={["Secure", "Respond", "Mitigate", "Harden", "Lead"]} duration={1500} /> <br /></h1>
          <h2 className="text-center text-2xl md:text-4xl mb-8">Turn Your Passion for Cybersecurity into a Professional Career</h2>
            <h1 className={`justify-start text-4xl md:text-6xl pt-20 mb-8 max-w-[50vw] ${tomorrow.className}`} style={{ height: '18rem' }}><TypingAnimation>Dive into the World of Cybersecurity with Hands-On Training at Hackersdemy.</TypingAnimation></h1>
          {/* <Button className="">Explore Courses ➾</Button> */}

        </div>
      </section>

      {/* Statistics Section */}
      <section className="">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold mb-10 text-center">Cyber Insights</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-7">
            {[
              { label: 'Worldwide estimated annual cost of cybercrime by 2025.', value: '$10.5 Trillion' },
              { label: 'Organizations hit worldwide by ransomware attacks (2024)', value: '59%' },
              { label: 'Customers face attacks daily as reported by Microsoft', value: '600 M' },
              { label: 'Cybersecurity jobs vacant reported by World Economic Forum', value: '4M' },
              { label: 'Surge in cyberattacks in India alone in Q2 (2024)', value: '115%' },
              { label: 'Organizations have unfulfilled Cybersecurity positions (2024)', value: '71%' },
            ].map((stat, index) => (
              <div key={index} className="p-4 rounded-lg shadow-md text-center" >
                <p className="text-2xl font-bold">{stat.value}</p>
               {/* {<HyperText>{stat.value}</HyperText>} */}
                <p className="text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Security Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="text-center mb-8 md:mb-0">
              <p className="mb-1 text-2xl w-full">As cyber threats become increasingly sophisticated, there is a growing demand for skilled professionals to protect organizations from potential attacks. At Hackersdemy, we provide courses that give you industry-ready skills, helping you to level up your cybersecurity knowledge and open the doors to a wide range of job opportunities within the ever-evolving world of cybersecurity.</p>
              {/* <Button className="">Explore Courses→</Button> */}
            </div>
            {/* <div className="md:w-1/2 grid grid-cols-3 gap-4">
              {['Better Mortgage', 'Salesforce', 'Envision', 'ADT', 'MICHELIN', 'Resolution Life'].map((company, index) => (
                <div key={index} className="p-4 rounded-lg flex items-center justify-center">
                  <p className="text-sm font-bold">{company}</p>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16" id="courses">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Courses Offered</h2>
          <div className="">
            <div className="py-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto px-8">
              <div onClick={handleCEHClick}>
                <Card title="Certified Ethical Hacking" icon={<Image src="/CEH.png" alt="CEH" width={600} height={600} />} text="Master the skills to think and act like a hacker to protect systems from cyber threats">
                 {/*TODO: change the shades for card colours (CEH)*/}
                  <CanvasRevealEffect
                    animationSpeed={3}
                    containerClassName="bg-[#BC3232]"
                    colors={[
                      [240, 107, 107]
                    ]} 
                    dotSize={8}
                  />
                </Card>
              </div>
              <div onClick={handleWAPTClick}>
                <Card title="Web Application Penetration Testing" icon={<Image src="/WAPT.png" alt="WAPT" width={600} height={600} />} text="Uncover vulnerabilities in web apps and secure them from real-world attacks.">
                  
                  <CanvasRevealEffect
                    animationSpeed={3}
                    containerClassName="bg-sky-600"
                  />
                </Card>
              </div>
            <div onClick={handleSOCClick}>
                <Card title="SOC" icon={<Image src="/SOC.png" alt="CEH" width={600} height={600} />} text="Detect, analyze, and respond to cyber threats in real-time as a SOC expert.">
                  <CanvasRevealEffect
                    animationSpeed={3}
                    containerClassName="bg-emerald-900"
                  />
                  {/* Radial gradient for the cute fade */}
                  <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
                </Card>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* diff Section */}
      <section className="py-16">
        <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
        <TypewriterEffectSmooth words={typewriter_words} />
        </div>
            <p className='w-full text-2xl pb-10'>At Hackersdemy. we empower you to achieve the tech career you deserve with top-tier courses, certifications and
              expert knowledge by providing immersive training with industry-standard applications ensuring real-world relevance.
              Our courses in Ethical Hacking, Advanced Penetration Testing, Cyber Forensics and SOC Analysis are designed to
              prepare you for the ever-evolving cybersecurity challenges across all domains.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { label: 'Experience delivering cybersecurity trainings', value: '7+ years' },
              { label: "Countries' students recognize us globally", value: '12+' },
              { label: 'Students trained and counting', value: '4000+' },
              { label: 'Companies have employed our students worldwide', value: '26+' },
            ].map((stat, index) => (
              <div key={index} className="p-4 rounded-lg shadow-md text-center">
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* Testimonials */}
      <section>
            <Testimonials />

      </section>


      {/* Footer */}
    </div>
  )
}

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
              <p className="text-white text-4xl font-bold px-6">{text} <br /> <span className="text-sm">Click to know more</span></p>
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
