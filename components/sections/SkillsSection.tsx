"use client";

import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/content/skills";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03, // 30ms stagger
    },
  },
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 10 }
  },
};

export function SkillsSection() {
  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <Badge variant="secondary" className="px-3 py-1 text-sm">Tech Stack</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Tools & Technologies
          </h2>
          <p className="text-muted-foreground max-w-[600px] text-lg">
            I continuously expand my technical toolkit. Here are the core technologies I work with consistently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category} className="flex flex-col gap-4 p-6 rounded-2xl border bg-card/50">
              <h3 className="text-xl font-semibold tracking-tight">{category}</h3>
              <motion.div 
                className="flex flex-wrap gap-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <motion.div key={skill.name} variants={badgeVariants}>
                      <Badge
                        variant="outline"
                        className="text-sm font-medium hover:bg-accent hover:text-accent-foreground py-1 px-3 cursor-default"
                      >
                        {skill.name}
                      </Badge>
                    </motion.div>
                  ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
