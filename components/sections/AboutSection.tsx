"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Image from "next/image";
import myPhoto from "@/images/my_photo.png";

export function AboutSection() {
  const stats = [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Shipped", value: "10+" },
    { label: "Client Satisfaction", value: "99%" },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          {/* Photo Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 w-full max-w-md mx-auto relative group"
          >
            <div className="absolute inset-0 bg-accent rounded-3xl translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
            {/* Profile image */}
            <div className="aspect-square bg-card border rounded-3xl overflow-hidden relative">
              <Image 
                src={myPhoto} 
                alt="Profile Photo" 
                fill 
                className="object-cover" 
                sizes="(max-width: 768px) 100vw, 400px" 
                priority
              />
            </div>
          </motion.div>
          
          {/* Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 space-y-6"
          >
            <Badge variant="secondary" className="px-3 py-1 text-sm bg-background border">About Me</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Passionate about creating usable digital products
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                My journey in web development began over 5 years ago when I decided to try editing custom Tumblr themes. Since then, I've had the privilege of building software for start-ups, digital agencies, and large corporations.
              </p>
              <p>
                My current focus is building accessible, inclusive products and digital experiences for a variety of clients. I thrive in environments where I can leverage my expertise in frontend performance and modern DX tools.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-6 border-t">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col space-y-1">
                  <span className="text-3xl font-bold tracking-tighter text-foreground">
                    {stat.value}
                  </span>
                  <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
