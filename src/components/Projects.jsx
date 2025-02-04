import { FolderGit2, FolderPlus } from "lucide-react";

const projects = [
  {
    title: "Libft",
    col: "col-span-full lg:col-span-5",
    description:
      "Projet réalisé à l'école 42, consistant à recréer une bibliothèque en C. Cette bibliothèque implémente des fonctions standards du C, telles que la manipulation de chaînes de caractères, la gestion des pointeurs et la création et gestion de listes chaînées.",
    skills: ["C", "Gestion de mémoire", "Pointeurs"],
  },
  {
    title: "Get-next-line",
    col: "col-span-full lg:col-span-7",
    description:
      "Projet réalisé à l'école 42, consistant à implémenter une fonction en C capable de lire une ligne complète à partir d'un descripteur de fichier donné. Ce projet visait à renforcer les notions de gestion de mémoire, manipulation des pointeurs et fichiers.",
    skills: ["C", "Gestion de mémoire", "Pointeurs", "Fichiers"],
  },
  {
    title: "ft_print",
    col: "col-span-full lg:col-span-6",
    description:
      "Projet réalisé à l'école 42, consistant à développer une version simplifiée de la fonction printf en C. Ce projet permet de mieux comprendre les fonctions variadiques, la gestion des arguments et les bases de la mise en forme des sorties.",
    skills: [
      "C",
      "Fonctions variadiques",
      "Gestion des arguments",
      "Mise en forme",
    ],
  },
  {
    title: "ft_server",
    col: "col-span-full lg:col-span-6",
    description:
      "Projet réalisé à l'école 42, ayant pour but de configurer un serveur web avec Nginx fonctionnant dans un conteneur Docker. Ce serveur héberge un site WordPress, une base de données MariaDB, et un outil de gestion via PHPMyAdmin.",
    skills: [
      "Docker",
      "Nginx",
      "MariaDB",
      "WordPress",
      "PHPMyAdmin",
      "Réseaux",
    ],
  },
  {
    title: "cub3d",
    col: "col-span-full lg:col-span-7",
    description:
      "Projet réalisé à l'école 42, basé sur la création d'un moteur graphique 3D en C utilisant MiniLibX. Inspiré du jeu Wolfenstein 3D, ce projet met l'accent sur le rendu graphique en utilisant la technique du raycasting, tout en gérant les textures, les collisions et les interactions utilisateur.",
    skills: [
      "C",
      "MiniLibX",
      "Raycasting",
      "Rendu graphique",
      "Gestion des collisions",
    ],
  },
  {
    title: "so_long",
    col: "col-span-full lg:col-span-5",
    description:
      "Projet réalisé à l'école 42, consistant à développer un jeu en 2D avec MiniLibX. Le joueur doit collecter des objets et atteindre une sortie dans un labyrinthe, en gérant les collisions, les animations, et les interactions utilisateur.",
    skills: [
      "C",
      "MiniLibX",
      "Conception de jeux",
      "Animations",
      "Gestion des événements",
    ],
  },
  {
    title: "minitalk",
    col: "col-span-full lg:col-span-5",
    description:
      "Projet académique réalisé à l'école 42, Minitalk consiste à développer une application client-serveur en C permettant d'échanger des messages à travers des signaux UNIX.",
    skills: ["C", "Signaux UNIX", "Communication Client-Serveur"],
  },
  {
    title: "push_swap",
    col: "col-span-full lg:col-span-7",
    description:
      "Projet réalisé à l'école 42, ayant pour but de trier une pile d'entiers en utilisant un ensemble d'opérations prédéfinies. Ce projet explore des concepts d'algorithmique, notamment l'analyse de complexité et l'optimisation des algorithmes de tri.",
    skills: [
      "C",
      "Structures de données",
      "Algorithmes de tri",
      "Analyse de complexité",
      "Optimisation",
    ],
  },
  {
    title: "Minishell",
    col: "col-span-full lg:col-span-8",
    description:
      "Projet réalisé à l'école 42, consistant à développer un interpréteur de commandes minimaliste en C. Ce projet a permis de comprendre et d'implémenter des concepts tels que la gestion des processus, les signaux, les redirections, et les pipes, tout en respectant le comportement de bash pour des commandes simples.",
    skills: [
      "C",
      "Programmation système",
      "Gestion des processus",
      "Redirections et pipes",
      "Signaux",
      "Interpréteurs de commandes",
    ],
  },
];

const ProjectCard = ({ title, col, description, skills }) => {
  return (
    <article className={`project__card ${col}`}>
      <div className="project__card__header">
        <FolderGit2 size={24} />
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

const Projects = () => {
  return (
    <div className="section projects" aria-label="Projets académiques">
      <div className="section__title text-2xl font-bold">Projets</div>
      <div className="section__subtitle text-neutral-200">académiques</div>
      <div className="section__content grid grid-cols-12 gap-6 mt-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}

        <article className={`project__card col-span-4 bg-neutral-200/50 dark:bg-neutral-800/50`}>
            <div className="flex items-center justify-center h-full">
                <FolderPlus size={42} />
            </div>
        </article>
      </div>
    </div>
  );
};

export default Projects;
