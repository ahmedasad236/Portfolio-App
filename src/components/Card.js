import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {

  return (
    <VStack borderRadius="lg" alignItems="flex-start" backgroundColor="white" >
      <Image borderRadius="lg" src={imageSrc}/>
      <VStack padding="2" alignItems="flex-start">
        <Heading color="black" as='h4' size='small'>{title}</Heading>
        <Text color="#aaa">{description}</Text>
        <HStack>
          <Text color="black">See More</Text>
          <FontAwesomeIcon color="#111" icon={faArrowRight} size="1x"/>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
