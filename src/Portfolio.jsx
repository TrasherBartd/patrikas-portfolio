
// FINAL FULL VERSION with all working components, no export issues, includes all sections
import { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState("lt");

  const aboutText = {
    lt: `Esu savarankiškai išmokęs grafinio dizaino ir svetainių kūrimo pagrindus. Naudoju modernius metodus, kad padėčiau klientams perteikti savo vertę aiškiai, estetiškai ir profesionaliai.`,
    en: `I am a self-taught graphic designer and website creator. I use modern tools to help clients present their value clearly, aesthetically, and professionally.`
  };

  const whyMeText = {
    lt: `Skirtingai nei daugelis, nenaudoju tik dirbtinio intelekto generacijų. Derinu grafinį dizainą ir AI įrankius tam, kad pasiūlyčiau kūrybiškus, greitus ir kokybiškus rezultatus už prieinamą kainą.`,
    en: `Unlike many, I don’t rely solely on AI generations. I combine graphic design with AI tools to deliver creative, fast, and quality results at a fair price.`
  };

  const feedbacks = [
    { name: "Tomas", message: lang === "lt" ? "Užsakiau hoodie dizainą – gavau net geriau nei tikėjausi. Rekomenduoju!" : "Ordered hoodie design – got even better than expected. Recommend!" },
    { name: "Lilija", message: lang === "lt" ? "Ačiū už stilingą kavos posterį mūsų šeimos kavinei!" : "Thank you for the stylish coffee poster for our family cafe!" },
    { name: "Mantas", message: lang === "lt" ? "Puikus bendravimas ir greitas įvykdymas. Dar tikrai sugrįšiu!" : "Great communication and fast delivery. Will definitely return!" },
  ];

  function copyEmail() {
    navigator.clipboard.writeText("patrikasbartanovicius@gmail.com");
    alert(lang === "lt" ? "El. paštas nukopijuotas!" : "Email copied!");
  }

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}>
      <div className="max-w-5xl mx-auto px-6 py-10 font-sans">
        <div className="flex justify-between mb-4">
          <button onClick={() => setLang(lang === "lt" ? "en" : "lt")} className="text-sm border px-2 py-1 rounded">
            {lang === "lt" ? "EN" : "LT"}
          </button>
          <button onClick={() => setDarkMode(!darkMode)} className="text-sm border px-2 py-1 rounded">
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
            Patrikas Bartanovičius
          </h1>
          <p className="text-xl mt-2">{lang === "lt" ? "Grafinis ir svetainių dizaineris" : "Graphic & Website Designer"}</p>
          <p onClick={copyEmail} className="mt-2 text-indigo-600 underline cursor-pointer">
            {lang === "lt" ? "Spausti čia – el. paštas" : "Click here – email"}
          </p>
        </header>

        
<section className="mt-20 max-w-5xl mx-auto">
  <h2 className="text-4xl font-bold mb-6 text-indigo-700">{lang === 'lt' ? 'Įgūdžiai' : 'Skills'}</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
    {[
      "💻 HTML / CSS",
      "⚙️ JavaScript",
      "🎯 C#",
      "🎨 Grafinis dizainas",
      "🌐 Svetainių kūrimas",
      "🧠 UI / UX pagrindai"
    ].map((skill, idx) => (
      <div
        key={idx}
        className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center shadow-lg border border-indigo-100 hover:scale-105 transition-transform hover:shadow-xl"
      >
        <p className="text-lg font-semibold text-indigo-800 dark:text-indigo-300">{skill}</p>
      </div>
    ))}
  </div>
</section>

<section className="mb-16">

          <h2 className="text-3xl font-semibold mb-4">{lang === "lt" ? "Apie mane" : "About Me"}</h2>
          <p className="leading-relaxed">{aboutText[lang]}</p>
        </section>

        
