import { FolderClosed, FolderPlus } from "lucide-react";

const achievements = [
  {
    title: "DevChainer",
    description:
      "DevChainer.com est un site de présentation de mes formations blockchain, offrant des informations sur le contenu des cours, les dates disponibles, et un système d'inscription en ligne. Ce projet inclut également des intégrations pour le paiement sécurisé et l'envoi d'e-mails automatisés.",
    skills: [
      "PHP",
      "Laravel",
      "Livewire",
      "Tailwind CSS",
      "MySql",
      "Stripe API",
    ],
  },
  {
    title: "CV-Generator",
    description:
      "CV-Generator est un outil permettant aux développeurs de télécharger un modèle depuis GitHub, personnaliser les composants et exporter le CV en PDF avec Puppeteer.",
    skills: ["JavaScript", "Node.js", "Puppeteer", "React"],
  },
  {
    title: "AuBonPote",
    description:
      "AuBonPote est un site permettant aux personnes partageant des centres d'intérêt communs de se connecter et de se rencontrer. Le projet inclut une interface utilisateur interactive, un système de recherche avancée et des outils pour organiser des rencontres.",
    skills: ["PHP", "Codeigniter", "MySQL"],
  },
];

const AchievementCard = ({ title, description, skills }) => {
  return (
    <article className="project__card">
      <div className="project__card__header">
        <FolderClosed size={24} />
        <h3 className="project__title">{title}</h3>
      </div>
      <p className="project__card__description">{description}</p>
      <div className="project__card__skills">
        <ul className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <li key={index} className="project__card__skill">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

const Achievements = () => {
  return (
    <div className="section achievements">
      <div className="section__title">Réalisations</div>
      <div className="section__content max-w-3xl">
        {achievements.map((project, index) => (
          <AchievementCard key={index} {...project} />
        ))}

        <article
          className={`project__card col-span-4 bg-neutral-200/50 dark:bg-neutral-800/50 py-8`}
        >
          <div className="flex items-center justify-center h-full">
            <FolderPlus size={42} />
          </div>
        </article>
      </div>
    </div>
  );
};

export default Achievements;
