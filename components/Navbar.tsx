'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react' // ✅ Icon import

export function Navbar() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCoursesOpen, setIsCoursesOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    setIsCoursesOpen(false)
  }

  return (
    <section className="py-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Hackersdemy Logo"
                width={300}
                height={300}
                className="w-auto h-10 sm:h-12 md:h-14 lg:h-16"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            {[
              { label: 'Home', href: '/' },
              { label: 'About Us', href: '/about' },
            ].map(({ label, href }) => (
              <button onClick={() => router.push(href)} key={label} className="p-[2px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-4 xl:px-8 py-2 bg-black rounded-[8px] relative text-white hover:bg-transparent text-sm xl:text-base">
                  {label}
                </div>
              </button>
            ))}

            {/* Desktop Courses Dropdown */}
            <div className="relative group inline-block p-[2px]">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg z-0" />
              <div className="px-4 xl:px-8 py-2 bg-black rounded-[8px] relative z-10 text-white flex items-center gap-2 text-sm xl:text-base cursor-pointer">
                Courses
                <ChevronDown className="w-4 h-4 text-white/60" />
              </div>

              <div className="absolute left-0 top-full hidden group-hover:block z-30 min-w-[12rem]">
                <div
                  className="w-52 origin-top-right rounded-xl border border-white/5 p-1 text-sm text-white"
                  style={{ backgroundColor: 'rgb(5,6,17)' }}
                >
                  <a href="/ceh" className="block px-4 py-2 rounded-lg hover:bg-gradient-to-r from-indigo-500 to-purple-500">Certified Ethical Hacking V13</a>
                  <a href="/wapt" className="block px-4 py-2 rounded-lg hover:bg-gradient-to-r from-indigo-500 to-purple-500">Web Application Penetration Testing</a>
                  <a href="/soc" className="block px-4 py-2 rounded-lg hover:bg-gradient-to-r from-indigo-500 to-purple-500">SOC Analysis</a>
                </div>
              </div>
            </div>

            <button onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })} className="p-[2px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-4 xl:px-8 py-2 bg-black rounded-[8px] relative text-white hover:bg-transparent text-sm xl:text-base">
                Contact Us
              </div>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 space-y-4">
            {[
              { label: 'Home', href: '/' },
              { label: 'About Us', href: '/about' },
            ].map(({ label, href }) => (
              <div key={label} className="p-[2px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <Link
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center px-8 py-2 bg-black rounded-[8px] relative text-white hover:bg-transparent"
                >
                  {label}
                </Link>
              </div>
            ))}

            {/* Mobile Courses Dropdown */}
            <div className="p-[2px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div
                className="px-8 py-2 bg-black rounded-[8px] relative text-white text-center cursor-pointer"
                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
              >
                <div className="flex justify-between items-center">
                  <span className="w-full text-center">Courses</span>
                  {isCoursesOpen ? (
                    <ChevronUp className="w-4 h-4 text-white/60" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-white/60" />
                  )}
                </div>

                {isCoursesOpen && (
                  <div className="mt-2 ml-2 space-y-2">
                    {[
                      { label: "Certified Ethical Hacking V13", href: "/ceh" },
                      { label: "Web Application Penetration Testing", href: "/wapt" },
                      { label: "SOC Analysis", href: "/soc" }
                    ].map(({ label, href }) => (
                      <div key={label} className="p-[2px] relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                        <Link
                          href={href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block w-full text-center px-6 py-2 bg-black rounded-[8px] relative text-white hover:bg-transparent"
                        >
                          {label}
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Contact Us */}
            <div className="p-[2px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <button
                onClick={() => {
                  document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false)
                }}
                className="w-full text-center px-8 py-2 bg-black rounded-[8px] relative text-white hover:bg-transparent"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Navbar
