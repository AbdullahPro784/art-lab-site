import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import imgNature from "../assets/portrait1.jpg";
import imgPortrait from "../assets/portrait2.jpg";
import imgAbstract from "../assets/portrait3.jpg";
import imgLandscape from "../assets/portrait4.jpg";
import imgStreet from "../assets/portrait5.jpg";
import Footer from "./Footer";

export default function Browse() {
  const categories = [
    { img: imgNature, name: "Nature" },
    { img: imgPortrait, name: "Portraits" },
    { img: imgAbstract, name: "Abstract" },
    { img: imgLandscape, name: "Landscape" },
    { img: imgStreet, name: "Street" },
  ];

  return (
    <div>
      <div className="container text-center mt-5">
        {/* Stylish Heading */}
        <h2
          className="fw-bold mb-5 text-4xl md:text-5xl font-extrabold tracking-wider"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Browse Our Catalogue
        </h2>

        {/* Category Images Grid */}
        <div
          className="d-grid justify-content-center"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            gap: "24px",
          }}
        >
          {categories.map((item, index) => (
            <motion.div
              key={index}
              className="card shadow-sm rounded-3xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
            >
              <img
                src={item.img}
                alt={item.name}
                className="img-fluid"
                style={{ height: "200px", objectFit: "cover", width: "100%" }}
              />
              <div className="card-body">
                <h6 className="card-title font-semibold">{item.name}</h6>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra Section Below Grid */}
        <motion.div
          className="mt-8 text-center px-4 md:px-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="text-gray-700 text-lg md:text-xl mb-6 max-w-3xl mx-auto">
            Choose from our{" "}
            <span className="font-semibold text-indigo-600">
              wider variety of collections
            </span>
            , including exclusive portraits, abstract art, landscapes, and much
            more. Discover the perfect piece to enhance your space or ignite
            your inspiration.
          </p>

          {/* Pro Version Advertisement */}
          <motion.div
            className="shadow-lg rounded-3xl p-5 mx-auto max-w-3xl"
            style={{
              background: "linear-gradient(135deg, #7F00FF, #E100FF)",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="mb-3 text-3xl font-extrabold text-white">
              ArtLAB Pro 🚀
            </h2>
            <p
              className="mb-4 fs-5 text-white"
              style={{ maxWidth: "700px", margin: "0 auto" }}
            >
              Unlock premium brushes, faster rendering, exclusive tutorials, and
              early access to new features. Take your art to the next level with{" "}
              <strong>ArtLAB Pro</strong>.
            </p>

            {/* Styled Pro Button */}
            <motion.button
              className="px-6 py-3 rounded-full font-bold shadow-lg text-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-indigo-500 transition-all"
              whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
              whileTap={{ scale: 0.95 }}
            >
              Join Pro
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
