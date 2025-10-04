import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Contact Form */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-gray-800">CONTACT</h2>
          <p className="text-gray-600 mb-6">
            Have a question or comment? <br />
            Use the form below to send us a message or contact us by mail at:
          </p>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Comment</label>
              <textarea
                rows="4"
                className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Write your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-md font-semibold hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-gray-800">Get In Touch!</h3>
          <p className="text-gray-600 mb-6">
            We'd love to hear from you - please use the form to send us your message or ideas.
          </p>

          <div className="space-y-4 mb-6">
            <p className="flex items-center gap-3 text-gray-700">
              <FaPhoneAlt className="text-indigo-600" /> 03251730922
            </p>
            <p className="flex items-center gap-3 text-gray-700">
              <FaEnvelope className="text-indigo-600" /> support@scentseduce.com
            </p>
            <p className="flex items-center gap-3 text-gray-700">
              <FaMapMarkerAlt className="text-indigo-600" /> Plot # 2454 Street No 8, Tench Bhata
            </p>
          </div>

          <hr className="my-4" />

          <div>
            <h4 className="font-semibold text-gray-800">Opening Hours:</h4>
            <p className="text-gray-600">MON to SUN: 10:00AM - 11:00PM</p>
          </div>
        </div>
      </div>
    </section>
  );
}
