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
                            The Funky Horsepub is a multiplayer MMORPG-style mobile and desktop win-win game.
                        </Text>
                        <Text>
                            Funky Horse NFT's are Funky avatars in the world of Funky World.
                        </Text>
                        <Text>
                            Each avatar has special powers and random levels, each NFT owner starts the game with a randomly leveled avatar with a random power with the NFT he has.
                        </Text>
                        <Text>
                            The higher the level and sophistication of the avatar, the more superiority it has over the enemies in the game.
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
