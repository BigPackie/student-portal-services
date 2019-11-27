import * as mongoose from 'mongoose';

export const NewsItemSchema = new mongoose.Schema(
    {
        //_id field is automatically generated
        name: String,
        validFrom: Date,
        validTo: Date,
        overviewImageBase64: String,
        newsItemDetailId: mongoose.SchemaTypes.ObjectId, //_id of NewsItemDetailSchema
    },
    {
        timestamps: true
    }
)

export const NewsItemDetailSchema = new mongoose.Schema(
    {
         //_id field is automatically generated
        image: String,       
        description: String,
    }
)