import { Button, HStack, Img, Text, VStack } from '@chakra-ui/react';

import ExitIcon from '~/assets/exit.svg';

function FooterSection() {
    return (
        <VStack px='24px' pt='12px' pb='32px' spacing='16px' align='flex-start' alignSelf='stretch'>
            <Text fontWeight='500' fontSize='12px' color='#0000003d'>
                Версия программы 03.25
            </Text>
            <Text fontWeight='400' fontSize='12px' color='#000000a3' textAlign='left'>
                Все права защищены, ученический файл, ©Клевер Технолоджи, 2025
            </Text>
            <Button bg='unset' _hover={{ bg: 'unset' }} p='0'>
                <HStack>
                    <Img src={ExitIcon} />
                    <Text fontWeight='600' fontSize='12px' color='#000'>
                        Выйти
                    </Text>
                </HStack>
            </Button>
        </VStack>
    );
}

export default FooterSection;
