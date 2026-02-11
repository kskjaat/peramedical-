import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GraduationCap, Phone, MapPin, Mail, Users, Award, Microscope, Activity } from "lucide-react";
import { motion } from "framer-motion";

export default function CollegeWebsite() {
  const [form, setForm] = useState({ name: "", phone: "", course: "", message: "" });

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
          alt="Medical Laboratory Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center text-white px-4"
        >
          {/* College Logo Image */}
          <img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118"
            alt="College Medical Logo"
            className="mx-auto mb-6 w-28 h-28 rounded-full border-4 border-yellow-400 object-cover"
          />

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-widest mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
            BRAJ PARAMEDICAL RESEARCH INSTITUTE
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
            Rajasthan State Approved · Advanced Medical & Paramedical Education
          </p>
          <Button
            className="bg-yellow-500 text-black font-semibold px-10 py-6 text-lg hover:bg-yellow-400"
            onClick={() => document.getElementById("admission-form")?.scrollIntoView({ behavior: "smooth" })}
          >
            Apply Now
          </Button>
        </motion.div>
      </section>

      {/* Medical Gallery */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Our Medical Infrastructure</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758" alt="Medical Lab" className="rounded-xl shadow" />
          <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5" alt="X-Ray Machine" className="rounded-xl shadow" />
          <img src="https://images.unsplash.com/photo-1581594549595-35f6edc7b762" alt="Radiology Room" className="rounded-xl shadow" />
          <img src="https://images.unsplash.com/photo-1582719478145-4452f09d1d0c" alt="Lab Testing" className="rounded-xl shadow" />
          <img src="https://images.unsplash.com/photo-1580281657521-8d4f6c92c2b3" alt="Medical Equipment" className="rounded-xl shadow" />
          <img src="https://images.unsplash.com/photo-1579154204601-01588f351e67" alt="Hospital Lab" className="rounded-xl shadow" />
        </div>
      </section>

      {/* Courses */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Courses</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <Microscope className="mb-2" />
              <h3 className="text-xl font-semibold">DMLT</h3>
              <p>Diploma in Medical Laboratory Technology</p>
              <p className="mt-2">Duration: 2 Years</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <Activity className="mb-2" />
              <h3 className="text-xl font-semibold">DRT</h3>
              <p>Diploma in Radiography Technology</p>
              <p className="mt-2">Duration: 2 Years</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Why Choose Us</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Braj Paramedical Research Institute provides industry-focused medical education with strong practical exposure, modern laboratories, and expert faculty. Our mission is to prepare competent healthcare professionals ready for real hospital and diagnostic environments.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Govt. Approved Programs</h3>
                <p className="text-sm text-gray-600">Recognized courses ensuring career value and professional credibility.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Experienced Faculty</h3>
                <p className="text-sm text-gray-600">Hands-on training guided by skilled medical professionals.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <GraduationCap className="mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Placement Support</h3>
                <p className="text-sm text-gray-600">Internships and placement assistance in hospitals and labs.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Admission Enquiry */}
      <section id="admission-form" className="max-w-6xl mx-auto py-20 px-4">
        <div className="relative mb-12 rounded-3xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b"
            alt="Medical Lab Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/80" />
          <div className="relative z-10 text-center py-14">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-wide text-gray-900">
              BRAJ PARAMEDICAL RESEARCH INSTITUTE
            </h2>
            <p className="mt-3 text-xl font-semibold">Admission Enquiry Form</p>
          </div>
        </div>

        <Card className="max-w-xl mx-auto">
          <CardContent className="p-6 space-y-4">
            <Input placeholder="Your Name" onChange={e => setForm({ ...form, name: e.target.value })} />
            <Input placeholder="Phone Number" onChange={e => setForm({ ...form, phone: e.target.value })} />
            <Input placeholder="Course Interested" onChange={e => setForm({ ...form, course: e.target.value })} />
            <Textarea placeholder="Message" onChange={e => setForm({ ...form, message: e.target.value })} />
            <Button className="w-full">Submit Enquiry</Button>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
          <div><h3 className="font-bold mb-2">Contact</h3><p><Phone /> 7568658065</p><p><Phone /> 7062817990</p></div>
          <div><h3 className="font-bold mb-2">Address</h3><p><MapPin /> Near Khem Karan Chauraha, Mathura Road, Bharatpur</p></div>
          <div><h3 className="font-bold mb-2">Email</h3><p><Mail /> krishnakant6195@gmail.com
          </p></div>
        </div>
      </footer>
    </div>
  );
}
