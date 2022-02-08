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
      mt={{base: "24px", sm: "24px", lg: "80px"}}
      ml={{base: "16px", sm: "16px", lg: "140px"}}
      mr={{base: "16px", sm: "16px", lg: "140px"}}
      mb={{base: "32px", sm: "32px", lg: "80px"}}
      alignItems="center"
      flexDirection={{base: "column", sm: "column", lg: "row"}}
    >

      <Flex
        w={{base: "343px", sm: "343px", lg: "600px"}}
        h={{base: "146px", sm: "146px", lg: "211px"}}
        mr={{base: "0", sm: "0", lg: "70px"}}
      >

        <Text 
          color="gray.900"
          fontWeight="400"
          fontSize={{base: "14px", sm: "14px", lg: "24px"}}
          lineHeight={{base: "21px", sm: "21px", lg: "36px"}}
          align="justify"
          >
          {bio}
        </Text>

      </Flex>

      <Flex
        w={{base: "343px", sm: "343px", lg: "490px"}}
        h={{base: "59px", sm: "59px", lg: "99px"}}
        mt={{base: "16px", sm: "16px", lg: "0"}}
      >

        <Flex 
          w={{base: "60px", sm: "60px", lg: "98px"}}
          h={{base: "59px", sm: "59px", lg: "99px"}}
          mr="42px"
          direction="column" 
        >
          <Text
            fontWeight="600"
            fontSize={{base: "24px", sm: "24px", lg: "48px"}}
            lineHeight={{base: "36px", sm: "36px", lg: "72px"}}
            align={{base:"justify", sm:"justify", lg:"center"}}
            color="yellow.500"
          >
            {countries}
          </Text>
          <Text
            fontWeight={{base: "400", sm: "400", lg: "600"}}
            fontSize={{base: "18px", sm: "18px", lg: "24px"}}
            lineHeight={{base: "27px", sm: "27px", lg: "36px"}}
            align={{base:"justify", sm:"justify", lg:"center"}}
            color="gray.900"
          >
            países
          </Text>
        </Flex>

        <Flex
          w={{base: "67px", sm: "67px", lg: "122px"}}
          h={{base: "53px", sm: "53px", lg: "99px"}}
          mr="39px"
          direction="column" 
        >
          <Text
            fontWeight="600"
            fontSize={{base: "24px", sm: "24px", lg: "48px"}}
            lineHeight={{base: "36px", sm: "36px", lg: "72px"}}
            align={{base:"justify", sm:"justify", lg:"center"}}
            color="yellow.500"
          >
            {languages}
          </Text>
          <Text
            fontWeight={{base: "400", sm: "400", lg: "600"}}
            fontSize={{base: "18px", sm: "18px", lg: "24px"}}
            lineHeight={{base: "27px", sm: "27px", lg: "36px"}}
            align={{base:"justify", sm:"justify", lg:"center"}}
            color="gray.900"
          >
            línguas
          </Text>
        </Flex>

        <Flex
          w={{base: "120px", sm: "120px", lg: "165px"}}
          h={{base: "55px", sm: "55px", lg: "99px"}}
          mr="5px"
          direction="column"
        >
          <Text
            fontWeight="600"
            fontSize={{base: "24px", sm: "24px", lg: "48px"}}
            lineHeight={{base: "36px", sm: "36px", lg: "72px"}}
            align={{base:"justify", sm:"justify", lg:"center"}}
            color="yellow.500"
          >
            {cities100}
          </Text>
          <Flex>
            <Text
              fontWeight={{base: "400", sm: "400", lg: "600"}}
              fontSize={{base: "18px", sm: "18px", lg: "24px"}}
              lineHeight={{base: "27px", sm: "27px", lg: "36px"}}
              align={{base: "justify", sm: "justify", lg: "center"}}
              color="gray.900"
            >
              cidades +100
            </Text>
          </Flex>
        </Flex>

        <Flex
          w={{base: "10px", sm: "10px", lg: "10px"}}
          h={{base: "10px", sm: "10px", lg: "10px"}}
          direction="column"
        >
          <Tooltip label="100 cidades mais visitadas">
            <span>
              <Icon 
                as={AiOutlineInfoCircle} 
                w={{base:"10px", sm:"10px", lg:"16px"}} 
                h={{base:"10px", sm:"10px", lg:"16px"}}
                mt={{base:"46px", sm:"46px", lg:"83px"}}
                color="gray.700" 
              />
            </span>
          </Tooltip>
        </Flex>

      </Flex>

    </Flex>
  )
}