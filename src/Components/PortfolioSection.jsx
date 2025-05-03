import React from "react";
import PortfolioCard from "./PortfolioCard";
import portfolio1 from "./assets/portfolio1.jpg";
import portfolio2 from "./assets/portfolio2.jpg";
import portfolio3 from "./assets/portfolio3.jpg";
import portfolio4 from "./assets/portfolio4.jpg";
import portfolio5 from "./assets/portfolio5.jpg";
import portfolio6 from "./assets/portfolio6.jpg";
import portfolio7 from "./assets/portfolio7.jpg";

const PortfolioSection = ({ theme }) => {
  const portfolioData = [
    {
      image: portfolio1,
      title: "EKSIS - Ekstrakurikuler and Seni Budaya Integritas Sistem",
      description:
        "A Website using React as Front-End styling with Tailwind CSS and Laravel as Back-End, built to manage attendance, achievements, and activities.",
      tools: ["Laravel", "React", "Tailwind", "PHP", "Inertia", "CSS3", "JavaScript", "PostgreSQL"],
      privateProject: true,
    },
    {
      image: portfolio2,
      title: "Cashier App - A Point-of-sale (POS) web application",
      description:
        "Kasir App is a point-of-sale (POS) web application designed to manage product ordering and transactions. It supports two main roles: Admin and Cashier Staff.",
      tools: ["Laravel", "Bootstrap", "PHP", "HTML5", "CSS3", "JavaScript", "MySQL"],
      githubLink: "https://github.com/MuhammadAzqiMadaniArdan/Final_KasirApp",
    },
    {
      image: portfolio3,
      title: "Unity Essential - Learning Project of Unity Essential",
      description:
        "A Game using Unity as Game Engine code with C# and deploy game with WebGL to UnityPlay.",
      tools: ["Unity", "CSharp", "WebGL"],
      githubLink: "https://github.com/MuhammadAzqiMadaniArdan/UnityEssentialsProject",
      playLink: "https://play.unity.com/en/games/10a9be6a-35c1-4186-be39-7ca425f2a2b9/sugurugu-essential-project",
    },
    {
      image: portfolio4,
      title: "The Destroy Village - Turn-Based RPG Unity Game",
      description:
        "A Game using Unity as Game Engine code with C# and Make a animation with DoTween and make a complex feature like quest system, turn-based system and RPG system.",
      tools: ["Unity", "CSharp", "WebGL"],
      privateProject: true,
    },
    {
      image: portfolio5,
      title: "Flutter Profile – Portfolio Website using Flutter",
      description:
        "Flutter Profile is a responsive and modern portfolio website built using the Flutter framework, designed to showcase personal or professional profiles. It provides a smooth and mobile-first experience, featuring clean UI components, animated transitions, and easy customization.",
      tools: ["Flutter", "Dart"],
      githubLink: "https://github.com/MuhammadAzqiMadaniArdan/Flutter-Profile",
    },
    {
      image: portfolio6,
      title: "Legalisasi App – Cooperation Agreement (SPK) management system",
      description:
        "Legalisasi App is a Laravel-based web application built to manage Cooperation Agreements (SPK) and handle server service orders efficiently. This system streamlines the process of creating, approving, and tracking SPK documents while also managing incoming service requests related to server or IT infrastructure.",
      tools: ["PHP", "Laravel", "HTML5", "Jquery", "Bootstrap", "JavaScript", "MySQL"],
      privateProject: true,
    },
    {
      image: portfolio7,
      title: "Buku Tamu – Guest Book for Visitors to Data Centers",
      description:
        "A responsive web application built to digitally manage guest entries and visits to data centers. This project uses Laravel as the framework with PHP as the language and helps streamline visitor registration, check-in/check-out logging, and reporting, providing a secure and efficient alternative to traditional paper-based guest books.",
      tools: ["PHP", "Laravel", "HTML5", "Jquery", "Bootstrap", "JavaScript", "MySQL"],
      githubLink: "https://github.com/MuhammadAzqiMadaniArdan/bukutamu",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
      {portfolioData.map((portfolio, idx) => (
        <PortfolioCard
          key={idx}
          theme={theme}
          image={portfolio.image}
          title={portfolio.title}
          description={portfolio.description}
          tools={portfolio.tools}
          githubLink={portfolio.githubLink}
          playLink={portfolio.playLink}
          privateProject={portfolio.privateProject}
        />
      ))}
    </div>
  );
};

export default PortfolioSection;
