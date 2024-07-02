import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  content: string;
  author: string;
}

export const Quote = ({ content, author }: Props) => {
  return (
    <Box>
      <Text
        mb={4}
        textAlign={"center"}
        fontWeight={"bold"}
        fontSize={{ base: "md", md: "lg", lg: "lg" }}
      >
        "{content}"
      </Text>
      <Text
        textAlign={"center"}
        fontStyle={"italic"}
        fontSize={{ base: "md", md: "lg", lg: "lg" }}
      >
        - {author}
      </Text>
    </Box>
  );
};
