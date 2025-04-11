import { Accordion } from '@chakra-ui/react';

import categories from '~/data/categories';
import { useCatalogParams } from '~/hooks/useCatalogParams';

import CategoryItem from './CategoryItem';

function CategoryAccordion() {
    const { category } = useCatalogParams();

    return (
        <Accordion
            px='10px'
            w='100%'
            allowMultiple
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
