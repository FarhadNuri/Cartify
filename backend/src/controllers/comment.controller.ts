import { Request, Response } from "express";
import * as queries from "../db/queries.db";

import { getAuth } from "@clerk/express";


export async function createComment(req:Request, res:Response) {
    try {
        const { userId } = getAuth(req);
        if (!userId) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        const { content } = req.body;
        const productId = req.params.productId as string;

        if(!content) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const product = await queries.getProductById(productId);
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        const comment = await queries.createComment({content, productId, userId});
        res.status(201).json(comment);
    } catch (error) {
        console.error("Error creating comment:", error);
        res.status(500).json({ error: "Failed to create comment" });
    }   
}


export async function deleteComment(req:Request, res:Response) {
    try {
        const { userId } = getAuth(req);
        if (!userId) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        const commentId = req.params.commentId as string;
        
        const comment = await queries.getCommentById(commentId);
        
        if (!comment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        if (comment.userId !== userId) {
            return res.status(403).json({ error: "You can only delete your own comments" });
        }
        await queries.deleteComment(commentId);
        res.status(204).send();
    } catch (error) {
        console.error("Error deleting comment:", error);
        res.status(500).json({ error: "Failed to delete comment" });
    }
}  
