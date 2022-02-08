import { Flex, Center, Image, Text, useBreakpointValue } from '@chakra-ui/react'

interface BannerProps {
  isHome?: boolean;
  continentName?: string;
}

export function Banner({ isHome, continentName }: BannerProps) {
  const isMobile = useBreakpointValue({ base: true, sm: true, lg: false})

  return (
    <Flex
      as="section"
      w={{base: "375px", lg: "1440px", sm: "375px"}}
      maxWidth={{base: 375, lg: 1440, sm: 375}}
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
                mt={{base: "28px", lg: "80px", sm: "28px"}}
                ml={{base: "16px", lg: "140px", sm: "16px"}}
                w={{base: "238px", lg: "426px", sm: "238px"}}
                h={{base: "58px", lg: "108px", sm: "58px"}}
              >
                <Text
                  color="gray.100" 
                  fontWeight="500"
                  fontSize={{base: "20px", lg: "36px", sm: "20px"}}
                  lineHeight={{base: "30px", lg: "54px", sm: "30px"}}
                >
                  5 Continentes,<br /> infinitas possibilidades.
                </Text>
              </Flex>

              <Flex
                as="div"
                mt={{base: "8px", lg: "20px", sm: "8px"}} 
                mb={{base: "28px", lg: "103.21px", sm: "28px"}}
                ml={{base: "16px", lg: "140px", sm: "16px"}}
                w={{base: "333px", lg: "524px", sm: "333px"}}
                h={{base: "41px", lg: "57px", sm: "41px"}}
              >
                <Text
                  color="gray.300" 
                  fontWeight="normal"
                  fontSize={{base: "14px", lg: "20px", sm: "14px"}} 
                  lineHeight={{base: "21px", lg: "30px", sm: "21px"}}
                >
                  Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                </Text>
              </Flex>
            </Flex>

            {!isMobile && (<Flex
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
            </Flex>)}
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