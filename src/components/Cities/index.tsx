import { Flex, Wrap, WrapItem, Text } from '@chakra-ui/react'

import { Card } from './Card'

export function Cities() {
  return (
    <Flex
      w={{base: "343px", sm: "343px", lg: "1160px"}}
      h={{base: "1531px", sm: "1531px", lg: "700px"}}
      direction="column"
      mx={{base: "16px", sm: "16px", lg: "0px"}}
    >
      <Flex justify="flex-start">
        <Text 
          color="gray.900"
          fontWeight="500"
          fontSize={{base: "24px", sm: "24px", lg: "36px"}} 
          lineHeight={{base: "36px", sm: "36px", lg: "54px"}} 
          align="right"
        >
          Cidades +100
        </Text>
      </Flex>

      <Wrap 
        mt={{base: "20px", sm: "20px", lg: "40px"}} 
        spacing={{base: "20px", sm: "20px", lg: "45px"}}
        justify={{base: "center", sm: "center", lg: "initial"}}
      >
        <WrapItem>
          <Card />
        </WrapItem>
        <WrapItem>
          <Card />
        </WrapItem>
        <WrapItem>
          <Card />
        </WrapItem>
        <WrapItem>
          <Card />
        </WrapItem>
        <WrapItem>
          <Card />
        </WrapItem>
        <WrapItem>
          <Card />
        </WrapItem>
        <WrapItem>
          <Card />
        </WrapItem>
      </Wrap>

      {/* <Flex
        mt="40px"
        justifyContent="space-between"
      >
        <Wrap mt="40px">
          <WrapItem>
            <Card />
          </WrapItem>
          <WrapItem>
            <Card />
          </WrapItem>
          <WrapItem>
            <Card />
          </WrapItem>
          <WrapItem>
            <Card />
          </WrapItem>
        </Wrap>
      </Flex> */}
    </Flex>
  )
}