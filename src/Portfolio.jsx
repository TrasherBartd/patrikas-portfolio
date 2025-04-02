
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
    title: "?",
    description: "Daugiau projektų netrukus 👀",
    image: "",
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
    <>
      <style>{`
        .fade-in {
          opacity: 0;
          animation: fadeInUp 1s ease-out forwards;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className={darkMode ? "dark" : ""}>
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white px-6 py-12 font-sans transition-colors">
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
            <h1 className="text-5xl font-bold text-indigo-700 dark:text-indigo-300">Patrikas Bartanovičius</h1>
            <p className="text-xl mt-2">{lang === "lt" ? "Grafinis ir svetainių dizaineris" : "Graphic & Web Designer"}</p>
    <div className="mt-3">
      <button
        onClick={() => {
          navigator.clipboard.writeText("patrikasbartanovicius@gmail.com");
          alert(lang === "lt" ? "El. paštas nukopijuotas!" : "Email copied!");
        }}
        className="text-sm bg-indigo-100 hover:bg-indigo-200 text-indigo-700 px-4 py-1 rounded-full transition"
      >
        {lang === "lt" ? "Kopijuoti el. paštą" : "Copy Email"}
      </button>
    </div>
          </header>

          <section className="max-w-4xl mx-auto mb-16 fade-in">
            <h2 className="text-3xl font-bold mb-4 text-indigo-700 dark:text-indigo-300">
              {lang === "lt" ? "Apie mane" : "About Me"}
            </h2>
            <p className="text-lg bg-white dark:bg-gray-900 p-6 rounded-xl shadow border border-gray-200 dark:border-gray-700 whitespace-pre-line">
              {aboutText[lang]}
            </p>
          </section>

          <section className="max-w-5xl mx-auto mb-16 fade-in">
            <h2 className="text-3xl font-bold text-center text-indigo-700 dark:text-indigo-300 mb-8">
              {lang === "lt" ? "Įgūdžiai" : "Skills"}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {skills.map((skill, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-900 border border-indigo-100 dark:border-indigo-800 p-6 rounded-xl text-center shadow-md hover:scale-105 transition-transform hover:shadow-lg">
                  <div className="text-3xl mb-2">{skill.emoji}</div>
                  <p className="font-medium text-indigo-800 dark:text-indigo-200">{skill.label}</p>
                </div>
              ))}
            </div>
          </section>

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
                    <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-300 mb-2">{project.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="max-w-4xl mx-auto mb-24 text-center fade-in">
            <h2 className="text-3xl font-bold text-indigo-700 dark:text-indigo-300 mb-4">
              {lang === "lt" ? "Kontaktai" : "Contact"}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              {lang === "lt"
                ? "Susisiekime – atsakysiu kaip įmanoma greičiau 📬"
                : "Let's get in touch – I’ll get back to you shortly 📬"}
            </p>
            <button
              onClick={() => {
                navigator.clipboard.writeText("patrikasbartanovicius@gmail.com");
                alert(lang === "lt" ? "El. paštas nukopijuotas!" : "Email copied!");
              }}
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-indigo-700 transition cursor-pointer"
            >
              patrikasbartanovicius@gmail.com
            </button>
          </section>

          <section className="max-w-4xl mx-auto mb-24 text-center fade-in">
            <h2 className="text-3xl font-bold text-indigo-700 dark:text-indigo-300 mb-6">
              {lang === "lt" ? "Atsiliepimai" : "Testimonials"}
            </h2>
            <div className="grid gap-6 text-left">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow border border-gray-200 dark:border-gray-700">
                <p className="text-gray-800 dark:text-gray-100 italic mb-2">
                  {lang === "lt"
                    ? "Labai patiko hoodie dizainas, viskas aišku, greita ir kokybiška. Tikrai rekomenduoju."
                    : "Really liked the hoodie design – clear, fast, and high quality. Highly recommend."}
                </p>
                <p className="font-semibold text-indigo-600 dark:text-indigo-300">Tomas – {lang === "lt" ? "Užsakė hoodie dizainą" : "Ordered the hoodie design"}</p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow border border-gray-200 dark:border-gray-700">
                <p className="text-gray-800 dark:text-gray-100 italic mb-2">
                  {lang === "lt"
                    ? "Ačiū už sukurtą kavos reklamą mūsų šeimos kavinei – šilta, estetiška ir labai gražu!"
                    : "Thanks for the coffee promo design for our family café – warm, aesthetic and beautiful!"}
                </p>
                <p className="font-semibold text-indigo-600 dark:text-indigo-300">Lilija – {lang === "lt" ? "Kavos posteriui" : "Coffee poster"}</p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow border border-gray-200 dark:border-gray-700">
                <p className="text-gray-800 dark:text-gray-100 italic mb-2">
                  {lang === "lt"
                    ? "Greitas bendravimas, vizualai atitiko mūsų prekės ženklą – viskas super."
                    : "Fast communication, visuals matched our brand – everything was great."}
                </p>
                <p className="font-semibold text-indigo-600 dark:text-indigo-300">Julius</p>
              </div>
            </div>
          </section>

<section className="max-w-3xl mx-auto mt-16 text-center fade-in">
  <h2 className="text-3xl font-bold text-indigo-700 dark:text-indigo-300 mb-4">
    {lang === "lt" ? "Palikite atsiliepimą" : "Leave a Testimonial"}
  </h2>
  <form
    onSubmit={(e) => {
      e.preventDefault();
      alert(lang === "lt" ? "Atsiliepimas išsiųstas!" : "Testimonial sent!");
      e.target.reset();
    }}
    className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 space-y-4"
  >
    <input
      type="text"
      name="name"
      placeholder={lang === "lt" ? "Tavo vardas" : "Your name"}
      required
      className="w-full p-2 border rounded focus:outline-none"
    />
    <textarea
      name="message"
      placeholder={lang === "lt" ? "Atsiliepimo tekstas..." : "Your testimonial..."}
      rows="4"
      required
      className="w-full p-2 border rounded focus:outline-none"
    />
    <button
      type="submit"
      className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition"
    >
      {lang === "lt" ? "Siųsti" : "Send"}
    </button>
  </form>
</section>


          <div className="mt-12 max-w-4xl mx-auto text-center text-gray-500 dark:text-gray-400 text-sm">
            {lang === "lt"
              ? "Esate pasiruošęs naujam projektui? Susisiekime šiandien."
              : "Ready for a new project? Let’s connect today."}
          </div>

          <footer className="text-center text-sm text-gray-500 dark:text-gray-400 mt-24 border-t pt-6">
            © {new Date().getFullYear()} Patrikas Bartanovičius. All rights reserved.
          </footer>
        </div>
      </div>
    </>
  );
}
