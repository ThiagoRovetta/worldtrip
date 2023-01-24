import React from "react";
import Link from "next/link";
import { Flex, Text, Link as ChakraLink } from '@chakra-ui/react'

interface SliderItemProps {
  imagePath: string;
  continent: string;
  about: string;
}

export function SliderItem({ imagePath, continent, about }: SliderItemProps) {
  return (
    <ChakraLink as={Link} href={`/continent/${continent}`} display="flex">
      <Flex
        as="div"
        w={{base: "375px", lg: "1240px", sm: "375px"}}
        h={{base: "250px", lg: "450px", sm: "250px"}}
        justifyContent="center"
        pt={{base: "110px", lg: "180px", sm: "110px"}}
        bgImage={`url('${imagePath}')`}
        bgRepeat="no-repeat"
        bgPosition="center"
        bgSize="cover"
      >
        <Flex
          direction="column"
        >
          <Text
            color="gray.100"
            fontStyle="normal"
            fontWeight="700"
            fontSize={{base: "24px", lg: "48px", sm: "24px"}}
            lineHeight={{base: "36px", lg: "72px", sm: "36px"}}
            align="center"
          >
            {continent}
          </Text>
          <Text
            mt={{base: "12px", lg: "16px", sm: "12px"}}
            color="gray.300"
            fontStyle="normal"
            fontWeight="700"
            fontSize={{base: "14px", lg: "24px", sm: "14px"}}
            lineHeight={{base: "21px", lg: "36px", sm: "21px"}}
            align="center"
          >
            {about}
          </Text>
        </Flex>
      </Flex>
    </ChakraLink>
  )
}