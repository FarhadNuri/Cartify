import { Request, Response } from "express";
import * as queries from "../db/queries.db";

import { getAuth } from "@clerk/express";

export async function getAllProducts(req:Request, res:Response) {
    try {
        const products = await queries.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ error: "Failed to fetch products" });
    }
}

export async function getProductById(req:Request, res:Response) {
    try {
        const id = req.params.id as string;
        const product = await queries.getProductById(id);
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.status(200).json(product);
    } catch (error) {
        console.error("Error fetching product:", error);
        res.status(500).json({ error: "Failed to fetch product" });
    }   
}

export async function getMyProducts(req:Request, res:Response) {
    try {
        const { userId } = getAuth(req);
        if (!userId) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        const products = await queries.getProductsByUserId(userId);
        res.status(200).json(products);
    } catch (error) {
        console.error("Error fetching user's products:", error);
        res.status(500).json({ error: "Failed to fetch user's products" });
    }
}

export async function createProduct(req:Request, res:Response) {
    try {
        const { userId } = getAuth(req);
        if (!userId) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        const { title, description, imageUrl } = req.body;

        if(!title || !description || !imageUrl) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const product = await queries.createProduct({title, description, imageUrl, userId});
        res.status(201).json(product);
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ error: "Failed to create product" });
    }   
}

export async function updateProduct(req:Request, res:Response) {
    try {
        const { userId } = getAuth(req);
        if (!userId) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        const id = req.params.id as string;
        const { title, description, imageUrl } = req.body;
        const product = await queries.getProductById(id);

        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        if (product.userId !== userId) {
            return res.status(403).json({ error: "You can only update your own products" });
        }
        const updatedProduct = await queries.updateProduct(id, { title, description, imageUrl });
        res.status(200).json(updatedProduct);
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ error: "Failed to update product" });
    }
}

export async function deleteProduct(req:Request, res:Response) {
    try {
        const { userId } = getAuth(req);
        if (!userId) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        const id = req.params.id as string;
        const product = await queries.getProductById(id);   
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        if (product.userId !== userId) {
            return res.status(403).json({ error: "You can only delete your own products" });
        }
        await queries.deleteProduct(id);
        res.status(204).send();
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ error: "Failed to delete product" });
    }
}  
