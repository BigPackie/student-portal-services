import * as mongoose from 'mongoose';

export const NewsItemSchema = new mongoose.Schema(
    {
        //_id field is automatically generated
        name: String,
        validFrom: Date,
        validTo: Date,
        overviewImageBase64: String,
    },
    {
        timestamps: true
    }
)

export const NewsItemDetailSchema = new mongoose.Schema(
    {
        _id: mongoose.SchemaTypes.ObjectId, //use the same id as NewsItemSchema 
        imageBase64: String,       
        description: String,
    }
)