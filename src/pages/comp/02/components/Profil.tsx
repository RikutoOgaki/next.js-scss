import { Box, Flex, Text } from '@chakra-ui/react'

export function Profil() {
    return (
        <>
            <Flex
                w={'100%'}
                h={'50vh'}
            >
                <Flex
                    flexDir={'column'}
                    w={'80%'}
                    h={'50vh'}
                    justifyContent={'center'}
                    alignItems={'flex-start'}
                    fontWeight={'bold'}
                    gap={'1rem'}
                    marginLeft={{ base: '5rem', lg: '20rem' }}>
                    <Text
                        fontSize={{ base: '3xl', lg: '5xl' }}
                    >-01 About me-</Text>
                    <Text
                        fontSize={{ base: '2xl', lg: '3xl' }}
                    >おおがき りくと</Text>
                    <Text
                        fontSize={{ base: '7xl', lg: '9xl' }}
                    >大垣 陸斗</Text>
                    <Text
                        fontSize={{ base: '4xl', lg: '5xl' }}
                    >ECCコンピューター専門学校Webデザインコース</Text>
                    <Text
                        fontSize={{ base: '4xl', lg: '5xl' }}
                    >2003年5月31日生まれ</Text>
                    <Text
                        fontSize={{ base: '2xl', lg: '3xl' }}
                    >
                        ようこそ！私のポートフィリオへ！
                        私は、普段Webデザインの勉強そしており、特にフロントエンドの技術に興味があり、日々勉強しています。<br />
                        また、バックエンドの方にも興味があり、postgleSQLを少しですが勉強しています。<br />
                        ゆくゆくは、マルチタスクエンジニアとして頑張ったあと、デザインエンジニアをたくさんの場所で活躍できるような人になりたいです。
                    </Text>
                </Flex>
            </Flex>
        </>
    )
}