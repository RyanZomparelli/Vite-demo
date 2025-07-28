import reactLogo from "../assets/react.svg";

export const data = [
  {
    name: "fox",
    image: new URL("../assets/animals/fox.jpg", import.meta.url).href,
    alt: "A fox",
  },
  {
    name: "groundhog",
    image: new URL("../assets/animals/groundhog.webp", import.meta.url).href,
    alt: "A groundhog",
  },
  {
    name: "React logo",
    image: reactLogo,
    default: true,
  },
];
