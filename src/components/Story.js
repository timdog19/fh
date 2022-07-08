import React from 'react'
import { Box, Stack, Image, VStack, Heading, Text, Spacer } from '@chakra-ui/react'

function Story() {
    return (
        <>
            <Box mx={[4, 4, 16, 32]} my={64} id="Story">
                <Box>
                    <Heading align="center">The</Heading><Heading color="accent" align="center" pb={8} size="4xl">Story</Heading>
                </Box>
                <Stack
                    direction={["column", "column", "column", "column", "row"]}
                    spacing={12}
                    align="center"
                    justify='space-between'
                >
                    <VStack spacing={12} w="100%">
                        <Text>
                          Funky horse pub is a community-oriented Project
                        </Text>
                        <Text>
                         The Funky horse nft s are your avatar with in the funky horse pub
                        </Text>
                        <Text>
                         The Funky horse pub  does not have any purpose or roadmap at this time. 
                         Our roadmap will be determined by our community after the mint process, 
                         and until then, we will only proceed with the thought of art.
                        </Text>
                        <Text>
                            
                        </Text>
                    </VStack>
                    <Spacer />
                    <Image src="https://i.ibb.co/7YfvVdW/523.png" w={["70%", "60%", "45%", "45%", "25%"]} rounded="16px" mx={16} />
                </Stack>
            </Box>
        </>
    )
}

export default Story
