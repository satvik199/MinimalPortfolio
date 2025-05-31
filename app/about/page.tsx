"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BsArrowLeft } from "react-icons/bs";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-8">
      <main className="relative z-50 w-full max-w-6xl border border-gray-900/50 rounded-xl p-5 sm:p-10 backdrop-blur-xl bg-black/40">
        {/* Back Button */}
        <Link href="/">
          <Button
            variant="ghost"
            className="hover:bg-black hover:text-white rounded-full duration-300 flex items-center gap-2"
          >
            <BsArrowLeft /> Back
          </Button>
        </Link>

        {/* Split Layout */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-6 text-neutral-200"
          >
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500">
              About Me
            </h1>

            <p>
              Hello! I’m Satvik Yadav, a passionate Junior Web Developer with a
              strong foundation in building beautiful, responsive websites and
              web apps.
            </p>

            <p>
              My journey started with curiosity and turned into a professional
              pursuit of code and creativity. I enjoy transforming ideas into
              functional digital experiences.
            </p>

            {/* Education */}
            <div>
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500">
                Education
              </h2>
              <p className="font-medium">
                Bachelor of Technology in Computer Science
              </p>
              <p className="text-neutral-500">
                Manav Rachna International Institute of Research and Technology,
                2018–2021
              </p>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500">
                Professional Experience
              </h2>

              <div className="space-y-2">
                <div>
                  <p className="font-medium">Junior Web Dev</p>
                  <p className="text-neutral-500">Company 1</p>
                </div>

                <div>
                  <p className="font-medium">Junior Web Dev</p>
                  <p className="text-neutral-500">Company 2</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2  , ease:'easeOut'}}
            className="flex-1 flex items-center justify-center"
          >
            <div className="w-full max-w-sm overflow-hidden rounded-2xl shadow-lg border border-gray-700">
              <Image
                src="/your-photo.jpg" // Replace with your image path in /public
                alt="Satvik Yadav"
                width={400}
                height={400}
                className="object-cover w-full h-full"
                priority ={true}
              />
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
