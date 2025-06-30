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
import { Send, CheckCircle, Building, Code, FileText, ArrowLeft, Users } from "lucide-react"
import Link from "next/link"

interface InstituteFormData {
  // Institute Information
  instituteName: string
  instituteType: string
  establishedYear: string
  affiliatedUniversity: string
  principalName: string
  contactPersonName: string
  contactPersonDesignation: string
  instituteEmail: string
  contactPersonEmail: string
  institutePhone: string
  contactPersonPhone: string
  instituteAddress: string
  city: string
  state: string
  pincode: string
  website: string

  // Program Details
  totalStudents: string
  preferredDomains: string[]
  internshipDuration: string
  preferredStartDate: string
  batchSize: string
  studentYear: string
  courseName: string

  // Infrastructure & Requirements
  hasComputerLab: string
  internetConnectivity: string
  projectorAvailable: string
  specialRequirements: string

  // Previous Experience
  hasPreviousInternships: string
  previousInternshipDetails: string
  expectations: string
  additionalInfo: string

  // Agreements
  agreeToTerms: boolean
  agreeToDataProcessing: boolean
}

const initialFormData: InstituteFormData = {
  instituteName: "",
  instituteType: "",
  establishedYear: "",
  affiliatedUniversity: "",
  principalName: "",
  contactPersonName: "",
  contactPersonDesignation: "",
  instituteEmail: "",
  contactPersonEmail: "",
  institutePhone: "",
  contactPersonPhone: "",
  instituteAddress: "",
  city: "",
  state: "",
  pincode: "",
  website: "",
  totalStudents: "",
  preferredDomains: [],
  internshipDuration: "",
  preferredStartDate: "",
  batchSize: "",
  studentYear: "",
  courseName: "",
  hasComputerLab: "",
  internetConnectivity: "",
  projectorAvailable: "",
  specialRequirements: "",
  hasPreviousInternships: "",
  previousInternshipDetails: "",
  expectations: "",
  additionalInfo: "",
  agreeToTerms: false,
  agreeToDataProcessing: false,
}

// Predefined domains for institute applications
const instituteDomains = [
  "Machine Learning (ML)",
  "Python Programming",
  "HTML & CSS",
  "JavaScript",
  "Database Management",
  "Web Hosting & Deployment",
]

