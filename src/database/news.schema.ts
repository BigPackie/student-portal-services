import * as mongoose from 'mongoose';

export const NewsItemSchema = new mongoose.Schema({
    validFrom: Date,
    validTo: Date,
    overviewImageBase64: String,
    detailImageId: mongoose.Types.ObjectId,
    detailText: String,
})