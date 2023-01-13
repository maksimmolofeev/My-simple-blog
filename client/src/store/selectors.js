
export const selectIsAuth = state => state.userSlice._isAuth;

export const selectUser = state => state.userSlice._user;

export const selectCategories = state => state.productSlice._categories;

export const selectProduct = state => state.productSlice._products;

export const selectActiveCategory = state => state.productSlice._activeCategory;

export const selectPage = state => state.productSlice._page;

export const selectTotalCount = state => state.productSlice._totalCount;

export const selectLimit = state => state.productSlice._limit;