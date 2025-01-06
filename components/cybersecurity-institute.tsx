/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
// import React, { useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { BackgroundBeams } from './ui/background-beams'
import { FlipWords } from './ui/flip-words'
// import { CardDemo } from './ui/content-card'
// import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/nav-bar";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { cn } from "@/lib/utils";
import React from 'react'
// import { FocusCards } from './focus-cards'

export function CybersecurityInstituteComponent() {
  const handleCEHClick = () => {
    console.log("CEH card clicked")

  }

  const handleSOCClick = () => {
    console.log("SOC card clicked")

  }

  const handleWAPTClick = () => {
    console.log("WAPT card clicked")

  }


  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Image src="/logo.png" alt="Palo Alto Networks Logo" width={200} height={200} />
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="">Home</Button>
            <Button variant="outline" className="">About Us</Button>
            <Button variant="outline" className="">Blog</Button>
            <Button variant="outline" className="">Contact Us</Button>
          </div>
        </div>
        <div className="relative w-full flex items-center justify-center">
          <Navbar className="top-2" />
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center"><FlipWords words={["Secure", "Respond", "Mitigate", "Harden", "Lead"]} duration={1500} /> <br /></h1>
          <h2 className="text-center text-2xl md:text-4xl mb-8 ">Turn Your Passion for Cybersecurity into a Professional Career</h2>
          <h2 className="justify-start pt-20 text-4xl md:text-6xl mb-8 max-w-[50vw] font-bold">Dive into the World of Cybersecurity with Hands-On Training at Hackersdemy.</h2>
          {/* <Button className="">Explore Courses ➾</Button> */}
          <BackgroundBeams />
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16">
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
              <div key={index} className="p-4 rounded-lg shadow-md text-center">
                <p className="text-3xl font-bold">{stat.value}</p>
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
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Courses Offered</h2>
          <div className="">
            <div className="py-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto px-8">
              <div onClick={handleCEHClick}>
                <Card title="Certified Ethical Hacking" icon={<Image src="/CEH.png" alt="CEH" width={600} height={600} />}>
                  <CanvasRevealEffect
                    animationSpeed={5.1}
                    containerClassName="bg-emerald-900"
                  />
                </Card>
              </div>
              <div onClick={handleSOCClick}>
                <Card title="SOC" icon={<Image src="/SOC.png" alt="CEH" width={600} height={600} />}>
                  <CanvasRevealEffect
                    animationSpeed={3}
                    containerClassName="bg-black"
                    colors={[
                      [236, 72, 153],
                      [232, 121, 249],
                    ]}
                    dotSize={2}
                  />
                  {/* Radial gradient for the cute fade */}
                  <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
                </Card>
              </div>
              <div onClick={handleWAPTClick}>
                <Card title="Web Application Penetration Testing" icon={<Image src="/WAPT.png" alt="CEH" width={600} height={600} />}>
                  <CanvasRevealEffect
                    animationSpeed={3}
                    containerClassName="bg-sky-600"
                    colors={[[125, 211, 252]]}
                  />
                </Card>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* diff Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold mb-8 text-center">The Hackersdemy Difference</h2>
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


      {/* Footer */}
      <footer className=" py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Products and Services</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm hover:underline">Network Security Platform</Link></li>
                <li><Link href="#" className="text-sm hover:underline">Cloud Security</Link></li>
                <li><Link href="#" className="text-sm hover:underline">Security Operations</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm hover:underline">Documentation</Link></li>
                <li><Link href="#" className="text-sm hover:underline">Webinars</Link></li>
                <li><Link href="#" className="text-sm hover:underline">White Papers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm hover:underline">About Us</Link></li>
                <li><Link href="#" className="text-sm hover:underline">Careers</Link></li>
                <li><Link href="#" className="text-sm hover:underline">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm hover:underline">Privacy Policy</Link></li>
                <li><Link href="#" className="text-sm hover:underline">Terms of Service</Link></li>
                <li><Link href="#" className="text-sm hover:underline">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Image src="/placeholder.svg" alt="Palo Alto Networks Logo" width={150} height={40} className="mx-auto mb-4" />
            <p className="text-sm">&copy; 2024 Palo Alto Networks. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function Navbar({ className }: { className?: string }) {
  // const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      {/* <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu> */}
    </div>
  );
}

const Card = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] relative"
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
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
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