import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { NewsService } from './news.service';
import { NewsItemDto } from './news.dto';

@Controller('database')
export class DatabaseController {

    constructor(private newsService: NewsService){

    }

    @Post('news')
    async createNews(@Body() message: NewsItemDto){
        return await this.newsService.createNews(message);
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
