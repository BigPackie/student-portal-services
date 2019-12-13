import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { DatabaseController } from './database.controller';
import { NewsService } from './news.service';
import { NewsItemSchema, NewsItemDetailSchema } from './news.schema';
import { PromotionSchema, PromotionDetailSchema } from './promotion.schema';
import { PromotionService } from './pomotion.service';

@Module({
    imports: [
        MongooseModule.forFeature([ { name: 'NewsItem', schema: NewsItemSchema, collection: "news" },
                                    { name: 'NewsItemDetail', schema: NewsItemDetailSchema, collection: "newsDetails" },
                                    { name: 'Promotion', schema: PromotionSchema, collection: "promotions" },
                                    { name: 'PromotionDetail', schema: PromotionDetailSchema, collection: "promotionDetails" }]
        )],
    controllers: [DatabaseController],
    providers: [NewsService, PromotionService]
})
export class DatabaseModule {

}