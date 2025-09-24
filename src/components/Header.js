import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click + Esc
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    function handleEsc(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <header
      className="p-3 text-white"
      style={{
        background: "linear-gradient(90deg, #1a1a1a, #4b0082)",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 9999,
      }}
    >
      <div className="container">
        <div className="d-flex align-items-center justify-content-between flex-nowrap">
          {/* Logo */}
          <a
            href="/"
            className="d-flex align-items-center mb-0 text-decoration-none text-white"
          >
            <span className="fs-3 fw-bold">ArtLAB</span>
          </a>

          {/* Menu */}
          <ul className="nav me-auto mb-0 justify-content-center">
            <li>
              <a href="/" className="nav-link px-2 text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="nav-link px-2 text-white">
                About
              </a>
            </li>
            <li>
              <a href="/portraits" className="nav-link px-2 text-white">
                Portraits
              </a>
            </li>
            <li>
              <a href="/browse" className="nav-link px-2 text-white">
                Browse
              </a>
            </li>
            <li>
              <a href="/contact" className="nav-link px-2 text-white">
                Contact
              </a>
            </li>
          </ul>

          {/* Search */}
          <form className="mb-0 me-3" role="search">
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              style={{ width: "200px" }}
            />
          </form>

          {/* Profile Button + Dropdown */}
          <div className="position-relative ms-2" ref={dropdownRef}>
            <button
              className="btn btn-light rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: "42px", height: "42px" }}
              onClick={() => setOpen(!open)}
              aria-haspopup="true"
              aria-expanded={open}
            >
              <span className="fw-bold text-dark">P</span>
            </button>

            {open && (
              <div
                className="position-absolute end-0 mt-2 rounded-3 shadow-lg overflow-hidden"
                style={{
                  minWidth: "190px",
                  background: "#1f1f1f",
                  border: "1px solid rgba(255,255,255,0.06)",
                  zIndex: 1050,
                }}
                role="menu"
              >
                <Link
                  to="/profile"
                  className="dropdown-item text-white px-3 py-2 text-start"
                >
                  Profile
                </Link>
                <Link
                  to="/signin"
                  className="dropdown-item text-white px-3 py-2 text-start"
                >
                  Sign In
                </Link>
                <button
                  type="button"
                  className="dropdown-item text-white px-3 py-2 text-start w-100"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .dropdown-item { transition: background-color 0.15s ease; }
        .dropdown-item:hover { background-color: rgba(255,255,255,0.08); }
      `}</style>
    </header>
  );
}
