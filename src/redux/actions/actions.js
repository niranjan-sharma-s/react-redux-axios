import {actionTypes} from '../actionTypes/actionTypes'

export const setProducts = (products) => {
    return {
        type:actionTypes.SET_PRODUCTS,
        payload:products
    }
}

export const selectProduct = (product) => {
    return {
        type:actionTypes.SELECTED_PRODUCT,
        payload:product
    }
}

export const deleteProduct = () => {
    return {
        type:actionTypes.DELETE_PRODUCT,
    }
}