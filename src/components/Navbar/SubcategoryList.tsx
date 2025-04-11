import { Accordion } from '@chakra-ui/react';

import { useCatalogParams } from '~/hooks/useCatalogParams';
import { Subcategory } from '~/types/categories';

import SubcategoryItem from './SubcategoryItem';

function SubcategoryList({
    subcategories,
    categorySlug,
}: {
    subcategories: Subcategory[];
    categorySlug: string;
}) {
    const { subcategory } = useCatalogParams();

    return (
        <Accordion
            allowToggle
            index={
                subcategory
                    ? subcategories.findIndex((s) => s.slug === subcategory.slug)
                    : undefined
            }
        >
            {subcategories.map((sub) => (
                <SubcategoryItem
                    key={sub.slug}
                    subcategory={sub}
                    categorySlug={categorySlug}
                    isActive={subcategory?.slug === sub.slug}
                />
            ))}
        </Accordion>
    );
}

export default SubcategoryList;
