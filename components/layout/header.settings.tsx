import DarkmodeIcon from "_client/darkmode-icon";
import { Link } from "_client/link";
import clsx from "clsx";
import { ReactIcon } from "components/dynamic-react-icon";
import { SOCIAL } from "content/social";
import { useTheme } from "next-themes";
import { FC } from "react";

type ProfileNavProps = {
  showNav: boolean;
};

export const ProfileNav: FC<ProfileNavProps> = ({ showNav }) => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="z-10 ml-auto flex gap-1 pl-4">
      {/*<div className="my-2 mx-4 border-l border-l-gray-200"></div>*/}
      <button
        type="button"
        className={clsx(
          "rounded p-2 text-gray-500 transition-colors dark:text-white md:h:text-gray-900",
          showNav ? "h:text-gray-200" : "h:text-gray-900"
        )}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <DarkmodeIcon />
      </button>
      <Link
        href={SOCIAL.github.href}
        className={clsx(
          "rounded p-2 text-gray-500 transition-colors dark:text-white md:h:text-gray-900",
          showNav ? "h:text-gray-200" : "h:text-gray-900"
        )}
      >
        <span className="sr-only">Github</span>
        <ReactIcon name="FaGithub" className="h-5 w-5" />
      </Link>
      <button className="button-rainbow ml-4 hidden whitespace-nowrap px-4 py-1.5 text-sm font-medium tracking-tight text-gray-500 md:flex">
        Lets work
      </button>
    </nav>
  );
};