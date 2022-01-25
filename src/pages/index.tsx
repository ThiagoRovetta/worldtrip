import { Flex, Button, Stack } from '@chakra-ui/react'
import { Header } from '../components/Header'

export default function Home() {
  return (
    <>
      <Flex 
        w={{lg: "1440px", sm: "375px"}} 
        h="100vh" 
        direction="column"
        align="center" 
        bg="gray.100"
      >
        <Header isHome />  
      </Flex>
    </>
  )
}
