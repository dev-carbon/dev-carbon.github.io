import { Building2 } from "lucide-react";

const experiences = [
  {
    company: "DevChainer",
    role: "Développeur Blockchain",
    date: "2024 - Présent",
    details: [
      "Création et gestion de la plateforme de formation DevChainer.com, spécialisée dans la technologie blockchain",
      "Développement de programmes et de contenu pédagogique pour la blockchain",
      "Encadrement d'étudiants, de professionnels et de passionnés dans le développement et la mise en production d'un moteur blockchain",
    ],
  },
  {
    company: "Freelance",
    role: "Développeur Full-Stack",
    date: "2020 - Présent",
    details: [
      "Développement et maintenance d'applications full-stack avec différentes technologies",
      "Mise en place de solutions d'automatisation avec Puppeteer et Selenium",
      "Conception d'outils de scraping web et d'extraction de données",
      "Encadrement des étudiants et professionnels en développement logiciel",
      "Consultation technique pour des projets académiques et en production",
    ],
  },
  {
    company: "Formateur",
    role: "Formateur & Mentor",
    date: "2020 - Présent",
    details: [
      "Accompagnement d'étudiants, professionnels et stagiaires sur des projets académiques et professionnels",
      "Création et animation de formations pratiques",
    ],
  },
];

const ExperienceCard = ({ company, role, date, details }) => {
  return (
    <article className="experience__card">
      <div className="experience__card__header">
        <div className="flex gap-2">
          <Building2 size={24} />
          <h3 className="experience__company">{company}</h3>
        </div>
        <span className="experience__date">{date}</span>
      </div>
      <div className="experience__body">
        <p className="experience__role">
          <strong>{role}</strong>
        </p>
        <ul className="experience__details">
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

const Experiences = () => {
  return (
    <div
      className="section experiences"
      aria-label="Expériences professionnelles"
    >
      <div className="section__title">Expériences</div>
      <div className="section__content max-w-3xl space-y-8">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </div>
  );
};

export default Experiences;
