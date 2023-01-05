import { createSlice } from "@reduxjs/toolkit";

export const { reducer: productReducer, action: productAction } = createSlice({
    name: 'product',
    initialState: {
        _collection: [
            {id: 1, title: 'Монобукеты', url: 'mono-bukety', img: 'https://www.flower-shop.ru/images/goods/res4/132792.jpg'},
            {id: 2, title: 'Авторские букеты', url: 'avtorskie-bukety', img: 'https://w7.pngwing.com/pngs/898/494/png-transparent-bouquets-of-roses-rose-red-rose-bouquets-of-roses-thumbnail.png'},
            {id: 3, title: 'Дуо букеты', url: 'duo-bukety', img: 'https://w7.pngwing.com/pngs/898/494/png-transparent-bouquets-of-roses-rose-red-rose-bouquets-of-roses-thumbnail.png'},
            {id: 4, title: 'Новый год', url: 'novyy-god', img: 'https://w7.pngwing.com/pngs/898/494/png-transparent-bouquets-of-roses-rose-red-rose-bouquets-of-roses-thumbnail.png'},
            {id: 5, title: 'Букеты в корзине', url: 'bukety-v-korzine', img: 'https://w7.pngwing.com/pngs/898/494/png-transparent-bouquets-of-roses-rose-red-rose-bouquets-of-roses-thumbnail.png'},
            {id: 6, title: 'Букет невесты', url: 'bukety-nevesty', img: 'https://w7.pngwing.com/pngs/898/494/png-transparent-bouquets-of-roses-rose-red-rose-bouquets-of-roses-thumbnail.png'},
        ],

        _product: [
            {id: 1, name: 'Букет "Зимнее солнце"', price: 1990, advise: true, img: 'https://content2.flowwow-images.com/data/flowers/262x262/23/1672148934_38855923.jpg'},
            {id: 2, name: 'Букет "Зимнее солнце"', price: 1990, advise: true, img: 'https://content2.flowwow-images.com/data/flowers/262x262/23/1672148934_38855923.jpg'},
            {id: 3, name: 'Букет "Зимнее солнце"', price: 1990, advise: false, img: 'https://content2.flowwow-images.com/data/flowers/262x262/23/1672148934_38855923.jpg'},
            {id: 4, name: 'Букет "Зимнее солнце"', price: 1990, advise: true, img: 'https://content2.flowwow-images.com/data/flowers/262x262/23/1672148934_38855923.jpg'},
            {id: 5, name: 'Букет "Зимнее солнце"', price: 1990, advise: true, img: 'https://content2.flowwow-images.com/data/flowers/262x262/23/1672148934_38855923.jpg'},
            {id: 6, name: 'Букет "Зимнее солнце"', price: 1990, advise: true, img: 'https://content2.flowwow-images.com/data/flowers/262x262/23/1672148934_38855923.jpg'}
        ],
    },
    reducers: {

    }
});

