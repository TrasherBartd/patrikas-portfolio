
import { useState } from "react";

const projects = [
  {
    title: "Hoodie dizainas Etsy parduotuvei",
    description:
      "Sukurtas dizainas „Print on Demand“ verslui – minimalistinis ir žaismingas sprendimas socialiniams tinklams.",
    image: "/hoodie.jpg",
  },
  {
    title: "Kavos reklama šeimos kavinei",
    description:
      "Estetinis vizualas, skirtas kavos reklamai socialiniuose tinkluose. Sukurta šeimos užsakovams.",
    image: "/coffee.jpg",
  },
  {
    title: "Coming soon...",
    description: "Daugiau projektų netrukus 👀",
    image: "/comingsoon.jpg",
  },
];

export default function Portfolio() {
  const [lang, setLang] = useState("lt");
  const [darkMode, setDarkMode] = useState(false);

  const aboutText = {
    lt: `Savarankiškai išmokęs grafinio dizaino ir svetainių kūrimo pagrindus, šiuo metu dirbu su moderniausiomis technologijomis, kad padėčiau klientams perteikti jų vertę aiškiai ir estetiškai.

Mano stiprybė – kūrybos ir technologijų sintezė.`,
    en: `Self-taught in graphic design and website development, I now work with modern technologies to help clients communicate their value clearly and beautifully.

My strength lies in the fusion of creativity and technology.`,
  };

  const skills = [
    { emoji: "🎨", label: lang === "lt" ? "Grafinis dizainas" : "Graphic Design" },
    { emoji: "💻", label: lang === "lt" ? "Svetainių dizainas" : "Website Design" },
    { emoji: "🧠", label: "C#" },
    { emoji: "🌐", label: "HTML" },
    { emoji: "🎯", label: "CSS" },
    { emoji: "🛠️", label: lang === "lt" ? "Dizaino įrankiai" : "Design Tools" },
  ];

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gradient-to-br from-[#f7f9fc] to-[#e4e7ec] text-gray-900 dark:from-gray-900 dark:to-gray-800 dark:text-white px-6 py-12 font-sans transition-colors">
        <div className="flex justify-end mb-4 gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-sm px-3 py-1 border rounded shadow bg-white text-gray-700 dark:bg-gray-800 dark:text-white"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          <button
            onClick={() => setLang(lang === "lt" ? "en" : "lt")}
            className="text-sm px-3 py-1 border rounded shadow bg-white text-gray-700 dark:bg-gray-800 dark:text-white"
          >
            {lang === "lt" ? "EN" : "LT"}
          </button>
        </div>

        <header className="text-center mb-20">
          <h1 className="text-5xl font-bold text-indigo-700 dark:text-indigo-300">Patrikas</h1>
          <p className="text-xl mt-2">{lang === "lt" ? "Grafinis ir svetainių dizaineris" : "Graphic & Web Designer"}</p>
        </header>

        <section className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl font-bold mb-4 text-indigo-700 dark:text-indigo-300">
            {lang === "lt" ? "Apie mane" : "About Me"}
          </h2>
          <p className="text-lg bg-white dark:bg-gray-900 p-6 rounded-xl shadow border border-gray-200 dark:border-gray-700 whitespace-pre-line">
            {aboutText[lang]}
          </p>
        </section>

        <section className="max-w-5xl mx-auto mb-24">
          <h2 className="text-3xl font-bold text-center text-indigo-700 dark:text-indigo-300 mb-8">
            {lang === "lt" ? "Įgūdžiai" : "Skills"}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-900 border border-indigo-100 dark:border-indigo-800 p-6 rounded-xl text-center shadow-md hover:scale-105 transition-transform hover:shadow-lg"
              >
                <div className="text-3xl mb-2">{skill.emoji}</div>
                <p className="font-medium text-indigo-800 dark:text-indigo-200">{skill.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto mb-24">
          <h2 className="text-3xl font-bold text-center text-indigo-700 dark:text-indigo-300 mb-8">
            {lang === "lt" ? "Įvykdyti projektai" : "Completed Projects"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-shadow">
                <img src={project.image} alt={project.title} className="w-full h-72 object-cover" />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-300 mb-2">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="text-center text-sm text-gray-500 dark:text-gray-400 mt-24 border-t pt-6">
          © {new Date().getFullYear()} Patrikas. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
