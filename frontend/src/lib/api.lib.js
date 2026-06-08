import api from "./axios.lib";

export async function syncUser(userData) {
    const {data} = await api.post('/api/users/sync', userData);
    return data;
}

export async function getAllProducts() {
    const {data} = await api.get('/api/products');
    return data;
}

export async function getProductById(id) {
    const {data} = await api.get(`/api/products/${id}`);
    return data;
}

export async function getMyProducts() {
    const {data} = await api.get('/api/products/my');
    return data;
}
export async function createProduct(productData) {
    const {data} = await api.post('/api/products', productData);
    return data;
}

export async function updateProduct({id, ...productData}) {
    const {data} = await api.put(`/api/products/${id}`, productData);
    return data;
}

export async function deleteProduct(id) {
    const {data} = await api.delete(`/api/products/${id}`);
    return data;
}

export async function createComment({productId,content}) {
    const {data} = await api.post(`/api/comments/${productId}`, {content});
    return data;
}

export async function deleteComment({commentId}) {
    const {data} = await api.delete(`/api/comments/${commentId}`);
    return data;
}
