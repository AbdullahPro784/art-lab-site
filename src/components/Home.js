import React, { useRef, useEffect, useState } from "react";
import { Button } from "primereact/button";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import iphone from "../assets/iphone-frame.jpg";
import Footer from "./Footer"; // Adjust path if in a different folder
import heroVideo from "../assets/Abstract Digital Background Neon, Seamless Loop, Blue Line Animation.mp4";

export default function Home() {
  const iphoneRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (iphoneRef.current) observer.observe(iphoneRef.current);

    return () => {
      if (iphoneRef.current) observer.unobserve(iphoneRef.current);
    };
  }, []);

  return (
    <div
      className="text-center d-flex flex-column align-items-center justify-content-center relative overflow-hidden"
      style={{ minHeight: "0vh" }}
    >
      {/* Dark Mode Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          icon={darkMode ? "pi pi-sun" : "pi pi-moon"}
          className="p-button-rounded p-button-secondary"
          onClick={() => setDarkMode(!darkMode)}
        />
      </div>

      {/* Hero Section */}
      <div className="relative w-full flex items-center justify-center text-white py-20">
        {/* Video background ONLY for this section */}
        {/* Video background full width + height of hero section */}
        <div className="absolute top-0 left-0 w-100 h-250 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          {/* Optional dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      </div>

      {/* Stylish Background Gradient */}

      {/* ================= Bold Statement + Paragraph + iPhone ================= */}
      <div
        className="z-20 text-center d-flex flex-column items-center"
        style={{ position: "relative", marginTop: "120px", marginBottom: "0" }}
      >
        <h2 className="text-6xl md:text-5xl font-extrabold text-white animate-fadeIn">
          Your Canvas, Your <span className="animate-text">R</span>
          <span className="animate-text">ules</span>
        </h2>

        <p
          className="mt-4 text-lg md:text-2xl text-white animate-fadeUp mx-auto text-gray-700"
          style={{
            maxWidth: "800px",
            paddingLeft: "20px",
            paddingRight: "20px",
            lineHeight: "1.8em",
            textAlign: "center",
            marginBottom: "0",
          }}
        >
          Dive into a world where every brushstroke tells a story. Create
          boldly, explore fearlessly, and share your imagination with the world.
          Every color, every line, and every idea is a chance to make something
          extraordinary. Let your creativity soar beyond boundaries and make
          your vision unforgettable. Inspire others, push the limits, and
          transform your wildest dreams into living art that resonates far
          beyond the canvas.
        </p>

        {/* iPhone Frame with scroll-trigger zoom */}
        <div className="flex flex-wrap align-items-center justify-content-center">
          <div
            ref={iphoneRef}
            className={`flex align-items-center justify-content-center font-bold border-round m-2 px-5 py-3 ${
              isVisible ? "zoom-in" : "opacity-0"
            }`}
          >
            <div
              className="position-relative mt-2"
              style={{ width: "900px", height: "700px", marginTop: "-350px" }}
            >
              <img
                src={iphone}
                alt="iPhone Frame"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  animation: "float 2s ease-in-out infinite",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content inside the phone */}
      <div
        className="position-absolute start-50 translate-middle-x text-center"
        style={{
          top: "16%", // adjust this to move up/down inside the iPhone
          zIndex: 20,
          width: "80%",
        }}
      >
        <h1 className="mb-4 text-xxl font-bold">
          Where Creativity Meets{" "}
          {"Canvas".split("").map((letter, idx) => (
            <span key={idx} className="rainbow-letter">
              {letter}
            </span>
          ))}
        </h1>

        <Button
          label="Browse"
          className="p-button-primary px-6 py-2"
          style={{
            borderRadius: "25px",
          }}
        />
      </div>

      {/* Image Stack */}
      <div
        className="position-relative d-flex justify-content-center"
        style={{ width: "500px", height: "250px", marginTop: "-380px" }}
      >
        <img
          src={img1}
          alt="first"
          className="rounded shadow"
          style={{
            width: "180px",
            position: "absolute",
            top: "90px",
            left: "20px",
            animation: "fadeIn 1s ease forwards",
          }}
        />
        <img
          src={img2}
          alt="second"
          className="rounded shadow"
          style={{
            width: "180px",
            position: "absolute",
            top: "150px",
            left: "170px",
            animation: "fadeIn 1s ease forwards",
            animationDelay: "0.2s",
          }}
        />
        <img
          src={img3}
          alt="third"
          className="rounded shadow"
          style={{
            width: "180px",
            position: "absolute",
            top: "90px",
            left: "320px",
            animation: "fadeIn 1s ease forwards",
            animationDelay: "0.4s",
          }}
        />
      </div>

      {/* Featured Categories */}
      <div className="container mt-5 text-center">
        <h2 className="mb-4">Featured Categories</h2>
        <div className="d-flex justify-content-center gap-4 flex-wrap">
          {[
            {
              name: "Nature",
              img: "https://picsum.photos/200/150?random=1",
              link: "/nature",
            },
            {
              name: "Portraits",
              img: "https://picsum.photos/200/150?random=2",
              link: "/portraits",
            },
            {
              name: "Abstract",
              img: "https://picsum.photos/200/150?random=3",
              link: "/abstract",
            },
            {
              name: "Landscape",
              img: "https://picsum.photos/200/150?random=4",
              link: "/landscape",
            },
            {
              name: "Street",
              img: "https://picsum.photos/200/150?random=5",
              link: "/street",
            },
          ].map((cat, idx) => (
            <a
              key={idx}
              href={cat.link}
              className="bg-light rounded shadow p-3 hover:shadow-lg text-decoration-none text-dark"
              style={{
                width: "150px",
                transition: "transform 0.3s",
              }}
            >
              <div className="mb-2">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-100 rounded"
                  style={{ height: "100px", objectFit: "cover" }}
                />
              </div>
              <p className="mb-0 fw-bold">{cat.name}</p>
            </a>
          ))}
        </div>
      </div>
      <div className="container mt-5 text-center">
        <h2 className="mb-4">Explore Features</h2>
        <div className="d-flex justify-content-center gap-4 flex-wrap">
          {[
            {
              title: "Smart Brushes",
              desc: "AI-assisted painting tools.",
              emoji: "🖌️",
            },
            {
              title: "Layer Control",
              desc: "Full layer management.",
              emoji: "📚",
            },
            {
              title: "Color Mixer",
              desc: "Blend colors like magic.",
              emoji: "🎨",
            },
            {
              title: "3D Effects",
              desc: "Add depth to your art.",
              emoji: "🌀",
            },
          ].map((feat, idx) => (
            <div
              key={idx}
              className="bg-light rounded shadow p-4 w-64 hover:scale-105 transition-all"
            >
              <div className="text-5xl mb-2">{feat.emoji}</div>
              <h5 className="fw-bold">{feat.title}</h5>
              <p className="text-muted">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* About / Mission Section */}
      <div className="container mt-5 py-5">
        <h2 className="mb-3 text-3xl font-bold">About ArtLAB</h2>
        <p className="text-muted fs-5 mx-auto" style={{ maxWidth: "800px" }}>
          At <strong>ArtLAB</strong>, we believe art should be bold, personal,
          and limitless. Our mission is to empower creators with tools and
          inspiration to turn imagination into reality. From portraits to
          abstract works, every piece tells a story waiting to be shared.
        </p>
      </div>
      <div className="container mt-5 mb-5">
        <h2 className="mb-4 text-3xl font-bold">Gallery Highlights 📸</h2>
        <div className="d-flex overflow-x-auto gap-3 py-3">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <img
              key={i}
              src={`https://picsum.photos/300/200?random=${i}`}
              className="rounded shadow-md hover:scale-105 transition-all"
              alt={`gallery ${i}`}
            />
          ))}
        </div>
      </div>
      <div
        className="text-center my-5 p-5 rounded shadow-lg text-white"
        style={{ background: "linear-gradient(90deg,#ff416c,#ff4b2b)" }}
      >
        <h2 className="mb-3 text-3xl font-extrabold">
          Limited Time Challenge!
        </h2>
        <p className="mb-4 fs-5">
          Join our 7-day art challenge and win exclusive tools 🎁
        </p>
        <Button
          label="Join Challenge"
          className="p-button-rounded px-5 py-2"
          style={{
            backgroundColor: "#fff",
            color: "#ff416c",
            fontWeight: "bold",
          }}
        />
      </div>

      {/* Stats / Fun Facts */}
      <div className="bg-white shadow-sm py-5 mt-4">
        <div className="container d-flex justify-content-around flex-wrap text-center">
          {[
            { num: "2000+", label: "Artworks Created" },
            { num: "10+", label: "Years of Creativity" },
            { num: "100%", label: "Happy Clients" },
          ].map((stat, idx) => (
            <div key={idx} className="m-3">
              <h3 className="text-4xl font-bold text-primary">{stat.num}</h3>
              <p className="text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mt-5 mb-5">
        <h2 className="mb-4">What People Say?</h2>
        <div className="d-flex justify-content-center gap-4 flex-wrap">
          {[
            {
              name: "Alex",
              text: "Loved my custom portrait, pure perfection!",
            },
            { name: "Maya", text: "The colors and creativity blew my mind!" },
            { name: "Jordan", text: "ArtLAB turned my vision into reality." },
          ].map((t, idx) => (
            <div
              key={idx}
              className="bg-light rounded shadow p-4"
              style={{
                width: "250px",
                transition: "transform 0.3s",
              }}
            >
              <p className="fst-italic mb-2">“{t.text}”</p>
              <h6 className="fw-bold">- {t.name}</h6>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-cyan-100 py-5 mt-5 w-100">
        <div className="container text-center">
          <h2 className="mb-3 text-3xl font-bold">Stay in the Loop 🎨</h2>
          <p className="text-muted mb-4 fs-5">
            Join our newsletter for updates, inspiration, and exclusive tips.
          </p>
          <form
            className="d-flex flex-column flex-md-row justify-content-center gap-3"
            style={{ maxWidth: "600px", margin: "0 auto" }}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="form-control shadow-sm"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="form-control shadow-sm"
            />
            <Button
              label="Subscribe"
              className="p-button-rounded p-button-primary px-4"
            />
          </form>
        </div>
      </div>

      {/* Pro Membership Branding */}
      <div className="container text-center my-5">
        <div
          className="shadow-lg rounded p-5 animate-fadeIn"
          style={{
            background: "linear-gradient(135deg, #7F00FF, #E100FF)",
            color: "#fff",
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
          <Button
            label="Join Pro"
            className="p-button-rounded px-5 py-2"
            style={{
              backgroundColor: "#fff",
              color: "#7F00FF",
              fontWeight: "bold",
            }}
          />
        </div>
      </div>
      <style>{`
  .newsletter input {
    transition: all 0.3s ease;
  }
  .newsletter input:focus {
    transform: scale(1.05);
    border-color: #7f00ff;
    box-shadow: 0 0 10px rgba(127, 0, 255, 0.3);
  }
`}</style>
      {/* Scrolling Marquee Section */}
      <div className="bg-white text-black py-4 overflow-hidden relative">
        <div className="whitespace-nowrap animate-marquee text-2xl font-bold">
          Create ✦ Inspire ✦ Imagine ✦ Share ✦ Repeat ✦
        </div>
      </div>

      {/* Trusted By Logos */}
      <div className="container text-center my-5">
        <h2 className="mb-4">Trusted By Creators Worldwide 🌍</h2>
        <div className="d-flex justify-content-center gap-5 flex-wrap opacity-75">
          {["🎨", "🖌️", "✨", "📷", "🎬"].map((logo, idx) => (
            <div key={idx} className="text-5xl hover:opacity-100 transition">
              {logo}
            </div>
          ))}
        </div>
      </div>

      {/* Meet the Team */}
      <div className="container text-center my-5">
        <h2 className="mb-4">Meet the Team 👩‍🎨👨‍🎨</h2>
        <div className="d-flex justify-content-center gap-4 flex-wrap">
          {[
            { name: "Sam", role: "Lead Artist" },
            { name: "Jamie", role: "Creative Director" },
            { name: "Riley", role: "Tech Wizard" },
          ].map((m, idx) => (
            <div key={idx} className="bg-light shadow rounded p-4 w-200">
              <div className="text-6xl mb-3">🎭</div>
              <h5 className="fw-bold">{m.name}</h5>
              <p className="text-muted">{m.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="container my-5">
        <h2 className="mb-4 text-center">Frequently Asked Questions ❓</h2>
        <div className="accordion" id="faq">
          {[
            {
              q: "How does ArtLAB work?",
              a: "You create, we provide tools & inspiration.",
            },
            { q: "Is it free?", a: "Yes! Pro features are optional." },
            {
              q: "Can I share my art?",
              a: "Absolutely! Showcase it to the world.",
            },
          ].map((faq, idx) => (
            <div key={idx} className="accordion-item mb-3">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#faq${idx}`}
                >
                  {faq.q}
                </button>
              </h2>
              <div id={`faq${idx}`} className="accordion-collapse collapse">
                <div className="accordion-body">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final Call To Action */}
      <div
        className="text-center my-5 p-5 rounded shadow-lg text-white"
        style={{ background: "linear-gradient(90deg,#ff0080,#7928ca,#2afadf)" }}
      >
        <h2 className="mb-3 text-3xl font-extrabold">
          Ready to Unleash Your Creativity?
        </h2>
        <Button
          label="Get Started Now"
          className="p-button-rounded px-5 py-2"
          style={{
            backgroundColor: "#fff",
            color: "#7928ca",
            fontWeight: "bold",
          }}
        />
      </div>

      {/* Footer */}
      <Footer />

      {/* Animations */}
      <style>{`
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
      @keyframes marquee {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}
.animate-marquee {
  display: inline-block;
  animation: marquee 15s linear infinite;
}

    @keyframes float {
      0%, 100% { transform: translateY(-10px); }
      50% { transform: translateY(10px); }
    }
    @keyframes fadeUp {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
      @keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
 @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    .animate-text { display: inline-block; animation: textColorChange 4s linear infinite; }
    @keyframes textColorChange {
      0% { color: #ff0080; }
      25% { color: #7928ca; }
      50% { color: #2afadf; }
      75% { color: #ff0080; }
      100% { color: #7928ca; }
    }
    .animate-fadeIn { animation: fadeIn 1s ease forwards; }
    .animate-fadeUp { animation: fadeUp 1s ease forwards; animation-delay: 0.5s; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      @keyframes textColorChange {
  0% { color: #ff0080; }
  50% { color: #7928ca; }
  100% { color: #2afadf; }
}

    @keyframes rainbow {
      0% { color: #ff0000; }
      16% { color: #ff7f00; }
      33% { color: #ffff00; }
      50% { color: #00ff00; }
      66% { color: #0000ff; }
      83% { color: #4b0082; }
      100% { color: #8b00ff; }
    }
    @keyframes zoomIn {
      from { transform: scale(0.8); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }

    .zoom-in { animation: zoomIn 1s ease forwards; }
    .opacity-0 { opacity: 0; }

    .rainbow-letter {
      display: inline-block;
      animation: rainbow 3s linear infinite;
    }
    
    .animate-fadeIn { animation: fadeIn 1s ease forwards; }
    .animate-text { display: inline-block; animation: textColorChange 3s linear infinite; }
    .animate-fadeUp { animation: fadeUp 1s ease forwards; animation-delay: 0.5s; }
  `}</style>
    </div>
  );
}
