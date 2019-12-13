import * as mongoose from 'mongoose';

export const PromotionSchema = new mongoose.Schema(
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

export const PromotionDetailSchema = new mongoose.Schema(
    {
        _id: mongoose.SchemaTypes.ObjectId, //use the same id as PromotionSchema 
        imageBase64: String,       
        description: String,
    }
)