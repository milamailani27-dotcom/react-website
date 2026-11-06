import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


import { homeSection } from "../data/HomeSection"
import { coursesSection } from "../data/CoursesSection"
import { tutorSection, tutorList } from "../data/TutorSection"
import { partnersSection, partnersList } from "../data/PartnersSection"
import { contactSection } from "../data/ContactSection"

import Tutor from "../components/Tutor"
import Partners from "../components/Partners"
import Contact from "../components/Contact"


import parse from 'html-react-parser'
import '../styles/Home.css'
function Home() {
  return (
    <>
    <Navbar />
    <div className="wrapper">
        {/* <!-- untuk home --> */}
        <section id="home">
            <img src={homeSection.image} />
            <div className="kolom">
                {parse(homeSection.content)}
            </div>
        </section>
        {/* <!-- course --> */}
        <section id="courses">
            <div className="kolom">
              {parse(coursesSection.content)}  
            </div>
        <img src={coursesSection.image} />
        </section>

        {/* <!-- untuk tutors --> */}
        <section id="tutors">
            <div className="tengah">
                <div className="kolom">
                    {parse(tutorSection.content)}
                </div>
                <Tutor tutorList={tutorList} />
            </div>
        </section>
        {/* <!-- untuk partners --> */}
        <section id="partners">
            <div className="tengah">
                <div className="kolom">
                    {parse(partnersSection.content)}
                </div>
                <Partners partnersList={partnersList} />
            </div>
        </section>
        <Contact contactSection={contactSection} />
        <Footer />
    </div>
    </>
  )
}

export default Home
