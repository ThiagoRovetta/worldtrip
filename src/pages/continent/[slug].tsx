import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { Flex, Divider, Text } from '@chakra-ui/react'
import { Header } from '../../components/Header'
import { Banner } from '../../components/Banner'
import { TravelTypes } from '../../components/TravelTypes'
import { Slider } from '../../components/Slider'

interface ContinentProps {
  continent: {
    name: string;
  }
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const { slug } = params;

  if ( slug === 'favicon.png' ) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const continent = {name: slug}

  return {
    props: {
      continent
    }
  }
}


export default function Continent({ continent }: ContinentProps) {
  return (
    <>
      <Head>
        <title>{continent.name} | WorldTrip</title>
      </Head>
      <Flex 
        w={{lg: "1440px", sm: "375px"}} 
        h="1706px" 
        direction="column"
        align="center" 
        mx="auto"
      >
        <Header />  
        <Banner continentName={continent.name} />  
        <TravelTypes />  
        <Flex
          mt="80px"
          mb="52px"
          w="90px"
          mx="auto"
        >
          <Divider color="gray.900" borderBottom="2px" />
        </Flex>
        <Text
          fontStyle="normal"
          fontWeight="500"
          fontSize="36px"
          lineHeight="54px"
          align="center"
          color="gray.900"
        >
          Vamos nessa? <br /> Então escolha seu continente
        </Text>
        <Flex
          mt="52px"
          mb="40px"
          mx="auto"
          w="1240px"
          h="450px"
          justifyContent="center"
        >
          <Slider />
        </Flex>
      </Flex>
    </>
  )
}