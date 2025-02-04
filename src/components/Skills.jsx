import Anaconda from "./icons/Anaconda";
import Bash from "./icons/Bash";
import C from "./icons/C";
import Django from "./icons/Django";
import Docker from "./icons/Docker";
import Flask from "./icons/Flask";
import Java from "./icons/Java";
import Javascript from "./icons/Javascript";
import Laravel from "./icons/Laravel";
import Mongodb from "./icons/Mongodb";
import Mysql from "./icons/Mysql";
import Nextjs from "./icons/Nextjs";
import NodeJS from "./icons/NodeJS";
import Php from "./icons/Php";
import Postgresql from "./icons/Postgresql";
import Puppeteer from "./icons/Puppeteer";
import Python from "./icons/Python";
import SpringBoot from "./icons/SpringBoot";
import Selenium from "./icons/Selenium";
import Streamlit from "./icons/Streamlit";
import Tensorflow from "./icons/Tensorflow";
import Typescript from "./icons/Typescript";

const ICON_SIZE = 26;

const skills = [
  {
    category: "Langages",
    items: [
      {
        icon: <C width={ICON_SIZE} height={ICON_SIZE} />,
        name: "C",
      },
      {
        icon: <Java width={ICON_SIZE} height={ICON_SIZE} />,
        name: "Java",
      },
      {
        icon: <Python width={ICON_SIZE} height={ICON_SIZE} />,
        name: "Python",
      },
      {
        icon: <Php width={ICON_SIZE} height={ICON_SIZE} />,
        name: "PHP",
      },
      {
        icon: <Javascript width={ICON_SIZE} height={ICON_SIZE} />,
        name: "Javascript",
      },
      {
        icon: <Typescript width={ICON_SIZE} height={ICON_SIZE} />,
        name: "Typescript",
      },
    ],
  },
  {
    category: "Frameworks",
    items: [
      {
        icon: <Laravel width={ICON_SIZE} height={ICON_SIZE} />,
        name: "Laravel",
      },
      {
        icon: <SpringBoot width={ICON_SIZE} height={ICON_SIZE} />,
        name: "Spring Boot",
      },
      {
        icon: <Django width={ICON_SIZE} height={ICON_SIZE} />,
        name: "Django",
      },
      {
        icon: <Flask width={ICON_SIZE} height={ICON_SIZE} />,
        name: "Flask",
      },
      {
        icon: <Nextjs width={ICON_SIZE} height={ICON_SIZE} />,
        name: "Next.js",
      },
    ],
  },
  {
    category: "Systèmes",
    items: [
      {
        icon: <Bash width={ICON_SIZE} height={ICON_SIZE} />,
        name: "Bash",
      },
      {
        icon: <Docker width={ICON_SIZE} height={ICON_SIZE} />,
        name: "Docker",
      },
      {
        icon: <NodeJS width={ICON_SIZE} height={ICON_SIZE} />,
        name: "Node.js",
      },
    ],
  },
  {
    category: "Bases de données",
    items: [
      {
        icon: <Mysql width={ICON_SIZE} height={ICON_SIZE} />,
        name: "MySql",
      },
      {
        icon: <Mongodb width={ICON_SIZE} height={ICON_SIZE} />,
        name: "MongoDB",
      },
      {
        icon: <Postgresql width={ICON_SIZE} height={ICON_SIZE} />,
        name: "PostgreSQL",
      },
    ],
  },
  {
    category: "Web Scraping",
    items: [
      {
        icon: <Selenium width={ICON_SIZE} height={ICON_SIZE} />,
        name: "Selenium",
      },
      {
        icon: <Puppeteer width={ICON_SIZE} height={ICON_SIZE} />,
        name: "Puppeteer",
      },
    ],
  },
  {
    category: "Machine Learning",
    items: [
      {
        icon: <Tensorflow width={ICON_SIZE} height={ICON_SIZE} />,
        name: "Tensorflow",
      },
      {
        icon: <Anaconda width={ICON_SIZE} height={ICON_SIZE} />,
        name: "Anaconda",
      },
    ],
  },
  {
    category: "Divers",
    items: [
      {
        icon: <Streamlit width={ICON_SIZE} height={ICON_SIZE} />,
        name: "Streamlit",
      },
    ],
  },
];

const Skills = () => {
  return (
    <div className="section skills">
      <div className="section__title">Compétences</div>
      <div className="section__content">
        <div className="section__grid gap-y-12">
          {skills.map((skillCategory, index) => (
            <div key={index} className="skills__category">
              <div className="skills__title">{skillCategory.category}</div>
              <ul className="skills__list">
                {skillCategory.items.map((item, i) => (
                  <li className="skill__item" key={i}>
                    {item.icon}
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
