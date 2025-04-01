'use client'
import Image from 'next/image'
import { ShinyButton } from './magicui/shiny-button'
import { useRouter } from 'next/navigation'

export function Navbar() {
  const router = useRouter()

  return (
    <section className="py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image 
            src="/logo.png" 
            alt="Hackersdemy Logo" 
            width={300} 
            height={300} 
            style={{ width: 'auto', height: 'auto' }} 
          />
        </div>
        <div className="flex items-center space-x-4">
          <ShinyButton onClick={() => router.push('/')}>Home</ShinyButton>
          <ShinyButton 
            onClick={() => { 
              router.push('/');
              setTimeout(() => {
                const footerElement = document.getElementById('courses');
                if (footerElement) {
                  footerElement.scrollIntoView({ behavior: 'smooth' });
                }
              },500);
            }}
            className="hover:bg-slate-700 hover:text-black"
          >
            Courses
          </ShinyButton>
          <ShinyButton onClick={() => router.push('/about')}>About Us</ShinyButton>
          <ShinyButton onClick={() => router.push('/blog')}>Blog</ShinyButton>
          <ShinyButton onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}>Contact Us</ShinyButton>
        </div>
      </div>
    </section>
  )
}

export default Navbar