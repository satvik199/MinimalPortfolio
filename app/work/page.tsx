"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BsArrowLeft } from "react-icons/bs";
import { motion } from "framer-motion";
import { BiLogoGithub } from "react-icons/bi";
import { CgExternal } from "react-icons/cg";
import projectsData from "../data/projects.json";
import { LazyMotion, domAnimation } from 'framer-motion';



export default function WorkPage() {

const {projects} = projectsData;

  return (
    <div className="min-h-screen px-4 py-16 sm:py-20 flex justify-center items-start">
      <main className="w-full max-w-6xl space-y-12 z-50">
        {/* Header */}
        <div className="flex justify-between items-center">
          <LazyMotion features={domAnimation}>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-medium text-white"
          >
            Selected Projects
          </motion.h1>
</LazyMotion>
          <Link href="/">
            <Button
              variant="ghost"
              className="group rounded-full px-4 hover:bg-white/10 transition-colors"
            >
              <BsArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Back
            </Button>
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map(( project , index) => (
            <LazyMotion key={project.id} features={domAnimation}>
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 , duration:0.3 , ease:'easeOut' }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.01] hover:border-white/20 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Project Image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  
                />
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col gap-4">
                <div>
                  <h2 className="text-xl font-medium text-white">{project.title}</h2>
                  <p className="text-white/70 mt-1 text-sm">{project.description}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-white/5 text-white/80 px-3 py-1 rounded-full backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-2">
                  <a
                    href={""}
                    className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                  >
                    <div className="p-2 rounded-full bg-white/5 group-hover:bg-emerald-400/10 transition-colors">
                      <BiLogoGithub className="text-lg" />
                    </div>
                    <span>Code</span>
                  </a>
                  <a
                    href={""}
                    className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                  >
                    <div className="p-2 rounded-full bg-white/5 group-hover:bg-blue-400/10 transition-colors">
                      <CgExternal className="text-lg" />
                    </div>
                    <span>Live</span>
                  </a>
                </div>
              </div>
            </motion.div>
            </LazyMotion>
            
          ))}
        </div>
      </main>
    </div>
  );
}