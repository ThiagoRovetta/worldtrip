import { Flex, Icon, Text, useBreakpointValue } from "@chakra-ui/react";
import Image from 'next/image'
import { BsCircleFill } from 'react-icons/bs'

import cocktail from '../../public/images/cocktail.png'
import surf from '../../public/images/surf.png'
import building from '../../public/images/building.png'
import museum from '../../public/images/museum.png'
import earth from '../../public/images/earth.png'

export function TravelTypes() {
  const isMobile = useBreakpointValue({ base: true, sm: true, lg: false })

  return (
    <Flex
      as="div"
      w={{base: "275px", lg: "1160px", sm: "275px"}}
      h={{base: "120px", lg: "145px", sm: "120px"}}
      mt={{base: "36px", lg: "80.79px", sm: "36px"}}
      mr={{base: "50px", lg: "140px", sm: "50px"}}
      ml={{base: "50px", lg: "140px", sm: "50px"}}
      flexDirection={{base: "column", sm: "column", lg: "row"}}
    >
      {
        isMobile ? (
          <>
            <Flex
              as="div"
              direction="row"
              justify="space-between"
              mb="24px"
            >
              <Flex
                align="center"
              >
                <Icon as={BsCircleFill} color='yellow.500' w="8px" h="8px" mr="8px" />
                <Text
                  fontWeight="500"
                  fontSize="18px"
                  lineHeight="27px"
                  align="center"
                  color='gray.900'
                >
                  vida noturna
                </Text>
              </Flex>

              <Flex
                justify="space-between"
                align="center"
              >
                <Icon as={BsCircleFill} color='yellow.500' w="8px" h="8px" mr="8px" />
                <Text
                  fontWeight="500"
                  fontSize="18px"
                  lineHeight="27px"
                  align="center"
                  color='gray.900'
                >
                  praia
              </Text>
              </Flex>
            </Flex>
            <Flex
              as="div"
              direction="row"
              justify="space-between"
              mb="24px"
            >
              <Flex
                align="center"
              >
                <Icon as={BsCircleFill} color='yellow.500' w="8px" h="8px" mr="8px" />
                <Text
                  fontWeight="500"
                  fontSize="18px"
                  lineHeight="27px"
                  align="center"
                  color='gray.900'
                >
                  moderno
                </Text>
              </Flex>

              <Flex
                justify="space-between"
                align="center"
              >
                <Icon as={BsCircleFill} color='yellow.500' w="8px" h="8px" mr="8px" />
                <Text
                  fontWeight="500"
                  fontSize="18px"
                  lineHeight="27px"
                  align="center"
                  color='gray.900'
                >
                  clássico
              </Text>
              </Flex>
            </Flex>
            <Flex
              as="div"
              direction="row"
              justify="center"
            >
              <Flex
                align="center"
              >
                <Icon as={BsCircleFill} color='yellow.500' w="8px" h="8px" mr="8px" />
                <Text
                  fontWeight="500"
                  fontSize="18px"
                  lineHeight="27px"
                  align="center"
                  color='gray.900'
                >
                  e mais...
                </Text>
              </Flex>
            </Flex>
          </>
        ) : (
          <>
            <Flex
              as="div"
              direction="column"
              alignItems="center"
              mr="130px"
            >
              <Image
                alt="cocktail" 
                src={cocktail} 
              />
              <Text
                color="gray.900" 
                fontStyle="normal"
                fontWeight="600"
                fontSize="24px"
                lineHeight="36px"
                align="center"
                mt="24px"
              >
                vida noturna
              </Text>
            </Flex>
      
            <Flex
              as="div"
              direction="column"
              alignItems="center"
              mr="151px"
            >
              <Image
                alt="surf" 
                src={surf} 
              />
              <Text
                color="gray.900" 
                fontStyle="normal"
                fontWeight="600"
                fontSize="24px"
                lineHeight="36px"
                align="center"
                mt="24px"
              >
                praia
              </Text>
            </Flex>
      
            <Flex
              as="div"
              direction="column"
              alignItems="center"
              mr="171px"
            >
              <Image
                alt="building" 
                src={building} 
              />
              <Text
                color="gray.900" 
                fontStyle="normal"
                fontWeight="600"
                fontSize="24px"
                lineHeight="36px"
                align="center"
                mt="24px"
              >
                moderno
              </Text>
            </Flex>
      
            <Flex
              as="div"
              direction="column"
              alignItems="center"
              mr="151px"
            >
              <Image
                alt="museum" 
                src={museum} 
              />
              <Text
                color="gray.900" 
                fontStyle="normal"
                fontWeight="600"
                fontSize="24px"
                lineHeight="36px"
                align="center"
                mt="24px"
              >
                clássico
              </Text>
            </Flex>
      
            <Flex
              as="div"
              direction="column"
              alignItems="center"
            >
              <Image
                alt="earth" 
                src={earth}
              />
              <Text
                color="gray.900" 
                fontStyle="normal"
                fontWeight="600"
                fontSize="24px"
                lineHeight="36px"
                align="center"
                mt="24px"
              >
                e mais...
              </Text>
            </Flex>
          </>
        )
      }

    </Flex>
  )
}