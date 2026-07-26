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
              <p>
                Engineer turned Product Lead with 1.5+ years building and shipping production communication systems on
                Spring Boot and microservices. Blends hands-on backend depth (REST APIs, Redis, big-data query
                optimization, CI/CD) with product ownership across roadmap, delivery, and customer success.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <h3 className="text-lg font-semibold">Product Lead — Biocipher Technology Pvt. Ltd.</h3>
                <p className="text-sm text-muted-foreground">Gurugram, Onsite | Apr 2026 – Present</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Promoted to lead the voice marketing product, owning roadmap, prioritization, and delivery for a team of 5 engineers</li>
                  <li>Led development of a smart CPaaS panel powering pixabits.in and pixabits.ai, unifying voice, messaging, and AI communication services</li>
                  <li>Built AI-powered agentic voice calling and chat alongside IVR, OBD campaigns, voice conferencing, and voice OTP, shipping new features on a weekly release cycle</li>
                  <li>Owned customer requirements, onboarding, and issue resolution, cutting average resolution time by 30% while sustaining a 95% on-time release rate</li>
                </ul>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold">System Engineer — Biocipher Technology Pvt. Ltd.</h3>
                <p className="text-sm text-muted-foreground">Gurugram, Onsite | Feb 2025 – Apr 2026</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Optimized queries on a big-data system handling 1.7 billion+ records, enabling fast data retrieval through indexing and query tuning</li>
                  <li>Designed and optimized Spring Boot REST APIs, improving response time by 15% via database indexing and Redis caching</li>
                  <li>Built a daily CDR tracking system monitoring pending and completed call records for accurate reporting</li>
                  <li>Monitored production servers and resolved critical downtime issues, maintaining system reliability and uptime</li>
                </ul>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold">Software Engineer Intern — Evren Global Solutions</h3>
                <p className="text-sm text-muted-foreground">Delhi, Remote | Oct 2024 – Nov 2024</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Built RESTful APIs using Spring Boot and implemented JWT authentication with Spring Security</li>
                  <li>Created a CI/CD pipeline using Jenkins and Docker, reducing deployment time by 10%</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Frontend Developer Intern — Opt2Deal</h3>
                <p className="text-sm text-muted-foreground">Gurugram, Remote | Jun 2023 – Jul 2023</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Developed responsive React.js components for an e-commerce platform</li>
                  <li>Implemented client-side form validation and state management, cutting invalid submissions and support tickets</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold">The NorthCap University | Gurugram, Haryana</h3>
              <p>Bachelor of Technology in Computer Engineering | July 2025</p>
              <p>GPA: 7.5/10</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6">
                <li><strong>Languages:</strong> Java 17, JavaScript, SQL, HTML, CSS</li>
                <li><strong>Frameworks &amp; Libraries:</strong> Spring Boot, Spring Security, Spring Cloud, React.js, Next.js</li>
                <li><strong>Databases:</strong> MySQL, MongoDB, Redis</li>
                <li><strong>Tools &amp; Technologies:</strong> Git, GitHub, Docker, AWS, Jenkins, Maven</li>
                <li><strong>AI-Assisted Development:</strong> Claude (Claude Code), ChatGPT, Perplexity, Vercel — orchestrated AI workflows for rapid, robust development</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Gurugram, Haryana</p>
              <p>+91 8901056306</p>
              <p>vishalyadav68948@gmail.com</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
