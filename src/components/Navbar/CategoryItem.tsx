import { AccordionItem, AccordionPanel } from '@chakra-ui/react';

import { Category } from '~/types/categories';

import CategoryButton from './CategoryButton';
import SubcategoryList from './SubcategoryList';

function CategoryItem({ category, isDisabled }: { category: Category; isDisabled: boolean }) {
    return (
        <AccordionItem border='none' isDisabled={isDisabled}>
            {({ isExpanded }) => (
                <>
                    <CategoryButton category={category} isExpanded={isExpanded} />
                    <AccordionPanel px={0}>
                        <SubcategoryList
                            subcategories={category.subcategories}
                            categorySlug={category.slug}
                        />
                    </AccordionPanel>
                </>
            )}
        </AccordionItem>
    );
}

export default CategoryItem;
