import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Bell,
  Globe,
  Facebook,
  Instagram,
  CheckCircle2,
} from "lucide-react";

const ContactCard = ({ icon: Icon, title, detail, sub }) => (
  <div className="group rounded-[2.5rem] border border-gray-100 bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-xl">
    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f3e8ff] text-[#7c3aed] transition-colors group-hover:bg-[#7c3aed] group-hover:text-white">
      {Icon && <Icon size={28} />}
    </div>
    <h3 className="mb-2 text-xl font-black">{title}</h3>
    <p className="mb-1 font-bold text-gray-900">{detail}</p>
    <p className="text-sm text-gray-400">{sub}</p>
  </div>
);

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const SCRIPT_URL = import.meta.env.VITE_NEWSLETTER_URL;

    const payload = {
      type: "inquiry",
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(payload),
      });
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch {
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="animate-in fade-in bg-white duration-700">
        {/* 1. Hero Header */}
        <section className="relative overflow-hidden bg-[#1e1b4b] px-6 pt-32 pb-20">
          <div className="absolute top-0 left-0 -mt-48 -ml-48 h-96 w-96 bg-[#7c3aed] opacity-20 blur-[150px]" />
          <div className="relative z-10 mx-auto max-w-7xl text-center">
            <span className="text-sm font-black tracking-[0.3em] text-[#facc15] uppercase">
              Contact Our School
            </span>
            <h1 className="mt-6 mb-8 text-5xl font-black tracking-tighter text-white md:text-7xl">
              We'd Love to <span className="text-[#ec4899]">Hear From You</span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-300">
              Whether you're exploring admission, have questions about your
              child, or want to schedule a campus tour, our team is ready to
              assist you.
            </p>
          </div>
        </section>

        {/* 2. Main Section */}
        <section className="relative z-20 mx-auto -mt-16 max-w-7xl px-6 py-24">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            {/* Contact Form */}
            <div className="rounded-[3.5rem] border border-gray-50 bg-white p-8 shadow-2xl md:p-16 lg:col-span-7">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid gap-8 md:grid-cols-2">
                    <div className="space-y-3">
                      <label className="ml-2 text-sm font-black tracking-widest text-gray-400 uppercase">
                        Parent / Guardian Name
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Jane Smith"
                        className="w-full rounded-2xl border-2 border-transparent bg-gray-50 p-5 transition-all outline-none focus:border-[#7c3aed] focus:bg-white"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="ml-2 text-sm font-black tracking-widest text-gray-400 uppercase">
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="parent@email.com"
                        className="w-full rounded-2xl border-2 border-transparent bg-gray-50 p-5 transition-all outline-none focus:border-[#7c3aed] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="ml-2 text-sm font-black tracking-widest text-gray-400 uppercase">
                      Inquiry Type
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full appearance-none rounded-2xl border-2 border-transparent bg-gray-50 p-5 transition-all outline-none focus:border-[#7c3aed] focus:bg-white"
                    >
                      <option>Admission Information</option>
                      <option>Schedule a School Tour</option>
                      <option>Academic Questions</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="ml-2 text-sm font-black tracking-widest text-gray-400 uppercase">
                      Message
                    </label>
                    <textarea
                      required
                      rows="5"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us how we can help your child..."
                      className="w-full resize-none rounded-2xl border-2 border-transparent bg-gray-50 p-5 transition-all outline-none focus:border-[#7c3aed] focus:bg-white"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#7c3aed] py-6 text-lg font-black text-white shadow-xl shadow-purple-200 transition-all hover:-translate-y-1 hover:bg-violet-700"
                  >
                    Send Message <Send size={20} />
                  </button>
                </form>
              ) : (
                <div className="animate-in zoom-in-95 py-20 text-center duration-500">
                  <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle2 size={48} />
                  </div>
                  <h2 className="mb-4 text-3xl font-black">Message Sent!</h2>
                  <p className="mb-8 text-gray-500">
                    Thank you for contacting us. Our admissions team will get
                    back to you within one business day.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="font-bold text-[#7c3aed] underline"
                  >
                    Send another message
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8 lg:col-span-5">
              <ContactCard
                icon={Phone}
                title="Call Our Office"
                detail="+234 800 123 4567"
                sub="Monday - Friday | 8:00am - 4:00pm"
              />
              <ContactCard
                icon={Mail}
                title="Email Us"
                detail="info@littlestarschool.com"
                sub="We respond within 24 hours"
              />
              <ContactCard
                icon={MapPin}
                title="Visit Our Campus"
                detail="12 Sunshine Avenue, Lagos"
                sub="Book a guided school tour"
              />

              <div className="relative overflow-hidden rounded-[2.5rem] bg-[#ec4899] p-10 text-white">
                <div className="relative z-10">
                  <h3 className="mb-4 text-2xl font-black">
                    Follow Our School Life
                  </h3>
                  <div className="flex gap-4">
                    {[Facebook, Instagram].map((Icon, i) => (
                      <button
                        key={i}
                        className="rounded-2xl bg-white/20 p-4 transition-all hover:bg-white hover:text-[#ec4899]"
                      >
                        <Icon size={24} />
                      </button>
                    ))}
                  </div>
                </div>
                <Globe className="absolute -right-10 -bottom-10 h-48 w-48 opacity-10" />
              </div>
            </div>
          </div>
        </section>

        {/* 3. Map Section */}
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="relative h-[500px] w-full overflow-hidden rounded-[3.5rem] border border-gray-100 bg-gray-100 shadow-inner">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
              <MapPin size={64} className="mb-4 opacity-20" />
              <p className="font-bold italic">Campus Location Map Loading...</p>
            </div>

            <div className="absolute top-8 left-8 rounded-3xl border border-gray-50 bg-white p-6 shadow-2xl">
              <h4 className="font-black text-gray-900">
                Little Stars Primary School
              </h4>
              <p className="text-xs font-bold text-gray-400">
                School Tours: 9:00am - 2:00pm
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
