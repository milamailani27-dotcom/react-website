import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Tutor from "../components/Tutor"
import Partners from "../components/Partners"
import Contact from "../components/Contact"
import Coursecard from "../components/Coursecard"

import {
  tutorList,
  tutorSection
} from "../data/TutorSection"

import {
  partnersList,
  partnersSection
} from "../data/PartnersSection"

import { contactSection } from "../data/ContactSection"

import "../styles/Home.css"

const courses = [
  {
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    category: "Programming",
    title: "Web Development",
    description: "Belajar membuat website modern menggunakan HTML, CSS, JavaScript, dan React.",
    level: "Beginner"
  },
  {
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800",
    category: "Design",
    title: "UI/UX Design",
    description: "Pelajari cara membuat desain aplikasi dan website yang menarik.",
    level: "Beginner"
  },
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    category: "Business",
    title: "Digital Marketing",
    description: "Pelajari strategi pemasaran digital untuk mengembangkan bisnis.",
    level: "Intermediate"
  }
]

const testimonials = [
  {
    name: "Alya Putri",
    job: "Student",
    review: "Belajar di MilaCourse sangat menyenangkan. Materinya mudah dipahami dan membantu saya belajar skill baru.",
    initial: "A"
  },
  {
    name: "Rizky Pratama",
    job: "Web Developer",
    review: "Materi pembelajarannya praktis dan cocok untuk pemula yang ingin mulai belajar programming.",
    initial: "R"
  },
  {
    name: "Nadia Safitri",
    job: "UI Designer",
    review: "Saya jadi lebih memahami desain UI/UX dan bisa mengembangkan kemampuan desain saya.",
    initial: "N"
  }
]

function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <section id="home" className="hero">
          <div className="hero-container">
            <div className="hero-content">
              <span className="hero-label">
                ✨ Your Future Starts Here
              </span>

              <h1>
                Belajar Skill Baru,
                <span> Wujudkan Masa Depanmu!</span>
              </h1>

              <p>
                Kembangkan kemampuanmu bersama MilaCourse.
                Temukan kelas terbaik dan belajar langsung
                dari mentor berpengalaman.
              </p>

              <div className="hero-buttons">
                <a href="#courses" className="btn-primary">
                  Mulai Belajar →
                </a>

                <a href="#about" className="btn-secondary">
                  Tentang Kami
                </a>
              </div>

              <div className="hero-trust">
                <span>✓ Materi berkualitas</span>
                <span>✓ Mentor profesional</span>
              </div>
            </div>

            <div className="hero-image">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000"
                alt="Students learning together"
              />
              <div className="floating-card">
                🎓 Belajar kapan saja!
              </div>
            </div>
          </div>
        </section>

        {/* STATISTICS */}
        <section className="statistics" id="about">
          <div className="stats-container">
            <div className="stat-item">
              <h2>1.2K+</h2>
              <p>Happy Students</p>
            </div>

            <div className="stat-item">
              <h2>50+</h2>
              <p>Online Courses</p>
            </div>

            <div className="stat-item">
              <h2>20+</h2>
              <p>Expert Mentors</p>
            </div>

            <div className="stat-item">
              <h2>95%</h2>
              <p>Student Satisfaction</p>
            </div>
          </div>
          <p className="stats-note">
            Angka di atas merupakan contoh konten, sesuaikan dengan data sebenarnya.
          </p>
        </section>

        {/* COURSES */}
        <section id="courses" className="courses-section">
          <div className="section-heading">
            <span>OUR COURSES</span>
            <h2>Explore Our Courses</h2>
            <p>
              Temukan kelas yang sesuai dengan minat dan tujuan belajarmu.
            </p>
          </div>

          <div className="course-grid">
            {courses.map((course, index) => (
              <Coursecard key={index} {...course} />
            ))}
          </div>
        </section>

        {/* TUTORS */}
        <section id="tutors" className="tutors-section">
          <div className="section-heading">
            <span>OUR MENTORS</span>
            <h2>Learn From The Best</h2>
            <p>
              Belajar dan berkembang bersama mentor berpengalaman.
            </p>
          </div>

          <Tutor tutorList={tutorList} />
        </section>

        {/* PARTNERS */}
        <section id="partners" className="partners-section">
          <div className="section-heading">
            <span>OUR PARTNERS</span>
            <h2>Our Trusted Partners</h2>
            <p>
              Bersama membangun pendidikan digital yang lebih baik.
            </p>
          </div>

          <Partners partnersList={partnersList} />
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="testimonials-section">
          <div className="section-heading">
            <span>TESTIMONIALS</span>
            <h2>What Our Students Say</h2>
            <p>
              Cerita dan pengalaman belajar bersama MilaCourse.
            </p>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((item, index) => (
              <div className="testimonial-card" key={index}>
                <div className="stars">★★★★★</div>

                <p>"{item.review}"</p>

                <div className="student-profile">
                  <div className="student-avatar">
                    {item.initial}
                  </div>

                  <div>
                    <h4>{item.name}</h4>
                    <span>{item.job}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="stats-note">
            Testimoni ini contoh desain. Ganti dengan ulasan siswa asli jika tersedia.
          </p>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact-section">
          <div className="contact-content">
            <span>START YOUR JOURNEY</span>
            <h2>Siap Mengembangkan Skill Kamu?</h2>
            <p>
              Mulai perjalanan belajarmu bersama MilaCourse hari ini.
            </p>
            <a href="mailto:hello@milacourse.com">
              Hubungi Kami →
            </a>
          </div>
        </section>
      </main>

      <Contact contactSection={contactSection} />
      <Footer />
    </>
  )
}

export default Home