export default function InstituteApplicationPage() {
  const [formData, setFormData] = useState<InstituteFormData>(initialFormData)
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const totalSteps = 4

  const handleInputChange = (field: keyof InstituteFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const handleArrayChange = (field: keyof InstituteFormData, value: string, checked: boolean) => {
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

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {}

    switch (step) {
      case 1: // Institute Information
        if (!formData.instituteName.trim()) newErrors.instituteName = "Institute name is required"
        if (!formData.instituteType) newErrors.instituteType = "Institute type is required"
        if (!formData.principalName.trim()) newErrors.principalName = "Principal name is required"
        if (!formData.contactPersonName.trim()) newErrors.contactPersonName = "Contact person name is required"
        if (!formData.instituteEmail.trim()) newErrors.instituteEmail = "Institute email is required"
        if (!formData.institutePhone.trim()) newErrors.institutePhone = "Institute phone is required"
        break

      case 2: // Program Details
        if (!formData.totalStudents) newErrors.totalStudents = "Total students is required"
        if (formData.preferredDomains.length === 0) {
          newErrors.preferredDomains = "Select at least one domain"
        }
        if (!formData.internshipDuration) newErrors.internshipDuration = "Duration is required"
        if (!formData.preferredStartDate) newErrors.preferredStartDate = "Start date is required"
        if (!formData.batchSize) newErrors.batchSize = "Batch size is required"
        break

      case 3: // Infrastructure
        if (!formData.hasComputerLab) newErrors.hasComputerLab = "Computer lab availability is required"
        if (!formData.internetConnectivity) newErrors.internetConnectivity = "Internet connectivity info is required"
        break

      case 4: // Final Details
        if (!formData.expectations.trim()) newErrors.expectations = "Expectations are required"
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
      const response = await fetch('/api/institute-applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          applicationType: 'institute'
        }),
      })
      
      if (!response.ok) {
        throw new Error('Failed to submit application')
      }
      */

      // Simulate API call for now
      await new Promise((resolve) => setTimeout(resolve, 2000))

      console.log("Institute Application Data to be sent to backend:", {
        ...formData,
        applicationType: "institute",
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <Card className="w-full max-w-md border-0 shadow-lg">
          <CardContent className="text-center py-12">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-green-600 mb-4">Application Submitted Successfully!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for applying for our institute internship program. Our team will review your application and
              contact you within 2-3 business days to discuss the program details.
            </p>
            <div className="space-y-3">
              <Button asChild className="w-full bg-gradient-to-r from-purple-600 to-pink-600">
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 py-12">
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
            <Building className="w-4 h-4 mr-1" />
            Institute Application
          </Badge>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Institute Internship Application</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Apply for bulk internship programs for your institute with structured curriculum and specialized training
            domains.
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
              className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-300"
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
                    <Building className="h-5 w-5 text-purple-600" /> Institute Information
                  </>
                )}
                {currentStep === 2 && (
                  <>
                    <Users className="h-5 w-5 text-purple-600" /> Program Details
                  </>
                )}
                {currentStep === 3 && (
                  <>
                    <Code className="h-5 w-5 text-purple-600" /> Infrastructure & Requirements
                  </>
                )}
                {currentStep === 4 && (
                  <>
                    <FileText className="h-5 w-5 text-purple-600" /> Final Details
                  </>
                )}
              </CardTitle>
              <CardDescription>
                {currentStep === 1 && "Please provide your institute's basic information"}
                {currentStep === 2 && "Tell us about your internship program requirements"}
                {currentStep === 3 && "Information about your institute's infrastructure"}
                {currentStep === 4 && "Final details and agreements"}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Step 1: Institute Information */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="instituteName">Institute Name *</Label>
                    <Input
                      id="instituteName"
                      value={formData.instituteName}
                      onChange={(e) => handleInputChange("instituteName", e.target.value)}
                      placeholder="Enter your institute name"
                      className={errors.instituteName ? "border-red-500" : ""}
                    />
                    {errors.instituteName && <p className="text-red-500 text-sm">{errors.instituteName}</p>}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="instituteType">Institute Type *</Label>
                      <Select
                        value={formData.instituteType}
                        onValueChange={(value) => handleInputChange("instituteType", value)}
                      >
                        <SelectTrigger className={errors.instituteType ? "border-red-500" : ""}>
                          <SelectValue placeholder="Select institute type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="government-polytechnic">Government Polytechnic</SelectItem>
                          <SelectItem value="private-polytechnic">Private Polytechnic</SelectItem>
                          <SelectItem value="engineering-college">Engineering College</SelectItem>
                          <SelectItem value="technical-institute">Technical Institute</SelectItem>
                          <SelectItem value="university">University</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.instituteType && <p className="text-red-500 text-sm">{errors.instituteType}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="establishedYear">Established Year</Label>
                      <Input
                        id="establishedYear"
                        value={formData.establishedYear}
                        onChange={(e) => handleInputChange("establishedYear", e.target.value)}
                        placeholder="e.g., 1995"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="affiliatedUniversity">Affiliated University/Board</Label>
                    <Input
                      id="affiliatedUniversity"
                      value={formData.affiliatedUniversity}
                      onChange={(e) => handleInputChange("affiliatedUniversity", e.target.value)}
                      placeholder="Enter affiliated university or board name"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="principalName">Principal Name *</Label>
                      <Input
                        id="principalName"
                        value={formData.principalName}
                        onChange={(e) => handleInputChange("principalName", e.target.value)}
                        placeholder="Enter principal's name"
                        className={errors.principalName ? "border-red-500" : ""}
                      />
                      {errors.principalName && <p className="text-red-500 text-sm">{errors.principalName}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactPersonName">Contact Person Name *</Label>
                      <Input
                        id="contactPersonName"
                        value={formData.contactPersonName}
                        onChange={(e) => handleInputChange("contactPersonName", e.target.value)}
                        placeholder="Enter contact person's name"
                        className={errors.contactPersonName ? "border-red-500" : ""}
                      />
                      {errors.contactPersonName && <p className="text-red-500 text-sm">{errors.contactPersonName}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contactPersonDesignation">Contact Person Designation</Label>
                    <Input
                      id="contactPersonDesignation"
                      value={formData.contactPersonDesignation}
                      onChange={(e) => handleInputChange("contactPersonDesignation", e.target.value)}
                      placeholder="e.g., HOD Computer Engineering, Training & Placement Officer"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="instituteEmail">Institute Email *</Label>
                      <Input
                        id="instituteEmail"
                        type="email"
                        value={formData.instituteEmail}
                        onChange={(e) => handleInputChange("instituteEmail", e.target.value)}
                        placeholder="Enter institute email"
                        className={errors.instituteEmail ? "border-red-500" : ""}
                      />
                      {errors.instituteEmail && <p className="text-red-500 text-sm">{errors.instituteEmail}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactPersonEmail">Contact Person Email</Label>
                      <Input
                        id="contactPersonEmail"
                        type="email"
                        value={formData.contactPersonEmail}
                        onChange={(e) => handleInputChange("contactPersonEmail", e.target.value)}
                        placeholder="Enter contact person's email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="institutePhone">Institute Phone *</Label>
                      <Input
                        id="institutePhone"
                        value={formData.institutePhone}
                        onChange={(e) => handleInputChange("institutePhone", e.target.value)}
                        placeholder="Enter institute phone number"
                        className={errors.institutePhone ? "border-red-500" : ""}
                      />
                      {errors.institutePhone && <p className="text-red-500 text-sm">{errors.institutePhone}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactPersonPhone">Contact Person Phone</Label>
                      <Input
                        id="contactPersonPhone"
                        value={formData.contactPersonPhone}
                        onChange={(e) => handleInputChange("contactPersonPhone", e.target.value)}
                        placeholder="Enter contact person's phone"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="instituteAddress">Institute Address</Label>
                    <Textarea
                      id="instituteAddress"
                      value={formData.instituteAddress}
                      onChange={(e) => handleInputChange("instituteAddress", e.target.value)}
                      placeholder="Enter complete institute address"
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

                  <div className="space-y-2">
                    <Label htmlFor="website">Institute Website</Label>
                    <Input
                      id="website"
                      value={formData.website}
                      onChange={(e) => handleInputChange("website", e.target.value)}
                      placeholder="https://www.yourinstitutewebsite.com"
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Program Details */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
                    <h4 className="text-purple-800 font-semibold mb-2">📍 Important Information</h4>
                    <p className="text-sm text-purple-700">
                      All internship programs are conducted at our Swara Infotech facility in Sangli, Maharashtra.
                      Students will need to travel to our location for the duration of the internship program.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="totalStudents">Total Students for Internship *</Label>
                      <Select
                        value={formData.totalStudents}
                        onValueChange={(value) => handleInputChange("totalStudents", value)}
                      >
                        <SelectTrigger className={errors.totalStudents ? "border-red-500" : ""}>
                          <SelectValue placeholder="Select number of students" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10-20">10-20 Students</SelectItem>
                          <SelectItem value="21-30">21-30 Students</SelectItem>
                          <SelectItem value="31-50">31-50 Students</SelectItem>
                          <SelectItem value="51-100">51-100 Students</SelectItem>
                          <SelectItem value="100+">100+ Students</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.totalStudents && <p className="text-red-500 text-sm">{errors.totalStudents}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="batchSize">Preferred Batch Size *</Label>
                      <Select
                        value={formData.batchSize}
                        onValueChange={(value) => handleInputChange("batchSize", value)}
                      >
                        <SelectTrigger className={errors.batchSize ? "border-red-500" : ""}>
                          <SelectValue placeholder="Select batch size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="15-20">15-20 Students per batch</SelectItem>
                          <SelectItem value="21-25">21-25 Students per batch</SelectItem>
                          <SelectItem value="26-30">26-30 Students per batch</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.batchSize && <p className="text-red-500 text-sm">{errors.batchSize}</p>}
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <h4 className="text-amber-800 font-semibold mb-2">🏠 Accommodation Support</h4>
                    <p className="text-sm text-amber-700">
                      For outstation students, we can provide assistance in finding suitable accommodation near our
                      facility. Please mention this requirement in the special requirements section below.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Label>Preferred Training Domains * (Select multiple)</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {instituteDomains.map((domain) => (
                        <div key={domain} className="flex items-center space-x-2">
                          <Checkbox
                            id={`domain-${domain}`}
                            checked={formData.preferredDomains.includes(domain)}
                            onCheckedChange={(checked) =>
                              handleArrayChange("preferredDomains", domain, checked as boolean)
                            }
                          />
                          <Label htmlFor={`domain-${domain}`} className="text-sm">
                            {domain}
                          </Label>
                        </div>
                      ))}
                    </div>
                    {errors.preferredDomains && <p className="text-red-500 text-sm">{errors.preferredDomains}</p>}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="internshipDuration">Internship Duration *</Label>
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
                        </SelectContent>
                      </Select>
                      {errors.internshipDuration && <p className="text-red-500 text-sm">{errors.internshipDuration}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="preferredStartDate">Preferred Start Date *</Label>
                      <Input
                        id="preferredStartDate"
                        type="date"
                        value={formData.preferredStartDate}
                        onChange={(e) => handleInputChange("preferredStartDate", e.target.value)}
                        className={errors.preferredStartDate ? "border-red-500" : ""}
                      />
                      {errors.preferredStartDate && <p className="text-red-500 text-sm">{errors.preferredStartDate}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="studentYear">Student Year/Semester</Label>
                      <Select
                        value={formData.studentYear}
                        onValueChange={(value) => handleInputChange("studentYear", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select student year" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2nd-year">2nd Year</SelectItem>
                          <SelectItem value="3rd-year">3rd Year</SelectItem>
                          <SelectItem value="final-year">Final Year</SelectItem>
                          <SelectItem value="mixed">Mixed Years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="courseName">Course Name</Label>
                      <Input
                        id="courseName"
                        value={formData.courseName}
                        onChange={(e) => handleInputChange("courseName", e.target.value)}
                        placeholder="e.g., Diploma in Computer Engineering"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Infrastructure & Requirements */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <div className="space-y-3">
                    <Label>Does your institute have a computer lab? *</Label>
                    <RadioGroup
                      value={formData.hasComputerLab}
                      onValueChange={(value) => handleInputChange("hasComputerLab", value)}
                      className={errors.hasComputerLab ? "border border-red-500 rounded p-2" : ""}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="lab-yes" />
                        <Label htmlFor="lab-yes">Yes, we have a computer lab</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="lab-no" />
                        <Label htmlFor="lab-no">No, we don't have a computer lab</Label>
                      </div>
                    </RadioGroup>
                    {errors.hasComputerLab && <p className="text-red-500 text-sm">{errors.hasComputerLab}</p>}
                  </div>

                  <div className="space-y-3">
                    <Label>Internet Connectivity *</Label>
                    <RadioGroup
                      value={formData.internetConnectivity}
                      onValueChange={(value) => handleInputChange("internetConnectivity", value)}
                      className={errors.internetConnectivity ? "border border-red-500 rounded p-2" : ""}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="high-speed" id="internet-high" />
                        <Label htmlFor="internet-high">High-speed broadband available</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="moderate" id="internet-moderate" />
                        <Label htmlFor="internet-moderate">Moderate speed internet</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="limited" id="internet-limited" />
                        <Label htmlFor="internet-limited">Limited internet connectivity</Label>
                      </div>
                    </RadioGroup>
                    {errors.internetConnectivity && (
                      <p className="text-red-500 text-sm">{errors.internetConnectivity}</p>
                    )}
                  </div>

                  <div className="space-y-3">
                    <Label>Projector/Display Available?</Label>
                    <RadioGroup
                      value={formData.projectorAvailable}
                      onValueChange={(value) => handleInputChange("projectorAvailable", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="projector-yes" />
                        <Label htmlFor="projector-yes">Yes, projector available</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="projector-no" />
                        <Label htmlFor="projector-no">No projector available</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="specialRequirements">Special Requirements or Constraints</Label>
                    <Textarea
                      id="specialRequirements"
                      value={formData.specialRequirements}
                      onChange={(e) => handleInputChange("specialRequirements", e.target.value)}
                      placeholder="Any special requirements, timing constraints, or other important information"
                      rows={4}
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Final Details */}
              {currentStep === 4 && (
                <div className="space-y-4">
                  <div className="space-y-3">
                    <Label>Has your institute conducted internship programs before?</Label>
                    <RadioGroup
                      value={formData.hasPreviousInternships}
                      onValueChange={(value) => handleInputChange("hasPreviousInternships", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="prev-yes" />
                        <Label htmlFor="prev-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="prev-no" />
                        <Label htmlFor="prev-no">No</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {formData.hasPreviousInternships === "yes" && (
                    <div className="space-y-2">
                      <Label htmlFor="previousInternshipDetails">Previous Internship Experience</Label>
                      <Textarea
                        id="previousInternshipDetails"
                        value={formData.previousInternshipDetails}
                        onChange={(e) => handleInputChange("previousInternshipDetails", e.target.value)}
                        placeholder="Describe your previous internship programs, companies involved, outcomes, etc."
                        rows={3}
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="expectations">What are your expectations from this internship program? *</Label>
                    <Textarea
                      id="expectations"
                      value={formData.expectations}
                      onChange={(e) => handleInputChange("expectations", e.target.value)}
                      placeholder="Describe your expectations, learning outcomes you want for students, specific goals, etc."
                      rows={4}
                      className={errors.expectations ? "border-red-500" : ""}
                    />
                    {errors.expectations && <p className="text-red-500 text-sm">{errors.expectations}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="additionalInfo">Additional Information</Label>
                    <Textarea
                      id="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                      placeholder="Any additional information you'd like to share about your institute or requirements"
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
                        <a href="#" className="text-purple-600 hover:underline">
                          Terms and Conditions
                        </a>{" "}
                        for institute internship programs and understand the program structure and requirements.
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
                        I consent to the processing of institute and contact person data for the purpose of this
                        application and future program communications.
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
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 flex items-center gap-2"
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
