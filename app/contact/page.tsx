"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, PhoneCall, MapPin, Clock, Send, CheckCircle, MessageSquare, Calendar } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us your queries anytime",
    contact: "info@swarasoftware.com",
    color: "blue",
  },
  {
    icon: PhoneCall,
    title: "Call Us",
    description: "Speak with our team directly",
    contact: "+91 84211 60915",
    color: "green",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Come to our office",
    contact: "Sangli, Maharashtra, India",
    color: "purple",
  },
  {
    icon: Clock,
    title: "Office Hours",
    description: "We're available",
    contact: "Mon-Fri: 9AM-6PM",
    color: "orange",
  },
]

const faqs = [
  {
    question: "Where are the internship programs conducted?",
    answer:
      "All internship programs are conducted at our Swara Infotech facility in Sangli, Maharashtra. We provide a professional work environment with modern infrastructure and industry-standard tools.",
  },
  {
    question: "What is the duration of the internship program?",
    answer:
      "We offer flexible duration options ranging from 1 month to 12 months for individual applications, and 1 to 6 months for institute programs, depending on the specialization and depth of training required.",
  },
  {
    question: "Do you provide accommodation assistance for outstation students?",
    answer:
      "Yes, we assist outstation students in finding suitable accommodation near our facility. We have partnerships with local hostels and PG accommodations to ensure comfortable stay for our interns.",
  },
  {
    question: "What are the eligibility criteria?",
    answer:
      "Students pursuing or completed Diploma in Computer Engineering are eligible. Basic programming knowledge is preferred but not mandatory.",
  },
  {
    question: "What facilities are available at your Sangli location?",
    answer:
      "Our facility includes modern computer labs, high-speed internet, and a comfortable learning environment designed for practical, hands-on training.",
  },
  {
    question: "Where is this located?",
    answer:
      "This is located near the railway flyover bridge on the Sangli-Tasgaon road."
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", phone: "", course: "", message: "" })
    }, 3000)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 animate-gradient"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge variant="secondary" className="hover-lift">
              <MessageSquare className="w-4 h-4 mr-1" />
              Contact Us
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="max-w-[600px] text-gray-600 text-lg md:text-xl leading-relaxed">
              Have questions about our internship programs? We're here to help you get started on your tech journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="text-center hover-lift group border-0 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div
                    className={`h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 ${
                      info.color === "blue"
                        ? "bg-gradient-to-br from-blue-500 to-blue-600"
                        : info.color === "green"
                        ? "bg-gradient-to-br from-green-500 to-green-600"
                        : info.color === "purple"
                        ? "bg-gradient-to-br from-purple-500 to-purple-600"
                        : info.color === "orange"
                        ? "bg-gradient-to-br from-orange-500 to-orange-600"
                        : "bg-gradient-to-br from-gray-500 to-gray-600"
                    }`}
                  >
                    <info.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors duration-300">
                    {info.title}
                  </CardTitle>
                  <CardDescription>{info.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {info.contact}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-green-600 mb-2">Message Sent Successfully!</h3>
                    <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          placeholder="Enter your full name"
                          required
                          className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          placeholder="Enter your email"
                          required
                          className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          placeholder="Enter your phone number"
                          className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="course">Interested Course</Label>
                        <Select value={formData.course} onValueChange={(value) => handleChange("course", value)}>
                          <SelectTrigger className="transition-all duration-200 focus:ring-2 focus:ring-blue-500">
                            <SelectValue placeholder="Select a course" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="full-stack">Full Stack Development</SelectItem>
                            <SelectItem value="mobile-app">Mobile App Development</SelectItem>
                            <SelectItem value="data-science">Data Science</SelectItem>
                            <SelectItem value="cloud-computing">Cloud Computing</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        placeholder="Tell us about your goals and how we can help you..."
                        rows={4}
                        required
                        className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 group"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Map and Additional Info */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Visit Our Office</CardTitle>
                  <CardDescription>Come visit us for a personal consultation about our programs.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gray-100 rounded-lg mb-4 overflow-hidden">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3455.151119392663!2d74.5810716462965!3d16.872615859967286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDUyJzIyLjkiTiA3NMKwMzQnNTEuMCJF!5e1!3m2!1sen!2sin!4v1751101147030!5m2!1sen!2sin" 
                      width="100%" 
                      height="100%" 
                      style={{border:0}} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-blue-600" />
                      <span className="text-sm">Sangli-Tasgaon Road, Near Railway Flyover, Sangli - 416416</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-blue-600" />
                      <span className="text-sm">Monday - Friday: 8:00 AM - 8:00 PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    Schedule a Call
                  </CardTitle>
                  <CardDescription>Book a free consultation call with our career counselors.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full hover-lift border-2 hover:border-blue-600 hover:text-blue-600"
                  >
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Book Free Consultation
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Find answers to common questions about our internship programs
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Still Have Questions?</h2>
            <p className="max-w-[600px] text-blue-100 text-lg">
              Our team is here to help you make the right decision for your career. Get in touch today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="secondary" className="hover-lift">
                <a href="tel:+91 84211 60915">Call Now</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
