import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import { Paginator } from "primereact/paginator";
import img1 from "../assets/portrait1.jpg";
import img2 from "../assets/portrait2.jpg";
import img3 from "../assets/portrait3.jpg";
import img4 from "../assets/portrait4.jpg";
import img5 from "../assets/portrait5.jpg";
import Footer from "./Footer";

export default function Portraits() {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img1,
    img2,
    img3,
    img1,
    img2,
    img3,
    img4,
    img5,
    img1,
    img2,
    img3,
    img1,
    img2,
    img3,
    img4,
    img5,
    img1,
    img2,
    img3,
    img1,
    img2,
    img3,
    img4,
    img5,
    img1,
    img2,
    img3,
  ];

  return (
    <div>
      <div className="container mt-5">
        {/* Stylish Heading */}
        <h2 className="fw-bold mb-4 text-center text-4xl md:text-5xl font-extrabold tracking-wider">
          Portraits
        </h2>

        {/* Grid of Portraits */}
        <div
          className="d-grid"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "16px",
          }}
        >
          {images.map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt={`portrait-${index}`}
              className="img-fluid rounded shadow-sm"
              style={{ width: "100%", height: "auto" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            />
          ))}
        </div>

        {/* Fake Pagination */}
        <div className="d-flex justify-content-center my-5">
          <Paginator first={0} rows={8} totalRecords={30} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
