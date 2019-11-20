import * as mongoose from 'mongoose';

export const NewsItemSchema = new mongoose.Schema({
    validFrom: Date,
    validTo: Date,
    overviewImageBase64: mongoose.SchemaTypes.Buffer, //maybe just Buffer?
    detailImageId: mongoose.Types.ObjectId,
    detailText: String,
})