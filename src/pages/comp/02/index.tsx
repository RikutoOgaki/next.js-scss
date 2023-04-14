import { Box, Flex, Text, Input } from '@chakra-ui/react'
import { Header } from './components/Header'
import { Name } from './components/Name'

export default function Sample02() {
    return (
        <>
            <Box w={'100%'} h={'100%'}>
                <Header />
                <Name />
            </Box>
        </>
    )
}