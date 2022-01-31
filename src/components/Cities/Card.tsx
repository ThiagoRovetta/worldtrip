import { Box, Image, Flex, Text } from '@chakra-ui/react'

interface CardProps {
  mr?: string;
}


export function Card({ mr = '0' }: CardProps) {
  const property = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
  }

  return (
    <Box borderWidth='1px' borderColor='yellow.500' borderRadius='lg' overflow='hidden' w="256px" h="279px" mr={mr}>
      <Image src={property.imageUrl} alt={property.imageAlt} w="256px" h="173px" />

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
            Londres
          </Text>
          <Text
            fontFamily="Barlow"
            fontWeight="500"
            fontSize="16px"
            lineHeight="26px"
            color="gray.700"
          >
            Reino Unido
          </Text>
        </Flex>

        <Flex direction="column" w="30px" h="30px" my="38px" ml="auto" mr="24px">
          <Image src={property.imageUrl} alt={property.imageAlt} w="30px" h="30px" borderRadius="full" />
        </Flex>
        
      </Flex>
    </Box>
  )
}