import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';

import { setRouteParams } from '~/store/route-params-slice';

function CatalogPage() {
    const dispatch = useDispatch();
    const { categorySlug, subcategorySlug } = useParams();

    useEffect(() => {
        if (categorySlug) {
            dispatch(
                setRouteParams({
                    categorySlug,
                    subcategorySlug: subcategorySlug || null,
                }),
            );
        }
    }, [categorySlug, subcategorySlug, dispatch]);

    return <></>;
}

export default CatalogPage;
