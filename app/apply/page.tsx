"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GraduationCap, User, Building, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

interface FormData {
  // Personal Information
  firstName: string
  lastName: string
  email: string
  phone: string
  dateOfBirth: string
  address: string
  city: string
  state: string
  pincode: string

  // Educational Information
  collegeName: string
  course: string
  currentYear: string
  cgpa: string
  passingYear: string

  // Technical Information
  programmingLanguages: string[]
  frameworks: string[]
  databases: string[]
  otherSkills: string

  // Internship Preferences
  preferredDomain: string
  internshipDuration: string
  startDate: string
  internshipMode: string

  // Experience & Projects
  hasExperience: string
  experienceDetails: string
  projectDetails: string

  // Additional Information
  resume: File | null
  coverLetter: string
  howDidYouHear: string
  expectations: string

  // Agreements
  agreeToTerms: boolean
  agreeToDataProcessing: boolean
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dateOfBirth: "",
  address: "",
  city: "",
  state: "",
  pincode: "",
  collegeName: "",
  course: "",
  currentYear: "",
  cgpa: "",
  passingYear: "",
  programmingLanguages: [],
  frameworks: [],
  databases: [],
  otherSkills: "",
  preferredDomain: "",
  internshipDuration: "",
  startDate: "",
  internshipMode: "",
  hasExperience: "",
  experienceDetails: "",
  projectDetails: "",
  resume: null,
  coverLetter: "",
  howDidYouHear: "",
  expectations: "",
  agreeToTerms: false,
  agreeToDataProcessing: false,
}

const programmingLanguageOptions = ["JavaScript", "Python", "Java", "C++", "C#", "PHP", "Ruby", "Go", "Kotlin", "Swift"]

const frameworkOptions = [
  "React",
  "Angular",
  "Vue.js",
  "Node.js",
  "Express.js",
  "Django",
  "Flask",
  "Spring Boot",
  "Laravel",
  "ASP.NET",
]

const databaseOptions = ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "Oracle", "SQL Server", "Redis", "Firebase"]

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <GraduationCap className="w-4 h-4 mr-1" />
            Internship Application
          </Badge>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">Choose Your Application Type</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Select the type of application that best describes your situation
          </p>
        </div>

        {/* Application Type Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Individual Application */}
          <Card className="relative overflow-hidden hover-lift group border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="relative z-10 p-8 text-center">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <User className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors duration-300">
                Individual Application
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Apply as an individual student for our comprehensive internship program with flexible options and
                personalized training.
              </p>
              <ul className="text-sm text-gray-600 mb-8 space-y-2">
                <li className="flex items-center justify-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  Flexible duration (1-12 months)
                </li>
                <li className="flex items-center justify-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  Multiple technology domains
                </li>
                <li className="flex items-center justify-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  Personalized career guidance
                </li>
                <li className="flex items-center justify-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  Training at Sangli facility
                </li>
              </ul>
              <Button
                asChild
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 group/btn"
              >
                <Link href="/apply/individual">
                  Apply as Individual
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Institute Application */}
          <Card className="relative overflow-hidden hover-lift group border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="relative z-10 p-8 text-center">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Building className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-600 transition-colors duration-300">
                Institute Application
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Apply as an educational institute for bulk internship programs with structured curriculum and group
                training.
              </p>
              <ul className="text-sm text-gray-600 mb-8 space-y-2">
                <li className="flex items-center justify-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  Duration options (1-6 months)
                </li>
                <li className="flex items-center justify-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  Specialized tech domains
                </li>
                <li className="flex items-center justify-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  Bulk student enrollment
                </li>
                <li className="flex items-center justify-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  Training at our Sangli facility
                </li>
              </ul>
              <Button
                asChild
                size="lg"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 group/btn"
              >
                <Link href="/apply/institute">
                  Apply as Institute
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <Card className="border-0 shadow-md bg-gradient-to-r from-gray-50 to-blue-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Users className="h-5 w-5 text-blue-600" />
                <h4 className="text-lg font-semibold text-gray-900">Need Help Choosing?</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Not sure which application type is right for you? Contact our team for guidance.
              </p>
              <Button asChild variant="outline" className="hover-lift">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
