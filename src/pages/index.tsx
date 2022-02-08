import Head from 'next/head'
import { Flex, Divider, Text } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { TravelTypes } from '../components/TravelTypes'
import { Slider } from '../components/Slider'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | WorldTrip</title>
      </Head>
      <Flex 
        w={{base: "375px", lg: "1440px", sm: "375px"}} 
        h={{base: "777px", lg: "1469px", sm: "777px"}}
        direction="column"
        align="center" 
        mx="auto"
      >
        <Header isHome />  
        <Banner isHome />  
        <TravelTypes />  
        <Flex
          mt={{base: "36px", lg: "80px", sm: "36px"}}
          mb={{base: "24px", lg: "52px", sm: "24px"}}
          w={{base: "60px", lg: "90px", sm: "60px"}}
          mx="auto"
        >
          <Divider color="gray.900" borderBottom={{base: "1px", lg: "2px", sm: "1px"}} />
        </Flex>
        <Text
          fontStyle="normal"
          fontWeight="500"
          fontSize={{base: "20px", lg: "36px", sm: "20px"}}
          lineHeight={{base: "30px", lg: "54px", sm: "30px"}}
          w={{base: "297px", lg: "839px", sm: "297px"}}
          h={{base: "54px", lg: "101px", sm: "54px"}}
          align="center"
          color="gray.900"
        >
          Vamos nessa? <br /> Então escolha seu continente
        </Text>
        <Flex
          mt={{base: "20px", lg: "52px", sm: "20px"}}
          mb={{base: "24px", lg: "40px", sm: "24px"}}
          mx="auto"
          w={{base: "375px", lg: "1240px", sm: "375px"}}
          h={{base: "250px", lg: "450px", sm: "250px"}}
          justifyContent="center"
        >
          <Slider />
        </Flex>
      </Flex>
    </>
  )
}
