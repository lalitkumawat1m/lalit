import {
  HeartIcon,
  MoonIcon,
  StarIcon,
  SunIcon,
} from '@heroicons/react/24/solid';
import {Link} from 'components/link';
import {Badge} from 'components/badge';
import {CodeEditor} from 'components/code-editor';
import ToggleSwitch from 'components/toggle-switch';
import {TwitterProfile} from 'components/twitter-profile';
import {HERO} from 'content/hero';
import {useTheme} from 'next-themes';
import {FC} from 'react';
import {components} from 'twitter-api-sdk/dist/gen/openapi-types';

type HeroProps = {
  twitterData: components['schemas']['User'];
};
export const Hero: FC<HeroProps> = ({twitterData}) => {
  const {theme, setTheme} = useTheme();

  return (
    <section className="hero relative overflow-hidden pb-40">
      <div className="relative mx-auto flex max-w-6xl grid-cols-3 flex-col gap-8 gap-y-16 px-4 py-16 md:px-8 md:py-32 lg:grid">
        <section className="col-span-2">
          <header>
            <div className="heading-pre">{HERO.pre}</div>
            <h1 className="heading-hero ">{HERO.heading}</h1>
            {/* <h2 className="heading-hero ">
                <Typewriter
                  loop={false}
                  items={[
                    <>
                      I'm a <u>Fullstack</u> developer
                    </>,

                    <>I build websites & web apps</>,
                  ]}
                />
              </h2>*/}
            <ul className="sm:scrollbar-none -mx-4 mb-2 flex items-center gap-6 overflow-x-auto px-4 pb-2 text-[15px] font-medium">
              {HERO.tech.map(({name, Icon}) => (
                <li
                  className="flex items-center gap-2 text-gray-500 d:text-gray-400"
                  key={name}
                >
                  <Icon className="h-7 w-7 text-gray-400 d:text-gray-300/80" />
                  {name}
                </li>
              ))}
            </ul>
          </header>
          <main>
            <p className="mb-3 max-w-prose font-normal text-gray-500 d:text-gray-400 md:text-lg md:tracking-tight">
              {HERO.body}
            </p>

            <p className="mb-3 max-w-xl font-normal text-gray-500 md:text-lg md:tracking-tight"></p>
          </main>
          <footer className="mt-6 flex flex-wrap gap-4 md:gap-8">
            {HERO.cta1 ? (
              <Link
                href={HERO.cta1.href}
                className="button-rainbow inline-flex whitespace-nowrap bg-gray-800 px-10 py-2.5 text-sm font-medium tracking-tight text-gray-50 hfa:border-gray-300/90 hfa:bg-gray-900 hfa:text-white d:hfa:border-gray-700/30 md:px-12"
              >
                {HERO.cta1.name}
              </Link>
            ) : null}

            {HERO.cta2 ? (
              <Link
                href={HERO.cta2.href}
                className="button-border inline-flex whitespace-nowrap bg-white/90 px-10 py-2.5 text-sm font-medium tracking-tight text-gray-500 transition-all hfa:border-gray-900/70 hfa:bg-white/90 hfa:text-gray-900 d:border-gray-700/80 d:bg-transparent d:text-gray-300 d:hfa:border-gray-200/30 d:hfa:bg-gray-900/80 d:hfa:text-gray-50 md:px-12"
              >
                {HERO.cta2.name}
              </Link>
            ) : null}
          </footer>
        </section>
        <section className="relative md:h-[420px]">
          <div className="relative flex h-full min-w-[460px] flex-col gap-4 sm:min-w-[660px] lg:absolute lg:left-6 lg:left-8 lg:top-16 lg:top-24 lg:min-w-[460px]">
            <div className="relative z-20 flex justify-end gap-1.5">
              <Badge style="info">Research</Badge>
              <Badge style="success">Workout</Badge>
              <Badge style="warning">Reading</Badge>
              <Badge style="accent">Content Creation</Badge>
              <Badge style="plain">Attention to detail</Badge>
            </div>
            <div className="relative flex h-full flex-col">
              <CodeEditor code={HERO.code} language="tsx" />
              <div className="absolute -bottom-5 -right-5 -z-10 h-[calc(100%+1.25rem)] w-[calc(100%+1.25rem)] rounded-lg border border-gray-400/20 bg-gray-100/70 [mask-image:linear-gradient(-30deg,#fff_16.35%,rgb(255_255_255_/_0%)_61.66%)] d:border-gray-700/20 d:bg-gray-900/40"></div>
            </div>
            <div className="z-10 mt-1 flex gap-2 lg:-mt-2 lg:ml-16">
              <Link
                target="_blank"
                href="https://twitter.com/lalitkumawat1m"
                className="group flex items-center justify-center rounded-full border-2 border-gray-400/50 bg-gray-100 bg-clip-padding px-3 py-1.5 text-sm font-medium text-gray-600 transition-all hfa:border-rose-500/30 hfa:bg-rose-500 hfa:text-white d:bg-gray-700 d:text-gray-50 d:hfa:bg-rose-500"
                data-tip="DM me on Twitter"
              >
                <HeartIcon className="mr-1 h-4 w-4 animate-heartbeat text-red-600 transition-all group-hfa:text-white" />
                Support
              </Link>
              <Link
                target="_blank"
                href="https://github.com/lalitkumawat1m/stargazers"
                className="group flex h-9 w-9 items-center justify-center rounded-full border-2 border-gray-400/50 bg-gray-100 bg-clip-padding text-sm font-medium text-gray-600 transition-all hfa:border-yellow-500/30 hfa:bg-yellow-500 hfa:text-white d:bg-gray-700 d:text-gray-50 d:hfa:bg-yellow-500"
                data-tip="Star on Github"
              >
                <span className="sr-only">Star on Github</span>
                <StarIcon className="h-4 w-4 text-yellow-500 group-hfa:text-white" />
              </Link>
              <ToggleSwitch
                enabled={theme === 'dark'}
                setEnabled={bool => setTheme(bool ? 'dark' : 'light')}
                enabledIcon={<MoonIcon className="h-3 w-3 text-slate-400" />}
                disabledIcon={<SunIcon className="h-4 w-4 text-orange-400" />}
              />
            </div>
          </div>
          <div className="absolute hidden sm:-right-5 sm:top-24 sm:block lg:-left-64 lg:top-full">
            <TwitterProfile {...twitterData} />
          </div>
        </section>
        <div className="background pointer-events-none absolute inset-0 -z-30 z-0 select-none">
          <div className="relative left-1/2 top-1/2  h-2/3 w-1/2 -translate-y-[30%] rounded-full bg-gradient-radial from-emerald-600/30 to-sky-600/5 blur-2xl"></div>
        </div>
      </div>
    </section>
  );
};
