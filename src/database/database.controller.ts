import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { NewsService } from './news.service';
import { NewsItemDto } from './news.dto';

@Controller('database')
export class DatabaseController {

    constructor(private newsService: NewsService){

    }

    @Post('news')
    async createNews(@Body() newsItem: NewsItemDto){
        return await this.newsService.createNews(newsItem)
        .then((savedNewsItem) => {
            console.log(`Saved newsItem into db: ${savedNewsItem}`);
        }).catch((error) => console.error(`Saving of ${newsItem} failed`));
    }

    @Get('news')
    async getNews(){
        return await this.newsService.getNews();
    }

    @Get('news/:id')
    async getNewsItem(@Param('id') id: String){
        return await this.newsService.getNewsItem(id);
    }


}
