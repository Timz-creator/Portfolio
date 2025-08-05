import React, { useState } from "react";
import { Mail, Send, User, MessageSquare } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      name="contact"
      className="w-full min-h-screen flex justify-center items-center p-4 py-20"
      style={{ backgroundColor: "#111827" }}
    >
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-[800px] w-full relative z-10">
        {/* Header Section */}
        <div className="pb-8 text-center">
          <p
            className="text-4xl font-bold inline border-b-4 border-white text-white tracking-wider"
            style={{ fontFamily: "monospace" }}
          >
            {"<"}CONTACT{" />"}
          </p>
          <p
            className="text-gray-300 py-4 max-w-[600px] mx-auto"
            style={{ fontFamily: "monospace" }}
          >
            // Submit the form below or shoot me an email:
            <a
              href="mailto:timarleyf@gmail.com"
              className="text-white hover:text-gray-300 transition-colors ml-2"
            >
              timarleyf@gmail.com
            </a>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-black border border-gray-800 p-8 hover:border-gray-600 transition-colors">
            {/* Terminal Header */}
            <div className="flex items-center mb-6 pb-4 border-b border-gray-800">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div
                className="ml-4 text-gray-400 text-sm"
                style={{ fontFamily: "monospace" }}
              >
                ~/contact/send-message.sh
              </div>
            </div>

            <form
              method="POST"
              action="https://getform.io/f/0778f23f-ae76-4689-ae67-e6d70d6528fa"
              className="space-y-6"
            >
              {/* Name Input */}
              <div className="relative">
                <label
                  className="block text-gray-400 text-sm mb-2"
                  style={{ fontFamily: "monospace" }}
                >
                  $ enter_name:
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
                  <input
                    className="w-full bg-gray-900 border border-gray-700 text-white p-3 pl-10 focus:border-white focus:outline-none transition-colors"
                    style={{ fontFamily: "monospace" }}
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="relative">
                <label
                  className="block text-gray-400 text-sm mb-2"
                  style={{ fontFamily: "monospace" }}
                >
                  $ enter_email:
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
                  <input
                    className="w-full bg-gray-900 border border-gray-700 text-white p-3 pl-10 focus:border-white focus:outline-none transition-colors"
                    style={{ fontFamily: "monospace" }}
                    type="email"
                    placeholder="your.email@domain.com"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Message Input */}
              <div className="relative">
                <label
                  className="block text-gray-400 text-sm mb-2"
                  style={{ fontFamily: "monospace" }}
                >
                  $ enter_message:
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-4 text-gray-500 w-4 h-4" />
                  <textarea
                    className="w-full bg-gray-900 border border-gray-700 text-white p-3 pl-10 focus:border-white focus:outline-none transition-colors resize-none"
                    style={{ fontFamily: "monospace" }}
                    name="message"
                    cols="30"
                    rows="6"
                    placeholder="Your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full text-white border-2 border-white/50 hover:bg-white hover:text-black px-6 py-3 transition-all duration-300 flex items-center justify-center gap-2 group"
                style={{ fontFamily: "monospace" }}
              >
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                $ ./send_message.sh
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Direct Contact */}
            <div className="bg-black border border-gray-800 p-6 hover:border-gray-600 transition-colors">
              <h3
                className="text-xl font-bold text-white mb-4"
                style={{ fontFamily: "monospace" }}
              >
                {">"} DIRECT_CONTACT
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-gray-400 mr-3" />
                  <a
                    href="mailto:timarleyf@gmail.com"
                    className="text-gray-300 hover:text-white transition-colors"
                    style={{ fontFamily: "monospace" }}
                  >
                    timarleyf@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-black border border-gray-800 p-6 hover:border-gray-600 transition-colors">
              <h3
                className="text-xl font-bold text-white mb-4"
                style={{ fontFamily: "monospace" }}
              >
                {">"} RESPONSE_TIME
              </h3>
              <p
                className="text-gray-300 text-sm leading-relaxed"
                style={{ fontFamily: "monospace" }}
              >
                I typically respond within 24-48 hours. For urgent matters,
                please email directly.
              </p>
            </div>

            {/* Status */}
            <div className="bg-black border border-gray-800 p-6 hover:border-gray-600 transition-colors">
              <h3
                className="text-xl font-bold text-white mb-4"
                style={{ fontFamily: "monospace" }}
              >
                {">"} STATUS
              </h3>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <span
                  className="text-green-400"
                  style={{ fontFamily: "monospace" }}
                >
                  Available for new opportunities
                </span>
              </div>
            </div>

            {/* Geometric Accents */}
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-white/30 bg-white/5 rotate-45"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 border border-white/40 bg-white/10 rotate-12"></div>
            </div>
          </div>
        </div>

        {/* Footer Message */}
        <div className="mt-12 text-center">
          <p
            className="text-gray-400 text-sm"
            style={{ fontFamily: "monospace" }}
          >
            // Let's build something amazing together
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
