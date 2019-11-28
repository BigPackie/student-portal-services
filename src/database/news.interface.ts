import { Document } from 'mongoose'

export interface NewsItem extends Document{
    name: string,
    validFrom: Date,
    validTo: Date,
    overviewImageBase64: string,
}

export interface NewsItemDetail extends Document{
    _id: string,
    description: string,
    imageBase64: string
}