import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-white px-6 md:px-12 lg:px-24 py-12 md:py-20">
      {/* Header/Logo */}
      <header className="mb-24">
        <Link href="/" className="inline-block">
          <Image
            src="./allstar_logo.png"
            alt="ALL STAR"
            width={160}
            height={40}
            className="h-8 w-auto"
            priority
            quality={100}
          />
        </Link>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl space-y-24">
        {/* Mission Statement */}
        <section className="space-y-8">
          <h1 className="text-4xl font-semibold leading-tight text-gray-900 mb-6">
            Accelerating Japan&apos;s AI & SaaS Revolution
          </h1>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              ALL STAR SAAS FUND is a venture capital firm that partners with early-stage startups to accelerate Japan&apos;s digital transformation. We identify and invest in visionary founders who are building innovative SaaS and AI solutions that address critical business challenges.
            </p>
            <p>
              We are committed to building lasting, enduring companies that create meaningful impact.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-8">People</h2>
          <p className="text-lg mb-8">
            Our team brings together experienced investors, technologists, and operators who understand the unique challenges and opportunities in Japan&apos;s ecosystem. We work closely with founders to help them realize their vision.
          </p>
          <ul className="space-y-4">
            <li>
              <Link href="https://www.linkedin.com/in/hironorimaeda/" className="font-bold hover:underline">Hiro Maeda</Link>
              <span className="text-gray-600"> (Managing Partner)</span>
            </li>
            <li>
              <Link href="#" className="font-bold hover:underline">Chihiro Kobayashi</Link>
              <span className="text-gray-600"> (Director of Brand & Marketing)</span>
            </li>
            <li>
              <Link href="#" className="font-bold hover:underline">Masa Minato</Link>
              <span className="text-gray-600"> (Senior Investment Partner)</span>
            </li>
         
          </ul>
        </section>

        {/* Portfolio Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-8">Portfolio</h2>
          <p className="text-lg mb-8">
            We invest in startups addressing critical operational challenges faced by Japanese businesses. Our portfolio encompasses core business operations including human resources, expense management, accounting, and customer relationship management. Our portfolio companies deliver solutions across diverse industries, including construction, pharmaceuticals, manufacturing, and logistics.
          </p>
          <ul className="space-y-4">
            <li>
              <Link href="https://smarthr.co.jp/" className="font-bold hover:underline">SmartHR</Link>
              <span className="text-gray-600">, HR Software</span>
            </li>
            <li>
              <Link href="https://www.loglass.jp/" className="font-bold hover:underline">Loglass</Link>
              <span className="text-gray-600">, Financial Planning & Accounting</span>
            </li>
            <li>
              <Link href="https://www.hacomono.jp/" className="font-bold hover:underline">hacomono</Link>
              <span className="text-gray-600">, Fitness & Beauty Industry</span>
            </li>
            <li>
              <Link href="https://kaminashi.jp/" className="font-bold hover:underline">Kaminashi</Link>
              <span className="text-gray-600">, Software for Manufacturing Industry </span>
            </li>
            <li>
              <Link href="https://www.fastaccounting.jp/en/" className="font-bold hover:underline">Fast Accounting</Link>
              <span className="text-gray-600">, Automation for Accounting</span>
            </li>
            <li>
              <Link href="https://www.hrbrain.jp/" className="font-bold hover:underline">HR Brain</Link>
              <span className="text-gray-600">, Talent Management Software</span>
            </li>
            <li>
              <Link href="https://layerx.co.jp/" className="font-bold hover:underline">LayerX</Link>
              <span className="text-gray-600">, AI Expense Management Software</span>
            </li>
            <li>
              <Link href="https://andpad.jp/" className="font-bold hover:underline">ANDPAD</Link>
              <span className="text-gray-600">, Software for the Construction Industry</span>
            </li>
            <li>
              <Link href="https://www.super-studio.jp/" className="font-bold hover:underline">Super Studio</Link>
              <span className="text-gray-600">, Software for E-Commerce Industry</span>
            </li>
            <li>
              <Link href="https://karakuri.ai/" className="font-bold hover:underline">Karakuri</Link>
              <span className="text-gray-600">, Automation of Customer Support</span>
            </li>
            <li>
              <Link href="https://www.mntsq.co.jp/" className="font-bold hover:underline">MNTSQ</Link>
              <span className="text-gray-600">, Contract Management Software for the Legal Industry</span>
            </li>
            <li>
              <Link href="https://ivry.jp/" className="font-bold hover:underline">IVRy</Link>
              <span className="text-gray-600">, Voice AI Software</span>
            </li>
          </ul>
        </section>

        {/* Contact Section */}
        <section className="pt-12 border-t border-gray-200">
          <Link 
            href="mailto:allstar-global@allstarsaas.com" 
            className="font-bold hover:underline"
          >
            Contact Us
          </Link>
          <p className="mt-4">
            <span className="text-gray-600">© 2025 ALL STAR SAAS FUND</span>
          </p>
          <p className="mt-2">
            <Link href="/privacy-policy" className="text-gray-600 hover:underline">
              Privacy Policy
            </Link>
          </p>
        </section>
      </main>
    </div>
  )
}

