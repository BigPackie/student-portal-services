import { Document } from 'mongoose'

export interface NewsItem extends Document{
    _id: string,
    name: string,
    validFrom: Date,
    validTo: Date,
    overviewImageBase64: string,
    deleted: boolean
}

export interface NewsItemDetail extends Document{
    _id: string,
    description: string,
    imageBase64: string
}