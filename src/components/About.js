import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import Footer from "./Footer";

export default function About() {
  return (
    <div className="bg-white px-8 py-12" style={{ minHeight: "100vh" }}>
      {/* Heading + Paragraph */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-4">About ArtLab</h2>
        <p className="mx-auto text-gray-700 text-lg leading-relaxed max-w-4xl">
          At <span className="font-semibold text-black">ArtLab</span>, we
          believe art is more than just creativity — it’s an{" "}
          <span className="italic">experience</span>, a{" "}
          <span className="text-indigo-600">language</span>, a pulsating rhythm
          of imagination, a kaleidoscope of endless ideas, and a bridge that
          connects people across cultures and generations. Founded with the
          vision of making art accessible to everyone, ArtLab is a digital hub
          where artists showcase their work, art lovers explore creativity in
          its purest form, and curious minds dive into a universe of
          inspiration, collaboration, and unexpected discoveries. Whether you
          are an innovator, a dreamer, a collector, or simply someone who loves
          to witness the magic of creation, ArtLab is designed to awaken your
          senses, ignite your passion, and keep you coming back for more.
        </p>
      </motion.div>

      {/* Floating Grid of Images */}
      {/* Overlapping Floating Images */}
      {/* Overlapping Floating Images */}
      <motion.div
        className="relative w-full flex justify-center items-center"
        style={{ height: "700px", marginBottom: "-350px" }} // 🔥 make this taller
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { staggerChildren: 0.2, duration: 0.5 },
          },
        }}
      >
        {[img1, img2, img3, img4, img5].map((image, i) => (
          <motion.img
            key={i}
            src={image}
            alt={`art-${i}`}
            className="absolute rounded-2xl shadow-lg hover:scale-110 transition-transform duration-300"
            style={{
              width: "300px", // 🔥 keep your original size
              top: `${50 + i * 10}px`,
              left: `${i * 180}px`,
              zIndex: i,
            }}
            whileHover={{ rotate: i % 2 === 0 ? 5 : -5, scale: 1.05 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          />
        ))}
      </motion.div>

      {/* Extra Info Section */}
      <motion.div
        className="mt-12 px-4 md:px-12 text-center space-y-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-3xl font-bold mb-6">Our Story & Legacy</h3>

        <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
          Founded in <span className="font-semibold text-black">2018</span> by
          visionary{" "}
          <span className="font-semibold text-black">Abdullah Asim</span>.
          ArtLab was born from a passion for making art accessible to everyone.
          The founder envisioned a platform where creativity has no boundary,
          and where artists could reach a global audience while preserving the
          essence of authentic expression.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
          Over the years, ArtLab has grown into a vibrant community of
          creatives, enthusiasts, and collectors. Today, it employs over{" "}
          <span className="font-semibold text-black">
            1,500 artists, curators, and staff
          </span>{" "}
          around the world, spanning offices in{" "}
          <span className="font-semibold text-black">
            New York, London, Tokyo, and Berlin
          </span>
          .
        </p>

        <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
          The platform now hosts{" "}
          <span className="font-semibold text-black">
            thousands of exhibitions
          </span>
          , interactive workshops, and collaborative projects annually. ArtLab's
          mission is not just to showcase art, but to connect people through a
          shared creative experience, bridging cultures and inspiring innovation
          across generations.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
          ArtLab has partnered with major museums, cultural institutions, and
          universities worldwide. Its influence has shaped emerging art trends,
          promoted digital art, and championed experimental techniques. Every
          year, more than{" "}
          <span className="font-semibold text-black">
            500,000 art enthusiasts
          </span>{" "}
          engage with ArtLab’s platform, exploring thousands of pieces of
          original artwork.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
          With a dedication to inclusivity, ArtLab provides platforms for
          artists from underrepresented communities, ensuring their voices are
          heard and celebrated. Through mentorship programs, grants, and
          residencies, ArtLab nurtures the next generation of creative talent.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
          ArtLab has also embraced technology to enhance the art experience.
          From virtual galleries and augmented reality exhibits to AI-assisted
          curation, the platform has remained at the cutting edge of creative
          innovation.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
          Today, ArtLab is more than a platform; it’s a movement. A global hub
          where creativity thrives, connections are formed, and ideas transform
          into experiences. Artists and enthusiasts alike come together to
          explore, learn, and collaborate in a space that is constantly
          evolving.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
          From humble beginnings as a small online gallery to a worldwide
          creative network, ArtLab’s journey is a testament to the power of
          imagination, innovation, and the enduring value of art in society. And
          the story is still being written.
        </p>

        {/* You can keep adding more paragraphs, fun facts, milestones, employee stories, gallery highlights, collaborations, awards, and future plans */}
      </motion.div>

      <Footer />
    </div>
  );
}
