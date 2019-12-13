import { Document } from 'mongoose'

export interface Promotion extends Document{
    _id: string,
    name: string,
    validFrom: Date,
    validTo: Date,
    overviewImageBase64: string,
    deleted: boolean
}

export interface PromotionDetail extends Document{
    _id: string,
    description: string,
    imageBase64: string
}