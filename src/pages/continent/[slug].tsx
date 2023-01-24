import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { Flex } from '@chakra-ui/react'
import { ParsedUrlQuery } from 'querystring'

import { Header } from '../../components/Header'
import { Banner } from '../../components/Banner'
import { Info } from '../../components/Info'
import { Cities } from '../../components/Cities'

interface IParams extends ParsedUrlQuery {
  slug: string
}

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
    cities: City[];
    imagePath: string;
  }
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const { slug } = params as IParams;

  let bio = ''
  let countries, languages, cities100 = 0
  let cities = [] as City[]
  let imagePath = ''

  if ( slug === 'favicon.png' ) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  let isContinent = ['América do Norte', 'América do Sul', 'Ásia', 'África', 'Europa', 'Oceania'].find(continent => continent === slug)

  if ( !isContinent ) {
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
            country: 'Canadá',
            name: 'Toronto',
            cityImage: '/images/continents/northAmerica/cities/toronto.jpeg',
            countryFlagImage: '/images/continents/northAmerica/flags/canada.jpeg',
        },
        {
            country: 'Estados Unidos',
            name: 'Nova York',
            cityImage: '/images/continents/northAmerica/cities/ny.jpeg',
            countryFlagImage: '/images/continents/northAmerica/flags/eua.jpeg',
        },
        {
            country: 'México',
            name: 'Puerto Vallarta',
            cityImage: '/images/continents/northAmerica/cities/pv.jpeg',
            countryFlagImage: '/images/continents/northAmerica/flags/mexico.png',
        },
        {
            country: 'Bahamas',
            name: 'Nassau',
            cityImage: '/images/continents/northAmerica/cities/nassau.jpeg',
            countryFlagImage: '/images/continents/northAmerica/flags/bhamas.png',
        },
        {
            country: 'Belize',
            name: 'Caye Caulker',
            cityImage: '/images/continents/northAmerica/cities/cc.jpeg',
            countryFlagImage: '/images/continents/northAmerica/flags/belize.png',
        },
      ]
      imagePath = '/images/continents/northAmerica/north-america2.jpeg'
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
            country: 'Brasil',
            name: 'Rio de Janeiro',
            cityImage: '/images/continents/southAmerica/cities/rj.jpeg',
            countryFlagImage: '/images/continents/southAmerica/flags/br.jpeg',
        },
        {
            country: 'Argentina',
            name: 'Buenos Aires',
            cityImage: '/images/continents/southAmerica/cities/ba.jpeg',
            countryFlagImage: '/images/continents/southAmerica/flags/argentina.jpeg',
        },
        {
            country: 'Peru',
            name: 'Cusco ',
            cityImage: '/images/continents/southAmerica/cities/cusco.jpeg',
            countryFlagImage: '/images/continents/southAmerica/flags/peru.jpeg',
        },
        {
            country: 'Chile',
            name: 'Santiago',
            cityImage: '/images/continents/southAmerica/cities/santiago.jpeg',
            countryFlagImage: '/images/continents/southAmerica/flags/chile.png',
        },
        {
            country: 'Colômbia',
            name: 'Santa Marta',
            cityImage: '/images/continents/southAmerica/cities/sm.jpeg',
            countryFlagImage: '/images/continents/southAmerica/flags/colombia.png',
        },
      ]
      imagePath = '/images/continents/southAmerica/south-america2.jpeg'
      break;
    }
    case 'Ásia': {
      bio = `A Ásia é o maior dos continentes, tanto em área como em população. 
      Abrange um terço das partes sólidas da superfície da Terra e é responsável 
      por abrigar quase três quintos da população mundial.`
      countries = 50
      languages = 2232
      cities100 = 43
      cities = [
        {
            country: 'Indonésia',
            name: 'Bali',
            cityImage: '/images/continents/asia/cities/bali.jpeg',
            countryFlagImage: '/images/continents/asia/flags/indonesia.png',
        },
        {
            country: 'Tailândia',
            name: 'Bangkok ',
            cityImage: '/images/continents/asia/cities/bang.jpeg',
            countryFlagImage: '/images/continents/asia/flags/tailandia.png',
        },
        {
            country: 'Japão',
            name: 'Tóquio',
            cityImage: '/images/continents/asia/cities/toquio.jpeg',
            countryFlagImage: '/images/continents/asia/flags/japao.png',
        },
        {
            country: 'Turquia',
            name: 'Istambul ',
            cityImage: '/images/continents/asia/cities/istambul.jpeg',
            countryFlagImage: '/images/continents/asia/flags/turquia.png',
        },
        {
            country: 'Emirados Árabes',
            name: 'Dubai',
            cityImage: '/images/continents/asia/cities/dubai.jpeg',
            countryFlagImage: '/images/continents/asia/flags/em.png',
        },
      ]
      imagePath = '/images/continents/asia/asia2.jpeg'
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
            country: 'África do Sul',
            name: 'Joanesburgo',
            cityImage: '/images/continents/africa/cities/jb.jpeg',
            countryFlagImage: '/images/continents/africa/flags/As.jpeg',
        },
        {
            country: 'Uganda ',
            name: 'Entebbe',
            cityImage: '/images/continents/africa/cities/entebbe.jpeg',
            countryFlagImage: '/images/continents/africa/flags/uganda.png',
        },
        {
            country: 'Quênia',
            name: 'Nairobi ',
            cityImage: '/images/continents/africa/cities/nairobi.jpeg',
            countryFlagImage: '/images/continents/africa/flags/quenia.png',
        },
        {
            country: 'Moçambique',
            name: 'Maputo',
            cityImage: '/images/continents/africa/cities/maputo.jpeg',
            countryFlagImage: '/images/continents/africa/flags/mocambique.png',
        },
        {
            country: 'África do Sul',
            name: 'Durban',
            cityImage: '/images/continents/africa/cities/durban.jpeg',
            countryFlagImage: '/images/continents/africa/flags/As.jpeg',
        },
      ]
      imagePath = '/images/continents/africa/africa2.jpeg'
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
          name: 'Londres',
          country: 'Reino Unido',
          cityImage: '/images/continents/europe/cities/londres.png',
          countryFlagImage: '/images/continents/europe/flags/united_kingdom.png'
        },
        {
          name: 'Amsterdã',
          country: 'Holanda',
          cityImage: '/images/continents/europe/cities/amsterda.png',
          countryFlagImage: '/images/continents/europe/flags/netherlands.png'
        },
        {
          name: 'Paris',
          country: 'França',
          cityImage: '/images/continents/europe/cities/paris.png',
          countryFlagImage: '/images/continents/europe/flags/france.png'
        },
        {
          name: 'Roma',
          country: 'Itália',
          cityImage: '/images/continents/europe/cities/roma.png',
          countryFlagImage: '/images/continents/europe/flags/italy.png'
        },
        {
          name: 'Praga',
          country: 'República Tcheca',
          cityImage: '/images/continents/europe/cities/praga.png',
          countryFlagImage: '/images/continents/europe/flags/czech_republic.png'
        },
      ]
      imagePath = '/images/continents/europe/europe2.png'
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
            country: 'Austrália',
            name: 'Sydney',
            cityImage: '/images/continents/oceania/cities/sydney.jpeg',
            countryFlagImage: '/images/continents/oceania/flags/australia.png',
        },
        {
            country: 'Fiji',
            name: 'Yasawa',
            cityImage: '/images/continents/oceania/cities/yasawa.jpeg',
            countryFlagImage: '/images/continents/oceania/flags/fiji.png',
        },
        {
            country: 'Nova Zelândia',
            name: 'Waitomo',
            cityImage: '/images/continents/oceania/cities/w.jpeg',
            countryFlagImage: '/images/continents/oceania/flags/nz.png',
        },
        {
            country: 'Polinésia Francesa',
            name: 'Bora Bora',
            cityImage: '/images/continents/oceania/cities/borabora.jpeg',
            countryFlagImage: '/images/continents/oceania/flags/pf.png',
        },
        {
            country: 'Samoa',
            name: 'Apia',
            cityImage: '/images/continents/oceania/cities/apia.jpeg',
            countryFlagImage: '/images/continents/oceania/flags/samoa.png',
        },
      ]
      imagePath = '/images/continents/oceania/oceania2.jpeg'
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
    cities,
    imagePath
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
        w={{base: "375px", sm: "375px", lg: "1440px"}} 
        h={{base: "2024px", sm: "2024px", lg: "1706px"}} 
        direction="column"
        align="center" 
        mx="auto"
      >
        <Header />  
        <Banner continent={{
          name: continent.name,
          imagePath: continent.imagePath
        }} />
        <Info bio={bio} countries={countries} languages={languages} cities100={cities100}  />
        <Cities cities={continent.cities} />  
      </Flex>
    </>
  )
}