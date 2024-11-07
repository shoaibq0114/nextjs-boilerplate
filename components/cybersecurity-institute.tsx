'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ShieldCheck, Code, Lock, Zap, ChevronRight } from 'lucide-react'

export function CybersecurityInstituteComponent() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-400">CyberGuard Institute</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Button variant="link" className="text-white hover:text-green-400">Home</Button></li>
              <li><Button variant="link" className="text-white hover:text-green-400">Curriculum</Button></li>
              <li><Button variant="link" className="text-white hover:text-green-400">Testimonials</Button></li>
              <li><Button variant="link" className="text-white hover:text-green-400">Contact</Button></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-4">Master Cybersecurity with <span className="text-green-400">CEH v12</span></h2>
            <p className="text-xl mb-6">Learn from industry expert John Doe and become a certified ethical hacker.</p>
            <Button className="bg-green-500 hover:bg-green-600 text-white">
              Enroll Now <ChevronRight className="ml-2" />
            </Button>
          </div>
          <div className="md:w-1/2">
            <Card className="bg-gray-700 border-green-400">
              <CardContent className="p-0">
                <img src="/placeholder.svg?height=400&width=400" alt="Cybersecurity Trainer" className="w-full h-auto rounded-lg" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">CEH v12 Curriculum</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <ShieldCheck className="w-12 h-12 text-green-400 mb-4" />, title: "Information Security and Ethical Hacking Overview" },
              { icon: <Code className="w-12 h-12 text-green-400 mb-4" />, title: "Reconnaissance and Footprinting" },
              { icon: <Lock className="w-12 h-12 text-green-400 mb-4" />, title: "Scanning and Enumeration" },
              { icon: <Zap className="w-12 h-12 text-green-400 mb-4" />, title: "Vulnerability Analysis" },
              { icon: <ShieldCheck className="w-12 h-12 text-green-400 mb-4" />, title: "System Hacking" },
              { icon: <Code className="w-12 h-12 text-green-400 mb-4" />, title: "Malware Threats" },
              { icon: <Lock className="w-12 h-12 text-green-400 mb-4" />, title: "Sniffing and Social Engineering" },
              { icon: <Zap className="w-12 h-12 text-green-400 mb-4" />, title: "Wireless Network Hacking" },
            ].map((item, index) => (
              <Card key={index} className="bg-gray-800 border-green-400">
                <CardHeader>
                  <CardTitle className="text-center">{item.icon}</CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-semibold text-center">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Alice Johnson", role: "Security Analyst", quote: "The CEH v12 course at CyberGuard Institute transformed my career. The hands-on approach and expert guidance were invaluable." },
              { name: "Bob Smith", role: "Network Administrator", quote: "I've never felt more prepared to tackle real-world cybersecurity challenges. The curriculum is comprehensive and up-to-date." },
              { name: "Carol Davis", role: "IT Manager", quote: "The instructors' industry experience and the practical labs make this course stand out. It's a must for any aspiring ethical hacker." },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-gray-900 border-green-400">
                <CardContent className="p-6">
                  <p className="mb-4 italic">"{testimonial.quote}"</p>
                  <Separator className="my-4" />
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-green-400 flex items-center justify-center mr-4">
                      <span className="text-gray-900 font-bold text-lg">{testimonial.name[0]}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-green-400">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 CyberGuard Institute. All rights reserved.</p>
          <div className="mt-2">
            <Button variant="link" className="text-green-400 hover:text-green-300 mr-4">Privacy Policy</Button>
            <Button variant="link" className="text-green-400 hover:text-green-300">Terms of Service</Button>
          </div>
        </div>
      </footer>
    </div>
  )
}