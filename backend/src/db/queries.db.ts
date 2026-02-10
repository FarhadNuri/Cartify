import {db} from "./index";
import  {eq} from "drizzle-orm";
import { users, products, comments } from "./schema.db";
import { type NewUser, type NewProduct, type NewComment } from "./schema.db";


// User Queries

export async function createUser(data: NewUser) {
    const [user] = await db.insert(users).values(data).returning();
    return user;
}

export async function getUserById(id: string) {
    return db.query.users.findFirst({where: eq(users.id, id)});
}

export async function updateUser(id:string, data: Partial<NewUser>) {
    const existingUser = await getUserById(id);
    if (!existingUser) {
        throw new Error(`User with id ${id} not found`);
    }
    const [user] = await db.update(users).set(data).where(eq(users.id, id)).returning();
    return user;
}

//upsert = update if exists, else create
// export const upsertUser = async (data: NewUser) => {
//     const existingUser = await getUserById(data.id);
//     if (existingUser) {
//         return updateUser(data.id, data);
//     } else {
//         return createUser(data);
//     }
// }

export async function upsertUser(data: NewUser) {
    const [user] = await db.insert(users).values(data).onConflictDoUpdate({
        target: users.id,
        set: {
            email: data.email,
            name: data.name,
            imageUrl: data.imageUrl,
            updatedAt: new Date(),
        },
    }).returning();
    return user;    
}

// Product Queries
export async function createProduct(data:NewProduct) {
    const [product] = await db.insert(products).values(data).returning();
    return product;
}

export async function getAllProducts() {
    return db.query.products.findMany({
        with: {user: true},
        orderBy: (products,{desc}) => [desc(products.createdAt)]
        // see latest products first
        // square brackets = array of order conditions
        // orderBy expects an array

    });
} 
export async function getProductById(id:string) {
    return db.query.products.findFirst({
        where: eq(products.id, id),
        with: {
            user: true,
            comments: {
                with: {user: true},
                orderBy: (comments,{desc}) => [desc(comments.createdAt)]
            }
        }
    });
}

export async function getProductsByUserId(userId:string) {
    return db.query.products.findMany({
        where: eq(products.userId, userId),
        with: {user: true},
        orderBy: (products,{desc}) => [desc(products.createdAt)]
    });
}
export async function updateProduct(id:string, data: Partial<NewProduct>) {
    const existingProduct = await getProductById(id);
    if (!existingProduct) {
        throw new Error(`Product with id ${id} not found`);
    }
    const [product] = await db.update(products).set(data).where(eq(products.id, id)).returning();
    return product;
}

export async function deleteProduct(id:string) {
    const existingProduct = await getProductById(id);
    if (!existingProduct) {
        throw new Error(`Product with id ${id} not found`);
    }
    const [product] = await db.delete(products).where(eq(products.id, id)).returning();
    return product;
}

//Comment Queries
export async function createComment(data:NewComment) {
    const [comment] = await db.insert(comments).values(data).returning();
    return comment;
}

export async function deleteComment(id:string) {
    const existingComment = await getCommentById(id);
    if (!existingComment) {
        throw new Error(`Comment with id ${id} not found`);
    }
    const [comment] = await db.delete(comments).where(eq(comments.id, id)).returning();
    return comment;
}

export async function getCommentById(id:string) {
    return db.query.comments.findFirst({
        where: eq(comments.id, id),
        with: {user: true},
    });
}