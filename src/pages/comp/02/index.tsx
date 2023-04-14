import { Box, Flex, Text, Input } from '@chakra-ui/react'
import { Header } from './components/Header'
import { Name } from './components/Name'
import { Profil } from './components/Profil'
import { Skill } from './components/Skill'

export default function Sample02() {
    return (
        <>
            <Box w={'100%'} h={'100%'}>
                <Header />
                <Name />
                <main>
                    <Profil />
                </main>
            </Box>
        </>
    )
}