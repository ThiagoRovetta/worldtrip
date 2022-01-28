import React from "react";import Link from "next/link";
import { Flex, Text, Link as ChakraLink } from '@chakra-ui/react'

interface SliderItemProps {
  imageName: string;
  continent: string;
  about: string;
}

export function SliderItem({ imageName, continent, about }: SliderItemProps) {
  return (
    <Link href={`/continent/${continent}`} passHref>
      <ChakraLink display="flex" align="center">
        <Flex
          as="div"
          w="1240px"
          h="450px"
          justifyContent="center"
          pt="180px"
          bgImage={`url('/${imageName}')`}
          bgRepeat="no-repeat"
        >
          <Flex
            w="324px"
            h="116px"
            direction="column"
          >
            <Text
              color="gray.100"
              fontStyle="normal"
              fontWeight="700"
              fontSize="48px"
              lineHeight="72px"
              align="center"
            >
              {continent}
            </Text>
            <Text
              mt="16px"
              color="gray.300"
              fontStyle="normal"
              fontWeight="700"
              fontSize="24px"
              lineHeight="36px"
              align="center"
            >
              {about}
            </Text>
          </Flex>
        </Flex>
      </ChakraLink>
    </Link>
  )
}