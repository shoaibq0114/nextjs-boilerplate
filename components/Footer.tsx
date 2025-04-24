'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import GlowingInput from "./ui/GlowingInput"

//import { FloatingDock } from '@/components/magicui/floating-dock'
import {
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconBrandX,
  IconMail,
} from '@tabler/icons-react'
import React, { useRef } from 'react'
import { toast } from 'sonner'

const Footer = () => {
  const date = new Date()
  const formRef = useRef<HTMLFormElement | null>(null)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('shoaib@hackersdemy.com')
    toast.success('Email copied to clipboard!')
  }

  const socialLinks = [
    {
      title: 'Instagram',
      icon: <IconBrandInstagram className="h-5 w-5 sm:h-6 sm:w-6 text-neutral-500 dark:text-neutral-300" />,
      href: 'https://www.instagram.com/your_instagram',
    },
    {
      title: 'WhatsApp',
      icon: <IconBrandWhatsapp className="h-5 w-5 sm:h-6 sm:w-6 text-neutral-500 dark:text-neutral-300" />,
      href: 'https://wa.me/919849984778',
    },
    {
      title: 'Gmail',
      icon: <IconMail className="h-5 w-5 sm:h-6 sm:w-6 text-neutral-500 dark:text-neutral-300" />,
      href: '#',
      onClick: handleCopyEmail,
    },
    {
      title: 'Twitter',
      icon: <IconBrandX className="h-5 w-5 sm:h-6 sm:w-6 text-neutral-500 dark:text-neutral-300" />,
      href: 'https://twitter.com/your_twitter',
    },
  ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "a0527148-28ea-4259-8dc7-ea7e4cc0c5aa",
        firstname: formData.get("firstname"),
        lastname: formData.get("lastname"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message"),
      }),
    })

    const result = await response.json()
    if (result.success) {
      toast.success('Form submitted successfully!')
      form.reset()
    } else {
      toast.error('Form submission failed. Please try again.')
    }
  }

  return (
    <footer className="bg-black text-white border-t border-gray-700 py-6 sm:py-8" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Contact Us */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold">Contact Us</h3>
            <ul className="text-base sm:text-lg space-y-1">
              <li>Visakhapatnam</li>
              <li>9-9-117,</li>
              <li>Kalaa Bharti Road,</li>
              <li>Maddilapalem,</li>
              <li>Visakhapatnam - 530003</li>
              <li>Phone no: +91-9849984778</li>
              <li>Email : shoaib@hackersdemy.com</li>
            </ul>
            <div className="mt-4 sm:mt-6">
              <div className="flex flex-row items-center justify-start space-x-3 sm:space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    onClick={link.onClick}
                    className="flex items-center justify-center p-2 rounded-full hover:bg-gray-800 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold">Quick Links</h3>
            <nav className="space-y-2">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Why choose us?', href: '/about' },
                { label: 'Trending Courses', href: '/#courses' },
                { label: 'Student Testimonials', href: '/#testimonials' }
              ].map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="block text-gray-300 hover:text-white text-base sm:text-lg"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Request a Demo */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold">Request a demo</h3>
            <form onSubmit={handleSubmit} ref={formRef} className="space-y-3 sm:space-y-4" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <GlowingInput id="firstname" name="firstname" placeholder="First Name" type="text" required />
                <GlowingInput id="lastname" name="lastname" placeholder="Last Name" type="text" required />
              </div>
              <GlowingInput name="email" type="email" placeholder="Email" required />
              <GlowingInput name="phone" type="text" placeholder="Phone Number" required />
              <GlowingInput name="message" placeholder="Message" required />
              <Button type="submit">Send Message</Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 sm:mt-8 border-t border-gray-700 pt-6 sm:pt-8 flex flex-col items-center">
          <p className="text-sm sm:text-base">&copy; {date.getFullYear()} Hackersdemy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
