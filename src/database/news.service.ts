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

    async saveNews(newsItemDto: NewsItemDto): Promise<NewsItem> {
        let newsItem = await this.newsItemModel.findOne({ _id: newsItemDto._id });
        
        if (!newsItem) {
            newsItem = new this.newsItemModel(newsItemDto); //does not exist yet, create new
        } else {
            newsItem.overviewImageBase64 = newsItemDto.overviewImageBase64;
            newsItem.name = newsItemDto.name;
            newsItem.validFrom = newsItemDto.validFrom;
            newsItem.validTo = newsItemDto.validTo;
            newsItem.deleted = newsItemDto.deleted;
        }

        return await newsItem.save();
    }

    async changeDeletedFlag(id: string, deleted: boolean): Promise<NewsItem> {
        let newsItem = await this.newsItemModel.findOne({ _id: id });
        newsItem.deleted = deleted;
        
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

    async saveNewsDetail(newsItemDetailDto: NewsItemDetailDto): Promise<NewsItemDetail> {
        let newsItemDetail = await this.newsItemDetailModel.findOne({ _id: newsItemDetailDto._id });
        if (!newsItemDetail) {
            newsItemDetail = new this.newsItemDetailModel(newsItemDetailDto);
        } else {
            newsItemDetail.description = newsItemDetailDto.description;
            newsItemDetail.imageBase64 = newsItemDetailDto.imageBase64;
        }

        return await newsItemDetail.save();
    }

    async getNewsDetail(id: any): Promise<NewsItemDetail>{
        return await this.newsItemDetailModel.findOne({_id: id});
    }

}