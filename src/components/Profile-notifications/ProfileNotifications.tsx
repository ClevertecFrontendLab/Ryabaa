import { Flex, Img, Text } from '@chakra-ui/react';

import FavoriteLogo from '~/assets/favorite.svg';
import PeoplesLogo from '~/assets/peoples.svg';
import ReactionLogo from '~/assets/reaction.svg';

function ProfileNotifications() {
    return (
        <Flex flexDirection={{ sm: 'row', lg: 'column' }} rowGap='24px'>
            <Flex
                w={{ sm: '58px', lg: '87px' }}
                h={{ sm: '24px', lg: '40px' }}
                justifyContent='center'
                alignItems='center'
                columnGap={{ sm: '6px', lg: '8px' }}
            >
                <Img w={{ sm: '12px', lg: '16px' }} src={FavoriteLogo} />
                <Text color='accent.200'>585</Text>
            </Flex>
            <Flex
                w={{ sm: '58px', lg: '87px' }}
                h={{ sm: '24px', lg: '40px' }}
                justifyContent='center'
                alignItems='center'
                columnGap={{ sm: '6px', lg: '8px' }}
            >
                <Img w={{ sm: '12px', lg: '16px' }} src={PeoplesLogo} />
                <Text color='accent.200'>585</Text>
            </Flex>
            <Flex
                w={{ sm: '58px', lg: '87px' }}
                h={{ sm: '24px', lg: '40px' }}
                justifyContent='center'
                alignItems='center'
                columnGap={{ sm: '6px', lg: '8px' }}
            >
                <Img w={{ sm: '12px', lg: '16px' }} src={ReactionLogo} />
                <Text color='accent.200'>585</Text>
            </Flex>
        </Flex>
    );
}

export default ProfileNotifications;
