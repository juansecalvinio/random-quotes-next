// pages/index.tsx
import { Box, Heading, IconButton, Link, Text } from "@chakra-ui/react";
import { SiJavascript } from "react-icons/si";
import { Quotes } from "@/components/Quotes";

export default function Home() {
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
        href={"https://random-quotes-one-blush.vercel.app/"}
        target="_blank"
      >
        <IconButton
          aria-label={"github"}
          icon={<SiJavascript />}
          size={"sm"}
          ml={"0.5rem"}
          variant={"outline"}
          fontSize={"20px"}
        />
      </Link>
      {/* <Text
        maxW={"600px"}
        mt={5}
        textAlign={"center"}
        fontSize={{ base: "xs", md: "sm", lg: "sm" }}
      >
        VanillaJS version{" "}
        <a href="https://random-quotes-one-blush.vercel.app/" target="_blank">
          here
        </a>
      </Text> */}
      <Quotes />
    </Box>
  );
}
