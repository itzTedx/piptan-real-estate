import localFont from "next/font/local";

export const jaguar = localFont({
  src: "./Jaguar.woff",
  variable: "--font-jaguar",
});

export const neueMontreal = localFont({
  src: [
    {
      path: "./ppneuemontreal-thin.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./ppneuemontreal-book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./ppneuemontreal-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./ppneuemontreal-bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});
