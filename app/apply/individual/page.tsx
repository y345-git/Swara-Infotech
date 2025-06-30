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
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Send, CheckCircle, GraduationCap, User, Calendar, Code, Upload, FileText, ArrowLeft } from "lucide-react"
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

const programmingLanguageOptions = ["JavaScript", "Python", "PHP", "HTML", "CSS"]

const frameworkOptions = [
  "React",
  "Angular",
  "Vue.js",
  "Node.js",
  "Django",
  "Flask",
]

const databaseOptions = ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "Oracle", "SQL Server"]

export default function IndividualApplicationPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const totalSteps = 5

  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const handleArrayChange = (field: keyof FormData, value: string, checked: boolean) => {
    const currentArray = formData[field] as string[]
    if (checked) {
      handleInputChange(field, [...currentArray, value])
    } else {
      handleInputChange(
        field,
        currentArray.filter((item) => item !== value),
      )
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    handleInputChange("resume", file)
  }

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {}

    switch (step) {
      case 1: // Personal Information
        if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
        if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
        if (!formData.email.trim()) newErrors.email = "Email is required"
        if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
        if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required"
        break

      case 2: // Educational Information
        if (!formData.collegeName.trim()) newErrors.collegeName = "College name is required"
        if (!formData.course) newErrors.course = "Course is required"
        if (!formData.currentYear) newErrors.currentYear = "Current year is required"
        if (!formData.cgpa.trim()) newErrors.cgpa = "CGPA is required"
        break

      case 3: // Technical Information
        if (formData.programmingLanguages.length === 0) {
          newErrors.programmingLanguages = "Select at least one programming language"
        }
        break

      case 4: // Internship Preferences
        if (!formData.preferredDomain) newErrors.preferredDomain = "Preferred domain is required"
        if (!formData.internshipDuration) newErrors.internshipDuration = "Internship duration is required"
        if (!formData.startDate) newErrors.startDate = "Start date is required"
        if (!formData.internshipMode) newErrors.internshipMode = "Internship mode is required"
        break

      case 5: // Final Step
        if (!formData.coverLetter.trim()) newErrors.coverLetter = "Cover letter is required"
        if (!formData.agreeToTerms) newErrors.agreeToTerms = "You must agree to terms and conditions"
        if (!formData.agreeToDataProcessing) newErrors.agreeToDataProcessing = "You must agree to data processing"
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps))
    }
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateStep(currentStep)) {
      return
    }

    setIsSubmitting(true)

    try {
      // TODO: Replace this with actual API call to your backend
      // Example API call structure:
      /*
      const response = await fetch('/api/individual-applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          applicationType: 'individual'
        }),
      })
      
      if (!response.ok) {
        throw new Error('Failed to submit application')
      }
      */

      // Simulate API call for now
      await new Promise((resolve) => setTimeout(resolve, 2000))

      console.log("Individual Application Data to be sent to backend:", {
        ...formData,
        applicationType: "individual",
      })

      setIsSubmitted(true)
    } catch (error) {
      console.error("Error submitting form:", error)
      // Handle error (show error message to user)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <Card className="w-full max-w-md border-0 shadow-lg">
          <CardContent className="text-center py-12">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-green-600 mb-4">Application Submitted Successfully!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for applying for our individual internship program. We'll review your application and get back
              to you within 3-5 business days.
            </p>
            <div className="space-y-3">
              <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-indigo-600">
                <Link href="/">Back to Home</Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link href="/apply">Submit Another Application</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Button asChild variant="ghost" size="sm" className="hover-lift">
              <Link href="/apply">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Selection
              </Link>
            </Button>
          </div>
          <Badge variant="secondary" className="mb-4">
            <User className="w-4 h-4 mr-1" />
            Individual Application
          </Badge>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Individual Internship Application</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Complete this form to apply for our individual internship program with personalized training and flexible
            options.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">
              Step {currentStep} of {totalSteps}
            </span>
            <span className="text-sm font-medium text-gray-600">
              {Math.round((currentStep / totalSteps) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {currentStep === 1 && (
                  <>
                    <User className="h-5 w-5 text-blue-600" /> Personal Information
                  </>
                )}
                {currentStep === 2 && (
                  <>
                    <GraduationCap className="h-5 w-5 text-blue-600" /> Educational Information
                  </>
                )}
                {currentStep === 3 && (
                  <>
                    <Code className="h-5 w-5 text-blue-600" /> Technical Skills
                  </>
                )}
                {currentStep === 4 && (
                  <>
                    <Calendar className="h-5 w-5 text-blue-600" /> Internship Preferences
                  </>
                )}
                {currentStep === 5 && (
                  <>
                    <FileText className="h-5 w-5 text-blue-600" /> Final Details
                  </>
                )}
              </CardTitle>
              <CardDescription>
                {currentStep === 1 && "Please provide your basic personal information"}
                {currentStep === 2 && "Tell us about your educational background"}
                {currentStep === 3 && "What technical skills do you have?"}
                {currentStep === 4 && "What kind of internship are you looking for?"}
                {currentStep === 5 && "Final details and agreements"}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        placeholder="Enter your first name"
                        className={errors.firstName ? "border-red-500" : ""}
                      />
                      {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        placeholder="Enter your last name"
                        className={errors.lastName ? "border-red-500" : ""}
                      />
                      {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="Enter your email"
                        className={errors.email ? "border-red-500" : ""}
                      />
                      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="Enter your phone number"
                        className={errors.phone ? "border-red-500" : ""}
                      />
                      {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                      className={errors.dateOfBirth ? "border-red-500" : ""}
                    />
                    {errors.dateOfBirth && <p className="text-red-500 text-sm">{errors.dateOfBirth}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Textarea
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      placeholder="Enter your full address"
                      rows={3}
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        placeholder="City"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Input
                        id="state"
                        value={formData.state}
                        onChange={(e) => handleInputChange("state", e.target.value)}
                        placeholder="State"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pincode">Pincode</Label>
                      <Input
                        id="pincode"
                        value={formData.pincode}
                        onChange={(e) => handleInputChange("pincode", e.target.value)}
                        placeholder="Pincode"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Educational Information */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="collegeName">College/Institute Name *</Label>
                    <Input
                      id="collegeName"
                      value={formData.collegeName}
                      onChange={(e) => handleInputChange("collegeName", e.target.value)}
                      placeholder="Enter your college name"
                      className={errors.collegeName ? "border-red-500" : ""}
                    />
                    {errors.collegeName && <p className="text-red-500 text-sm">{errors.collegeName}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="course">Course *</Label>
                    <Select value={formData.course} onValueChange={(value) => handleInputChange("course", value)}>
                      <SelectTrigger className={errors.course ? "border-red-500" : ""}>
                        <SelectValue placeholder="Select your course" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="diploma-computer">Diploma in Computer Engineering</SelectItem>
                        <SelectItem value="diploma-it">Diploma in Information Technology</SelectItem>
                        <SelectItem value="diploma-electronics">Diploma in Electronics Engineering</SelectItem>
                        <SelectItem value="btech-computer">B.Tech Computer Engineering</SelectItem>
                        <SelectItem value="btech-it">B.Tech Information Technology</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.course && <p className="text-red-500 text-sm">{errors.course}</p>}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentYear">Current Year *</Label>
                      <Select
                        value={formData.currentYear}
                        onValueChange={(value) => handleInputChange("currentYear", value)}
                      >
                        <SelectTrigger className={errors.currentYear ? "border-red-500" : ""}>
                          <SelectValue placeholder="Select current year" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1st">1st Year</SelectItem>
                          <SelectItem value="2nd">2nd Year</SelectItem>
                          <SelectItem value="3rd">3rd Year</SelectItem>
                          <SelectItem value="final">Final Year</SelectItem>
                          <SelectItem value="completed">Completed</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.currentYear && <p className="text-red-500 text-sm">{errors.currentYear}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cgpa">CGPA/Percentage *</Label>
                      <Input
                        id="cgpa"
                        value={formData.cgpa}
                        onChange={(e) => handleInputChange("cgpa", e.target.value)}
                        placeholder="Enter your CGPA or percentage"
                        className={errors.cgpa ? "border-red-500" : ""}
                      />
                      {errors.cgpa && <p className="text-red-500 text-sm">{errors.cgpa}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="passingYear">Expected/Actual Passing Year</Label>
                    <Input
                      id="passingYear"
                      value={formData.passingYear}
                      onChange={(e) => handleInputChange("passingYear", e.target.value)}
                      placeholder="e.g., 2024"
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Technical Skills */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="space-y-3">
                    <Label>Programming Languages *</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {programmingLanguageOptions.map((lang) => (
                        <div key={lang} className="flex items-center space-x-2">
                          <Checkbox
                            id={`lang-${lang}`}
                            checked={formData.programmingLanguages.includes(lang)}
                            onCheckedChange={(checked) =>
                              handleArrayChange("programmingLanguages", lang, checked as boolean)
                            }
                          />
                          <Label htmlFor={`lang-${lang}`} className="text-sm">
                            {lang}
                          </Label>
                        </div>
                      ))}
                    </div>
                    {errors.programmingLanguages && (
                      <p className="text-red-500 text-sm">{errors.programmingLanguages}</p>
                    )}
                  </div>

                  <div className="space-y-3">
                    <Label>Frameworks & Libraries</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {frameworkOptions.map((framework) => (
                        <div key={framework} className="flex items-center space-x-2">
                          <Checkbox
                            id={`framework-${framework}`}
                            checked={formData.frameworks.includes(framework)}
                            onCheckedChange={(checked) =>
                              handleArrayChange("frameworks", framework, checked as boolean)
                            }
                          />
                          <Label htmlFor={`framework-${framework}`} className="text-sm">
                            {framework}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label>Databases</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {databaseOptions.map((db) => (
                        <div key={db} className="flex items-center space-x-2">
                          <Checkbox
                            id={`db-${db}`}
                            checked={formData.databases.includes(db)}
                            onCheckedChange={(checked) => handleArrayChange("databases", db, checked as boolean)}
                          />
                          <Label htmlFor={`db-${db}`} className="text-sm">
                            {db}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="otherSkills">Other Technical Skills</Label>
                    <Textarea
                      id="otherSkills"
                      value={formData.otherSkills}
                      onChange={(e) => handleInputChange("otherSkills", e.target.value)}
                      placeholder="Mention any other technical skills, tools, or technologies you know"
                      rows={3}
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Internship Preferences */}
              {currentStep === 4 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="preferredDomain">Preferred Internship Domain *</Label>
                    <Select
                      value={formData.preferredDomain}
                      onValueChange={(value) => handleInputChange("preferredDomain", value)}
                    >
                      <SelectTrigger className={errors.preferredDomain ? "border-red-500" : ""}>
                        <SelectValue placeholder="Select preferred domain" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web-development">Web Development</SelectItem>
                        <SelectItem value="data-science">Data Science & Analytics</SelectItem>
                        <SelectItem value="ai-ml">AI & Machine Learning</SelectItem>
                        <SelectItem value="cloud-computing">Cloud Computing</SelectItem>
                        <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.preferredDomain && <p className="text-red-500 text-sm">{errors.preferredDomain}</p>}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="internshipDuration">Preferred Duration *</Label>
                      <Select
                        value={formData.internshipDuration}
                        onValueChange={(value) => handleInputChange("internshipDuration", value)}
                      >
                        <SelectTrigger className={errors.internshipDuration ? "border-red-500" : ""}>
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-month">1 Month</SelectItem>
                          <SelectItem value="2-months">2 Months</SelectItem>
                          <SelectItem value="3-months">3 Months</SelectItem>
                          <SelectItem value="4-months">4 Months</SelectItem>
                          <SelectItem value="6-months">6 Months</SelectItem>
                          <SelectItem value="12-months">12 Months</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.internshipDuration && <p className="text-red-500 text-sm">{errors.internshipDuration}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="startDate">Preferred Start Date *</Label>
                      <Input
                        id="startDate"
                        type="date"
                        value={formData.startDate}
                        onChange={(e) => handleInputChange("startDate", e.target.value)}
                        className={errors.startDate ? "border-red-500" : ""}
                      />
                      {errors.startDate && <p className="text-red-500 text-sm">{errors.startDate}</p>}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label>Internship Mode *</Label>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-3">
                      <p className="text-sm text-blue-800 font-medium">
                        📍 Note: All internships are conducted at our Swara Infotech office in Sangli, Maharashtra.
                      </p>
                    </div>
                    <RadioGroup
                      value={formData.internshipMode}
                      onValueChange={(value) => handleInputChange("internshipMode", value)}
                      className={errors.internshipMode ? "border border-red-500 rounded p-2" : ""}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="onsite" id="onsite" />
                        <Label htmlFor="onsite">On-site at Swara Infotech (Sangli)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="hybrid" id="hybrid" />
                        <Label htmlFor="hybrid">Hybrid (Partial remote work allowed)</Label>
                      </div>
                    </RadioGroup>
                    {errors.internshipMode && <p className="text-red-500 text-sm">{errors.internshipMode}</p>}
                  </div>

                  <div className="space-y-3">
                    <Label>Do you have any prior work experience?</Label>
                    <RadioGroup
                      value={formData.hasExperience}
                      onValueChange={(value) => handleInputChange("hasExperience", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="exp-yes" />
                        <Label htmlFor="exp-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="exp-no" />
                        <Label htmlFor="exp-no">No</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {formData.hasExperience === "yes" && (
                    <div className="space-y-2">
                      <Label htmlFor="experienceDetails">Experience Details</Label>
                      <Textarea
                        id="experienceDetails"
                        value={formData.experienceDetails}
                        onChange={(e) => handleInputChange("experienceDetails", e.target.value)}
                        placeholder="Describe your work experience, internships, or relevant projects"
                        rows={3}
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="projectDetails">Academic/Personal Projects</Label>
                    <Textarea
                      id="projectDetails"
                      value={formData.projectDetails}
                      onChange={(e) => handleInputChange("projectDetails", e.target.value)}
                      placeholder="Describe your significant academic or personal projects"
                      rows={3}
                    />
                  </div>
                </div>
              )}

              {/* Step 5: Final Details */}
              {currentStep === 5 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="resume">Resume Upload</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <Input
                        id="resume"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <Label htmlFor="resume" className="cursor-pointer">
                        <span className="text-blue-600 hover:text-blue-700">Click to upload</span> or drag and drop
                        <br />
                        <span className="text-sm text-gray-500">PDF, DOC, DOCX (max 5MB)</span>
                      </Label>
                      {formData.resume && (
                        <p className="text-sm text-green-600 mt-2">Selected: {formData.resume.name}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="coverLetter">Cover Letter / Why do you want to join us? *</Label>
                    <Textarea
                      id="coverLetter"
                      value={formData.coverLetter}
                      onChange={(e) => handleInputChange("coverLetter", e.target.value)}
                      placeholder="Tell us why you want to join our internship program and what you hope to achieve"
                      rows={4}
                      className={errors.coverLetter ? "border-red-500" : ""}
                    />
                    {errors.coverLetter && <p className="text-red-500 text-sm">{errors.coverLetter}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="howDidYouHear">How did you hear about us?</Label>
                    <Select
                      value={formData.howDidYouHear}
                      onValueChange={(value) => handleInputChange("howDidYouHear", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="website">Company Website</SelectItem>
                        <SelectItem value="social-media">Social Media</SelectItem>
                        <SelectItem value="college">College/Institute</SelectItem>
                        <SelectItem value="friend">Friend/Referral</SelectItem>
                        <SelectItem value="job-portal">Job Portal</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="expectations">What are your expectations from this internship?</Label>
                    <Textarea
                      id="expectations"
                      value={formData.expectations}
                      onChange={(e) => handleInputChange("expectations", e.target.value)}
                      placeholder="Share your expectations and goals for this internship"
                      rows={3}
                    />
                  </div>

                  <div className="space-y-4 pt-4 border-t">
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked)}
                        className={errors.agreeToTerms ? "border-red-500" : ""}
                      />
                      <Label htmlFor="agreeToTerms" className="text-sm leading-relaxed">
                        I agree to the{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                          Terms and Conditions
                        </a>{" "}
                        and understand that this internship may be unpaid or have a stipend as per company policy.
                      </Label>
                    </div>
                    {errors.agreeToTerms && <p className="text-red-500 text-sm ml-6">{errors.agreeToTerms}</p>}

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="agreeToDataProcessing"
                        checked={formData.agreeToDataProcessing}
                        onCheckedChange={(checked) => handleInputChange("agreeToDataProcessing", checked)}
                        className={errors.agreeToDataProcessing ? "border-red-500" : ""}
                      />
                      <Label htmlFor="agreeToDataProcessing" className="text-sm leading-relaxed">
                        I consent to the processing of my personal data for the purpose of this internship application
                        and future communications.
                      </Label>
                    </div>
                    {errors.agreeToDataProcessing && (
                      <p className="text-red-500 text-sm ml-6">{errors.agreeToDataProcessing}</p>
                    )}
                  </div>
                </div>
              )}
            </CardContent>

            {/* Navigation Buttons */}
            <div className="flex justify-between p-6 border-t">
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="flex items-center gap-2"
              >
                Previous
              </Button>

              {currentStep < totalSteps ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 flex items-center gap-2"
                >
                  Next
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>
              )}
            </div>
          </Card>
        </form>
      </div>
    </div>
  )
}
