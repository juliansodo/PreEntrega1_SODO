import { Box, Container, Heading, useColorModeValue} from '@chakra-ui/react'
import React from 'react'


export default function ItemListContainer({greeting}) {
  return (
    <Container bg={'darkBrand.600'} maxW={'90%'} marginTop={'1rem'} rounded={'0.5rem'} padding={'0.2rem'}  textColor='white'>
        <Box textAlign={'center'} >
        <Heading as={'h2'} size={'lg'}>{greeting}</Heading>
        </Box>
    </Container>
  )
}
