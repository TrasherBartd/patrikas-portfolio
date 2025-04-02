
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
            onClick={() => setLang(lang === 'lt' ? 'en' : 'lt')}
            className="text-sm px-3 py-1 border rounded shadow bg-white text-gray-700 dark:bg-gray-800 dark:text-white"
          >
            {lang === 'lt' ? 'EN' : 'LT'}
          </button>
        </div>

        <h1 className="text-4xl font-bold text-center mb-10 text-indigo-700 dark:text-indigo-300">
          {lang === 'lt' ? 'Projektai' : 'Projects'}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-shadow">
              <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-300 mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
