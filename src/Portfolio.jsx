
import { Mail, Github, Linkedin } from "lucide-react";
import { useState } from "react";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState("lt");
  const [feedbacks, setFeedbacks] = useState([
    {
      name: "Jonas",
      message: "Puikus bendravimas ir rezultatas! Rekomenduoju."
    },
    {
      name: "Laura",
      message: "Darbas atliktas greitai ir labai estetiškai."
    }
  ]);

  const aboutText = {
    lt: `Savarankiškai išmokęs grafinio dizaino ir svetainių kūrimo pagrindus, šiuo metu dirbu su moderniausiomis technologijomis, kad padėčiau klientams perteikti jų vertę aiškiai ir estetiškai.

Mano stiprybė – kūrybos ir technologijų sintezė.`,
    en: `Self-taught in graphic design and website development, I now work with modern technologies to help clients communicate their value clearly and beautifully.

My strength lies in the fusion of creativity and technology.`
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .fade-in {
            animation: fadeInUp 0.8s ease-out both;
          }
        `}
      </style>
      <div className="min-h-screen bg-gradient-to-br from-[#f7f9fc] to-[#e4e7ec] text-gray-900 px-6 py-12 font-sans">
        <div className="flex justify-end max-w-6xl mx-auto mb-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-sm px-3 py-1 border rounded shadow bg-white text-gray-700 dark:bg-gray-800 dark:text-white"
          >
            {darkMode ? 'Šviesi tema' : 'Tamsi tema'}
          </button>
        </div>

        <header className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left border-b pb-10">
          <div>
            <h1 className="text-6xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-transparent bg-clip-text">
              Patrikas Bartanovičius
            </h1>
            <p className="text-2xl text-gray-700">Graphic & Website Designer</p>
            <a
              href="/Patrikas_Bartanovicius_CV_With_Top_Contact.pdf"
              download
              className="inline-block mt-4 text-sm text-indigo-600 border border-indigo-500 px-4 py-2 rounded hover:bg-indigo-50 transition"
            >
              📄 Atsisiųsti CV
            </a>
          </div>
          <div className="w-36 h-36 rounded-full bg-gradient-to-tr from-[#cdddfc] to-[#f4e7ff] shadow-xl border-4 border-white"></div>
        </header>

        <section className="mt-20 max-w-5xl mx-auto fade-in">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-4xl font-bold text-indigo-700">{lang === 'lt' ? 'Apie mane' : 'About Me'}</h2>
            <button
              onClick={() => setLang(lang === "lt" ? "en" : "lt")}
              className="text-sm text-indigo-600 border px-3 py-1 rounded hover:bg-indigo-50"
            >
              {lang === "lt" ? "EN" : "LT"}
            </button>
          </div>
          <p className="text-lg leading-relaxed text-gray-800 bg-white p-6 rounded-2xl shadow-xl border border-gray-200 whitespace-pre-line">
            {aboutText[lang]}
          </p>
        </section>
      </div>
    </div>
  );
}
