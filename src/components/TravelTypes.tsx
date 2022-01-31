import { Flex, Text } from "@chakra-ui/react";
// import { Flex, Image, Text } from "@chakra-ui/react";
import Image from 'next/image'
import cocktail from '../../public/cocktail.png'
import surf from '../../public/surf.png'
import building from '../../public/building.png'
import museum from '../../public/museum.png'
import earth from '../../public/earth.png'

export function TravelTypes() {
  return (
    <Flex
      as="div"
      w="1160px"
      h="145px"
      mt="80.79px"
      mr="140px"
      ml="140px"
    >
      
      <Flex
        as="div"
        direction="column"
        alignItems="center"
        mr="130px"
      >
        <Image
          alt="cocktail" 
          src={cocktail} 
          // src='cocktail.png' 
          // w="85px" 
          // h="85px" 
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
          // src='surf.png' 
          // w="85px" 
          // h="85px" 
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
          // src='building.png' 
          // w="85px" 
          // h="85px" 
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
          // src='museum.png' 
          // w="85px" 
          // h="85px" 
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
          // src='earth.png' 
          // w="85px" 
          // h="85px" 
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

    </Flex>
  )
}