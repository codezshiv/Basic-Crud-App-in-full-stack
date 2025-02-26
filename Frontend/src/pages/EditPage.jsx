import { Box, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useColorModeValue } from '@/components/ui/color-mode';
import { useProductStore } from '@/store/product';
import { Button,useToastStyles } from '@chakra-ui/react';
import { toaster, Toaster } from "@/components/ui/toaster"

const EditPage = ({product}) => {
    
    const [updatedProduct, setUpdatedProduct] = useState(product);
    const {fetchProducts, products} = useProductStore();
    
        useEffect(()=> {
            fetchProducts();
        }, [fetchProducts]);



  return (
   <Container maxW={"container.sm"}>
           <VStack
               spacing={8}
           >
               <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
                   Update Product
               </Heading>
               <Box 
                   w={"full"}
                   p={6} rounded={"lg"} shadow={"md"} 
               >
                   <VStack spacing={4} bprderBottom={"1px"} borderColor={useColorModeValue("white", "gray.700")} >
                       <Input 
                           placeholder='Product Name'
                           name='name'
                           value={updatedProduct.name}
                        //    onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value})}
                       />
                       <Input 
                           placeholder='Price'
                           name='price'
                           type='number'
                           value={updatedProduct.price}
                        //    onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value})}
                       />
                       <Input 
                           placeholder='Image URL'
                           name='image'
                           value={updatedProduct.image}
                        //    onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value})}
                       />
                       <Button colorScheme={'blue'} w={'full'}>
                           Update Product
                       </Button>
                       
                   </VStack>
                   <Toaster />
               </Box>
           </VStack>
       </Container>
  )
}

export default EditPage
