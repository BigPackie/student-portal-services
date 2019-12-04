import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { NewsItemDto, NewsItemDetailDto } from './news.dto';
import { NewsItem, NewsItemDetail } from './news.interface';

@Injectable()
export class NewsService {

    constructor(@InjectModel('NewsItem') private newsItemModel: Model<NewsItem>,
                @InjectModel('NewsItemDetail') private newsItemDetailModel: Model<NewsItemDetail>){

    }

    async createNews(newsItemDto: NewsItemDto): Promise<NewsItem>{
        const newsItem = new this.newsItemModel(newsItemDto);
        return await newsItem.save();
    }

    async getNews(): Promise<NewsItem[]>{
       // await this.newsItemModel.listIndexes().then((res) =>  console.log(`indexes: ${JSON.stringify(res)}`));
        return await this.newsItemModel.find().exec();
    }

    async getNewsItem(id: any): Promise<NewsItem>{
        return await this.newsItemModel.findOne({_id: id});
    }

    async existNewsItem(id: any): Promise<boolean>{
        return await this.newsItemModel.exists({_id: id});
    }

    async createNewsDetail(newsItemDetailDto: NewsItemDetailDto): Promise<NewsItemDetail>{
        const newsItemDetail = new this.newsItemDetailModel(newsItemDetailDto);
        return await newsItemDetail.save();
    }

    async getNewsDetail(id: any): Promise<NewsItemDetail>{
        return await this.newsItemDetailModel.findOne({_id: id});
    }

}