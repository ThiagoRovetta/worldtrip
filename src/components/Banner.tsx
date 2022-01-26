import { Flex, Center, Image, Text } from '@chakra-ui/react'

export function Banner() {

  return (
    <Flex
      as="section"
      w={{base: "375px", lg: "1440px", sm: "375px"}}
      maxWidth={1440}
      h={{base: "163px", lg: "368.21px", sm: "163px"}}
      bgImage="url('/Background.png')"
      bgRepeat="no-repeat"
    >
      <Flex
        as="div"
        w="100%"
        h="100%"
        direction="column"
      >
        <Flex
          as="div"
          mt="80px" 
          ml="140px" 
          w="426px"
          h="108px"
        >
          <Text
            color="gray.100" 
            fontSize="36px" 
            fontWeight="500"
            lineHeight="54px"
          >
            5 Continentes,<br /> infinitas possibilidades.
          </Text>
        </Flex>

        <Flex
          as="div"
          mt="20px" 
          mb="103.21px" 
          ml="140px" 
          w="524px"
          h="57px"
        >
          <Text
            color="gray.300" 
            fontSize="20px" 
            fontWeight="normal"
            lineHeight="30px"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>
      </Flex>

      <Flex
        as="div"
        w="100%"
        h="100%"
        direction="column"
      >
        <Center
          mt="86.73px" 
          mr="146.8px"
        >
          <Image 
            alt="logo" 
            src='Airplane.png' 
            w="417.15px" 
            h="270.74px" 
            transform="rotate(3deg)"
          />
        </Center>
      </Flex>

    </Flex>
  )
}