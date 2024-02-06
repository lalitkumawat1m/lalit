// @ts-ignore
import heroCode from '!!raw-loader!content/code-blocks/hero.tsx'; // Adding `!!` to a request will disable all loaders specified in the configuration
import {SiNodeDotJs} from '@react-icons/all-files/si/SiNodeDotJs';
import {SiReact} from '@react-icons/all-files/si/SiReact';
import {SiTailwindcss} from '@react-icons/all-files/si/SiTailwindcss';
import {SiTypescript} from '@react-icons/all-files/si/SiTypescript';
import {SiNextdotjs} from 'react-icons/si';
import {Link} from 'components/link';
// import { TECH } from "content/tech-stack";
import party from 'party-js';

export const HERO = {
  pre: 'Welcome to my site.',
  heading: (
    <>
      I'm <strong>Lalit Kumawat</strong>, a Fullstack developer.
    </>
  ),
  tech: [
    // TECH.nextjs,
    {
      name: 'Next.js',
      Icon: ({className}) => <SiNextdotjs className={className} />,
    },
    // {
    //   name: "React",
    //   Icon: ({ className }) => <SiReact style={{color:'#61DAFB'}} className={className} />,
    // },
    {
      name: 'Node.js',
      Icon: ({className}) => (
        <SiNodeDotJs style={{color: '#417E38'}} className={className} />
      ),
    },
    {
      name: 'Tailwind',
      Icon: ({className}) => (
        <SiTailwindcss style={{color: '#38BDF8'}} className={className} />
      ),
    },
    {
      name: 'Typescript',
      Icon: ({className}) => (
        <SiTypescript style={{color: '#007acc'}} className={className} />
      ),
    },
  ] as const,
  body: (
    <>
      I love writing code that takes things next level creating highly
      performant webapps, automated API integrations, building my own AI-tools,
      and creating stunning user-experiences that makes you feel{' '}
      <em
        className="relative cursor-pointer before:absolute b:bottom-0 b:-z-10 b:h-3 b:w-full b:-rotate-2 b:animate-hint-hint b:bg-pink-400/70 b:blur-sm d:b:bg-pink-600"
        onClick={e => {
          e.currentTarget.classList.remove('before:absolute');
          party.confetti(e.currentTarget, {count: 40});
        }}
      >
        WOW!
      </em>
      .<span className="mt-4 block" />I am always keen to learn and explore new
      technologies, frameworks and programming languages. Currently, I'm
      learning about{' '}
      {/* <Link target="_blank" href="https://redis.io/" className="underline hfa:text-sky-500">
        Redis
      </Link>{" "}
      and{" "} */}
      <Link
        href="https://www.langchain.com/"
        target="_blank"
        className="underline hfa:text-sky-500"
      >
        LangChain
      </Link>
      .
    </>
  ),
  cta1: {
    href: 'mailto:lalitkumawat1129@gmail.com',
    name: "Let's Work",
  },
  cta2: {
    href: '/resume',
    name: 'Resume',
  },
  code: `${heroCode}`,
};
