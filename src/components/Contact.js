import React from "react";
import { motion } from "framer-motion";
import iphoneMockup from "../assets/iphone-frame2.jpg";
import callIcon from "../assets/phone.jpg";
import Footer from "./Footer";

export default function Contact() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row align-items-center mb-5">
          {/* Left side text */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-3">Contact Us</h2>
            <p>
              Have a question, feedback, or just want to say hello.
              <br />
              Email: contact@artgallery.com
              <br />
              Phone: +92 300 1234567
              <br />
              Address: Art Gallery HQ, 5th Avenue, Islamabad, Pakistan
            </p>
          </div>

          {/* Right side mockup */}
          <div className="col-md-6 d-flex justify-content-center">
            <div style={{ position: "relative", width: "500px" }}>
              <img
                src={iphoneMockup}
                alt="iPhone Mockup"
                className="img-fluid"
              />

              {/* Animated call icon */}
              <motion.img
                src={callIcon}
                alt="Call Icon"
                style={{
                  position: "absolute",
                  top: "38%",
                  left: "42%",
                  width: "90px",
                  transform: "translate(-50%, -50%)",
                }}
                animate={{
                  rotate: [0, 20, -20, 20, -20, 0], // tilt left and right
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </div>

        {/* Review / Complaint Section */}
        <motion.div
          className="bg-gray-50 p-8 rounded-3xl shadow-2xl max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Leave a Review or Complaint
          </h3>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-6 py-3 rounded-full border-0 bg-white focus:outline-none focus:ring-4 focus:ring-indigo-300 shadow-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-6 py-3 rounded-full border-0 bg-white focus:outline-none focus:ring-4 focus:ring-indigo-300 shadow-lg"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full px-6 py-3 rounded-3xl border-0 bg-white focus:outline-none focus:ring-4 focus:ring-indigo-300 shadow-lg resize-none"
            ></textarea>

            <motion.button
              type="submit"
              className="w-full py-3 rounded-full bg-indigo-200 text-black font-bold shadow-lg hover:bg-indigo-300 transition-all"
              whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>
          </form>
        </motion.div>

        {/* ArtLAB Pro Section */}
        <motion.div
          className="container text-center my-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div
            className="shadow-lg rounded-3xl p-5"
            style={{
              background: "linear-gradient(135deg, #7F00FF, #E100FF)",
              color: "#000",
            }}
          >
            <h2 className="mb-3 text-3xl font-extrabold">ArtLAB Pro 🚀</h2>
            <p
              className="mb-4 fs-5"
              style={{ maxWidth: "700px", margin: "0 auto" }}
            >
              Unlock premium brushes, faster rendering, exclusive tutorials, and
              early access to new features. Take your art to the next level with{" "}
              <strong>ArtLAB Pro</strong>.
            </p>

            {/* Styled Pro Button like Home page */}
            <motion.button
              className="px-6 py-3 rounded-full font-bold shadow-lg text-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-indigo-500 transition-all"
              whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
              whileTap={{ scale: 0.95 }}
            >
              Join Pro
            </motion.button>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
