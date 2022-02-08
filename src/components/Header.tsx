import Link from "next/link";
import { Flex, Center, Img, Icon, Link as ChakraLink, useBreakpointValue } from '@chakra-ui/react'
// import { Flex, Center, Image, Icon, Link as ChakraLink, useBreakpointValue } from '@chakra-ui/react'
import { AiOutlineLeft } from 'react-icons/ai'
import Image from 'next/image'
import logo from '../../public/Logo.png'

interface HeaderProps {
  isHome?: boolean;
}

export function Header({ isHome }: HeaderProps) {
  const mL = useBreakpointValue({ base: '147px', lg: '628px', sm: '147px' })
  const mLOtherPages = useBreakpointValue({ base: '115px', lg: '456px', sm: '115px' })
  const mR = useBreakpointValue({ base: '147px', lg: '628px', sm: '147px' })
  console.log('mL', mL)
  console.log('mLOtherPages', mLOtherPages)
  console.log('mR', mR)

  return (
    <Flex
      as="header"
      w={{base: "375px", lg: "1440px", sm: "375px"}}
      maxWidth={{base: 375, lg: 1440, sm: 375}}
      h={{base: "50px", lg: "100px", sm: "50px"}}
      align="center"
    >

      {!isHome && (
        <Center ml={{base: "16px", lg: "140px", sm: "16px"}}>
          <Link href="/" passHref>
            <ChakraLink display="flex" align="center">
              <Icon 
                as={AiOutlineLeft} 
                w={{base: "16px", lg: "32px", sm: "16px"}} 
                h={{base: "16px", lg: "32px", sm: "16px"}} 
                color="gray.900" 
              />
            </ChakraLink>
          </Link>
        </Center>
      )}

      <Center 
        ml={isHome ? { base: '147px', lg: '628px', sm: '147px' } : { base: '115px', lg: '456px', sm: '115px' }} 
        mr={{ base: '147px', lg: '628px', sm: '147px' }}
      >
        <Image alt="logo" src={logo}/>
        {/* <Image alt="logo" src='Logo.png' w={{base: "81px", lg: "184px", sm: "81px"}} h={{lbase: "20px", g: "45.75px", sm: "20px"}} /> */}
      </Center>

    </Flex>
  )
}