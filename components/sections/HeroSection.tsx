"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { ease: "easeOut", duration: 0.5 }
  },
};

export function HeroSection() {
  const roles = ["Frontend Engineer", "AI Automation", "Web Performer"];
  const [roleIndex, setRoleIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section
      id="hero"
      className="min-h-[calc(100dvh-4rem)] flex flex-col justify-center relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/20 via-background to-background" />

      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="flex flex-col items-start gap-4 md:gap-8 max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20">
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            Available for new opportunities
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight">
            Hi, I'm <span className="text-accent">Apeh</span>. <br className="hidden sm:block" />
            I build things for the web.
          </motion.h1>
          
          <motion.h2 variants={itemVariants} className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium h-10 transition-all duration-300">
            {roles[roleIndex]}
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl max-w-[600px] text-muted-foreground">
            I specialize in crafting high-performance, accessible, and stunning digital experiences using modern web technologies.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
            <Button size="lg" asChild className="group transition-colors duration-150">
              <a href="#projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="transition-colors duration-150">
              <a href="#contact">Get in Touch</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
