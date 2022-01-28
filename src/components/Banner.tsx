import { Flex, Center, Image, Text } from '@chakra-ui/react'

interface BannerProps {
  isHome?: boolean;
  continentName?: string;
}

export function Banner({ isHome, continentName }: BannerProps) {

  return (
    <Flex
      as="section"
      w={{base: "375px", lg: "1440px", sm: "375px"}}
      maxWidth={1440}
      h={{base: isHome ? "163px" : "150px", lg: isHome ? "368.21px" : "500px", sm: isHome ? "163px" : "150px"}}
      bgImage={isHome ? "url('/Background.png')" : "url('/europe2.png')"}
      bgRepeat="no-repeat"
    >
      {
        isHome ? (
          <>
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
          </>
        ) : (
          <>
            <Flex
              as="div"
              w="100%"
              h="100%"
              direction="column"
            >
              <Flex
                as="div"
                mt="369px" 
                ml="140px" 
                h="72px"
              >
                <Text
                  color="gray.100" 
                  fontSize="48px" 
                  fontWeight="600"
                  lineHeight="72px"
                >
                  {continentName}
                </Text>
              </Flex>
            </Flex>
          </>
        )
      }

    </Flex>
  )
}