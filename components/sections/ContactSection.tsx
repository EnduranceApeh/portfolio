"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, MapPin, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().optional(),
  message: z.string().min(20, "Message must be at least 20 characters"),
  botField: z.string().optional(), // Honeypot
});

type FormValues = z.infer<typeof contactSchema>;

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: FormValues) => {
    // Honey pot check
    if (data.botField) {
      setSubmitStatus("success");
      reset();
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitStatus("success");
      reset();
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <Badge variant="secondary" className="px-3 py-1 text-sm bg-background border">Get in Touch</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Let's work together
          </h2>
          <p className="text-muted-foreground max-w-[600px] text-lg">
            Have a project in mind, or just want to say hi? Fill out the form below or reach me directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          
          {/* Side Panel */}
          <div className="lg:col-span-2 space-y-8">
            <div className="p-6 rounded-2xl bg-card border flex flex-col gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
                <p className="text-muted-foreground">
                  I typically reply within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <a 
                  href="mailto:apehendurance2@gmail.com" 
                  className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="p-3 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <p>apehendurance2@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="p-3 rounded-full bg-accent/10 text-accent">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Location</p>
                    <p>Lagos, Nigeria</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t">
                <p className="text-sm font-medium mb-4">Availability</p>
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20">
                  <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                  Currently taking new clients
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              {/* Honeypot field - invisible to users */}
              <input type="text" {...register("botField")} className="hidden" aria-hidden="true" tabIndex={-1} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name <span className="text-red-500">*</span></label>
                  <input
                    id="name"
                    disabled={isSubmitting}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="John Doe"
                    {...register("name")}
                  />
                  {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email <span className="text-red-500">*</span></label>
                  <input
                    id="email"
                    type="email"
                    disabled={isSubmitting}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="john@example.com"
                    {...register("email")}
                  />
                  {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <input
                  id="subject"
                  disabled={isSubmitting}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="How can I help you?"
                  {...register("subject")}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message <span className="text-red-500">*</span></label>
                <textarea
                  id="message"
                  disabled={isSubmitting}
                  className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y"
                  placeholder="Tell me about your project..."
                  {...register("message")}
                />
                {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto h-11 px-8 transition-colors duration-150">
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>

              {submitStatus === "success" && (
                <div className="p-4 rounded-md border bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20 text-sm font-medium">
                  Thanks for reaching out! I'll get back to you shortly.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 rounded-md border bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20 text-sm font-medium">
                  Something went wrong. Please try again or email me directly.
                </div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
