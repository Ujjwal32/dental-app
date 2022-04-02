import React from 'react'
import {
    Box,
    Heading,
    Flex,
    Text
} from '@chakra-ui/react'

const UserAppSlot = ({ appointment }) => {
    const { timeslot, doctor, visited, date } = appointment
  return (
    <Box 
      w='30%'
      minW='18rem'
      p='1rem'
      borderRadius={'0.5rem'}
      mb='1rem'
      bgImage={'linear-gradient(to left,#18D2AE, #0FCFEA)'}
      cursor='pointer'
    //   onClick={() => handleClick(id)}
    //   border = {active===id ? '2px solid  #0d7ea6' : ''}
    >
        <Flex
         w='100%'
         justify={'space-between'}
         align='center'
         color='#ebe5e5'
         mb='1rem'
        >
            <Heading as='h3' fontSize={{base: '0.8rem', sm: '0.8rem', md: '1rem', lg: '1rem'}} mb='0.7rem' color='#ebe5e5'>{timeslot}</Heading>
            <Text 
                color={visited ? '#f78e8e' : 'white' }
                px='1rem'
                py='0.2rem'
                borderRadius={'0.5rem'}
                backgroundColor='transparent'
                border='1px solid white'
            >
                {visited ? 'visited' : 'due'}
            </Text>
        </Flex>
        <Flex
         w='100%'
         justify={'space-between'}
         align='center'
         color='#ebe5e5'
        >
          <Heading as='h4' fontSize={{base: '0.7rem', sm: '0.7rem', md: '0.9rem', lg: '0.9rem'}}>{doctor}</Heading>
          <Heading as='h5' fontSize={{base: '0.6rem', sm: '0.6rem', md: '0.8rem', lg: '0.8rem'}}>Date - {new Date(date).toLocaleDateString()}</Heading>
        </Flex>
    </Box>
  )
}

export default UserAppSlot