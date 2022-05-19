import React from 'react'
import { Box, Heading, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Text } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

function FAQItem({ question, children }) {
    return (
        <>
            <AccordionItem>
                <h2>
                    <AccordionButton _focus={{ outline: 0 }}>
                        <Box py={6} flex='1' textAlign='left' color="white">
                            {question}
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel py={8} color="accent" align='left'>
                    {children}
                </AccordionPanel>
            </AccordionItem>
        </>
    )
}


function FAQ() {
    return (
        <Box mx={[4, 4, 32, 64]} align="center" my={64} id="FAQ">
            <Box>
                <Heading align="center">The</Heading><Heading color="accent" align="center" pb={24} size="4xl">FAQ</Heading>
            </Box>
            <Accordion w="100%" allowToggle>
                <FAQItem question="- What is the story of The Funkyworld game? -">
                    <Text color="accent">Welcome to Funkyworld. Funkyworld is a world where crazy and coolly dressed Funky horses live. Funky horses spend most of their days partying, playing crazy games, and drinking lemonade on Funky Horsepub, but they don't realize the great danger that awaits them, and this danger is called Dr.Grumpy. Dr.Grumpy hates everything that's fun, unlike Funkyhorses, he spends most of his day at parties, playing games with lemonade and drinking strawberry wine with his cat by the fireplace and also listening to classical music and sleeping early. Dr. Grumpy's house is a few blocks away from Funky Horsepub, and one day there is a big party at Funky Horsepub, they play crazy games and drink lemonade. The party is so loud that the sound of the party is heard all over the Funky World, during which Dr.Grumpy is sleeping soundly in his bed, Grumpy wakes up to the noise of the party and shouts at them to turn off the music from his window, but the sound of the music is so loud that no one hears it. Dr.Grumpy was angry about this. Grumpy can no longer tolerate the parties held by Funky horses, he decides to destroy the Pub to bring a permanent solution to this situation, for which he makes madbots in his workshop and sends them to Funky Horsepub.

After the party is over, the Funky horses, who are tired and resting by drinking lemonade in the pub, jump out of their places with the noise coming from outside. Funky horses go outside to look at what is happening, see that the madbots are damaging valuable lemon trees and try to block the madbots, but it doesn't have much effect. Just when the funky horses are about to be defeated, the heroes of the city, the golden Funky horse and the diamond Funky horse, come to their aid and defeat the madbots, but much more madbots sent by Dr. Grumpy are already on their way to Funky Horsepub! The Funky horses who found out about Dr.Grumpy's plan quickly begin preparations to thwart Grumpy's plan and the robots he has sent...
Attention please, we need the help of all the Funky horses! Funky horses that live all over the Funky World! By joining Funky Horsepub, you can prevent Dr.Grumpy's plan and help us protect Funky Horsepub. Are you ready to embark on crazy parties and adventurous challenges? Let's do this, everyone, huh!!!</Text>
                </FAQItem>
                <FAQItem question="When is public mint?">
                    <Text color="accent">7 May 2022-7.00 Pm UTC</Text>
                </FAQItem>
                <FAQItem question="Contract Address?">
                    <Text color="accent">0x56546DAF99C69c0F6271FA287b30A1946cA466f0</Text>
                </FAQItem>
                <FAQItem question="Contract Address?">
                    <Text color="accent">0x56546DAF99C69c0F6271FA287b30A1946cA466f0</Text>
                </FAQItem>
                <FAQItem question="When is public mint?">
                    <Text color="accent">7 May 2022-7.00 Pm UTC</Text>
                </FAQItem>
                <FAQItem question="Contract Address?">
                    <Text color="accent">0x56546DAF99C69c0F6271FA287b30A1946cA466f0</Text>
                </FAQItem>
                <FAQItem question="Contract Address?">
                    <Text color="accent">0x56546DAF99C69c0F6271FA287b30A1946cA466f0</Text>
                </FAQItem>
                <FAQItem question="Contract Address?">
                    <Text color="accent">0x56546DAF99C69c0F6271FA287b30A1946cA466f0</Text>
                </FAQItem>
                <FAQItem question="How much is mint?">
                    <Text color="accent">• Celo Erectus <ArrowForwardIcon mx={4} /> Public Price is 6 CELO <ArrowForwardIcon mx={4} /> Whitelist Price is 3 CELO </Text>
                </FAQItem>
                <FAQItem question="How much is mint?">
                    <Text color="accent">• Celo Erectus <ArrowForwardIcon mx={4} /> Public Price is 6 CELO <ArrowForwardIcon mx={4} /> Whitelist Price is 3 CELO </Text>

                </FAQItem>
            </Accordion>
        </Box >
    )
}

export default FAQ
