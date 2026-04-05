"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState<string>("");

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll Spy logic
      const sections = navItems.map((item) => document.querySelector(item.href));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let current = "";
      sections.forEach((section) => {
        if (section instanceof HTMLElement) {
          if (section.offsetTop <= scrollPosition) {
            current = section.getAttribute("id") || "";
          }
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border shadow-sm"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter">
          apeh<span className="text-accent">endurance</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-foreground",
                  isActive ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {item.name}
                <span 
                  className={cn(
                    "absolute -bottom-1 left-0 w-full h-[2px] bg-accent transition-transform duration-300 ease-out origin-left",
                    isActive ? "scale-x-100" : "scale-x-0 hover:scale-x-100"
                  )} 
                />
              </Link>
            )
          })}
          <ThemeToggle />
          <Button asChild variant="default" className="transition-colors duration-150">
            <a href="/Apeh_Endurance_Resume.docx.pdf" download>
              Download CV
            </a>
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur-md">
          <nav className="container flex flex-col py-4 px-4 gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium p-2 rounded-md hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="w-full mt-2 transition-colors duration-150">
              <a href="/Apeh_Endurance_Resume.docx.pdf" download>
                Download CV
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
