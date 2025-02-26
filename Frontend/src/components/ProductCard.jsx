import { Box, Heading, HStack, IconButton, Image, Text} from '@chakra-ui/react'
import React, { useState } from 'react'
import { FiEdit } from 'react-icons/fi'
import { useColorModeValue } from './ui/color-mode'
import { MdDelete } from 'react-icons/md'
import { useProductStore } from '@/store/product'
import { toaster, Toaster } from "@/components/ui/toaster"
import { href, Link } from 'react-router-dom'

const ProductCard = ({product}) => {

    const textColor = useColorModeValue("gray.600", "gray.200");
    const bg = useColorModeValue("white", "gray.800");
    
    const {deleteProduct} = useProductStore()
    const handleDeleteProduct = async (pid) => {
        const {success, message} = await deleteProduct(pid);
        if(!success) {
            toaster.create({
                title:"Error",
                description: message,
                type:"error",
                status:"error",
                duration : 3000,
                isClosable: true
            
            })
        } else {
            toaster.create({
                title:"Success",
                type:"success",
                description: message,
                status:"success",
                duration : 3000,
                isClosable: true
            
            })  
        }
    }

  return (
    <Box shadow={'lg'} rounded={'lg'} overflow={'hidden'} transition={'all 0.3s'} _hover={{transform: "translateY(-5px)", shadow: "lg"}} bg={'bg'} >
        <Image src={product.image} alt={product.name} h={48} w='full' objectFit={'cover'} />

        <Box p={4}>
            <Heading as={'h3'} size={'md'} mb={2}>
                {product.name} 
            </Heading>

            <Text fontWeight={'bold'} fontSize={'xl'} color={textColor} mb={4} >
                Rs.{product.price}
            </Text>

            <HStack spacing={2}>
                <Link to={'/'} data={product}>
                    <IconButton colorPalette={'blue'} >
                        <FiEdit />
                    </IconButton>
                </Link>
                <IconButton onClick={() => handleDeleteProduct(product._id)} colorPalette={'red'}>
                    <MdDelete />
                </IconButton>
            </HStack>
        </Box>
        <Toaster />
    </Box>
  )
}

export default ProductCard
