import api from "./axios.lib";

export async function syncUser(userData) {
    const {data} = await api.post('/users/sync', userData);
    return data;
}

export async function getAllProducts() {
    const {data} = await api.get('/products');
    return data;
}

export async function getProductById(id) {
    const {data} = await api.get(`/products/${id}`);
    return data;
}

export async function getMyProducts() {
    const {data} = await api.get('/products/my');
    return data;
}
export async function createProduct(productData) {
    const {data} = await api.post('/products', productData);
    return data;
}

export async function updateProduct({id, ...productData}) {
    const {data} = await api.put(`/products/${id}`, productData);
    return data;
}

export async function deleteProduct(id) {
    const {data} = await api.delete(`/products/${id}`);
    return data;
}

export async function createComment({productId,content}) {
    const {data} = await api.post(`/comments/${productId}`, {content});
    return data;
}

export async function deleteComment({commentId}) {
    const {data} = await api.delete(`/comments/${commentId}`);
    return data;
}
