"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  BiBuilding,
  BiChevronRight,
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoYoutube,
} from "react-icons/bi";
import { HiArrowDown } from "react-icons/hi";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.main
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-xl m-3 md:m-8 z-20 space-y-8 border border-gray-900/50 rounded-xl p-5 sm:p-10 backdrop-blur-xl bg-black/40"
      >
        {/* Location & Availability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-between gap-3"
        >
          <div className="flex items-center gap-2 text-gray-400">
            <BiBuilding className="w-5 h-5" />
            <h3>Delhi, India</h3>
          </div>

          <div className="flex items-center gap-2 hover:bg-black/50 duration-300 hover:text-white rounded-full p-2 cursor-pointer">
            <div className="relative flex items-center justify-center h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </div>
            <p className="text-sm">Available For Work</p>
          </div>
        </motion.div>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-xl">Satvik Yadav</h1>
          <h3 className="text-xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500">
            Web Dev
          </h3>
          <p className="tracking-tight mt-3 text-neutral-300">
            Hello, it's Satvik. I am a Junior Web Developer...
          </p>
          <Link
            href="/contact"
            className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500 font-bold opacity-90"
          >
            Contact Me
          </Link>{" "}
          for freelance work anytime.
        </motion.div>

        {/* Navigation Menu */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <h3 className="text-xl font-bold text-emerald-400">Menu</h3>
          <div className="flex flex-col gap-3">
            {[
              { name: "About", href: "/about" },
              { name: "Work", href: "/work" },
              { name: "Skills", href: "/skills" },
              { name: "Contact", href: "/contact" },
            ].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="w-1/2 border bg-black/30 border-gray-700/40 flex group items-center justify-between p-3 cursor-pointer transition-colors duration-200 ease-linear hover:bg-zinc-800/40 rounded-lg"
                >
                  <span>{item.name}</span>
                  <BiChevronRight className="mr-5 text-2xl translate-x-0 group-hover:translate-x-3 text-gray-300 opacity-0 group-hover:opacity-100" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Social Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="flex items-center gap-2 mt-6">
              <h3 className="text-xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-emerald-400 via-sky-400 to-blue-400">
                Check out my socials
              </h3>
              <HiArrowDown className="text-2xl text-sky-400" />
            </div>

            <div className="flex flex-col gap-3 mt-3">
              {[
                { icon: <BiLogoGithub />, label: "GitHub", href: "#" },
                { icon: <BiLogoYoutube />, label: "YouTube", href: "#" },
                { icon: <BiLogoInstagram />, label: "Instagram", href: "#" },
                { icon: <BiLogoLinkedin />, label: "LinkedIn", href: "#" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/30 w-full p-6 text-gray-300 border border-gray-700/40 hover:bg-slate-300/20 hover:text-white transition-colors duration-200 ease-linear flex items-center gap-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 + index * 0.1 }}
                >
                  {social.icon} {social.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.nav>
      </motion.main>
    </div>
  );
}
