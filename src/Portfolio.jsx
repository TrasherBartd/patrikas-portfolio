
import { useState, useEffect } from "react";

const projects = [
  {
    title: "Hoodie dizainas Etsy parduotuvei",
    description: "Sukurtas dizainas „Print on Demand“ verslui – minimalistinis ir žaismingas sprendimas socialiniams tinklams.",
    image: "/hoodie.jpg",
    type: "design"
  },
  {
    title: "Kavos reklama šeimos kavinei",
    description: "Estetinis vizualas, skirtas kavos reklamai socialiniuose tinkluose. Sukurta šeimos užsakovams.",
    image: "/coffee.jpg",
    type: "design"
  },
  {
    title: "?",
    description: "Daugiau projektų netrukus 👀",
    image: "",
    type: "web"
  }
];

export default function Portfolio() {
  const [lang, setLang] = useState("lt");
  const [darkMode, setDarkMode] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const [showOverlay, setShowOverlay] = useState(true);

  const handleServiceSelect = (type) => {
    if (selectedServices.includes(type)) {
      setSelectedServices(selectedServices.filter((t) => t !== type));
    } else {
      setSelectedServices([...selectedServices, type]);
    }
  };

  const aboutText = {
    lt: `Savarankiškai išmokęs grafinio dizaino ir svetainių kūrimo pagrindus, šiuo metu dirbu su moderniausiomis technologijomis, kad padėčiau klientams perteikti jų vertę aiškiai ir estetiškai.

Mano stiprybė – kūrybos ir technologijų sintezė.`,
    en: `Self-taught in graphic design and website development, I now work with modern technologies to help clients communicate their value clearly and beautifully.

My strength lies in the fusion of creativity and technology.`,
  };

  return (
    <>
      {showOverlay && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl text-center max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold mb-4 text-indigo-700 dark:text-indigo-300">
              {lang === "lt" ? "Kuo domitės?" : "What are you interested in?"}
            </h2>
            <div className="space-y-3 mb-6">
              <button
                onClick={() => handleServiceSelect("design")}
                className={`w-full px-4 py-2 rounded-full border ${
                  selectedServices.includes("design") ? "bg-indigo-600 text-white" : "bg-white text-indigo-700"
                }`}
              >
                🎨 {lang === "lt" ? "Grafinis dizainas" : "Graphic Design"}
              </button>
              <button
                onClick={() => handleServiceSelect("web")}
                className={`w-full px-4 py-2 rounded-full border ${
                  selectedServices.includes("web") ? "bg-indigo-600 text-white" : "bg-white text-indigo-700"
                }`}
              >
                💻 {lang === "lt" ? "Svetainių kūrimas" : "Website Design"}
              </button>
            </div>
            <button
              onClick={() => setShowOverlay(false)}
              className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full"
            >
              {lang === "lt" ? "Tęsti" : "Continue"}
            </button>
          </div>
        </div>
      )}

      <div className={darkMode ? "dark" : ""}>
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white px-6 py-12 font-sans transition-colors">
          <header className="text-center mb-12 fade-in">
            <h1 className="text-5xl font-bold text-indigo-700 dark:text-indigo-300">Patrikas Bartanovičius</h1>
            <p className="text-xl mt-2">{lang === "lt" ? "Grafinis ir svetainių dizaineris" : "Graphic & Web Designer"}</p>
          </header>

          <section className="max-w-6xl mx-auto mb-12 fade-in">
            <h2 className="text-3xl font-bold text-center text-indigo-700 dark:text-indigo-300 mb-8">
              {lang === "lt" ? "Įvykdyti projektai" : "Completed Projects"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {projects.map((project, idx) => (
                <div key={idx} className="bg-white/80 dark:bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-shadow">
                  {project.image && (
                    <img src={project.image} alt={project.title} className="w-full h-[460px] object-cover" />
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-300 mb-2 flex justify-between items-center">
                      {project.title}
                      {selectedServices.includes(project.type) && (
                        <span className="text-xs text-white bg-indigo-500 rounded-full px-3 py-1 ml-2">
                          {lang === "lt" ? "Tinka jums" : "Relevant"}
                        </span>
                      )}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
