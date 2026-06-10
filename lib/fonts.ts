import localFont from "next/font/local";

export const fonts = {
  neueMontreal: localFont({
    src: [
      {
        path: "../fonts/pp-neue-montreal/thin.otf",
        weight: "100",
        style: "normal",
      },
      {
        path: "../fonts/pp-neue-montreal/book.otf",
        weight: "400",
        style: "normal",
      },
      {
        path: "../fonts/pp-neue-montreal/medium.otf",
        weight: "500",
        style: "normal",
      },
      {
        path: "../fonts/pp-neue-montreal/bold.otf",
        weight: "700",
        style: "normal",
      },
      {
        path: "../fonts/pp-neue-montreal/italic.otf",
        weight: "400",
        style: "italic",
      },
      {
        path: "../fonts/pp-neue-montreal/semibold-italic.otf",
        weight: "600",
        style: "italic",
      },
    ],
    variable: "--font-neue-montreal",
  }),
  overusedGrotesk: localFont({
    src: [
      {
        path: "../fonts/overused-grotesk/variable.woff2",
        weight: "100 900",
      },
    ],
    variable: "--font-overused-grotesk",
  }),
  gambarino: localFont({
    src: [
      {
        path: "../fonts/gambarino/regular.woff2",
        weight: "400",
        style: "normal",
      },
    ],
    variable: "--font-gambarino",
  }),
  hatton: localFont({
    src: [
      {
        path: "../fonts/pp-hatton/ultralight.otf",
        weight: "100",
        style: "normal",
      },
      {
        path: "../fonts/pp-hatton/medium.otf",
        weight: "500",
        style: "normal",
      },
      {
        path: "../fonts/pp-hatton/bold.otf",
        weight: "700",
        style: "normal",
      },
      {
        path: "../fonts/pp-hatton/ultralight-italic.otf",
        weight: "100",
        style: "italic",
      },
      {
        path: "../fonts/pp-hatton/medium-italic.otf",
        weight: "500",
        style: "italic",
      },
      {
        path: "../fonts/pp-hatton/bold-italic.otf",
        weight: "700",
        style: "italic",
      },
    ],
    variable: "--font-hatton",
  }),
};
