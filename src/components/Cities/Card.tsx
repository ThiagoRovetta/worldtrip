import { Box, Image, Flex, Text } from '@chakra-ui/react'

interface CardProps {
  name: string;
  country: string;
  cityImage: string;
  countryFlagImage?: string;
}

export function Card({ name, country, cityImage, countryFlagImage }: CardProps) {
  return (
    <Box borderWidth='1px' borderColor='yellow.500' borderRadius='lg' overflow='hidden' w="256px" h="279px">
      <Image src={cityImage} alt={name} w="256px" h="173px" />

      <Flex>
        <Flex direction="column" mt="18px" ml="24px" mb="25px">
          <Text 
            mb="12px"
            fontFamily="Barlow"
            fontWeight="600"
            fontSize="20px"
            lineHeight="25px"
            color="gray.900"
          >
            {name}
          </Text>
          <Text
            fontFamily="Barlow"
            fontWeight="500"
            fontSize="16px"
            lineHeight="26px"
            color="gray.700"
          >
            {country}
          </Text>
        </Flex>
        <Flex direction="column" w="30px" h="30px" my="38px" ml="auto" mr="24px">
          <Image src={countryFlagImage} alt={country} w="30px" h="30px" borderRadius="full" />
        </Flex>
      </Flex>
    </Box>
  )
}