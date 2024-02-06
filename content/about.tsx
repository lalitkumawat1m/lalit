// @ts-ignore
import DontBeADick from '../public/images/about/dont-be-a-dick.jpg';
import Namibia from '../public/images/about/namibia.jpg';
import QuadBike from '../public/images/about/quadbike.jpg';
import ChristmasInWilderness from '../public/images/about/christmas-wilderness.jpg';
import Ottertrail from '../public/images/about/ottertrail.jpg';
import Running from '../public/images/about/running.jpg';
import AlphaLionshead from '../public/images/about/alpha-mountain.jpg';
import Kirstenbosch from '../public/images/about/kirstenbosch.jpg';
import Camping from '../public/images/about/camping.jpg';
import Desert from '../public/images/about/desert.jpg';
import Aboutpic from '../public/images/about/aboutpic.jpg';

export const ABOUT = {
  stats: [
    {
      statistic: `${
        new Date(
          Date.now() - new Date('2003-05-29T01:30:00').getTime()
        ).getFullYear() - 1970
      }`,
      tooltip: `${Math.round(
        (Date.now() - new Date('2003-05-29T01:30:00').getTime()) / 1000
      )} seconds`,
      caption: 'Years Old',
    },
    {
      statistic: '4+',
      tooltip: 'First line of code written in 2020',
      caption: 'Years Web Dev',
    },
    {
      statistic: '1',
      tooltip: 'I ❤️ talk about Tech.',
      caption: 'YT Channel',
    },
    {
      statistic: '467',
      tooltip: '51 GitHub Stars',
      caption: 'Commits',
    },
  ],
  description: (
    <>
      <p>
        I'm a India based Software Developer. My focus area for the past few
        years has been full-stack development with <strong>Next.js</strong>,{' '}
        <strong>Typescript</strong>, <strong>TailwindCSS</strong> and{' '}
        <strong>Node.js</strong> to create beautiful user- and developer
        experiences that bring delight.
      </p>
      <p>
        I’ve spent most of my life deeply interested in technology, continuously
        building things with both. As a teenager, I was a classic computer nerd,
        spending most of my times messing with the computer, doing 1 of 4
        things: Playing games and figuring things out. Tinkering with hardware,
        building computers. Developing websites and apps. And of course, playing
        games.
      </p>
      <p>Most of that is still true today.</p>
    </>
  ),
  images: [
    {
      src: Aboutpic,
      alt: 'Lalit Kumawat',
    },
    // {
    //   src: Namibia,
    //   alt: "Overseeing the desert in Namibia.",
    // },
    // {
    //   src: QuadBike,
    //   alt: "Driving quadbike in the dunes of Swakopmund.",
    // },
    // {
    //   src: ChristmasInWilderness,
    //   alt: "Family Friends posing for Christmas in Wilderness, SA.",
    // },
    // {
    //   src: Ottertrail,
    //   alt: "Reflection of our 5 day hike with a beautiful water shot.",
    // },
    // {
    //   src: Running,
    //   alt: "Running down the slopes in Newlands forest.",
    // },
    // {
    //   src: AlphaLionshead,
    //   alt: "Alpha smiling on top of Lions head",
    // },
    // {
    //   src: Kirstenbosch,
    //   alt: "Christmas carols in Kirstenbosch, Newlands.",
    // },
    // {
    //   src: Camping,
    //   alt: "Camping at Addo Elephant national Park.",
    // },
    // {
    //   src: Desert,
    //   alt: "Standing in the desert in Namibia.",
    // },
  ],
};
