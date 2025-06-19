import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import {
  Sparkles,
  Paintbrush,
  Wand2,
  Search,
  Users,
  ImageIcon,
  CheckCircle2,
  Github,
  Youtube,
  Rocket,
  ExternalLink
} from 'lucide-react';
import { NextJs } from "developer-icons";

const inter = Inter({ subsets: ['latin'] });

// --- SVG ICONS FOR TECH STACK ---
// For a real project, you might use a library like `react-icons` or import SVGs directly.
// For this single-file component, defining them here is clean and dependency-free.

const NextJsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="64" cy="64" r="64" fill="black" />
    <path d="M82.1667 43.4166L58.5 86.8333H51.L41.3333 66.8333V86.8333H33V43.4166H41.3333L55.1667 61.5V43.4166H63.5L82.1667 71.5833V43.4166H90.5V95H82.1667L58.5 51.5833H65.8333L75.6667 71.5833V51.5833H82.1667V43.4166H75.6667H63.5H55.1667L41.3333 43.4166" fill="url(#paint0_linear_1_2)" />
    <defs>
      <linearGradient id="paint0_linear_1_2" x1="64" y1="43.4166" x2="64" y2="95" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

const TypeScriptIcon = () => (
    <svg width="24" height="24" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="128" height="128" rx="20" fill="#3178C6"/><path d="M25.7277 25.4545H102.272V102H25.7277V25.4545Z" fill="#3178C6"/><path d="M31.2841 31H96.7159V96.5455H31.2841V31Z" fill="white"/><path d="M51.1023 69.4124H68.5568V63.958H56.5511V53.6449H67.6477V48.1903H51.1023V42.7358H69.4659V37.2812H45.6477V74.8665H69.4659V69.412H51.1023V69.4124Z" fill="#3178C6"/><path d="M83.109 63.3643C85.5352 61.6499 87.0545 59.4172 87.0545 56.417C87.0545 51.5511 83.9167 48.6943 78.5303 48.6943H70.0871V74.8665H75.5417V60.054H77.303C78.3371 60.054 79.1678 60.2541 79.7955 60.6542C80.4231 61.0543 80.9936 61.7377 81.5064 62.7047L85.9231 70.8039C86.6439 71.9712 87.3648 72.8219 88.0856 73.356C88.8648 73.8322 89.8447 74.0699 91.0246 74.0699C91.2246 74.0699 91.3663 74.0699 91.4485 74.0699L91.4489 74.8665H91.1492C90.2602 74.8665 89.4811 74.6083 88.8095 74.0917C88.1379 73.575 87.4663 72.7417 86.7943 71.5917L83.109 63.3643ZM75.5417 51.4511H77.9811C80.8371 51.4511 82.2652 52.8792 82.2652 55.7352C82.2652 58.5913 80.8958 60.0193 78.1576 60.0193H75.5417V51.4511Z" fill="#3178C6"/></svg>
);

const MongoDbIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.06 14.33c-.39.39-1.01.4-1.4.01-.39-.39-.4-.1.01-1.4.39-.39 1.01-.4 1.4-.01.39.39.4-1.01-.01-1.4z" fill="#47A248"/><path d="M12.33 18.21c-2.43 0-4.52-1.4-5.4-3.48h10.8c-.88 2.08-2.97 3.48-5.4 3.48z" fill="#47A248"/><path d="M12.01 5.92c-1.2 0-2.3.43-3.19 1.17.65.25 1.26.61 1.8 1.06 1.18-.74 2.62-1.12 4.14-1.04-.54-1.06-1.63-1.19-2.75-1.19zm-5.4 3.48c-1.32 2.33.19 5.28 2.8 6.09.28.08.56.15.85.19-2.33-1.32-3.84-4.27-3.65-6.28z" fill="#47A248"/></svg>
);

const ClerkIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#6C47FF"/><path d="M12 5.5c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.94 0 3.69-.85 4.91-2.2l-1.46-1.46c-.83.89-1.99 1.46-3.45 1.46-2.65 0-4.8-2.15-4.8-4.8s2.15-4.8 4.8-4.8c1.46 0 2.62.57 3.45 1.46l1.46-1.46C15.69 6.35 13.94 5.5 12 5.5z" fill="white"/></svg>
);

const CloudinaryIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 10.5c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5h15c2.48 0 4.5-2.02 4.5-4.5s-2.02-4.5-4.5-4.5h-15z" fill="#3448C5"/><path d="M19.5 4.5c2.48 0 4.5 2.02 4.5 4.5s-2.02 4.5-4.5 4.5h-15c-2.48 0-4.5-2.02-4.5-4.5s2.02-4.5 4.5-4.5h15z" fill="#6575E6"/><path d="M12 0c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" fill="#93A2FF"/></svg>
);

const StripeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#626CD9"/><path d="M12 5.5c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.94 0 3.69-.85 4.91-2.2l-1.46-1.46c-.83.89-1.99 1.46-3.45 1.46-2.65 0-4.8-2.15-4.8-4.8s2.15-4.8 4.8-4.8c1.46 0 2.62.57 3.45 1.46l1.46-1.46C15.69 6.35 13.94 5.5 12 5.5z" fill="white"/></svg>
);

const TailwindIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#38B2AC"/><path d="M9.5 14.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zm5 0c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="white"/></svg>
);

// --- HELPER COMPONENTS ---

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-gray-900/50 backdrop-blur-sm p-6 border border-purple-500/20 hover:border-orange-500/50 rounded-xl transition-all hover:-translate-y-1 duration-300">
    <div className="flex justify-center items-center bg-gradient-to-br from-orange-950 to-purple-950/50 mb-4 border border-orange-500/30 rounded-lg w-12 h-12">
      {icon}
    </div>
    <h3 className="mb-2 font-bold text-gray-100 text-xl">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const PricingCard = ({ plan, price, features, popular = false }: { plan: string; price: string; features: { text: string; checked: boolean }[]; popular?: boolean }) => (
    <div className={`relative p-8 border rounded-2xl hover:scale-105 transition-all ${popular ? 'border-orange-500' : 'border-gray-700'}`}>
        {popular && (
            <div className="top-0 left-1/2 absolute -translate-x-1/2 -translate-y-1/2">
                <span className="bg-gradient-to-r from-orange-500 to-purple-500 px-4 py-1 rounded-full font-semibold text-white text-xs uppercase">Most Popular</span>
            </div>
        )}
        <h3 className="mb-2 font-bold text-white text-2xl">{plan}</h3>
        <p className="mt-4 mb-10 font-extrabold text-white text-5xl">{price}</p>
        <ul className="space-y-4 mb-8">
            {features.map((feature, i) => (
                <li key={i} className={`flex items-center ${feature.checked ? 'text-gray-300' : 'text-gray-500'}`}>
                    <CheckCircle2 className={`w-5 h-5 mr-3 shrink-0 ${feature.checked ? 'text-orange-500' : 'text-gray-600'}`} />
                    {feature.text}
                </li>
            ))}
        </ul>
        <Link 
          href='/credits'
        >
        <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${popular ? 'text-white bg-gradient-to-r from-orange-500 to-purple-500 hover:from-orange-600 hover:to-purple-600' : 'bg-gray-700 hover:bg-gray-600 text-gray-200'}`}>
            Get Started
        </button>
        </Link>
    </div>
);

const TechButton = ({ icon, name }: { icon: string; name: string }) => (
  <div className="flex items-center gap-3 bg-gray-900/60 hover:bg-gray-800/80 px-4 py-2 border border-gray-700/50 rounded-lg transition-colors">
    {name === "Clerk" ? (
      <Image src={icon} alt="" width={20} height={20} />
    ) : (
      <Image src={icon} alt="" width={24} height={24} />
    )}
    <span className="font-medium text-gray-200">{name}</span>
  </div>
);

const ImaginifyLandingPage: NextPage = () => {
  const features = [
    { icon: <Sparkles className="w-6 h-6 text-orange-400" />, title: 'AI Image Restoration', description: 'Breathe new life into old or damaged photos, enhancing clarity and detail effortlessly.' },
    { icon: <Paintbrush className="w-6 h-6 text-orange-400" />, title: 'AI Object Recolor', description: 'Dynamically alter the color of any object within your images with stunning precision.' },
    { icon: <Wand2 className="w-6 h-6 text-orange-400" />, title: 'AI Generative Fill', description: 'Seamlessly fill in missing parts or expand your images with context-aware AI content.' },
    { icon: <ImageIcon className="w-6 h-6 text-orange-400" />, title: 'AI Background Removal', description: 'Isolate subjects with a single click, creating transparent backgrounds for any use case.' },
    { icon: <Search className="w-6 h-6 text-orange-400" />, title: 'Advanced Image Search', description: 'Find images based on their visual content and objects, not just tags or filenames.' },
    { icon: <Users className="w-6 h-6 text-orange-400" />, title: 'Community Showcase', description: 'Explore, share, and get inspired by a gallery of transformations from users worldwide.' },
  ];

  const techStack = [
    { name: 'Next.js', icon: 'https://raw.githubusercontent.com/xandemon/developer-icons/c0d3ae62a5f1ff6655fedbad5cc9a10703f4cc26/icons/nextjs.svg' },
    { name: 'TypeScript', icon: 'https://raw.githubusercontent.com/xandemon/developer-icons/c0d3ae62a5f1ff6655fedbad5cc9a10703f4cc26/icons/typescript.svg' },
    { name: 'MongoDB', icon: 'https://raw.githubusercontent.com/xandemon/developer-icons/c0d3ae62a5f1ff6655fedbad5cc9a10703f4cc26/icons/mongodb.svg' },
    { name: 'Clerk', icon: 'https://raw.githubusercontent.com/xandemon/developer-icons/c0d3ae62a5f1ff6655fedbad5cc9a10703f4cc26/icons/clerk.svg' },
    { name: 'Cloudinary', icon: 'https://raw.githubusercontent.com/xandemon/developer-icons/c0d3ae62a5f1ff6655fedbad5cc9a10703f4cc26/icons/cloudinary.svg' },
    { name: 'Stripe', icon: 'https://raw.githubusercontent.com/dochne/wappalyzer/main/src/images/icons/Stripe.svg' },
    { name: 'TailwindCSS', icon: 'https://raw.githubusercontent.com/xandemon/developer-icons/c0d3ae62a5f1ff6655fedbad5cc9a10703f4cc26/icons/tailwindcss.svg' },
  ];

  const githubIcon = 'https://raw.githubusercontent.com/shgysk8zer0/logos/56954404263cc00a5c07025f43ee99dd81a63858/mono/light/github.svg'

  const pricingPlans = [
    {
        plan: 'Free',
        price: '$0',
        features: [
            { text: '20 Free Credits', checked: true },
            { text: 'Basic Access to Services', checked: true },
            { text: 'Priority Customer Support', checked: false },
            { text: 'Priority Updates', checked: false },
        ],
        popular: false
    },
    {
        plan: 'Pro Package',
        price: '$40',
        features: [
            { text: '120 Credits', checked: true },
            { text: 'Full Access to Services', checked: true },
            { text: 'Priority Customer Support', checked: true },
            { text: 'Priority Updates', checked: false },
        ],
        popular: true
    },
    {
        plan: 'Premium Package',
        price: '$199',
        features: [
            { text: '2000 Credits', checked: true },
            { text: 'Full Access to Services', checked: true },
            { text: 'Priority Customer Support', checked: true },
            { text: 'Priority Updates', checked: true },
        ],
        popular: false
    }
  ];

  return (
    <>
      <Head>
        <title>Imaginify - AI-Powered Creative Suite</title>
        <meta name="description" content="An AI SaaS platform for advanced image processing, including restoration, recoloring, generative fill, and more." />
        <link rel="icon" href="/assets/images/logo-icon.svg" />
      </Head>

      <main className={`min-h-screen bg-gray-950 text-white ${inter.className} overflow-x-hidden`}>
        {/* Background Glow */}
        <div className="top-0 left-0 z-0 absolute w-full h-full overflow-hidden">
            <div className="-top-1/4 -left-1/4 absolute bg-gradient-to-br from-orange-500/20 to-purple-500/10 opacity-50 blur-3xl rounded-full w-1/2 h-1/2 animate-pulse filter"></div>
            <div className="-right-1/4 bottom-0 absolute bg-gradient-to-tl from-purple-500/20 to-orange-500/10 opacity-50 blur-3xl rounded-full w-1/2 h-1/2 animate-pulse delay-1000 filter"></div>
        </div>

        <div className="z-10 relative">
          {/* Header */}
          <header className="px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex justify-between items-center mx-auto max-w-7xl">
              <Link href="/" className="flex items-center space-x-3">
                <Image src="/assets/images/logo-text.svg" alt="Imaginify Logo" width={200} height={50} />
              </Link>
              <div className="flex items-center space-x-4">
                  <Link href="https://github.com/misterdan100/imaginefy" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                      <Image 
                        src={githubIcon}
                        alt=''
                        width={24}
                        height={24}
                        className='hover:scale-105 transition-transform'
                      />
                  </Link>
                   
                  <Link 
                    href='/home'
                    className="bg-gradient-to-r from-orange-500 hover:from-orange-600 to-purple-500 hover:to-purple-600 px-4 py-2 rounded-lg font-semibold text-white transition-all">
                    Launch App
                  </Link>
              </div>
            </nav>
          </header>

          {/* Hero Section */}
          <section className="px-4 py-24 sm:py-32 text-center">
            <div className="mx-auto max-w-4xl">
              <h1 className="bg-clip-text bg-gradient-to-br from-orange-400 to-purple-500 font-extrabold text-transparent text-4xl sm:text-5xl md:text-7xl tracking-tight">
                Unleash Your Creative Vision with AI
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-gray-300 text-lg md:text-xl">
                Imaginify is your all-in-one AI suite for transforming images. From restoration to generative fill, bring your wildest ideas to life with unparalleled power and simplicity.
              </p>
              <div className="flex justify-center items-center gap-4 mt-10">
                <Link 
                  href='/credits'
                className="bg-gradient-to-r from-orange-500 hover:from-orange-600 to-purple-500 hover:to-purple-600 px-8 py-3 rounded-full font-bold text-white text-lg hover:scale-105 transition-transform">
                  Start Creating for Free
                </Link>
                <Link href="#features" className="px-6 py-3 rounded-full font-semibold text-gray-300 hover:text-white transition-colors">
                  Explore Features
                </Link>
              </div>
            </div>
          </section>

          {/* Networking links */}
           <section className="px-4 py-12">
            <div className="mx-auto max-w-5xl text-center">
                <p className="font-semibold text-gray-400 text-sm uppercase tracking-wider">
                    This project was developed by Daniel Merchan
                </p>
                <div className="flex flex-wrap justify-center items-center gap-6 mt-4">
                    <a 
                      href='https://daniel-merchan.vercel.app/'
                      target='_blank'
                      className="flex items-center gap-2 hover:brightness-200 text-gray-300 transition-colors"><ExternalLink className="w-5 h-5 text-red-500" /><span>See Web Portfolio</span></a>
                    <a 
                      href='https://github.com/misterdan100/imaginefy'
                      target='_blank'
                      className="flex items-center gap-2 hover:brightness-200 text-gray-300 transition-colors"><Github className="w-5 h-5 text-indigo-400" /><span>Project GitHub Repository</span></a>
                    <a 
                      href='https://daniel-merchan.vercel.app/#projects'
                      target='_blank'
                      className="flex items-center gap-2 hover:brightness-200 text-gray-300 transition-colors"><Rocket className="w-5 h-5 text-green-400" /><span>Visit Other Projects</span></a>
                </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="px-4 sm:px-6 lg:px-8 py-24">
            <div className="mx-auto max-w-7xl">
              <div className="mb-16 text-center">
                <h2 className="font-bold text-white text-4xl tracking-tight">The Future of Image Editing is Here</h2>
                <p className="mt-4 text-gray-400 text-lg">One platform, limitless creative possibilities.</p>
              </div>
              <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => <FeatureCard key={index} {...feature} />)}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
           <section id="pricing" className="bg-gray-950/50 px-4 sm:px-6 lg:px-8 py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-16 text-center">
                        <h2 className="font-bold text-white text-4xl tracking-tight">Flexible Plans for Every Creator</h2>
                        <p className="mt-4 text-gray-400 text-lg">Start for free and scale as you create. Secure payments powered by Stripe.</p>
                    </div>
                    <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {pricingPlans.map((plan, i) => (
                           <PricingCard key={i} {...plan} />
                        ))}
                    </div>
                </div>
            </section>

          {/* Tech Stack Section */}
          <section className="px-4 sm:px-6 lg:px-8 py-20">
            <div className="mx-auto max-w-5xl text-center">
              <h3 className="font-semibold text-gray-300 text-lg tracking-wide">Powered by a Modern, Robust Tech Stack</h3>
              <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
                {techStack.map((tech) => <TechButton key={tech.name} {...tech} />)}
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="px-4 py-24">
            <div className="bg-gradient-to-br from-orange-500/10 via-gray-900/10 to-purple-500/10 mx-auto px-10 py-16 border border-purple-500/20 rounded-2xl max-w-4xl text-center">
              <h2 className="font-bold text-white text-4xl">Ready to Transform Your Images?</h2>
              <p className="mt-4 text-gray-300 text-lg">
                Join thousands of creators and developers. Sign up now and get 20 free credits to start your journey.
              </p>
              <div className="mt-8">
                <Link 
                  href='/sign-up'
                className="bg-gradient-to-r from-orange-500 hover:from-orange-600 to-purple-500 hover:to-purple-600 px-10 py-4 rounded-full font-bold text-white text-xl hover:scale-105 transition-transform">
                  Sign Up & Get Free Credits
                </Link>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="px-4 sm:px-6 lg:px-8 py-8 border-gray-800 border-t">
            <div className="flex sm:flex-row flex-col justify-between items-center gap-4 mx-auto max-w-7xl">
              <p className="text-gray-400">© {new Date().getFullYear()} Imaginify. All rights reserved.</p>
              <div className="flex items-center space-x-4">
                <p>Developed by </p>
                <Link href="https://github.com/misterdan100" className="bg-clip-text bg-gradient-to-br from-orange-400 to-purple-500 font-semibold text-transparent hover:text-white text-base transition-colors"> Daniel Merchan</Link>
                                  <a href="https://github.com/misterdan100/imaginefy" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                      <Image 
                        src={githubIcon}
                        alt=''
                        width={24}
                        height={24}
                        className='hover:scale-105 transition-transform'
                      />
                  </a>
              </div>
            </div>
          </footer>

        </div>
      </main>
    </>
  );
};

export default ImaginifyLandingPage;