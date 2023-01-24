import { Flex, Center, Image, Text, useBreakpointValue } from '@chakra-ui/react'

interface BannerProps {
  isHome?: boolean;
  continent?: {
    name: string;
    imagePath: string;
  }
}

export function Banner({ isHome, continent }: BannerProps) {
  const isMobile = useBreakpointValue({ base: true, sm: true, lg: false})

  return (
    <Flex
      as="section"
      maxWidth={{base: 375, sm: 375, lg: 1440}}
      w={{base: "375px", sm: "375px", lg: "1440px"}}
      h={{base: isHome ? "163px" : "150px", sm: isHome ? "163px" : "150px", lg: isHome ? "368.21px" : "500px"}}
      bgImage={isHome ? "url('/images/Background.png')" : `url('${continent?.imagePath}')`}
      bgRepeat="no-repeat"
      bgPosition="center"
      bgSize={{base: isHome ? "" : "cover", sm: isHome ? "" : "cover", lg: isHome ? "" : "cover"}}
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

            {!isMobile && (
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
                    src='/images/Airplane.png' 
                    w="417.15px" 
                    h="270.74px" 
                    transform="rotate(3deg)"
                  />
                </Center>
              </Flex>
            )}
          </>
        ) : (
          <Flex
            as="div"
            w="100%"
            h="100%"
            direction="column"
          >
            <Flex
              as="div"
              mx={isMobile ? "auto" : "369px"}
              my={isMobile ? "auto" : "140px"}
            >
              <Text
                color="gray.100" 
                fontWeight="600"
                fontSize={{base: "28px", sm: "28px", lg: "48px"}} 
                lineHeight={{base: "42px", sm: "42px", lg: "72px"}}
              >
                {continent?.name}
              </Text>
            </Flex>
          </Flex>
        )
      }

    </Flex>
  )
}