
import { useState } from "react";

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
          {lang === 'lt' ? 'Apie mane' : 'About Me'}
        </h1>

        <p className="max-w-3xl mx-auto text-lg text-center bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 leading-relaxed whitespace-pre-line mb-20">
          {lang === 'lt'
            ? `Savarankiškai išmokęs grafinio dizaino ir svetainių kūrimo pagrindus, šiuo metu dirbu su moderniausiomis technologijomis, kad padėčiau klientams perteikti jų vertę aiškiai ir estetiškai.

Mano stiprybė – kūrybos ir technologijų sintezė.`
            : `Self-taught in graphic design and website development, I now work with modern technologies to help clients communicate their value clearly and beautifully.

My strength lies in the fusion of creativity and technology.`}
        </p>

        <section className="max-w-5xl mx-auto mb-24">
          <h2 className="text-3xl font-bold text-center text-indigo-700 dark:text-indigo-300 mb-8">
            {lang === 'lt' ? 'Įgūdžiai' : 'Skills'}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[
              { emoji: '🎨', label: lang === 'lt' ? 'Grafinis dizainas' : 'Graphic Design' },
              { emoji: '💻', label: lang === 'lt' ? 'Svetainių dizainas' : 'Website Design' },
              { emoji: '🧠', label: 'C#' },
              { emoji: '🤖', label: lang === 'lt' ? 'Dirbtinis intelektas' : 'AI Tools' }
            ].map((skill, idx) => (
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
      </div>
    </div>
  );
}
