"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

export default function Contact() {
  const [subject, setSubject] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create mailto link with form data
    const mailGmail=`https://mail.google.com/mail/?view=cm&to=vishalyadav68948@gmail.com&su=${encodeURIComponent(
      `${subject}`,
    )}&body=${encodeURIComponent(`Email: ${email}\n\n${message}`)}`

    // Open the email client
    window.open(mailGmail, '_blank');

    // Show a success toast
    toast({
      title: "Email Client Opened",
      description: "Your default email client has been opened with your message.",
    })

    // Don't reset the form immediately in case the user needs to come back
    setIsSubmitting(true)

    // Reset form after a delay (in case user comes back to the page)
    setTimeout(() => {
      setSubject("")
      setEmail("")
      setMessage("")
      setIsSubmitting(false)
    }, 5000)
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Contact Me</h2>
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border rounded"
              disabled={isSubmitting}
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="w-full p-2 border rounded"
              disabled={isSubmitting}
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full p-2 border rounded"
              disabled={isSubmitting}
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Opening Email Client..." : "Send Message"}
            </Button>
          </motion.div>
          <p className="text-sm text-center text-muted-foreground mt-4">
            Your message will be sent to: vishalyadav68948@gmail.com
          </p>
          <p className="text-xs text-center text-muted-foreground">(This will open your default email client)</p>
        </motion.form>
      </div>
    </section>
  )
}

