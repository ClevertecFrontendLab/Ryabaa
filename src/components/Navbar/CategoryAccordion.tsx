import { Accordion } from '@chakra-ui/react';
import { useState } from 'react';

import categories from '~/data/categories';
import { useCatalogParams } from '~/hooks/useCatalogParams';

import CategoryItem from './CategoryItem';

function CategoryAccordion() {
    const { category } = useCatalogParams();

    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (expandedIndexes: number[]) => {
        setIsOpen(expandedIndexes.length > 0);
    };

    return (
        <Accordion
            px='10px'
            w='100%'
            allowMultiple
            onChange={handleChange}
            boxShadow={isOpen ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none'}
            borderRadius='md'
            overflowY='auto'
            defaultIndex={
                category ? [categories.findIndex((c) => c.slug === category.slug)] : undefined
            }
        >
            {categories.map((cat, catIndex) => (
                <CategoryItem
                    key={catIndex}
                    category={cat}
                    isDisabled={cat.subcategories.length === 0}
                />
            ))}
        </Accordion>
    );
}

export default CategoryAccordion;
