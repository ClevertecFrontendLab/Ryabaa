import { AccordionButton, Box, Img, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import ArrowDownIcon from '~/assets/arrow-down.svg';
import { Category } from '~/types/categories';

function CategoryButton({ category, isExpanded }: { category: Category; isExpanded: boolean }) {
    const navigate = useNavigate();

    const handleClick = () => navigate(`/${category.slug}`);

    return (
        <AccordionButton
            h='48px'
            bg={isExpanded ? 'accent.300' : 'unset'}
            _hover={{ background: 'accent.100' }}
            onClick={handleClick}
        >
            <Box as='span' flex='1' textAlign='left' display='flex' alignItems='center'>
                <Img w='24px' src={category.img} mr='12px' />
                <Text fontWeight={isExpanded ? '700' : '500'} color='#000'>
                    {category.label}
                </Text>
            </Box>
            <Img
                w='16px'
                src={ArrowDownIcon}
                transform={isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'}
                transition='transform 0.2s'
            />
        </AccordionButton>
    );
}

export default CategoryButton;
