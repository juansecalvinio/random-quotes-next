// pages/index.tsx
import {
  Box,
  Heading,
  IconButton,
  Link,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { Quotes } from "@/components/Quotes";

export default function Home() {
  const { toggleColorMode } = useColorMode();
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} p={5}>
      <Heading mb={5} size={"md"}>
        Random Quotes
      </Heading>
      <Text
        maxW={"600px"}
        textAlign={"center"}
        fontSize={{ base: "xs", md: "sm", lg: "sm" }}
      >
        This simple application, created with NextJS, allows users to generate
        random quotes with a simple button click. It uses the Quotable.io API to
        fetch a wide variety of inspiring and motivational quotes, providing
        users with a new quote each time they interact with the app.
        Additionally, users can share their favorite quotes on Twitter with the
        "Tweet quote" button.
      </Text>
      <Box
        display={"flex"}
        alignItems={"flex-start"}
        justifyContent={"flex-start"}
        mt={"2rem"}
      >
        <Link
          key={"VanillaJS"}
          href={"https://random-quotes-one-blush.vercel.app/"}
          target="_blank"
        >
          <IconButton
            aria-label={"vanillajs"}
            icon={<SiJavascript />}
            size={"sm"}
            ml={"0.5rem"}
            variant={"outline"}
            fontSize={"20px"}
          />
        </Link>
        <Link
          key={"GitHub repository"}
          href={"https://github.com/juansecalvinio/random-quotes-next"}
          target="_blank"
        >
          <IconButton
            aria-label={"github"}
            icon={<FaGithub />}
            size={"sm"}
            ml={"0.5rem"}
            variant={"outline"}
            fontSize={"20px"}
          />
        </Link>
        <IconButton
          onClick={toggleColorMode}
          aria-label={useColorModeValue("Modo oscuro", "Modo claro")}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          size={"sm"}
          variant={"outline"}
          ml={"0.5rem"}
        />
      </Box>

      <Quotes />

      <Box as="footer" mt={"2rem"}>
        <Text>
          by{" "}
          <Link href="https://juansecalvinio.com" target="_blank">
            juansecalvinio.com
          </Link>
        </Text>
      </Box>
    </Box>
  );
}
