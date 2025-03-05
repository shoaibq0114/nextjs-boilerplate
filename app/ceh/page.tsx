import { MagicCard } from '@/components/magicui/magic-card'
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation'
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsTrigger } from '@/components/ui/tabs'
import { TabsList } from '@radix-ui/react-tabs'
import React from 'react'


function CEHPage() {
  return (
    <div className="h-full bg-[#101828]">
    <BackgroundGradientAnimation gradientBackgroundStart="rgb(16, 24, 40)" gradientBackgroundEnd="rgb(16, 24, 40)" firstColor="16 24 40" secondColor="16 24 40" thirdColor="16 24 40" fourthColor="16 24 40" fifthColor="16 24 40" containerClassName="h-screen">
          <div className="container mx-auto z-50 inset-0 grid grid-cols-1 items-center justify-center text-white font-bold px-4 pointer-events-none text-center">
            <p className="bg-clip-text text-3xl drop-shadow-2xl  md:text-4xl lg:text-7xl mt-[20vh]">
            Certified Ethical Hacking V13
            </p>
            <p className="bg-clip-text text-gray-300 text-lg my-[4vh] drop-shadow-2xl md:text-xl lg:text-2xl">
            Launch Your Cybersecurity Journey with the Most Recognized Certification
            </p>
            
          </div>
        </BackgroundGradientAnimation>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 pt-10 items-center mx-[25vw] justify-center'>  
          <MagicCard className='rounded-xl max-w-screen h-[20vh] ' >
            <CardHeader>
              <CardTitle className='text-center'>35+</CardTitle>
            </CardHeader>
            <CardContent className='text-center'>
              <CardDescription>
          Hours of Live Training Content
              </CardDescription>
            </CardContent>
          </MagicCard>
          <MagicCard className='rounded-xl max-w-screen h-[20vh]' >
            <CardHeader>
              <CardTitle className='text-center'>70:30</CardTitle>
            </CardHeader>
            <CardContent className='text-center'>
              <CardDescription>
          Practical to Theoretical Ratio
              </CardDescription>
            </CardContent>
          </MagicCard>
          <MagicCard className='rounded-xl w-full mx-auto h-[20vh] md:2-[30vw] lg:2-[30vw]' >
            <CardHeader>
              <CardTitle className='text-center'>Resume Building</CardTitle>
            </CardHeader>
            <CardContent className='text-center'>
              <CardDescription>
          Service provided for free after completion
              </CardDescription>
            </CardContent>
          </MagicCard>
          <MagicCard className='rounded-xl w-full mx-auto h-[20vh] md:2-[30vw] lg:2-[30vw]' >
            <CardHeader>
              <CardTitle className='text-center'>1 year</CardTitle>
            </CardHeader>
            <CardContent className='text-center'>
              <CardDescription>
          Access to Recorded Sessions
              </CardDescription>
            </CardContent>
          </MagicCard>
          <MagicCard className='rounded-xl w-full mx-auto h-[20vh] md:2-[30vw] lg:2-[30vw]' >
            <CardHeader>
              <CardTitle className='text-center'>2 Installments</CardTitle>
            </CardHeader>
            <CardContent className='text-center'>
              <CardDescription>
          Payments accepted for students
              </CardDescription>
            </CardContent>
          </MagicCard>
          <MagicCard className='rounded-xl w-full mx-auto h-[20vh] md:2-[30vw] lg:2-[30vw]' >
            <CardHeader>
              <CardTitle className='text-center'>3</CardTitle>
            </CardHeader>
            <CardContent className='text-center'>
              <CardDescription>
          Demo classes can be attended for free
              </CardDescription>
            </CardContent>
          </MagicCard>
          <MagicCard className='rounded-xl lg:col-start-2 w-full h-[20vh] mx-auto md:2-[30vw] lg:2-[30vw]'>
            <CardHeader>
              <CardTitle className='text-center'>50+</CardTitle>
            </CardHeader>
            <CardContent className='text-center'>
              <CardDescription>
                Hours of Bonus Content provieded
              </CardDescription>
            </CardContent>
          </MagicCard>
        </div>
        <div className='mx-[25vw] mt-10 '>
          <Tabs defaultValue='overview'>
            <TabsList>
              <TabsTrigger value="overview">Course Overview</TabsTrigger>
              <TabsTrigger value='content'>Course Content</TabsTrigger>
              <TabsTrigger value="faq">FAQs</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">Course Overview</TabsContent>
            <TabsContent value="content">Course Content</TabsContent>
            <TabsContent value="faq">FAQs</TabsContent>
          </Tabs>
        </div>
    </div>

  )
}

export default CEHPage