import { Document } from 'mongoose'

export interface NewsItem extends Document{
    validFrom: Date;
    validTo: Date;
    overviewImageBase64: Buffer;
    detailImageId: string;
    detailText: string;
}