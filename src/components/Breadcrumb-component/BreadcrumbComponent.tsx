import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const BreadcrumbComponent = () => {
    const location = useLocation();

    const pathnames = location.pathname.split('/').filter((x) => x);
    return (
        <Breadcrumb separator='>' fontSize='sm' ml='128px' flex='1'>
            <BreadcrumbItem>
                <BreadcrumbLink as={RouterLink} to='/'>
                    Главная
                </BreadcrumbLink>
            </BreadcrumbItem>

            {pathnames.map((path, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                return (
                    <BreadcrumbItem key={routeTo}>
                        <BreadcrumbLink
                            as={RouterLink}
                            to={routeTo}
                            isCurrentPage={index === pathnames.length - 1}
                        >
                            {path.replace(/-/g, ' ')}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                );
            })}
        </Breadcrumb>
    );
};

export default BreadcrumbComponent;
