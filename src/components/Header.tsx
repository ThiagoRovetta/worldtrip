import Link from "next/link";
import { Flex, Center, Icon, Link as ChakraLink } from '@chakra-ui/react'
import { AiOutlineLeft } from 'react-icons/ai'
import Image from 'next/image'

import logo from '../../public/images/Logo.png'

interface HeaderProps {
  isHome?: boolean;
}

export function Header({ isHome }: HeaderProps) {
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
      </Center>

    </Flex>
  )
}