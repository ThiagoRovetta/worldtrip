import { Flex, Wrap, WrapItem, Text } from '@chakra-ui/react'

import { Card } from './Card'

export function Cities() {
  return (
    <Flex
      w="1160px"
      h="700px"
      direction="column"
    >
      <Flex justify="flex-start">
        <Text 
          color="gray.900"
          fontWeight="500"
          fontSize="36px"
          lineHeight="54px"
          align="right"
        >
          Cidades +100
        </Text>
      </Flex>

      <Wrap mt="40px" spacing="45px">
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