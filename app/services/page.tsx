"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code, Building2, Award, CheckCircle, Users, Laptop, Shield, Zap } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Code,
    title: "Technical Training",
    description: "Comprehensive hands-on training in cutting-edge technologies",
    features: [
      "Full-stack Web Development",
      "Mobile App Development",
      "Database Management",
      "Cloud Computing",
      "API Development",
    ],
    color: "blue",
    technologies: ["React", "Node.js", "Python", "Java", "MongoDB"],
    image: "technical-training.avif",
  },
  {
    icon: Building2,
    title: "Industry Exposure",
    description: "Real-world project experience at our professional facility in Sangli",
    features: [
      "Live Project Work at Sangli facility",
      "Industry Mentorship",
      "Professional Environment",
      "Team Collaboration",
      "Agile Methodologies",
      "Code Reviews",
    ],
    color: "indigo",
    technologies: ["Git", "Slack"],
    image: "industry-exposure.jpg"
  },
  {
    icon: Award,
    title: "Career Support",
    description: "End-to-end career guidance and placement assistance",
    features: [
      "Resume Building",
      "Interview Preparation",
      "Portfolio Development",
      "Job Placement",
      "Salary Negotiation",
      "Career Counseling",
    ],
    color: "purple",
    technologies: ["LinkedIn", "GitHub", "Portfolio", "Mock Interviews", "HR Connect", "Networking"],
    image: "career-support.jpg"
  },
]

const additionalServices = [
  {
    icon: Users,
    title: "Peer Learning Groups",
    description: "Collaborative learning environment with fellow students",
  },
  {
    icon: Shield,
    title: "Certification Programs",
    description: "Industry-recognized certifications upon completion",
  },
  {
    icon: Zap,
    title: "Fast-Track Programs",
    description: "Intensive courses for quick skill development",
  },
]

export default function ServicesPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 animate-gradient"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge variant="secondary" className="hover-lift">
              <Zap className="w-4 h-4 mr-1 text-yellow-500" />
              Our Services
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Comprehensive Internship Solutions
            </h1>
            <p className="max-w-[900px] text-gray-600 text-lg md:text-xl leading-relaxed">
              We offer end-to-end internship programs designed specifically for diploma computer engineering students
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:gap-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className="relative overflow-hidden hover-lift group border-0 shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`h-16 w-16 rounded-xl bg-gradient-to-br from-${service.color}-500 to-${service.color}-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold group-hover:text-blue-600 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 group/item">
                          <CheckCircle className="h-4 w-4 text-green-500 group-hover/item:scale-110 transition-transform duration-200" />
                          <span className="text-sm group-hover/item:text-gray-900 transition-colors duration-200">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Button
                      asChild
                      className={`bg-gradient-to-r from-${service.color}-600 to-${service.color}-700 hover:from-${service.color}-700 hover:to-${service.color}-800`}
                    >
                      <Link href="/contact">Learn More</Link>
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900">Technologies & Tools</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {service.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="justify-center hover-lift cursor-pointer">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="relative mt-6">
                      <img
                        src={service.image}
                        alt={`${service.title} illustration`}
                        className="rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300"
                        style={{ height: '400px', width: '800px' }}
                      />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Additional Services */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Additional Benefits</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Beyond our core services, we provide additional support to ensure your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card
                key={index}
                className="text-center hover-lift group border-0 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
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
              Ready to Transform Your Career?
            </h2>
            <p className="max-w-[600px] text-blue-100 text-lg">
              Join our comprehensive internship program and gain the skills you need to succeed in the tech industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="secondary" className="hover-lift">
                <Link href="/apply">Apply Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
