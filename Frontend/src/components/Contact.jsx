import { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

// JavaScript function to redirect to Social Media IDs Links
function redirectToInstagram() {
  window.open(
    "https://www.instagram.com/chir.ru_26t/?igsh=MTh3YWJ3eTY3eHNhdA==",
    "_blank",
    "noopener,noreferrer"
  );
}

function redirectToFacebook() {
  window.open(
    "https://www.facebook.com/chirru26/",
    "_blank",
    "noopener,noreferrer"
  );
}

function redirectToLinkedIn() {
  window.open(
    "https://www.linkedin.com/in/heychirru26?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    "_blank",
    "noopener,noreferrer"
  );
}

function redirectToTwitter() {
  window.open("https://x.com/chir_ru26", "_blank", "noopener,noreferrer");
}

function redirectToGmail() {
  window.open('mailto:chirru26@gmail.com', '_blank', 'noopener,noreferrer');
}

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-950 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-gray-300 mb-12">
          Contact Me
        </h2>
        <div className="grid lg:grid-cols-2 gap-10">
          {/* contact info */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-300">
                Let's Talk
              </h1>
              <h3 className="text-2xl font-semibold text-gray-300">Email</h3>
              <p className="text-gray-600 mt-2">
                <a
                  href="#"
                  className="text-blue-500 hover:underline"
                  onClick={redirectToGmail}
                >
                  chirru26@gmail.com
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-300">
                Follow Me
              </h3>
              <div className="flex gap-3 text-2xl transition-all mt-5">
                <FaFacebook
                  className="text-blue-400"
                  onClick={redirectToFacebook}
                />
                <FaInstagram
                  className="text-blue-400"
                  onClick={redirectToInstagram}
                />
                <FaLinkedin
                  className="text-blue-400"
                  onClick={redirectToLinkedIn}
                />
                <FaSquareXTwitter
                  className="text-blue-400"
                  onClick={redirectToTwitter}
                />
              </div>
            </div>
          </div>
          {/* contact form */}
          <div className="bg-gray-900 rounded-lg shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500 p-8">
            <h3 className="text-3xl font-semibold text-gray-300 mb-6">
              Get in Touch
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
              >
                Send Message
              </button>
              {status && <p className="text-gray-300 mt-2">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
