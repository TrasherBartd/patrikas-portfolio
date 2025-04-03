
import { useState } from "react";

export default function Portfolio() {
  const [lang, setLang] = useState("lt");
  const [darkMode, setDarkMode] = useState(false);

  const aboutText = {
    lt: `Savarankiškai išmokęs grafinio dizaino ir svetainių kūrimo pagrindus, šiuo metu dirbu su moderniausiomis technologijomis, kad padėčiau klientams perteikti jų vertę aiškiai ir estetiškai.

Mano stiprybė – kūrybos ir technologijų sintezė.`,
    en: `Self-taught in graphic design and website development, I now work with modern technologies to help clients communicate their value clearly and beautifully.

My strength lies in the fusion of creativity and technology.`,
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white px-6 py-12 font-sans transition-colors">
        <div className="flex justify-end mb-4 gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-base px-4 py-2 border rounded shadow bg-white text-gray-700 dark:bg-gray-800 dark:text-white hover:ring-2 hover:ring-indigo-300 transition"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          <button
            onClick={() => setLang(lang === "lt" ? "en" : "lt")}
            className="text-base text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded shadow transition"
          >
            {lang === "lt" ? "EN" : "LT"}
          </button>
        </div>

        <header className="text-center mb-16 fade-in">
          <h1 className="text-5xl font-bold text-indigo-700 dark:text-indigo-300 mb-2">Patrikas Bartanovičius</h1>
          <p className="text-xl">{lang === "lt" ? "Grafinis ir svetainių dizaineris" : "Graphic & Web Designer"}</p>
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

        <section className="max-w-4xl mx-auto mb-16 fade-in text-center">
          <h2 className="text-3xl font-bold text-indigo-700 dark:text-indigo-300 mb-6">
            {lang === "lt" ? "Atsiliepimai" : "Testimonials"}
          </h2>
          <div className="grid gap-6 text-left">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow border border-gray-200 dark:border-gray-700">
              <p className="italic mb-2 text-gray-800 dark:text-gray-100">
                {lang === "lt"
                  ? "Labai patiko hoodie dizainas – viskas aišku, greita ir kokybiška."
                  : "Really liked the hoodie design – clear, fast, and high quality."}
              </p>
              <p className="font-semibold text-indigo-600 dark:text-indigo-300">Tomas</p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow border border-gray-200 dark:border-gray-700">
              <p className="italic mb-2 text-gray-800 dark:text-gray-100">
                {lang === "lt"
                  ? "Dizainas mūsų kavinei gavosi labai šiltas ir jaukus. Ačiū!"
                  : "Design for our café turned out warm and inviting. Thank you!"}
              </p>
              <p className="font-semibold text-indigo-600 dark:text-indigo-300">Lilija</p>
            </div>
          </div>
        </section>

        <footer className="text-center text-sm text-gray-500 dark:text-gray-400 mt-24 border-t pt-6">
          © {new Date().getFullYear()} Patrikas Bartanovičius. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
