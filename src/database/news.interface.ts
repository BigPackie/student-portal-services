import { Document } from 'mongoose'

export interface NewsItem extends Document{
    name: string,
    validFrom: Date,
    validTo: Date,
    overviewImageBase64: string,
    newsItemDetailId: string,
}