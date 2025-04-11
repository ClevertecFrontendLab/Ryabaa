import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type RouteParamsState = {
    categorySlug: string | null;
    subcategorySlug: string | null;
};

const initialState: RouteParamsState = {
    categorySlug: null,
    subcategorySlug: null,
};

export const routeParamsSlice = createSlice({
    name: 'routeParams',
    initialState,
    reducers: {
        setRouteParams: (state, action: PayloadAction<RouteParamsState>) => {
            state.categorySlug = action.payload.categorySlug;
            state.subcategorySlug = action.payload.subcategorySlug;
        },
    },
});

export const { setRouteParams } = routeParamsSlice.actions;
export default routeParamsSlice.reducer;
