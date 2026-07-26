"use client"

import { useEffect } from "react"

// Progressive enhancement: content is visible by default; once JS runs we gate
// [data-reveal] elements behind an IntersectionObserver-driven rise animation.
export default function Reveal() {
  useEffect(() => {
    document.documentElement.classList.add("js")
    const els = document.querySelectorAll("[data-reveal]")
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in")
            io.unobserve(e.target)
          }
        }
      },
      { threshold: 0.12 },
    )
    els.forEach((el) => {
      // already on screen when JS kicks in → show instantly, no pop
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("in")
      else io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  return null
}
