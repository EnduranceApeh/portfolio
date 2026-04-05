import * as React from "react";
import Link from "next/link";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 md:px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="text-xl font-bold tracking-tighter">
            apeh<span className="text-accent">endurance</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Building digital experiences that matter.
          </p>
        </div>

        <div className="flex gap-4">
          <a
            href="https://github.com/EnduranceApeh"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md hover:bg-muted transition-all duration-200 hover:scale-110 text-muted-foreground hover:text-accent"
            aria-label="GitHub"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/apeh-endurance-aa642018a/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md hover:bg-muted transition-all duration-200 hover:scale-110 text-muted-foreground hover:text-accent"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a
            href="https://x.com/Apeh_Endurance"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md hover:bg-muted transition-all duration-200 hover:scale-110 text-muted-foreground hover:text-accent"
            aria-label="Twitter"
          >
            <TwitterIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 py-6 border-t md:flex md:items-center md:justify-between">
        <p className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {year} Developer Portfolio. All rights reserved.
        </p>
        <div className="flex justify-center mt-4 md:mt-0 gap-4 text-sm text-muted-foreground">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#skills" className="hover:underline">Skills</a>
        </div>
      </div>
    </footer>
  );
}
