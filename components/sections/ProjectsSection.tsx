"use client";

import * as React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/content/projects";
import { motion, type Variants } from "framer-motion";

const projectVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { ease: "easeOut", duration: 0.5 }
  }
};

export function ProjectsSection() {
  const allTechnologies = Array.from(
    new Set(projects.flatMap((p) => p.technologies))
  ).sort();

  const [activeFilter, setActiveFilter] = React.useState<string>("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.technologies.includes(activeFilter));

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <Badge variant="secondary" className="px-3 py-1 text-sm bg-background border">Case Studies</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-[600px] text-lg">
            A selection of my recent work. Filter by technology to see specific solutions.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <Button
            variant={activeFilter === "All" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveFilter("All")}
            className="rounded-full transition-colors duration-150"
          >
            All
          </Button>
          {allTechnologies.map((tech) => (
            <Button
              key={tech}
              variant={activeFilter === tech ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(tech)}
              className="rounded-full transition-colors duration-150"
            >
              {tech}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                variants={projectVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                <Card className="flex flex-col overflow-hidden h-full group hover:scale-[1.02] hover:shadow-xl transition-all duration-200 ease-out">
                  <div className="relative aspect-video overflow-hidden bg-muted flex items-center justify-center p-4">
                    {/* Thumbnail Image */}
                    <Image 
                      src={project.thumbnail} 
                      alt={project.title} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-105" 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {project.featured && (
                      <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground custom-shadow">
                        Featured
                      </Badge>
                    )}
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="line-clamp-2 min-h-[40px]">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex-1">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="pt-4 flex gap-4 border-t mt-auto">
                    {project.githubUrl && (
                      <Button variant="outline" size="sm" className="flex-1 transition-colors duration-150" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noreferrer">
                          <GithubIcon className="w-4 h-4 mr-2" /> Code
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button size="sm" className="flex-1 transition-colors duration-150" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 px-4 rounded-xl border border-dashed my-8">
            <h3 className="text-xl font-medium text-foreground mb-2">No projects found</h3>
            <p className="text-muted-foreground">
              No projects match the selected filter. Try selecting a different technology.
            </p>
            <Button 
              variant="link" 
              onClick={() => setActiveFilter("All")}
              className="mt-4"
            >
              Clear filters
            </Button>
          </div>
        )}

      </div>
    </section>
  );
}
