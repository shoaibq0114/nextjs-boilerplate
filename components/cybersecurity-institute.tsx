'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Shield, Cloud, Brain, Bell, ChevronRight } from 'lucide-react'
import { BackgroundBeams } from './ui/background-beams'

export function CybersecurityInstituteComponent() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Image src="/placeholder.svg" alt="Palo Alto Networks Logo" width={150} height={40} />
            <nav className="hidden md:flex space-x-4">
              <Link href="#" className="hover:text-gold">Products</Link>
              <Link href="#" className="hover:text-gold">Solutions</Link>
              <Link href="#" className="hover:text-gold">Resources</Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="">Sign In</Button>
            <Button variant="outline" className="">Contact Us</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Defend. Secure. Simplify.</h1>
          <h2 className="text-2xl md:text-4xl mb-8">With Precision AI™</h2>
          <Button className="">Get ready for Precision AI →</Button>
        </div>
        <BackgroundBeams />
      </section>

      {/* Statistics Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Daily Security Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: 'Cloud Events Pro', value: '1T' },
              { label: 'New Unique Objects Analyzed', value: '1.58 B' },
              { label: 'Exploit Attempts Detected', value: '18.82 K' },
              { label: 'New Unique Attack Objects Identified', value: '12.56 M' },
              { label: 'Malware Executions Blocked', value: '287.56 K' },
              { label: 'Attacks Prevented Inline', value: '11.3 B' },
            ].map((stat, index) => (
              <div key={index} className="p-4 rounded-lg shadow-md text-center">
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Security Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Network Security</h2>
              <p className="mb-4">Secure everyone and everything from the latest threats in every location. Built for Zero Trust and powered by AI, the Strata™ Network Security Platform proactively monitors, analyzes and prevents sophisticated threats in real time with less complexity, enabling secure growth and innovation for your organization.</p>
              <Button className="">Explore Network Security →</Button>
            </div>
            <div className="md:w-1/2 grid grid-cols-3 gap-4">
              {['Better Mortgage', 'Salesforce', 'Envision', 'ADT', 'MICHELIN', 'Resolution Life'].map((company, index) => (
                <div key={index} className="p-4 rounded-lg flex items-center justify-center">
                  <p className="text-sm font-bold">{company}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Industry Recognized. Constantly Innovating.</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              'Forrester Wave™: Enterprise Firewall Solutions',
              'Gartner® Magic Quadrant™ for Network Firewalls',
              'Forrester New Wave™: ZTNA',
              'Gartner® Magic Quadrant™ for Single-Vendor SASE',
              'Gartner® Magic Quadrant for SD-WAN',
              'Gartner® Magic Quadrant™ for Security Service Edge',
              'Forrester Wave™: Operational Technology Security Solutions',
              'Frost Radar™ for Zero Trust Browser Security',
            ].map((award, index) => (
              <div key={index} className="p-4 rounded-lg shadow-md text-center">
                <p className="text-sm">{award}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">See what our solutions can do for you</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Shield className="w-8 h-8" />, title: 'Secure your network' },
              { icon: <Cloud className="w-8 h-8 " />, title: 'Secure your cloud' },
              { icon: <Brain className="w-8 h-8 " />, title: 'Transform your SOC' },
              { icon: <Bell className="w-8 h-8" />, title: 'Threat intel and incident response' },
            ].map((solution, index) => (
              <div key={index} className=" p-6 rounded-lg shadow-md">
                {solution.icon}
                <h3 className="text-xl font-bold mt-4 mb-2">{solution.title}</h3>
                <p className="text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Link href="#" className=" hover:underline flex items-center">
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 ">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Ignite on Tour</h2>
              <p className="mb-4">Meet decision-makers, experts and practitioners for a day of hands-on learning, strategy building and networking.</p>
              <Button className="">Attend our global roadshow</Button>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Executive Briefing Center</h2>
              <p className="mb-4">Get a customized plan to see how our AI-powered platforms, threat intelligence and expert services help you secure what&apos;s next.</p>
              <Button className="">Plan a collaborative discussion</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Expert Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              'Securing Your AI-Powered Network Transformation: A Guide for C-Suite Leaders',
              'A New Era of Cybersecurity with AI',
              'When It Comes to Security and AI, Believe What You See',
            ].map((article, index) => (
              <div key={index} className="p-6 rounded-lg shadow-md">
                <Image src="/placeholder.svg" alt="Article thumbnail" width={300} height={200} className="mb-4 rounded" />
                <h3 className="text-xl font-bold mb-2">{article}</h3>
                <Link href="#" className="hover:underline">Read more</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get the latest news, invites to events, and threat alerts</h2>
          <form className="max-w-md mx-auto">
            <div className="flex">
              <Input type="email" placeholder="Enter your email" className="flex-grow" />
              <Button type="submit" className="ml-2">Subscribe</Button>
            </div>
          </form>
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