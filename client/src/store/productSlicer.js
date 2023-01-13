import { createSlice } from "@reduxjs/toolkit";

export const { reducer: productReducer, actions: productAction } = createSlice({
    name: 'product',
    initialState: {
        _categories: [],
        _products: [],
        _activeCategory: '',
        _page: 1,
        _totalCount: 0,
        _limit: 16
    },
    reducers: {
        setCategories: (state, data) => {
            state._categories = data.payload
        },
        setProducts: (state, data) => {
            state._products = data.payload
        },
        setActiveCategory: (state, data) => {
            state._activeCategory = data.payload
        },
        setPage: (state, data) => {
            state._page = data.payload
        },
        setTotalCount: (state, data) => {
            state._totalCount = data.payload
        },
        setLimit: (state, data) => {
            state._limit = data.payload
        }
    }
});

export const { setCategories, setProducts, setActiveCategory, setPage, setTotalCount, setLimit } = productAction;