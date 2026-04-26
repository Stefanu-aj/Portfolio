import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdEmail, MdWhatsapp } from "react-icons/md";
import { FaPhone, FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import Footer from "../Components/Footer";
import SlideIn from "../Components/SlideIn";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data
    if (
      formData.name &&
      formData.email &&
      formData.subject &&
      formData.message
    ) {
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <>
      <div className="w-full px-10 md:px-20 py-20">
        <SlideIn>
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-[#0F172A]">
              Get In Touch
            </h1>
            <p className="text-lg text-gray-600">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </div>
        </SlideIn>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <SlideIn delay={0.1}>
            <div className="bg-white rounded-2xl p-8 border border-[#E4E7EC]">
              <h2 className="text-2xl font-bold mb-6 text-[#0F172A]">
                Drop a Message
              </h2>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg"
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#667085] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full name"
                    className="w-full px-4 py-3 border border-[#E4E7EC] rounded-lg focus:outline-none focus:border-[#0EA5A4] transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#667085] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-[#E4E7EC] rounded-lg focus:outline-none focus:border-[#0EA5A4] transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#667085] mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full px-4 py-3 border border-[#E4E7EC] rounded-lg focus:outline-none focus:border-[#0EA5A4] transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#667085] mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Input your message..."
                    rows="5"
                    className="w-full px-4 py-3 border border-[#E4E7EC] rounded-lg focus:outline-none focus:border-[#0EA5A4] transition resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0EA5A4] hover:bg-[#0B8E8D] text-white font-semibold py-3 rounded-lg transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </SlideIn>

          {/* Contact Information */}
          <SlideIn delay={0.2}>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#0F172A]">
                Contact Information
              </h2>

              {/* Email Card */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-[#F8FAFC] border border-[#E4E7EC] rounded-xl p-6 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-[#ECFDFD] flex items-center justify-center flex-shrink-0">
                  <MdEmail className="text-[#0EA5A4]" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-[#0F172A] mb-1">Email</p>
                  <a
                    href="mailto:stephenajao97@gmail.com"
                    className="text-[#667085] hover:text-[#0EA5A4] transition"
                  >
                    stephenajao97@gmail.com
                  </a>
                </div>
              </motion.div>

              {/* WhatsApp Card */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="bg-[#F8FAFC] border border-[#E4E7EC] rounded-xl p-6 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-[#ECFDFD] flex items-center justify-center flex-shrink-0">
                  <MdWhatsapp className="text-[#0EA5A4]" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-[#0F172A] mb-1">WhatsApp</p>
                  <a
                    href="https://wa.me/2348148853284"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#667085] hover:text-[#0EA5A4] transition"
                  >
                    +234 814 885 3284
                  </a>
                </div>
              </motion.div>

              {/* Phone Card */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-[#F8FAFC] border border-[#E4E7EC] rounded-xl p-6 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-[#ECFDFD] flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-[#0EA5A4]" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-[#0F172A] mb-1">Phone</p>
                  <p className="text-[#667085]">+234 814 885 3284</p>
                </div>
              </motion.div>

              {/* Social Links */}
              <div className="mt-10 pt-6 border-t border-[#E4E7EC]">
                <p className="font-semibold text-[#0F172A] mb-4">Follow Me</p>
                <div className="flex gap-4 flex-wrap">
                  <a
                    href="https://www.linkedin.com/in/stephen-ajao-413423194/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-[#ECFDFD] flex items-center justify-center hover:bg-[#0EA5A4] hover:text-white transition"
                    title="LinkedIn"
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a
                    href="https://github.com/stefanu-aj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-[#ECFDFD] flex items-center justify-center hover:bg-[#0EA5A4] hover:text-white transition"
                    title="GitHub"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href="https://x.com/stefanu_ajao"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-[#ECFDFD] flex items-center justify-center hover:bg-[#0EA5A4] hover:text-white transition"
                    title="X"
                  >
                    <FaTwitter size={20} />
                  </a>
                  <a
                    href="https://instagram.com/stefanu_ajao/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-[#ECFDFD] flex items-center justify-center hover:bg-[#0EA5A4] hover:text-white transition"
                    title="Instagram"
                  >
                    <FaInstagram size={20} />
                  </a>
                  <a
                    href="https://facebook.com/ajaostefanu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-[#ECFDFD] flex items-center justify-center hover:bg-[#0EA5A4] hover:text-white transition"
                    title="Facebook"
                  >
                    <FaFacebook size={20} />
                  </a>
                </div>
              </div>
            </div>
          </SlideIn>
        </div>

        {/* Response Time Note */}
        <SlideIn delay={0.3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center p-6 bg-[#F8FAFC] rounded-xl border border-[#E4E7EC]"
          >
            <p className="text-[#667085]">
              ⚡ I typically respond within{" "}
              <span className="font-semibold text-[#0EA5A4]">24 hours</span>
            </p>
          </motion.div>
        </SlideIn>
      </div>

      <Footer />
    </>
  );
}