<section className="mt-20 max-w-5xl mx-auto">
  <h2 className="text-4xl font-bold mb-6 text-indigo-700">{lang === 'lt' ? 'Įgūdžiai' : 'Skills'}</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
    {[
      "💻 HTML / CSS",
      "⚙️ JavaScript",
      "🎯 C#",
      "🎨 Grafinis dizainas",
      "🌐 Svetainių kūrimas",
      "🧠 UI / UX pagrindai"
    ].map((skill, idx) => (
      <div
        key={idx}
        className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center shadow-lg border border-indigo-100 hover:scale-105 transition-transform hover:shadow-xl"
      >
        <p className="text-lg font-semibold text-indigo-800 dark:text-indigo-300">{skill}</p>
      </div>
    ))}
  </div>
</section>

<section className="mb-16">

          <h2 className="text-3xl font-semibold mb-4">{lang === "lt" ? "Kodėl verta rinktis mane?" : "Why choose me?"}</h2>
          <p>{whyMeText[lang]}</p>
        </section>

        
<section className="mt-20 max-w-5xl mx-auto">
  <h2 className="text-4xl font-bold mb-6 text-indigo-700">{lang === 'lt' ? 'Įgūdžiai' : 'Skills'}</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
    {[
      "💻 HTML / CSS",
      "⚙️ JavaScript",
      "🎯 C#",
      "🎨 Grafinis dizainas",
      "🌐 Svetainių kūrimas",
      "🧠 UI / UX pagrindai"
    ].map((skill, idx) => (
      <div
        key={idx}
        className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center shadow-lg border border-indigo-100 hover:scale-105 transition-transform hover:shadow-xl"
      >
        <p className="text-lg font-semibold text-indigo-800 dark:text-indigo-300">{skill}</p>
      </div>
    ))}
  </div>
</section>

<section className="mb-16">

          <h2 className="text-3xl font-semibold mb-4">{lang === "lt" ? "Įvykdyti projektai" : "Completed Projects"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img src="/hoodie.jpg" alt="hoodie design" className="rounded-xl shadow w-full h-auto object-cover"/>
              <p className="mt-2 text-sm">{lang === "lt" ? "Hoodie dizainas Etsy parduotuvei (užsakovas – tiktokeris)" : "Hoodie design for Etsy shop (client – tiktoker)"}</p>
            </div>
            <div>
              <img src="/coffee.jpg" alt="coffee poster" className="rounded-xl shadow w-full h-auto object-cover"/>
              <p className="mt-2 text-sm">{lang === "lt" ? "Kavos reklamos plakatas šeimos kavinei" : "Coffee poster for a family cafe"}</p>
            </div>
            <div>
              <img src="/extra.jpg" alt="coming" className="rounded-xl shadow w-full h-auto object-cover opacity-60"/>
              <p className="mt-2 italic text-sm text-gray-500">{lang === "lt" ? "Daugiau netrukus..." : "More coming soon..."}</p>
            </div>
          </div>
        </section>

        
<section className="mt-20 max-w-5xl mx-auto">
  <h2 className="text-4xl font-bold mb-6 text-indigo-700">{lang === 'lt' ? 'Įgūdžiai' : 'Skills'}</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
    {[
      "💻 HTML / CSS",
      "⚙️ JavaScript",
      "🎯 C#",
      "🎨 Grafinis dizainas",
      "🌐 Svetainių kūrimas",
      "🧠 UI / UX pagrindai"
    ].map((skill, idx) => (
      <div
        key={idx}
        className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center shadow-lg border border-indigo-100 hover:scale-105 transition-transform hover:shadow-xl"
      >
        <p className="text-lg font-semibold text-indigo-800 dark:text-indigo-300">{skill}</p>
      </div>
    ))}
  </div>
</section>

<section className="mb-16">

          <h2 className="text-3xl font-semibold mb-4">{lang === "lt" ? "Atsiliepimai" : "Testimonials"}</h2>
          <div className="space-y-4">
            {feedbacks.map((fb, i) => (
              <div key={i} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow">
                <p className="font-semibold">{fb.name}</p>
                <p>{fb.message}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center mt-12">
          <p>{lang === "lt" ? "Susisiek: " : "Contact: "}</p>
          <p onClick={copyEmail} className="text-indigo-600 underline cursor-pointer">
            patrikasbartanovicius@gmail.com
          </p>
        </section>

        <footer className="text-center text-sm text-gray-500 mt-16 border-t pt-6">
          © {new Date().getFullYear()} Patrikas Bartanovičius. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
