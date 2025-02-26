import { Button, Container, Flex, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { BsPlusSquare } from 'react-icons/bs'
import { useColorMode } from './ui/color-mode'
import { LuSun } from 'react-icons/lu'
import { IoMoon } from 'react-icons/io5'
import { Link } from 'react-router-dom'


const Navbar = () => {

    const {colorMode, toggleColorMode} = useColorMode()

  return (
    <Container maxW={"1140px"} px={4}>
        <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDir={{
                base:"column",
                sm:"row"
            }}
        >
            <Text
                fontSize={'2xl'}
                fontWeight={'bold'}
            >
                <Link to={"/"}>Product Store 🛒</Link>
            </Text>
            <HStack spacing={2} alignItems={"center"}>
                <Link to={"/create"}>
                    <Button>
                        <BsPlusSquare fontSize={"20px"} />
                    </Button>
                </Link>
                <Button onClick={toggleColorMode}>
                    {colorMode === "light" ? <IoMoon /> : <LuSun size={"20px"} />}
                </Button>
            </HStack>
        </Flex>
    </Container>
  )
}

export default Navbar
