"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { FloatingElement } from "@/components/ui/floating-element"
import {
  GraduationCap,
  Users,
  Award,
  Building2,
  ArrowRight,
  Star,
  Code,
  Database,
  Globe,
  Sparkles,
  Target,
} from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 animate-gradient"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <FloatingElement delay={0}>
            <Code className="h-16 w-16 text-blue-600" />
          </FloatingElement>
        </div>
        <div className="absolute top-40 right-20 opacity-20">
          <FloatingElement delay={2}>
            <Database className="h-12 w-12 text-indigo-600" />
          </FloatingElement>
        </div>
        <div className="absolute bottom-20 left-20 opacity-20">
          <FloatingElement delay={4}>
            <Globe className="h-14 w-14 text-purple-600" />
          </FloatingElement>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
            <div
              className={`flex flex-col justify-center space-y-6 transition-all duration-1000 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
            >
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit hover-lift group cursor-pointer">
                  <GraduationCap className="w-4 h-4 mr-1 transition-transform duration-300 group-hover:rotate-12" />
                  <span className="relative">
                    Internship Solutions
                    <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-yellow-500 animate-pulse" />
                  </span>
                </Badge>

                <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none">
                  Launch Your Tech Career with{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient">
                    Professional Internships
                  </span>
                </h1>

                <p className="max-w-[600px] text-gray-600 text-lg md:text-xl leading-relaxed">
                  Swara Software Solutions bridges the gap between academic learning and industry requirements. We
                  provide comprehensive internship solutions for Diploma in Computer Engineering students.
                </p>
              </div>

              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 hover:shadow-lg group text-lg px-8 py-6"
                >
                  <Link href="/apply">
                    Apply for Internship
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="hover-lift border-2 hover:border-blue-600 hover:text-blue-600 text-lg px-8 py-6"
                >
                  <Link href="/services">Learn More</Link>
                </Button>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2 hover-lift cursor-pointer">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400 animate-pulse"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                  <span className="font-medium">4.8/5 Rating</span>
                </div>
                <div className="flex items-center gap-2 hover-lift cursor-pointer">
                  <Users className="h-4 w-4 text-blue-600" />
                  <span>500+ Students Placed</span>
                </div>
              </div>
            </div>

            <div
              className={`flex items-center justify-center transition-all duration-1000 delay-300 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
              }`}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="/swara-logo.jpg?height=500&width=600"
                    alt="Students working on computers"
                    className="relative rounded-lg shadow-2xl transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-blue-50 to-gray-50 animate-gradient"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-8 lg:grid-cols-4 lg:gap-12">
            {[
              { number: 500, suffix: "+", label: "Students Trained", icon: Users },
              { number: 50, suffix: "+", label: "Partner Companies", icon: Building2 },
              { number: 95, suffix: "%", label: "Placement Rate", icon: Target },
              { number: 3, suffix: "+", label: "Years Experience", icon: Award },
            ].map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-4 text-center group hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <stat.icon className="h-12 w-12 text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-blue-600 rounded-full blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-gradient"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-white">
                Ready to Start Your Tech Journey?
              </h2>
              <p className="max-w-[10 00px] text-blue-100 text-lg md:text-xl leading-relaxed">
                Join hundreds of students who have successfully launched their careers through our internship programs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="secondary" className="hover-lift hover:scale-105 text-lg px-8 py-6">
                <Link href="/apply">Apply Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
