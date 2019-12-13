import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PromotionDto, PromotionDetailDto } from './promotion.dto';
import { Promotion, PromotionDetail } from './promotion.interface';

@Injectable()
export class PromotionService {

    constructor(@InjectModel('Promotion') private promotionModel: Model<Promotion>,
                @InjectModel('PromotionDetail') private promotionDetailModel: Model<PromotionDetail>){

    }

    async savePromotion(promotionDto: PromotionDto): Promise<Promotion> {
        let promotion = await this.promotionModel.findOne({ _id: promotionDto._id });
        
        if (!promotion) {
            promotion = new this.promotionModel(promotionDto); //does not exist yet, create new
        } else {
            promotion.overviewImageBase64 = promotionDto.overviewImageBase64;
            promotion.name = promotionDto.name;
            promotion.validFrom = promotionDto.validFrom;
            promotion.validTo = promotionDto.validTo;
            promotion.deleted = promotionDto.deleted;
        }

        return await promotion.save();
    }

    async changeDeletedFlag(id: string, deleted: boolean): Promise<Promotion> {
        let promotion = await this.promotionModel.findOne({ _id: id });
        promotion.deleted = deleted;
        
        return await promotion.save();
    }

    async getPromotions(): Promise<Promotion[]>{
        return await this.promotionModel.find().exec();
    }

    async getActivePromotions(): Promise<Promotion[]>{

         let now = new Date();

         return await this.promotionModel
         .find()
         .where('deleted').equals(false)
         .where('validFrom').lte(now)
         .where('validTo').gte(now)
         .sort('-validFrom')
         .exec();
     }

    async getPromotion(id: any): Promise<Promotion>{
        return await this.promotionModel.findOne({_id: id});
    }

    async existPromotion(id: any): Promise<boolean>{
        return await this.promotionModel.exists({_id: id});
    }

    async savePromotionDetail(promotionDetailDto: PromotionDetailDto): Promise<PromotionDetail> {
        let promotionDetail = await this.promotionDetailModel.findOne({ _id: promotionDetailDto._id });
        if (!promotionDetail) {
            promotionDetail = new this.promotionDetailModel(promotionDetailDto);
        } else {
            promotionDetail.description = promotionDetailDto.description;
            promotionDetail.imageBase64 = promotionDetailDto.imageBase64;
        }

        return await promotionDetail.save();
    }

    async getPromotionDetail(id: any): Promise<PromotionDetail>{
        return await this.promotionDetailModel.findOne({_id: id});
    }

}