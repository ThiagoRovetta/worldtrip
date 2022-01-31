import { Flex, Text, Tooltip, Icon } from '@chakra-ui/react'
import { AiOutlineInfoCircle } from 'react-icons/ai'

interface InfoProps {
  bio: string;
  countries: number;
  languages: number;
  cities100: number;
}

export function Info({ bio, countries, languages, cities100 }: InfoProps) {
  return (
    <Flex
      mt="80px"
      ml="140px"
      mr="140px"
      mb="80px"
      alignItems="center"
    >

      <Flex
        w="600px"
        h="211px"
        mr="70px"
      >
        <Text 
          color="gray.900"
          fontWeight="400"
          fontSize="24px"
          lineHeight="36px"
          align="justify"
        >
          {bio}
        </Text>
      </Flex>

      <Flex
        w="490px"
        h="99px"
      >

        <Flex w="98px" h="99px" direction="column" mr="42px">
          <Text
            fontWeight="600"
            fontSize="48px"
            lineHeight="72px"
            align="center"
            color="yellow.500"
          >
            {countries}
          </Text>
          <Text
            fontWeight="600"
            fontSize="24px"
            lineHeight="36px"
            align="center"
            color="gray.900"
          >
            países
          </Text>
        </Flex>

        <Flex w="122px" h="99px" direction="column" mr="42px">
          <Text
            fontWeight="600"
            fontSize="48px"
            lineHeight="72px"
            align="center"
            color="yellow.500"
          >
            {languages}
          </Text>
          <Text
            fontWeight="600"
            fontSize="24px"
            lineHeight="36px"
            align="center"
            color="gray.900"
          >
            línguas
          </Text>
        </Flex>

        <Flex w="181px" h="99px" direction="column">
          <Text
            fontWeight="600"
            fontSize="48px"
            lineHeight="72px"
            align="center"
            color="yellow.500"
          >
            {cities100}
          </Text>
          <Flex>
            <Text
              fontWeight="600"
              fontSize="24px"
              lineHeight="36px"
              align="center"
              color="gray.900"
              mr="5px"
            >
              cidades +100
            </Text>
            <Tooltip label="100 cidades mais visitadas">
              <span>
                <Icon as={AiOutlineInfoCircle} w="16px" h="16px" color="gray.700" mt="10px"/>
              </span>
            </Tooltip>
          </Flex>
        </Flex>

      </Flex>

    </Flex>
  )
}