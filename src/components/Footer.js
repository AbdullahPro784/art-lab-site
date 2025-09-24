import React from "react";

export default function Footer() {
  return (
    <footer
      className="py-8 w-full text-white"
      style={{
        background: "linear-gradient(90deg, #1a1a1a, #4b0082)", // stylish gradient
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 px-4">
        {/* Legal Text */}
        <p className="text-sm md:text-base max-w-full md:max-w-xl text-left">
          © 2025 ArtLAB. All rights reserved. This website and its content are
          protected under copyright laws, trademarks, and all applicable
          intellectual property regulations. Unauthorized copying, distribution,
          or modification of any material is strictly prohibited. ArtLAB
          reserves the right to enforce all legal protections and maintain
          compliance with international copyright standards. Use of this site
          indicates acceptance of all terms and conditions.
        </p>

        {/* Social Media Logos */}
        <div className="flex gap-4 mt-4 md:mt-0">
          {/* Instagram */}
          <a href="#!" aria-label="Instagram">
            <svg
              className="w-6 h-6 fill-white hover:fill-pink-500 hover:scale-110 transition-all"
              viewBox="0 0 24 24"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.75a1 1 0 110 2 1 1 0 010-2z" />
            </svg>
          </a>

          {/* Twitter */}
          <a href="#!" aria-label="Twitter">
            <svg
              className="w-6 h-6 fill-white hover:fill-blue-400 hover:scale-110 transition-all"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14.86A5.48 5.48 0 0022.4.37a10.94 10.94 0 01-3.48 1.33A5.48 5.48 0 0016.1 0c-3.03 0-5.5 2.46-5.5 5.5 0 .43.05.85.14 1.25C6.43 6.63 3.1 4.92 1.67 2.17c-.47.8-.74 1.74-.74 2.75 0 1.9.96 3.58 2.42 4.57A5.48 5.48 0 012 9.71v.07c0 2.66 1.9 4.88 4.42 5.38a5.52 5.52 0 01-2.49.1c.7 2.2 2.73 3.8 5.13 3.85A10.99 10.99 0 010 20.29a15.48 15.48 0 008.39 2.46c10.07 0 15.58-8.34 15.58-15.57 0-.24-.01-.48-.02-.71A11.1 11.1 0 0023 3z" />
            </svg>
          </a>

          {/* Facebook */}
          <a href="#!" aria-label="Facebook">
            <svg
              className="w-6 h-6 fill-white hover:fill-blue-700 hover:scale-110 transition-all"
              viewBox="0 0 24 24"
            >
              <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.87 0 1.78.16 1.78.16v2h-1c-1 0-1.3.62-1.3 1.25V12h2.2l-.35 3h-1.85v7A10 10 0 0022 12z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a href="#!" aria-label="LinkedIn">
            <svg
              className="w-6 h-6 fill-white hover:fill-blue-600 hover:scale-110 transition-all"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5a2.5 2.5 0 11-.001 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3zM9 9h3.6v1.71h.05c.5-.94 1.72-1.93 3.55-1.93 3.8 0 4.5 2.5 4.5 5.75V21h-4v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.91V21h-4V9z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
