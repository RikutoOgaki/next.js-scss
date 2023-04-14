import { Box, Flex, Text, Icon } from '@chakra-ui/react'
import {
    SiHtml5,
    SiCss3,
    SiSass,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiVite,
    SiNpm,
    SiChakraui,

    SiNextdotjs,
    SiVuedotjs,
    SiPostgresql,
    SiPhp,
    SiRuby,

    SiVisualstudiocode,
    SiFigma,
    SiAdobeillustrator,
    SiAdobephotoshop,
    SiAdobepremierepro,
    SiAdobeindesign,
    SiAdobexd,
    SiNotion,
    SiSlack
} from 'react-icons/si'


export function Skill() {

    const iconArray = {
        useicon: [
            SiHtml5,
            SiCss3,
            SiSass,
            SiJavascript,
            SiTypescript,
            SiReact,
            SiVite,
            SiChakraui,
            SiNpm,
        ],
        studyicon: [
            SiNextdotjs,
            SiVuedotjs,
            SiPostgresql,
            SiPhp,
            SiRuby
        ],
        usingicon: [
            SiVisualstudiocode,
            SiFigma,
            SiAdobeillustrator,
            SiAdobephotoshop,
            SiAdobepremierepro,
            SiAdobeindesign,
            SiAdobexd,
            SiNotion,
            SiSlack
        ]
    }


    return (
        <>
            <Flex
                width={'100%'}
                justifyContent={'flex-end'}
                h={'50vh'}>
                <Flex
                    flexDir={'column'}
                    w={'80%'}
                    h={'50vh'}
                    gap={'2rem'}
                    justifyContent={'center'}
                    alignItems={'flex-end'}
                    fontWeight={'bold'}
                    marginRight={{ base: '5rem', lg: '20rem' }}
                >
                    <Text
                        fontSize={{ base: '3xl', lg: '5xl' }}
                        opacity={'.5'}
                    >-02 Skills -</Text>
                    <Text
                        textAlign={'right'}
                        fontSize={{ base: '7xl', lg: '9xl' }}
                    >What I use & am learning</Text>
                    <Text
                        fontSize={{ base: '2xl', lg: '4xl' }}
                    >メインで使用している技術</Text>
                    <Flex>
                        {iconArray.useicon.map((item, idx) =>
                            <Box
                                key={idx}
                                fontSize={{ base: '3xl', lg: '5xl' }}
                                marginLeft={{ base: '1rem', lg: '2rem' }}
                            >
                                <Icon as={item} />
                            </Box>
                        )}
                    </Flex>
                    <Text
                        fontSize={{ base: '2xl', lg: '4xl' }}
                    >学んでいる（学びたい）技術</Text>
                    <Flex>
                        {iconArray.studyicon.map((item, idx) =>
                            <Box
                                key={idx}
                                fontSize={{ base: '3xl', lg: '5xl' }}
                                marginLeft={{ base: '1rem', lg: '2rem' }}
                            >
                                <Icon as={item} />
                            </Box>
                        )}
                    </Flex>
                    <Text
                        fontSize={{ base: '2xl', lg: '4xl' }}
                    >使用しているツール</Text>
                    <Flex>
                        {iconArray.usingicon.map((item, idx) =>
                            <Box
                                key={idx}
                                fontSize={{ base: '3xl', lg: '5xl' }}
                                marginLeft={{ base: '1rem', lg: '2rem' }}
                            >
                                <Icon as={item} />
                            </Box>
                        )}
                    </Flex>
                    <Text
                        fontSize={{ base: '1xl', lg: '4xl' }}
                        textAlign={'right'}
                    >
                        私がデザインから開発まで一人で行う場合は、figmaでデザインをして、
                        開発はnext.js(React) + TypeScript + Chakra-UIでフロントを行い,<br />
                        バックはPostgreSQLで自分の勉強もかねて、使用すると思います。
                    </Text>
                </Flex>
            </Flex>
        </>
    )
}