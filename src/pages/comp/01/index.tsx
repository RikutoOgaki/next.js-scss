import { Box, Flex, Text, Input, Stack } from '@chakra-ui/react'

export default function Sample01() {
    return (
        <>
            <Flex
                justifyContent={'center'}
                alignItems={'center'}
                w={'full'}
                h={'100vh'}
                bg={'skyblue'}>
                <Text fontSize={{ base: '5xl', md: '9xl' }}>Hello World</Text>
            </Flex >
        </>
    )
}