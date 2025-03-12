"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Resume() {
  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Resume</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <Card>
            <CardHeader>
              <CardTitle>Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6">
                <li>Frontend Web Developer: Experienced in HTML, CSS, JavaScript, ReactJS, Java and Spring.</li>
                <li>Responsive Design: Skilled in creating visually appealing, responsive web applications.</li>
                <li>Problem-Solving: Strong analytical skills to tackle complex frontend challenges.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Experience</CardTitle>
            </CardHeader>
            <CardContent>
            <div className="mb-4">
                <h3 className="text-lg font-semibold">Biocipher Technology Private Limited | Haryana, Gurugram</h3>
                <p className="text-sm text-muted-foreground">Internship | 02/2025 - Present</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Developed and maintained backend services using Java and Spring Boot, ensuring high performance and scalability.</li>
                  <li>Integrated Asterisk for VoIP solutions, enhancing communication system efficiency.</li>
                  <li>Collaborated with cross-functional teams to design and implement secure, scalable APIs and microservices.</li>
                  <li>Optimized system performance through effective debugging and code refactoring.</li>
                </ul>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Evren Global Solutions | Haryana, Gurugram</h3>
                <p className="text-sm text-muted-foreground">Internship | 06/2024 - Present</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Developed and maintained web applications using HTML, CSS, and JavaScript.</li>
                  <li>Collaborated with cross-functional teams to design and implement new frontend features.</li>
                  <li>Ensured responsive design and cross-browser compatibility.</li>
                  <li>Worked closely with backend developers to integrate APIs and ensure seamless user experience.</li>
                </ul>
              </div>
              
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Opt2Deal</h3>
                <p className="text-sm text-muted-foreground">Internship | 06/2023 - 07/2023</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>
                    Completed comprehensive training in HTML, CSS, and JavaScript, focusing on front-end web
                    development.
                  </li>
                  <li>Gained hands-on experience in creating responsive web pages using HTML5 and CSS3.</li>
                  <li>
                    Developed interactive web features using JavaScript, including form validation and dynamic content
                    updates.
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>CSR</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Pawzz NGO</h3>
                <p className="text-sm text-muted-foreground">Social Work | 03/2024 - 07/2024</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Organized and executed fundraising campaigns to support the care and wellbeing of dogs.</li>
                  <li>
                    Engaged with community members and local businesses to solicit donations and raise awareness about
                    the NGO's mission.
                  </li>
                  <li>
                    Assisted in planning and coordinating fundraising events, including logistics, promotions, and
                    volunteer coordination.
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold">The Northcap University | Gurugram, Haryana</h3>
              <p>Computer Engineering | 07/2025</p>
              <p>GPA: 7.5</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Java, CSS3, HTML5, JavaScript, Flutter, Asterisk, SpringBoot, Git, MongoDB, SQL</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Gurugram, Haryana</p>
              <p>+91 9466902513</p>
              <p>vishalyadav68948@gmail.com</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

