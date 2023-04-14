import { Box, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'

export function Header() {
    return (
        <>
            <header>
                <Box position={'relative'}>
                    <Flex
                        w={'100%'}
                        h={'5vh'}
                        justifyContent={'space-around'}
                        alignItems={'center'}
                        position={'absolute'}
                        top={0}
                    >
                        <Link href={'/'}><Text
                            fontSize={{ base: '2xl', lg: '5xl' }}
                            fontWeight={'bold'}
                        >TOP</Text></Link>
                        <Link href={'/'}><Text
                            fontSize={{ base: '2xl', lg: '5xl' }}
                            fontWeight={'bold'}
                        >ABOUT ME</Text></Link>
                        <Link href={'/'}><Text
                            fontSize={{ base: '2xl', lg: '5xl' }}
                            fontWeight={'bold'}
                        >WORKs</Text></Link>
                    </Flex>
                </Box>
            </header>
        </>
    )
}