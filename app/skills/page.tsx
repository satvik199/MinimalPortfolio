'use client'

import React from 'react'
import Link from 'next/link'
import { BsArrowLeft } from 'react-icons/bs'
import { motion } from 'framer-motion'
import skillsData from '../data/skills.json'

export default function SkillsPage() {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      {/* Main content container */}
      <div className="z-10 px-4 py-12 md:py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-5xl space-y-12 backdrop-blur-xl border-gray-900/50 rounded-xl p-5 sm:p-10 backdrop-blur-xl bg-black/40"
        >
          {/* Header with elegant back button */}
         <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center gap-6">
  <Link 
    href="/" 
    className="group flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
  >
    <BsArrowLeft className="transition-transform group-hover:-translate-x-1" />
    <span>Return Home</span>
  </Link>
  
  <motion.h1
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500 text-transparent bg-clip-text tracking-tight"
  >
    Technical Expertise
  </motion.h1>
</div>

          {/* Skill Categories with refined layout */}
          <div className="space-y-6">
            {skillsData.categories.map((category, idx) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 + 0.3 }}
                className="space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
                  <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
                    {category.name}
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -2 }}
                      className="relative overflow-hidden bg-gradient-to-b from-white/5 to-white/[0.01] border border-white/10 rounded-xl p-4 hover:border-cyan-400/30 transition-all duration-300 group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10 space-y-2">
                        <div className="flex justify-between items-center">
                          <p className="font-medium text-white">{skill.name}</p>
                          <span className="text-xs font-mono text-cyan-400/80">{skill.level}%</span>
                        </div>
                        
                        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.2, ease: 'easeOut', delay: idx * 0.05 + 0.4 }}
                            className={`h-full rounded-full ${
                              skill.level > 80 ? 'bg-emerald-400' :
                              skill.level > 60 ? 'bg-cyan-400' : 'bg-blue-400'
                            }`}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Subtle footer note */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center text-sm text-white/50 mt-8"
          >
            Skills are constantly evolving — currently mastering new technologies
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}
