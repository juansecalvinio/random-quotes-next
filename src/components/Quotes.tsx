import { useState, useEffect } from "react";
import { Box, Button, Card, CardBody, CardFooter } from "@chakra-ui/react";
import { Quote } from "./Quote";

interface Quote {
  content: string;
  author: string;
}

export const Quotes = () => {
  const [quote, setQuote] = useState<Quote | null>(null);

  const fetchQuote = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    setQuote(data);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const tweetQuote = () => {
    if (quote) {
      const tweetURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        `"${quote.content}" - ${quote.author}`
      )}`;
      window.open(tweetURL, "_blank");
    }
  };

  return (
    <Card maxW={"600px"} variant={"outline"} mt={10} borderRadius={"2.5rem"}>
      <CardBody>
        {quote && <Quote content={quote.content} author={quote.author} />}
      </CardBody>
      <CardFooter
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Button
          colorScheme="blue"
          onClick={tweetQuote}
          mr={2}
          borderRadius={"3rem"}
        >
          Tweet quote
        </Button>
        <Button colorScheme="yellow" onClick={fetchQuote} borderRadius={"3rem"}>
          New Quote
        </Button>
      </CardFooter>
    </Card>
  );
};
