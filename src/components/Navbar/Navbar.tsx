import { VStack } from '@chakra-ui/react';

import CategoryAccordion from './CategoryAccordion';
import FooterSection from './FooterSection';

function Navbar() {
    return (
        <VStack
            h={{ lg: 'calc(100vh - 80px)' }}
            w='256px'
            pt='24px'
            maxW='100%'
            justify='space-between'
            align='flex-start'
            spacing='24px'
            borderRight='1px solid #E2E8F0'
        >
            <CategoryAccordion />

            <FooterSection />
        </VStack>
    );
}

export default Navbar;
