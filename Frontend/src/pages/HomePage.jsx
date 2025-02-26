import ProductCard from '@/components/ProductCard'
import { useProductStore } from '@/store/product'
import { Container, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {

    const {fetchProducts, products} = useProductStore();

    useEffect(()=> {
        fetchProducts();
    }, [fetchProducts]);

    console.log("ptoducts: ", products);

  return (
    <Container maxW='container.xl' py={12}>
        <VStack spacing={8}>
            <Text 
                fontSize={30} fontWeight={"bold"}
            >
                Current Products ✈️
            </Text>
            <SimpleGrid
                columns={{
                    base: 1,
                    md: 2,
                    lg: 3,
                }}
                spacing={10}
                gap={8}
                w={"full"}

            >
                {products.map((product) => 
                    (<ProductCard key={product._id} product={product} />) 
                )}

            </SimpleGrid>
            {products.length === 0 && (
                <Text fontSize={'xl'} fontWeight={"bold"}>
                No Product Found 🥲{" "}
                <Link to={"/create"}>
                    <Text as={"span"} color={"blue.500"} _hover={{textDecoration:"underline"}} >
                        Create a Product
                    </Text>
                </Link>
            </Text>
            )}
        </VStack>
    </Container>
  )
}

export default HomePage
