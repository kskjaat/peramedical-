import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GraduationCap, Phone, MapPin, Mail, Users, Award, Microscope, Activity } from "lucide-react";
import { motion } from "framer-motion";

function AdminPanel({ onLogout }) {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <Button variant="destructive" onClick={onLogout}>Logout</Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">Admissions</h2>
              <p className="text-sm text-gray-600 mb-4">View and manage admission enquiries.</p>
              <Button className="w-full">View Enquiries</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">Results</h2>
              <p className="text-sm text-gray-600 mb-4">Upload and publish exam results.</p>
              <Button className="w-full">Upload Results</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">Notices</h2>
              <p className="text-sm text-gray-600 mb-4">Create and manage notices.</p>
              <Button className="w-full">Manage Notices</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">Website Content</h2>
              <p className="text-sm text-gray-600 mb-4">Update images and text.</p>
              <Button className="w-full">Edit Content</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default function CollegeWebsite() {
  const [form, setForm] = useState({ name: "", phone: "", course: "", message: "" });
  const [isAdmin, setIsAdmin] = useState(false);

  if (isAdmin) {
    return <AdminPanel onLogout={() => setIsAdmin(false)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
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
            onClick={() => setIsAdmin(true)}
          >
            Admin Login (Demo)
          </Button>
        </motion.div>
      </section>

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

      <section id="admission-form" className="max-w-6xl mx-auto py-20 px-4">
        <Card className="max-w-xl mx-auto">
          <CardContent className="p-6 space-y-4">
            <Input placeholder="Your Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
            <Input placeholder="Phone Number" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
            <Input placeholder="Course Interested" value={form.course} onChange={e => setForm({ ...form, course: e.target.value })} />
            <Textarea placeholder="Message" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
            <Button className="w-full">Submit Enquiry</Button>
          </CardContent>
        </Card>
      </section>

      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
          <div><h3 className="font-bold mb-2">Contact</h3><p><Phone /> 7568658065</p></div>
          <div><h3 className="font-bold mb-2">Address</h3><p><MapPin /> Near Khem Karan Chauraha, Mathura Road, Bharatpur</p></div>
          <div><h3 className="font-bold mb-2">Email</h3><p><Mail /> info@paramedicalcollege.in</p></div>
        </div>
      </footer>
    </div>
  );
}
