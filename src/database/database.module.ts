import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { DatabaseController } from './database.controller';
import { NewsService } from './news.service';
import { NewsItemSchema, NewsItemDetailSchema } from './news.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'NewsItem', schema: NewsItemSchema, collection: "news" },
                                    { name: 'NewsItemDetail', schema: NewsItemDetailSchema, collection: "newsDetails" }]
        )],
    controllers: [DatabaseController],
    providers: [NewsService]
})
export class DatabaseModule {

}