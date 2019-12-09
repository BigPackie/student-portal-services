import * as mongoose from 'mongoose';

export const NewsItemSchema = new mongoose.Schema(
    {
        //_id: mongoose.SchemaTypes.ObjectId,
        name: String,
        validFrom: Date,
        validTo: Date,
        overviewImageBase64: String,
        deleted: {
            type: Boolean,
            default: false
        } 
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