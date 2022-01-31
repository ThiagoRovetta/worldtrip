import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { Flex, Divider, Text } from '@chakra-ui/react'
import { Header } from '../../components/Header'
import { Banner } from '../../components/Banner'
import { Info } from '../../components/Info'
import { Cities } from '../../components/Cities'

type Info = {
  bio: string;
  countries: number;
  languages: number;
  cities100: number;
}

type City = {
  name: string;
  country: string;
  cityImage: string;
  countryFlagImage: string;
}

interface ContinentProps {
  continent: {
    name: string;
    info: Info;
    cities: City
  }
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const { slug } = params;

  let bio = ''
  let countries, languages, cities100 = 0
  let cities = [] as City[]

  if ( slug === 'favicon.png' ) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  switch (slug) {
    case 'América do Norte': {
      bio = `A América do Norte é um subcontinente que compreende a 
      porção setentrional do continente americano. Existem duas formas 
      de classificar esse continente: a primeira considera que a América 
      do Norte é apenas a parte mais setentrional da América, separada `
      countries = 23
      languages = 7
      cities100 = 10
      cities = [
        {
          name: '',
          country: '',
          cityImage: '',
          countryFlagImage: ''
        },
      ]
      break;
    }
    case 'América do Sul': {
      bio = `A América do Sul é um continente que compreende a 
      porção meridional da América. Também é considerada um 
      subcontinente do continente americano. A sua extensão é 
      de 17 819 100 km², abrangendo 12% da superfície terrestre e 6% da 
      população mundial.`
      countries = 12
      languages = 9
      cities100 = 3
      cities = [
        {
          name: '',
          country: '',
          cityImage: '',
          countryFlagImage: ''
        },
      ]
      break;
    }
    case 'Ásia': {
      bio = `A Ásia é o maior dos continentes, tanto em área como em população. 
      Abrange um terço das partes sólidas da superfície da Terra e é responsável 
      por abrigar quase três quintos da população mundial. A Ásia faz fronteira 
      no lado ocidental com a África e com a Europa, e no lado oriental com o 
      oceano Pacífico, a Oceania e, em menor proporção, com a América do Norte, 
      pelo Estreito de Bering.`
      countries = 50
      languages = 2232
      cities100 = 43
      cities = [
        {
          name: '',
          country: '',
          cityImage: '',
          countryFlagImage: ''
        },
      ]
      break;
    }
    case 'África': {
      bio = `A África é o terceiro continente mais extenso (depois da Ásia e da América) 
      com cerca de 30 milhões de quilômetros quadrados, cobrindo 20,3% 
      da área total da terra firme do planeta. É o segundo continente 
      mais populoso da Terra (atrás da Ásia) com cerca de um bilhão`
      countries = 54
      languages = 1000
      cities100 = 3
      cities = [
        {
          name: '',
          country: '',
          cityImage: '',
          countryFlagImage: ''
        },
      ]
      break;
    }
    case 'Europa': {
      bio = `A Europa é, por convenção, um dos seis continentes do mundo. 
      Compreendendo a península ocidental da Eurásia, a Europa 
      geralmente divide-se da Ásia a leste pela divisória de águas 
      dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o 
      mar Negro a sudeste`
      countries = 50
      languages = 60
      cities100 = 27
      cities = [
        {
          name: '',
          country: '',
          cityImage: '',
          countryFlagImage: ''
        },
      ]
      break;
    }
    case 'Oceania': {
      bio = `A Oceânia é uma região geográfica composta por vários grupos 
      de ilhas do oceano Pacífico (Polinésia, Melanésia e Micronésia). 
      O termo Oceania foi criado em 1831 pelo explorador francês Dumont
      d'Urville.`
      countries = 16
      languages = 18
      cities100 = 3
      cities = [
        {
          name: '',
          country: '',
          cityImage: '',
          countryFlagImage: ''
        },
      ]
      break;
    }
  }

  const continent = {
    name: slug,
    info: {
      bio,
      countries,
      languages,
      cities100,
    },
    cities
  }

  return {
    props: {
      continent
    }
  }
}

export default function Continent({ continent }: ContinentProps) {
  const { bio, countries, languages, cities100 } = continent.info

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
        <Info bio={bio} countries={countries} languages={languages} cities100={cities100}  />
        <Cities />  
      </Flex>
    </>
  )
}