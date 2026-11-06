import { useState } from "react"
import "../styles/Navbar.css"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="logo" onClick={closeMenu}>
          Mila<span>Course.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#courses" onClick={closeMenu}>Courses</a></li>
          <li><a href="#tutors" onClick={closeMenu}>Mentors</a></li>
          <li><a href="#testimonials" onClick={closeMenu}>Reviews</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          <li>
            <a href="#courses" className="nav-button" onClick={closeMenu}>
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar