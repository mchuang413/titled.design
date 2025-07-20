'use client';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Head from 'next/head';
import Display from './components/OutlineCards';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      delay: 0.2,
    },
  },
};

export default function Home() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start('show');
  }, [controls]);

  return (
    <>
      <Head>
        <title>TITLED | Creative Design Agency</title>
        <meta name="description" content="TITLED is a cutting-edge design agency redefining branding through impactful storytelling." />
      </Head>

      {/* Hero Section */}
      <section className="h-screen relative flex flex-col justify-center items-center bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white overflow-hidden">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="z-10 text-center px-4"
        >
          <h1 className="text-7xl sm:text-9xl md:text-[15rem] font-extrabold tracking-tighter leading-none">
            <span className="text-gray-500 line-through">UN</span>
            <span className="ml-2 text-white">[TITLED]</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl mx-auto">
            Transforming ideas into visual impact.
          </p>
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12"
        >
          <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-white text-gray-900 relative z-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2 variants={fadeUp} initial="hidden" animate={controls} className="text-6xl font-extrabold mb-6">
            <span className="inline-block bg-gradient-to-r from-black to-gray-800 text-transparent bg-clip-text">
              Who We Are
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={controls}
            className="text-xl text-gray-600 mb-20 max-w-3xl mx-auto"
          >
            <span className="font-semibold text-black">TITLED</span> is a boundary-pushing design agency transforming
            <span className="underline decoration-wavy decoration-black"> brand identity </span>
            through visual storytelling.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="h-40 w-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4"></div>
                <h3 className="text-2xl font-bold mb-2">Student {i}</h3>
                <p className="text-sm text-gray-500">
                  Visionary creative and tech-savvy thinker passionate about impact.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Smooth Transition Divider */}
      <div className="h-32 bg-gradient-to-b from-white to-gray-50" />

      {/* Projects Section */}
      <section className="py-32 bg-gray-50 text-gray-900">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-gray-800">Featured Projects</h2>
          <p className="text-lg text-gray-500 mt-4">Explore some of our latest work and initiatives.</p>
        </div>
        <Display />
      </section>

 {/* CTA Section */}
<section className="py-24 bg-white text-gray-900">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-5xl font-bold mb-4">Let’s Collaborate</h2>
    <p className="text-lg text-gray-600 mb-8">
      Have an idea? Let’s bring it to life through bold design and creative direction.
    </p>
    <a
      href="#"
      className="inline-block px-8 py-4 bg-black text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition"
    >
      Get in Touch
    </a>
  </div>
</section>



<footer className="bg-gray-950 text-gray-300 py-16">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
    <div>
      <h3 className="text-2xl font-bold mb-4 text-white">TITLED</h3>
      <p className="text-sm leading-relaxed text-gray-400">
        Redefining design through storytelling and innovation.
        <br /> Based in California.
      </p>
    </div>

    {/* Column 2: Navigation */}
    <div>
      <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
      <ul className="space-y-3 text-sm">
        <li><a href="#" className="hover:text-white transition">Home</a></li>
        <li><a href="#" className="hover:text-white transition">About</a></li>
        <li><a href="#" className="hover:text-white transition">Projects</a></li>
        <li><a href="#" className="hover:text-white transition">Contact</a></li>
      </ul>
    </div>

    <div>
      <h4 className="text-lg font-semibold mb-4 text-white">Stay in the Loop</h4>
      <p className="text-sm text-gray-400 mb-4">
        Get occasional updates about new projects and stories.
      </p>
      <form className="flex flex-col sm:flex-row items-center gap-3">
        <input
          type="email"
          placeholder="Your email"
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-sm rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <button
          type="submit"
          className="px-5 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition"
        >
          Subscribe
        </button>
      </form>
    </div>
  </div>

  <div className="text-center text-xs text-gray-600 mt-12">
    © {new Date().getFullYear()} TITLED. All rights reserved.
  </div>
</footer>

    </>
  );
}
