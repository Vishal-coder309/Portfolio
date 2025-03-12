import imaze from "../../public/images/zinmay.png"

export interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  image: string
  link: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Weather App",
    description:
      "Developed an intuitive weather application using React and modern web technologies. Features include real-time weather data retrieval, city-based search functionality, and a sleek dark mode interface. The app demonstrates clean architecture, responsive design principles, and seamless user experience with immediate weather information updates.",
    tags: ["React", "API Integration", "Dark Mode", "Responsive Design"],
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2070&auto=format&fit=crop",
    link: "https://weather-app-demo.vercel.app/",
  },
  {
    id: 2,
    title: "Zinmay",
    description:
      "Designed a responsive, mobile-friendly website for Zinmay during my internship at Evren Global Solutions. Integrated navigation menus, product listings, and contact forms for a user-friendly experience.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    image: `${imaze}`,
    link: "https://zinmay.io",
  },
  {
    id: 3,
    title: "Movie Catalogue App",
    description:
      "Developed a cross-platform app for browsing movies and web series using Flutter and the TMDB API. Designed a responsive UI for Android and iOS, providing a seamless user experience with features for discovering trending movies, viewing details, and searching for specific titles.",
    tags: ["Flutter", "Dart", "TMDB API", "Cross-platform"],
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop",
    link: "https://github.com/Vishal-coder309/Flutter-Movie_app",
  },
]

