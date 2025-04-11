export interface Category {
    slug: string;
    label: string;
    img: string;
    subcategories: Subcategory[];
}

export interface Subcategory {
    slug: string;
    label: string;
}
