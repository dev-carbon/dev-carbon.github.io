import { useRef } from "react";
import { Download } from "lucide-react";

const About = () => {
  const emojiRef = useRef(null);

  const handleEmojiHover = () => {
    const emoji = emojiRef.current;
    if (emoji) {
      emoji.style.animation = "none";
      void emoji.offsetWidth;
      emoji.style.animation = "shake 1.2s ease-in-out";
    }
  };

  return (
    <div className="max-w-6xl mx-auto flex flex-col md:items-end gap-8 px-12 py-16">
      <h1 className="font-light text-2xl lg:text-4xl my-4">
        Salut!&nbsp;
        <span
          ref={emojiRef}
          className="hand-emoji inline-block"
          onMouseEnter={handleEmojiHover}
        >
          👋
        </span>
      </h1>

      <h2 className="font-light text-2xl lg:text-4xl my-4 max-w-5xl leading-relaxed lg:leading-loose md:text-end">
        Je suis <span className="font-semibold">Hugues</span>, ingénieur
        logiciel basé à Paris. Spécialisé dans le développement et les solutions
        créatives, je transforme vos idées en réalité avec le &nbsp;
        <span className="text-blue-600 font-bold">&lt;code /&gt;</span>.
      </h2>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
        <a
          href="/cv.pdf"
          download="CV_Hugues_Tchouala.pdf"
          className="inline-flex items-center gap-1 border border-blue-600 px-4 py-1 rounded text-blue-600"
        >
          <Download />
          Télécharger mon CV
        </a>

        <h3 className="my-2 text-xl">
          Prendre contact 🚀
          <a
            href="mailto:hugues.tchouala42@gmail.com"
            className="border-b-4 border-blue-600 pb-1 ms-1"
          >
            hugues.tchouala42@gmail.com
          </a>
        </h3>
      </div>
    </div>
  );
};

export default About;
