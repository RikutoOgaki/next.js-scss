import { Box, Flex, Text, Icon } from '@chakra-ui/react'
import { SiGithub, SiInstagram, SiTwitter } from 'react-icons/si'
import Link from 'next/link'

export function Name() {

    const iconarr = [

        { icon: SiGithub, link: 'https://github.com/RikutoOgaki' },
        { icon: SiInstagram, link: 'https://www.instagram.com/rikut0_0531/' },
        { icon: SiTwitter, link: 'https://twitter.com/Rikuto_Ogaki' }
    ]

    return (
        <>
            <Flex flexDir={'column'} justifyContent={'center'} alignItems={'center'} w={'full'} h={'100vh'} gap={'2rem'}>
                <Text
                    fontSize={{ base: '3xl', lg: '5xl' }}
                    fontWeight={'bold'}
                >Hello</Text>
                <Text
                    fontSize={{ base: '5xl', lg: '9xl' }}
                    fontWeight={'bold'}
                >Rikuto Ogaki</Text>
                <Text
                    fontSize={{ base: '3xl', lg: '5xl' }}
                    fontWeight={'bold'}
                >Web Front Enjiner</Text>
                <Flex width={'20%'} justifyContent={'space-around'}>
                    {iconarr.map((item, idx) =>
                        <Link href={item.link} key={idx}>
                            <Text fontSize={{ base: '3xl', lg: '5xl' }}>
                                <Icon as={item.icon} />
                            </Text>
                        </Link>
                    )}
                </Flex>
            </Flex>
        </>
    )
}