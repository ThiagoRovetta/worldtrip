import { Flex, Divider } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { TravelTypes } from '../components/TravelTypes'

export default function Home() {
  return (
    <>
      <Flex 
        w={{lg: "1440px", sm: "375px"}} 
        h="1469px" 
        direction="column"
        align="center" 
        bg="gray.100"
        mx="auto"
      >
        <Header isHome />  
        <Banner />  
        <TravelTypes />  
        <Flex
          mt="80px"
          mb="52px"
          w="90px"
          mx="auto"
        >
          <Divider color="gray.900" borderBottom="2px" />
        </Flex>
      </Flex>
    </>
  )
}
