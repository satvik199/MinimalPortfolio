'use client'

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BiMapPin, BiPhone } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";
import { MdOutlineMail as MdMail } from "react-icons/md";
import { motion } from "framer-motion";
import { LazyMotion, domAnimation } from 'framer-motion';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 sm:py-12 ">
      <LazyMotion features={domAnimation}>
      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
    duration: 0.3,
    ease: 'easeOut' // Smoother animations
  }}
        className="relative z-50 w-full max-w-md md:max-w-lg rounded-2xl border border-white/10 backdrop-blur-xl bg-black/60 p-6 sm:p-8 space-y-8 shadow-xl shadow-purple-500/10"
      >
        {/* Back Button */}
        <div className="flex justify-start">
          <Link href="/">
            <Button
              variant="ghost"
              className="group rounded-full px-4 hover:bg-white/10 transition-colors cursor-pointer text-white/80 hover:text-white"
            >
              <BsArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
              Back
            </Button>
          </Link>
        </div>

        {/* Header */}
        <LazyMotion features={domAnimation}>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 ,duration: 0.3,
    ease: 'easeOut' }}
          className="text-center space-y-3"
        >
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-xs mx-auto">
            Have a project or just want to say hello? I'd love to hear from you!
          </p>
        </motion.div>
        </LazyMotion>
     

        {/* Contact Info Cards */}
        <LazyMotion features={domAnimation}>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2,duration: 0.3,
    ease: 'easeOut'  }}
          className="grid grid-cols-1 gap-4"
        >
          {/* Email */}
          <a 
            href="mailto:satviky5@gmail.com" 
            className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group"
          >
            <div className="p-2 rounded-lg bg-emerald-400/10 group-hover:bg-emerald-400/20 transition-colors">
              <MdMail className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h3 className="font-medium text-white">Email</h3>
              <p className="text-sm text-white/70 group-hover:text-emerald-300 transition-colors">
                Satviky5@gmail.com
              </p>
            </div>
          </a>

          {/* Phone */}
          <a 
            href="tel:+911234567890" 
            className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group"
          >
            <div className="p-2 rounded-lg bg-blue-400/10 group-hover:bg-blue-400/20 transition-colors">
              <BiPhone className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h3 className="font-medium text-white">Phone</h3>
              <p className="text-sm text-white/70 group-hover:text-blue-300 transition-colors">
                +91 12345 67890
              </p>
            </div>
          </a>

          {/* Location */}
          <div className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/5">
            <div className="p-2 rounded-lg bg-purple-400/10">
              <BiMapPin className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <h3 className="font-medium text-white">Location</h3>
              <p className="text-sm text-white/70">Delhi, India</p>
            </div>
          </div>
        </motion.div>
        </LazyMotion>

        {/* Send a Message Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.3,
    ease: 'easeOut'  }}
          className="space-y-5"
        >
          <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">
            Send a Message
          </h2>

          <form className="space-y-4">
            {/* Name */}
            <div>
              <label className="block mb-1.5 text-xs font-medium text-white/80 uppercase tracking-wider">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-white/5 text-white border border-white/10 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-1 focus:ring-emerald-400 transition placeholder:text-white/30"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1.5 text-xs font-medium text-white/80 uppercase tracking-wider">
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-white/5 text-white border border-white/10 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-1 focus:ring-emerald-400 transition placeholder:text-white/30"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-1.5 text-xs font-medium text-white/80 uppercase tracking-wider">
                Message
              </label>
              <textarea
                placeholder="Hello Satvik..."
                rows={4}
                className="w-full bg-white/5 text-white border border-white/10 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-1 focus:ring-emerald-400 transition placeholder:text-white/30 resize-none"
              ></textarea>
            </div>

            {/* Send Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 transition-all text-white font-medium py-2.5 rounded-lg text-sm shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      
      </motion.main>
      </LazyMotion>
      
    </div>
  );
};

export default ContactPage;