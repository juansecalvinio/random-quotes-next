import { extendTheme } from "@chakra-ui/react";
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
  fonts: {
    heading: `${inter.style.fontFamily}, sans-serif`,
    body: `${jetBrainsMono.style.fontFamily}, sans-serif`,
    inter: `${inter.style.fontFamily}, sans-serif`,
    jetBrainsMono: `${jetBrainsMono.style.fontFamily}, sans-serif`,
  },
};

const theme = extendTheme({ config });

export default theme;
