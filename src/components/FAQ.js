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
                <FAQItem question="- What's the story with the Funky horse pub? -">
                    <Text color="accent">One day I was watching my favorite cartoon on at home on TV, and I loved one of the characters that was a guest on that cartoon, and I was interested in nfts at that time, and I was inspired by the cartoon character, and I got a little bit of this culture and clothing into the net because I liked the street culture and style of clothing</Text>
                </FAQItem>
                <FAQItem question="- What is The Funky Horsepub? -">
                    <Text color="accent">What is funkyhorsepub? the question is a very open-ended question, which is what you want funkyhorsepub to be.

                                         Oh, wait, if you ask me, it's a world of infinite possibilities

</Text>
                </FAQItem>
                <FAQItem question="- What is a Funky Shaker Coin? -">
                    <Text color="accent">A representative coin to give to the owners of the Funky shaker coin funky horse has no value
                                         but maybe it'll be worth a lot later

</Text>
                </FAQItem>
                <FAQItem question="- What's Funky Merch? -">
                    <Text color="accent">Funky merch funky horse are t-shirts with the DNA and the energy that we're going to send to the loyal members of our nft
</Text>
                </FAQItem>
                <FAQItem question="- When will the Funky Horsepub NFT mint date be and how much will the mint price be? -">
                    <Text color="accent">The history of Mint will be decided by the community, 7,888 of the funky horse nfts will be distributed as fremints, and 1000 of them will be available for sale at approximately 0.15 avax
</Text>
                </FAQItem>
                <FAQItem question="- How many Funky horse coins can be minted? -">
                    <Text color="accent">Each wallet can mint 10 funky horses.
                                         
</Text>
                 </FAQItem>
                <FAQItem question="- On which NFT store will The Funky Horsepub NFT's be bought and sold after Mint? -">
                    <Text color="accent">Users will be able to buy or sell Funky avatars in the NFT bazaar "kalao.io" supported by Avalanche.</Text>

                </FAQItem>
            </Accordion>
        </Box >
    )
}

export default FAQ
