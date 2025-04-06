import { Flex, Hide, Img, Show, Text } from '@chakra-ui/react';

import AvatarIcon from '~/assets/Avatar.png';
import LogoIcon from '~/assets/logo.svg';
import MenuIcon from '~/assets/menu.svg';

import BreadcrumbComponent from '../Breadcrumb-component/BreadcrumbComponent';
import ProfileNotifications from '../Profile-notifications/ProfileNotifications';

function Header() {
    return (
        <Flex
            as='header'
            align='center'
            justify='space-between'
            pl={{ sm: '20px', lg: '16px' }}
            pr={{ sm: '20px', lg: '80px' }}
            h={{ sm: '64px', lg: '80px' }}
            w='100%'
            pos='fixed'
            left={0}
            top={0}
            bg='accent.100'
            data-test-id='header'
        >
            <Img src={LogoIcon} width='120px' />

            <Show above='lg'>
                <BreadcrumbComponent />
            </Show>

            <Show above='lg'>
                <Flex justify='center' columnGap='12px'>
                    <Img src={AvatarIcon} w='48px' h='48px' />
                    <Flex flexDirection='column' justify='space-between'>
                        <Text fontSize='18px' fontWeight='500'>
                            Екатерина Константинопольская
                        </Text>
                        <Text color='#000000a3'>@bake_and_pie</Text>
                    </Flex>
                </Flex>
            </Show>

            <Hide above='lg'>
                <Flex columnGap='28px'>
                    <ProfileNotifications />
                    <Img src={MenuIcon}></Img>
                </Flex>
            </Hide>
        </Flex>
    );
}

export default Header;
