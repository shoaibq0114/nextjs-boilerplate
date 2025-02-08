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
          <Image src="/logo.png" alt="Palo Alto Networks Logo" width={300} height={300} />
        </div>
        <div className="flex items-center space-x-4">
          <ShinyButton onClick={() => router.push('/')}>Home</ShinyButton>
          <ShinyButton onClick={() => router.push('/about')}>About Us</ShinyButton>
          <ShinyButton onClick={() => router.push('/blog')}>Blog</ShinyButton>
          <ShinyButton onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}>Contact</ShinyButton>
        </div>
      </div>
    </section>
  )
}
