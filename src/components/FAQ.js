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
                <FAQItem question="- What is The Funky Horsepub? -">
                    <Text color="accent">The Funky Horsepub is a multiplayer MMORPG-style mobile and desktop win-win game. Funky Horse NFT's are Funky avatars in the world of Funky World. Each avatar has special powers and random levels, each NFT owner starts the game with a randomly leveled avatar with a random power with the NFT he has. The higher the level and sophistication of the avatar, the more superiority it has over the enemies in the game. Funky Horse NFT avatars are divided into five levels as entry level, intermediate level, silver level, gold level and diamond level. Gold-level and diamond-level avatars are the rarest types of avatars, NFT owners who own these avatars start with extra special powers and random special equipment. NFT owners start with extra special powers and random special equipment, avatar level randomness also applies to gold and diamond level Funky horses. NFT owners can learn avatar levels only when they introduce their NFT to the game and start the game. Players can chat with each other in the pub area, team up, exchange equipment with each other and buy and sell equipment with each other. NFT owners can buy land in the Funkyworld and hold parties, events or form clans on their land so that they can fight more strongly against enemies. Several people will be randomly given land from the owners of the golden level and diamond level Funky NFT. Funky NFT owners can get Funky Shaker tokens that fall from enemies they defeat in the game, use them to buy and sell equipment and land in-game. It can increase the powers of its characters or generate income by converting them to Avax coin or USDT coin on centralized or decentralized exchanges.
</Text>
                </FAQItem>
                <FAQItem question="- What is a Funky Shaker Coin? -">
                    <Text color="accent">The Funky Shaker coin is a utility token for the game The Funky Horsepub. Funky players will be able to use the Funky Shaker token to purchase equipment for their characters, purchase additional features that will improve their characters, and buy and sell land within the game. In addition, for users who hold Funky Shaker tokens on their Funky Horsepub accounts, Funky merch NFT printed t-shirts, hoodies, hat sweepstakes, special level character-equipment airdrops and special airdrops that we will issue for the game will be organized.The supply of Funky Shaker tokens is limited to 5,000,000,000. By burning the Funky Shaker tokens spent in the game, the supply of the Funky Shaker coin will be reduced, and thus the value of the Funky Shaker token will increase.
</Text>
                </FAQItem>
                <FAQItem question="- What's Funky Merch? -">
                    <Text color="accent">Funky Merch is the clothing brand of the game The Funky Horsepub. That's the store where there are limited edition t-shirts, hoodies, hats and various souvenirs printed with Funky Horsepub game characters. Players can provide t-shirts, hoodies, hats and souvenirs with printed avatars that they have at this store.
</Text>
                </FAQItem>
                <FAQItem question="- When will the Funky Horsepub NFT mint date be and how much will the mint price be? -">
                    <Text color="accent">Funky Horse NFT mint date will be announced soon on funkyhorsepub Twitter page and Discord server.
</Text>
                </FAQItem>
                <FAQItem question="- How many Funky horse coins can be minted? -">
                    <Text color="accent">Each wallet will be able to mint 10 pieces of Funky horse.</Text>
                </FAQItem>
                <FAQItem question="- On which platforms will The Funky Horsepub game be released? -">
                    <Text color="accent">The game will be released harmoniously to Android phones and desktop computers. Funky players, if they want to play from the phone, from the Google Play Store, and if they want to play from the computer they will be able to download and play the game from the site of : coming soon</Text>
                </FAQItem>
                <FAQItem question="- How many kinds of characters are there in the game? -">
                    <Text color="accent">There are five types of characters in the game: entry-level, intermediate-level, silver-level, gold-level and diamond-level. The rarest are the gold level and diamond level characters. Players with gold level and diamond level characters will start with extra character traits and equipment in the game.
</Text>
                </FAQItem>
                <FAQItem question="- When will the Funky World Game and the Funky Shaker token be released? -">
                    <Text color="accent">Funkyworld Adventure Game project is a long-term project. After the funky horse pub nft mint process is completed, game-related equipment, game-related assets, venue designs will be presented to the funky horse pub community, and the game development process will proceed according to the wishes of the community. We will present these designs that we have created to create character designs to the community after the mint.
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
