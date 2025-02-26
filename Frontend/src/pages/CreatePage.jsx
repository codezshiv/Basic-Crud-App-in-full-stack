import { useColorModeValue } from '@/components/ui/color-mode';
import { useProductStore } from '@/store/product';
import { Box, Button, Container, Heading, Input, useToastStyles, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'
import { toaster, Toaster } from "@/components/ui/toaster"
// import { Button, For, HStack } from "@chakra-ui/react"

const CreatePage = () => {
    const [newProduct, setNewProduct] =useState({
        name: '',
        price:'',
        image:'',
    });

    const {createProduct} = useProductStore()
    const handleAddProduct = async () => {
        const {success, message} = await createProduct(newProduct)
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

        setNewProduct({ name: "", price: "", image: "" });
    };


  return (
    <Container maxW={"container.sm"}>
        <VStack
            spacing={8}
        >
            <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
                Create New Product
            </Heading>
            <Box 
                w={"full"}
                p={6} rounded={"lg"} shadow={"md"} 
            >
                <VStack spacing={4} bprderBottom={"1px"} borderColor={useColorModeValue("white", "gray.700")} >
                    <Input 
                        placeholder='Product Name'
                        name='name'
                        value={newProduct.name}
                        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value})}
                    />
                    <Input 
                        placeholder='Price'
                        name='price'
                        type='number'
                        value={newProduct.price}
                        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value})}
                    />
                    <Input 
                        placeholder='Image URL'
                        name='image'
                        value={newProduct.image}
                        onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value})}
                    />
                    <Button colorScheme={'blue'} onClick={handleAddProduct} w={'full'}>
                        Add Product
                    </Button>
                    
                </VStack>
                <Toaster />
            </Box>
        </VStack>
    </Container>
  )
}

export default CreatePage
