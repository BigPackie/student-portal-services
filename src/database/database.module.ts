import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { DatabaseController } from './database.controller';
import { NewsService } from './news.service';
import { NewsItemSchema } from './news.schema';

@Module({
    imports: [MongooseModule.forFeature([{name: 'NewsItem', schema: NewsItemSchema, collection: "news"}])],
    controllers: [DatabaseController],
    providers: [NewsService]
})
export class DatabaseModule {

}