import Admin from "./pages/Admin";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import ProductPage from "./pages/ProductPage";
import Catalog from "./pages/Catalog";
import CategoryPage from "./pages/CategoryPage";

import { ADMIN_ROUTE, BASKET_ROUTE, CATEGORY_ROUTE, CATALOG_ROUTE, LOGIN_ROUTE, PRODUCT_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/consts";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },

    {
        path: BASKET_ROUTE,
        Component: Basket
    },

    {
        path: LOGIN_ROUTE,
        Component: Auth
    },

    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },

    {
        path: PRODUCT_ROUTE + '/:id',
        Component: ProductPage
    },

    {
        path: CATALOG_ROUTE,
        Component: Catalog
    },

    {
        path: CATEGORY_ROUTE + '/:categories',
        Component: CategoryPage
    }
]