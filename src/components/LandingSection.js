import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";


const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar size={5} src="https://i.pravatar.cc/150?img=7" />
    <VStack spacing={5}>
      <Heading as='h5' size='sm'>{greeting}</Heading>
      <VStack spacing={4}>
        <Heading as='h1'>{bio1}</Heading>
        <Heading as='h1'>{bio2}</Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
