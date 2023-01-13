import { $host, $authHost } from ".";

export const createCategory = async (category) => {
    const { data } = await $authHost.post('api/category', category)
    return data
}

export const fetchCategories = async () => {
    const { data } = await $host.get('api/category')
    return data
}

export const createProduct = async (product) => {
    const { data } = await $authHost.post('api/product', product)
    return data
}

export const fetchCategoryProducts = async (categoryId, page, limit=16 ) => {
    const { data } = await $host.get('api/product', {params: {
        categoryId, page, limit
    }})
    return data
}

export const fetchProducts = async () => {
    const { data } = await $host.get('api/product')
    return data
}

export const fetchOnProduct = async (id) => {
    const { data } = await $host.get('api/product/' + id)
    return data
}