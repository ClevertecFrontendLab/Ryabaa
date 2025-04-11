import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router';

import { useCatalogParams } from '~/hooks/useCatalogParams';

const Breadcrumbs = () => {
    const { category, subcategory } = useCatalogParams();

    return (
        <Breadcrumb
            separator={<ChevronRightIcon color='gray.400' />}
            fontSize='sm'
            color='gray.600'
            mb={4}
        >
            <BreadcrumbItem>
                <BreadcrumbLink as={RouterLink} to='/'>
                    Главная
                </BreadcrumbLink>
            </BreadcrumbItem>

            {category && (
                <BreadcrumbItem isCurrentPage={!subcategory}>
                    {subcategory ? (
                        <BreadcrumbLink as={RouterLink} to={`/${category.slug}`}>
                            {category.label}
                        </BreadcrumbLink>
                    ) : (
                        <BreadcrumbLink isCurrentPage>{category.label}</BreadcrumbLink>
                    )}
                </BreadcrumbItem>
            )}

            {subcategory && (
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink isCurrentPage>{subcategory.label}</BreadcrumbLink>
                </BreadcrumbItem>
            )}
        </Breadcrumb>
    );
};

export default Breadcrumbs;
