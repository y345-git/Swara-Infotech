"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { Users, Target, Building2, Heart, Eye, Lightbulb, Handshake, Star } from "lucide-react"
import Link from "next/link"

const stats = [
  { number: 500, suffix: "+", label: "Students Trained", icon: Users },
  { number: 50, suffix: "+", label: "Partner Companies", icon: Building2 },
  { number: 95, suffix: "%", label: "Placement Rate", icon: Target },
  { number: 4.8, suffix: "/5", label: "Student Rating", icon: Star },
]

const values = [
  {
    icon: Heart,
    title: "Student-Centric Approach",
    description: "Every decision we make is focused on student success and career growth.",
  },
  {
    icon: Eye,
    title: "Industry Vision",
    description: "We stay ahead of industry trends to prepare students for future opportunities.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Constantly evolving our programs to incorporate the latest technologies and methodologies.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description: "Building strong relationships with industry partners to create real opportunities.",
  },
]

const team = [
  {
    name: "Ms. Tanuja Patole",
    role: "Education",
    experience: "2+ Years in Teaching (I am unsure, provide more info so i can replace)",
    image: "/placeholder.svg?height=300&width=300",
  },
]

const milestones = [
  {
    year: "foundation year",
    title: "Company Founded",
    description: "Started with a vision to bridge the gap between education and industry",
  },
  {
    year: "first batch",
    title: "First Batch Success",
    description: "success Quote",
  },
  {
    year: "Year to be included as per preference",
    title: "Industry Partnerships",
    description: "Established partnerships with 50+ companies across various sectors",
  },
  {
    year: "Year to be included as per preference",
    title: "500+ Students Trained",
    description: "Reached the milestone of training over 500 students with 95% placement rate",
  },
]

export default function AboutPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 animate-gradient"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="hover-lift">
                About Swara Software Solutions
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Bridging the Gap Between Education and Industry
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                At Swara Software Solutions, we understand the challenges faced by diploma computer engineering students
                in transitioning from academic learning to professional work environments. Our mission is to provide
                practical, industry-relevant training that prepares students for successful careers in technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600">
                  <Link href="/contact">Join Our Program</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur-2xl opacity-20"></div>
              <img
                src="/skillgap.jpeg?height=500&width=600"
                alt="Team working together"
                className="relative rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Our Impact in Numbers</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              These numbers represent the success stories of students who trusted us with their career journey
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center hover-lift group border-0 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="pt-6">
                  <div className="relative mb-4">
                    <stat.icon className="h-12 w-12 text-blue-600 mx-auto group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-blue-600 rounded-full blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                    <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                  </div>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Our Core Values</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              These principles guide everything we do and shape our approach to student success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover-lift group border-0 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors duration-300">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Meet Our Team</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our experienced team of industry professionals and educators are dedicated to your success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="text-center hover-lift group border-0 shadow-md hover:shadow-lg transition-all duration-300 w-80 mx-auto"
              >
                <CardContent className="pt-6">
                  <div className="relative mb-4">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-blue-600 rounded-full blur-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-blue-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Our Journey</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From a small startup to a leading internship provider - here's our story
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 to-indigo-600"></div>

              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full border-4 border-white shadow-lg"></div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                    <Card className="hover-lift group border-0 shadow-md hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary" className="text-blue-600 font-semibold">
                            {milestone.year}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-gradient"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
              Ready to Be Part of Our Success Story?
            </h2>
            <p className="max-w-[600px] text-blue-100 text-lg">
              Join the hundreds of students who have transformed their careers with our comprehensive internship
              programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="secondary" className="hover-lift">
                <Link href="/apply">Start Your Journey</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
