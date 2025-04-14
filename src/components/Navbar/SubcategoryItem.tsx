import { AccordionButton, AccordionItem, Box, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import { Subcategory } from '~/types/categories';

function SubcategoryItem({
    subcategory,
    //categorySlug,
    isActive,
}: {
    subcategory: Subcategory;
    categorySlug: string;
    isActive: boolean;
}) {
    const navigate = useNavigate();

    const handleClick = () =>
        navigate(`/veganskaya-kukhnya/vtorye-blyuda`); /*в будущем будут слагиы */

    return (
        <AccordionItem border='none'>
            <AccordionButton
                h='36px'
                _hover={{ background: 'accent.100' }}
                bg={isActive ? 'accent.100' : 'transparent'}
                onClick={handleClick}
            >
                <Box w={isActive ? '8px' : '1px'} h='24px' mr='11px' bg='accent.400' />
                <Text fontWeight={isActive ? '700' : '500'} fontSize='lg' color='#000'>
                    {subcategory.label}
                </Text>
            </AccordionButton>
        </AccordionItem>
    );
}

export default SubcategoryItem;
