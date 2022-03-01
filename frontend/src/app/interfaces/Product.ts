import { Category } from "./Category";

export interface Product {
    id?: number,
    name: string,
    description: string,
    price: string,
    image: string,
    category_id: number | string,
    category:   Category,
    created_at?: string,
    updated_at?: string
}