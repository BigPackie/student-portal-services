import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { NewsItemDto } from './news.dto';
import { NewsItem } from './news.interface';

@Injectable()
export class NewsService {

    constructor(@InjectModel('NewsItem') private newsItemModel: Model<NewsItem>){

    }

    async createNews(newsItemDto: NewsItemDto): Promise<NewsItem>{
        const newsItem = new this.newsItemModel(newsItemDto);
        return await newsItem.save();
    }

    async getNews(): Promise<NewsItem[]>{
        return await this.newsItemModel.find().exec();
    }

    async getNewsItem(id: any): Promise<NewsItem>{
        return await this.newsItemModel.findOne({_id: id});
    }

}