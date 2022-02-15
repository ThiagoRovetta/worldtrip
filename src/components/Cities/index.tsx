import { Flex, Wrap, WrapItem, Text } from '@chakra-ui/react'

import { Card } from './Card'

type City = {
  name: string;
  country: string;
  cityImage: string;
  countryFlagImage: string;
}

interface CitiesProps {
  cities: City[]
}

export function Cities({ cities }: CitiesProps) {
  return (
    <Flex
      w={{base: "343px", sm: "343px", lg: "1160px"}}
      h={{base: "1531px", sm: "1531px", lg: "700px"}}
      mx={{base: "16px", sm: "16px", lg: "0px"}}
      direction="column"
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
        {
          cities?.map(city => {
            return (
              <WrapItem key={city.name}>
                <Card name={city.name} country={city.country} cityImage={city.cityImage} countryFlagImage={city.countryFlagImage}/>
              </WrapItem>
            )
          })
        }
      </Wrap>

    </Flex>
  )
}