import { Document } from 'mongoose'

export interface NewsItem extends Document{
    validFrom: Date;
    validTo: Date;
    overviewImageBase64: String;
    detailImageId: string;
    detailText: string;
}