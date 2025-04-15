'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export function Navbar() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <section className="py-4">
      <div className="container mx-auto px-4">
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
            <button onClick={() => router.push("/")} className="p-[2px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-4 xl:px-8 py-2 bg-black rounded-[8px] relative group transition duration-200 text-white hover:bg-transparent text-sm xl:text-base">
                Home
              </div>
            </button>

            <button onClick={() => router.push("/about")} className="p-[2px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-4 xl:px-8 py-2 bg-black rounded-[8px] relative group transition duration-200 text-white hover:bg-transparent text-sm xl:text-base">
                About Us
              </div>
            </button>

            <div className="relative group inline-block p-[2px]">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg z-0" />
              <div className="px-4 xl:px-8 py-2 bg-black rounded-[8px] relative z-10 text-white transition duration-200 hover:bg-transparent cursor-pointer flex items-center gap-2 text-sm xl:text-base">
                Courses
                <svg
                  className="w-3 h-3 xl:w-4 xl:h-4 fill-white/60"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.937a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06z" />
                </svg>
              </div>

              <div className="absolute left-0 top-full hidden group-hover:block z-30 min-w-[12rem] transition delay-75">
                <div className="w-52 origin-top-right rounded-xl border border-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                style={{ backgroundColor: 'rgb(5,6,17)' }}
                >
                  <a href="/ceh" className="flex items-center gap-2 rounded-lg px-4 py-2 hover:bg-gradient-to-r from-indigo-500 to-purple-500">
                    Certified Ethical Hacking V13
                  </a>
                  <a href="/wapt" className="flex items-center gap-2 rounded-lg px-4 py-2 hover:bg-gradient-to-r from-indigo-500 to-purple-500">
                    Web Application Penetration Testing
                  </a>
                  <a href="/soc" className="flex items-center gap-2 rounded-lg px-4 py-2 hover:bg-gradient-to-r from-indigo-500 to-purple-500">
                    SOC Analysis
                  </a>
                </div>
              </div>
            </div>

            <button onClick={() => router.push("/blog")} className="p-[2px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-4 xl:px-8 py-2 bg-black rounded-[8px] relative group transition duration-200 text-white hover:bg-transparent text-sm xl:text-base">
                Blog
              </div>
            </button>
            
            <button onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })} className="p-[2px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-4 xl:px-8 py-2 bg-black rounded-[8px] relative group transition duration-200 text-white hover:bg-transparent text-sm xl:text-base">
                Contact Us
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4`}>
          <div className="flex flex-col space-y-4">
            <button onClick={() => { router.push("/"); setIsMenuOpen(false); }} className="p-[2px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2 bg-black rounded-[8px] relative group transition duration-200 text-white hover:bg-transparent">
                Home
              </div>
            </button>

            <button onClick={() => { router.push("/about"); setIsMenuOpen(false); }} className="p-[2px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2 bg-black rounded-[8px] relative group transition duration-200 text-white hover:bg-transparent">
                About Us
              </div>
            </button>

            <div className="p-[2px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2 bg-black rounded-[8px] relative group transition duration-200 text-white">
                <div className="flex items-center justify-between">
                  <span>Courses</span>
                  <svg
                    className="w-4 h-4 fill-white/60"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.937a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06z" />
                  </svg>
                </div>
                <div className="mt-2 space-y-2">
                  <a href="/ceh" className="block px-4 py-2 hover:bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg">
                    Certified Ethical Hacking V13
                  </a>
                  <a href="/wapt" className="block px-4 py-2 hover:bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg">
                    Web Application Penetration Testing
                  </a>
                  <a href="/soc" className="block px-4 py-2 hover:bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg">
                    SOC Analysis
                  </a>
                </div>
              </div>
            </div>

            <button onClick={() => { router.push("/blog"); setIsMenuOpen(false); }} className="p-[2px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2 bg-black rounded-[8px] relative group transition duration-200 text-white hover:bg-transparent">
                Blog
              </div>
            </button>
            
            <button onClick={() => { document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false); }} className="p-[2px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2 bg-black rounded-[8px] relative group transition duration-200 text-white hover:bg-transparent">
                Contact Us
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Navbar
