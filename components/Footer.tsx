'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { FloatingDock } from '@/components/magicui/floating-dock'
import {
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconBrandX,
  IconMail,
} from '@tabler/icons-react'
import React, { useState } from 'react'
import { toast } from 'sonner' // ensure you have 'sonner' installed

const Footer = () => {
  const date = new Date()

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('shoaib@hackersdemy.com')
    toast.success('Email copied to clipboard!')
  }

  const socialLinks = [
    {
      title: 'Instagram',
      icon: <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: 'https://www.instagram.com/your_instagram',
    },
    {
      title: 'WhatsApp',
      icon: <IconBrandWhatsapp className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: 'https://wa.me/919849984778',
    },
    {
      title: 'Gmail',
      icon: <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: '#',
      onClick: handleCopyEmail,
    },
    {
      title: 'Twitter',
      icon: <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: 'https://twitter.com/your_twitter',
    },
  ]
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <footer className="bg-black text-white border-t border-gray-700 py-8" id="footer">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Us */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <ul className="text-xl mb-4 space-y-1">
              <li>Visakhapatnam</li>
              <li>9-9-117,</li>
              <li>Kalaa Bharti Road,</li>
              <li>Maddilapalem,</li>
              <li>Visakhapatnam - 530003</li>
              <li>Phone no: +91-9849984778</li>
              <li>Email : shoaib@hackersdemy.com</li>
            </ul>

            {/* Social Icons below Contact Us */}
            <div className="mt-6">
              <FloatingDock
                mobileClassName="translate-y-10"
                items={socialLinks}
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
        <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
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
              className="block text-gray-300 hover:text-white"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>                

          {/* Request a Demo */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Request a demo</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <Input id="firstname" placeholder="First Name" type="text" />
                <Input id="lastname" placeholder="Last Name" type="text" />
              </div>
              <Input type="email" placeholder="Email" name="email" required />
              <Input type="text" placeholder="Phone Number" name="phone" required />
              <Input placeholder="Message" required name="message" />
              <Button type="submit">Send Message</Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
          <p>&copy; {date.getFullYear()} Hackersdemy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
