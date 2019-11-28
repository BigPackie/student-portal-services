import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';

import { NewsService } from './news.service';
import { NewsItemDto, NewsItemDetailDto } from './news.dto';

@Controller('database')
export class DatabaseController {

    constructor(private newsService: NewsService){

    }

    @Post('news')
    async createNews(@Body() newsItem: NewsItemDto){
        return await this.newsService.createNews(newsItem)
        .then((savedNewsItem) => {
            console.log(`Saved newsItem into db: ${savedNewsItem.name} with id ${savedNewsItem._id}`);
            return savedNewsItem;
        }).catch((error) => {
            console.error(`Saving of newsItem ${newsItem.name} failed`);
            return error;
        });
    }

    @Get('news')
    async getNews(){
        return await this.newsService.getNews();
    }

    @Get('news/:id')
    async getNewsItem(@Param('id') id: String){
        return await this.newsService.getNewsItem(id);
    }

    @Post('newsDetail')
    async createNewsDetail(@Body() newsItemDetail: NewsItemDetailDto) {

        let existNewsItem = await this.newsService.existNewsItem(newsItemDetail._id);

        if (!existNewsItem) {
            let rejectReason = `NewsItem with id ${newsItemDetail._id} does not exist. Cannot save details.`
            console.error(rejectReason);
            return Promise.reject(rejectReason);
        }

        return await this.newsService.createNewsDetail(newsItemDetail)
            .then((savedNewsItemsDetail) => {
                console.log(`Saved newsItemDetail into db: ${savedNewsItemsDetail._id} `);
                return savedNewsItemsDetail;
            }).catch((error) => {
                console.error(`Saving of newsItemDetail ${newsItemDetail._id} failed`);
                return error;
            });
    }

    @Get('newsDetail')
    async getNewsItemDetail(@Query('id') id: string) {
        return await this.newsService.getNewsDetail(id);
    }
}
