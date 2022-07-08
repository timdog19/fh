import React from 'react'
import { Box, Heading, Text, VStack, Stack, HStack } from '@chakra-ui/react'
import { SettingsIcon, CalendarIcon, TimeIcon, StarIcon, CheckCircleIcon, TriangleUpIcon, ArrowForwardIcon } from '@chakra-ui/icons'

function RoadmapItem({ n, children, icon, ...rest }) {
    return (
        <>
            <HStack w={["95%", "90%", "85%", "65%"]} spacing={8}>
                <Box>
                    {icon}
                </Box>
                <Box w="100%" rounded="12px" borderWidth="2px" borderColor="white" p={8} bgColor="rgba(0, 0, 0, 0.5)">
                    <Stack direction={["column", "column", "column", "column"]} spacing={8}>
                        <Heading align='center' color="accent" transform="rotate(-0deg)" mx={0} {...rest}>{n}</Heading>
                        <VStack spacing={8} align="left">
                            {children}
                        </VStack>
                    </Stack>
                </Box>
            </HStack>
        </>
    )
}

function Roadmap() {
    return (
        <>
            <Box my={64} id="Roadmap">
                <VStack align="center" spacing={4}>
                    <Box>
                        <Heading align="center">Our</Heading><Heading color="accent" align="center" pb={8} size="4xl">Roadmap</Heading>
                    </Box>

                    <RoadmapItem n='Phase 0' icon={<SettingsIcon color="white" fontSize="32px" />}>
                        <Text fontSize="lg" fontStyle="italic"> </Text>
                        <Text>• Website Publishing </Text>
                        <Text>• Social Media Publishing </Text>
                        <Text>• Giveaway Programmes for Grow the Community </Text>
                    </RoadmapItem>

                    <RoadmapItem n="Phase 1" icon={<CalendarIcon color="white" fontSize="32px" />}>
                        <Text fontSize="lg" fontStyle="italic"> </Text>
                        <Text>• The Mint process starts </Text>
                        <Text>• The roadmap is determined by the community </Text>
                        <Text>•  </Text>
                        <Text>•  </Text>
                    </RoadmapItem>

                    <RoadmapItem n="Phase 2" icon={<TimeIcon color="white" fontSize="32px" />}>
                        <Text fontSize="lg" fontStyle="italic"> </Text>
                        <Text>• Coming SOON .. </Text>
                        <Text>•  </Text>
                        <Text>•  </Text>
                    </RoadmapItem>

                    <RoadmapItem n="Phase 3" icon={<StarIcon color="white" fontSize="32px" />} >
                        <Text fontSize="lg" fontStyle="italic"> </Text>
                        <Text>• Coming SOON .. </Text>
                        <Text>•  </Text>
                        <Text>•  </Text>
                    </RoadmapItem>

                    <RoadmapItem n="Phase 4" icon={<CheckCircleIcon color="white" fontSize="32px" />} >
                        <Text fontSize="lg" fontStyle="italic"> </Text>
                        <Text>• </Text>
                        <Text>• Coming SOON .. </Text>
                    </RoadmapItem>
                </VStack>
            </Box>
        </>
    )
}

export default Roadmap
