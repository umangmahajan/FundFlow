"use client";

import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, CheckCircle, Target, UserCheck, BarChart2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/site-header';

const features = [
  {
    name: 'Create Your Profile',
    description: 'Build a detailed profile for your startup to highlight your unique strengths and needs.',
    icon: UserCheck,
    image: PlaceHolderImages.find(img => img.id === 'feature-profile'),
  },
  {
    name: 'AI-Powered Matching',
    description: 'Our smart recommendation engine connects you with the government grants that best fit your profile.',
    icon: Target,
    image: PlaceHolderImages.find(img => img.id === 'feature-matching'),
  },
  {
    name: 'Track and Succeed',
    description: 'Monitor your application status and showcase your performance to attract further investment.',
    icon: BarChart2,
    image: PlaceHolderImages.find(img => img.id === 'feature-tracking'),
  },
];

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero');

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative w-full h-[60vh] md:h-[80vh]">
          {heroImage && (
             <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="relative container mx-auto px-4 md:px-6 h-full flex flex-col items-center justify-end text-center pb-16 md:pb-24">
            <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight text-foreground mb-4">
              Unlock Your Startup's Potential
            </h1>
            <p className="max-w-3xl text-lg md:text-xl text-muted-foreground mb-8">
              FundFlow is the definitive platform for Indian startups to find and secure government funding, seamlessly.
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg" className="font-bold">
                <Link href="/dashboard">Get Started <ArrowRight className="ml-2" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-bold">
                <Link href="/transparency">View Public Log</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="features" className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">A Direct Bridge to Government Grants</h2>
              <p className="text-lg text-muted-foreground mb-12">
                We simplify the grant application process, so you can focus on what matters most: building your business.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center p-6 rounded-lg transition-transform transform hover:-translate-y-2">
                  <div className="mb-4 bg-primary/10 p-3 rounded-full">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold font-headline mb-2">{feature.name}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Why FundFlow?</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  The Indian government offers numerous schemes to fuel innovation, but navigating them is a major hurdle. FundFlow cuts through the noise, providing clarity, transparency, and opportunity.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                    <span><strong className="text-foreground">For Founders:</strong> Stop wasting time. Find eligible grants in minutes and track your applications in one place.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                    <span><strong className="text-foreground">For Investors:</strong> Gain unparalleled insight into a startup's performance and government backing through our public grant log.</span>
                  </li>
                   <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                    <span><strong className="text-foreground">For the Ecosystem:</strong> We foster transparency and accountability, ensuring public funds empower the most deserving innovators.</span>
                  </li>
                </ul>
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                {PlaceHolderImages.find(img => img.id === 'why-grantbridge') && (
                  <Image 
                    src={PlaceHolderImages.find(img => img.id === 'why-grantbridge')?.imageUrl!}
                    alt={PlaceHolderImages.find(img => img.id === 'why-grantbridge')?.description!}
                    fill
                    className="object-cover"
                    data-ai-hint={PlaceHolderImages.find(img => img.id === 'why-grantbridge')?.imageHint!}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 bg-card border-t">
        <div className="container mx-auto px-4 md:px-6 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} FundFlow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}