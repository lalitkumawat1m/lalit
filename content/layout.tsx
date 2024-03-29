// import LalitLogo from "public/logo.svg";

export const HEADER = {
  logo: {
    href: "/",
    title: (
      <strong>
        <h1 className="text-4xl font-sans font-black bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 text-transparent animate-hue">
          LK
        </h1>
      </strong>
    ),
    alt: "Lalit Logo",
  },
  nav: [
    {
      href: "/",
      title: "Home",
      alt: "Country roads..",
      desktop: false,
    },
    {
      href: "/#about",
      title: "About",
      alt: "More about me.",
      desktop: true,
    },
    {
      href: "/#portfolio",
      title: "Portfolio",
      alt: "Work I've done.",
      desktop: true,
    },
    ,
    // {
    //   href: "/books",
    //   title: "Books",
    //   alt: "Books I've read.",
    //   desktop: true,
    // }
    /*{
      href: "/gallery",
      title: "Gallery",
      alt: "Images and stuff",
      desktop: true,
    },*/ {
      href: "/resume",
      title: "Resume",
      alt: "My professional resume",
      desktop: true,
    },
  ],
  profileNav: [],
};
