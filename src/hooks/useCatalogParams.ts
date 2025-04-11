import categories from '~/data/categories';
import { ApplicationState } from '~/store/configure-store';
import { useAppSelector } from '~/store/hooks';

export function useCatalogParams() {
    const { categorySlug, subcategorySlug } = useAppSelector(
        (state: ApplicationState) => state.routeParams,
    );

    const category = categories.find((cat) => cat.slug === categorySlug) || null;

    const subcategory =
        category?.subcategories?.find((sub) => sub.slug === subcategorySlug) || null;

    return { category, subcategory };
}
