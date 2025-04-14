import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router';

import { useCatalogParams } from '~/hooks/useCatalogParams';

const Breadcrumbs = () => {
    const { category, subcategory } = useCatalogParams();

    return (
        <Breadcrumb separator={<ChevronRightIcon color='#000' />} mb={4}>
            <BreadcrumbItem color={category ? '#000000a3' : '#000'}>
                <BreadcrumbLink fontSize='lg' as={RouterLink} to='/'>
                    Главная
                </BreadcrumbLink>
            </BreadcrumbItem>

            {category && (
                <BreadcrumbItem
                    color={subcategory ? '#000000a3' : '#000'}
                    isCurrentPage={!subcategory}
                >
                    {subcategory ? (
                        <BreadcrumbLink fontSize='lg' as={RouterLink} to={`/${category.slug}`}>
                            {category.label}
                        </BreadcrumbLink>
                    ) : (
                        <BreadcrumbLink fontSize='lg' isCurrentPage>
                            {category.label}
                        </BreadcrumbLink>
                    )}
                </BreadcrumbItem>
            )}

            {subcategory && (
                <BreadcrumbItem color='#000' isCurrentPage>
                    <BreadcrumbLink fontSize='lg' isCurrentPage>
                        {subcategory.label}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            )}
        </Breadcrumb>
    );
};

export default Breadcrumbs;
