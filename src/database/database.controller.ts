import { Controller, Get, Post, Body, Param, Query, UseInterceptors, Delete } from '@nestjs/common';

import { NewsService } from './news.service';
import { NewsItemDto, NewsItemDetailDto } from './news.dto';
import { LoggingInterceptor } from 'src/logging.interceptor';
import { PromotionService } from './pomotion.service';
import { PromotionDto, PromotionDetailDto } from './promotion.dto';

@UseInterceptors(LoggingInterceptor)
@Controller('database')
export class DatabaseController {

    constructor(private newsService: NewsService, private promotionService: PromotionService){

    }

    @Post('newsItem')
    async saveNews(@Body() newsItem: NewsItemDto){
        return await this.newsService.saveNews(newsItem)
        .then((savedNewsItem) => {
            console.log(`Saved newsItem into db: ${savedNewsItem.name} with id ${savedNewsItem._id}`);
            return Promise.resolve(savedNewsItem);
        }).catch((error) => {
            console.error(`Saving of newsItem ${newsItem.name} failed`);
            return Promise.reject(error);
        });
    }

    @Get('newsItem')
    async getNewsItem(@Query('id') id: string) {
        return await this.newsService.getNewsItem(id);
    }

    @Post('newsItem/delete')
    async deleteNews(@Body('id') id: string) {
        return await this.newsService.changeDeletedFlag(id, true)
            .then((deletedNewsItem) => {
                console.log(`NewsItem with id ${id} marked as deleted.`);
                return Promise.resolve(deletedNewsItem);
            })
            .catch((error) => {
                console.error(`Deleting of newsItem ${id} failed`);
                return Promise.reject(error);
            });
    }

    @Post('newsItem/undelete')
    async undeleteNews(@Body('id') id: string) {
        return await this.newsService.changeDeletedFlag(id, false)
            .then((deletedNewsItem) => {
                console.log(`NewsItem with id ${id} marked as undeleted.`);
                return Promise.resolve(deletedNewsItem);
            })
            .catch((error) => {
                console.error(`Undeleting of newsItem ${id} failed`);
                return Promise.reject(error);
            });
    }

    @Get('news')
    async getNews(){
        return await this.newsService.getNews();
    }

    @Get('news/active')
    async getActiveNews(){
        return await this.newsService.getActiveNews();
    }

    @Get('news/upcoming')
    async getUpcomingNews(){
        return await this.newsService.getUpcomingNews();
    }

    @Get('news/finished')
    async getFinishedNews(){
        return await this.newsService.getDeletedOrExpiredNews();
    }

    @Get('news/recent')
    async getRecentNews(){
        return await this.newsService.getRecentlyModifiedNews();
    }

    // @Get('news/:id')
    // async getNewsItem(@Param('id') id: String){
    //     return await this.newsService.getNewsItem(id);
    // }

    @Post('newsDetail')
    async saveNewsDetail(@Body() newsItemDetail: NewsItemDetailDto) {

        let existNewsItem = await this.newsService.existNewsItem(newsItemDetail._id);

        if (!existNewsItem) {
            let rejectReason = `NewsItem with id ${newsItemDetail._id} does not exist. Cannot save details.`
            console.error(rejectReason);
            return Promise.reject(rejectReason);
        }

        return await this.newsService.saveNewsDetail(newsItemDetail)
            .then((savedNewsItemsDetail) => {
                console.log(`Saved newsItemDetail into db: ${savedNewsItemsDetail._id} `);
                return Promise.resolve(savedNewsItemsDetail);
            }).catch((error) => {
                console.error(`Saving of newsItemDetail ${newsItemDetail._id} failed`);
                return Promise.reject(error);
            });
    }

    @Get('newsDetail')
    async getNewsItemDetail(@Query('id') id: string) {
        return await this.newsService.getNewsDetail(id);
    }


    //--- promotions ---

    @Post('promotion')
    async savePromotion(@Body() promotion: PromotionDto){
        return await this.promotionService.savePromotion(promotion)
        .then((savedPromotion) => {
            console.log(`Saved promotion into db: ${savedPromotion.name} with id ${savedPromotion._id}`);
            return Promise.resolve(savedPromotion);
        }).catch((error) => {
            console.error(`Saving of newsItem ${promotion.name} failed`);
            return Promise.reject(error);
        });
    }

    @Get('promotion')
    async getPromotion(@Query('id') id: string) {
        return await this.promotionService.getPromotion(id);
    }

    @Post('promotion/delete')
    async deletePromotion(@Body('id') id: string) {
        return await this.promotionService.changeDeletedFlag(id, true)
            .then((deletedPromotion) => {
                console.log(`Promotion with id ${id} marked as deleted.`);
                return Promise.resolve(deletedPromotion);
            })
            .catch((error) => {
                console.error(`Deleting of promotion ${id} failed`);
                return Promise.reject(error);
            });
    }

    @Post('promotion/undelete')
    async undeletePromotion(@Body('id') id: string) {
        return await this.promotionService.changeDeletedFlag(id, false)
            .then((undeletedPromotion) => {
                console.log(`Promotion with id ${id} marked as undeleted.`);
                return Promise.resolve(undeletedPromotion);
            })
            .catch((error) => {
                console.error(`Undeleting of promotion ${id} failed`);
                return Promise.reject(error);
            });
    }

    @Get('promotions')
    async getPromotions(){
        return await this.promotionService.getPromotions();
    }

    @Get('promotions/active')
    async getActivePromotions(){
        return await this.promotionService.getActivePromotions();
    }

    @Get('promotions/upcoming')
    async getUpcomingPromotions(){
        return await this.promotionService.getUpcomingPromotions();
    }

    @Get('promotions/finished')
    async getFinishedPromotions(){
        return await this.promotionService.getDeletedOrExpiredPromotions();
    }

    @Get('promotions/recent')
    async getRecentPromotions(){
        return await this.promotionService.getRecentlyModifiedPromotions();
    }

    @Post('promotionDetail')
    async savePromotionDetail(@Body() promotionDetail: PromotionDetailDto) {

        let existPromotion = await this.promotionService.existPromotion(promotionDetail._id);

        if (!existPromotion) {
            let rejectReason = `Promotion with id ${promotionDetail._id} does not exist. Cannot save details.`
            console.error(rejectReason);
            return Promise.reject(rejectReason);
        }

        return await this.promotionService.savePromotionDetail(promotionDetail)
            .then((savedPromotionDetail) => {
                console.log(`Saved promotionDetail into db: ${savedPromotionDetail._id} `);
                return Promise.resolve(savedPromotionDetail);
            }).catch((error) => {
                console.error(`Saving of promotionDetail ${promotionDetail._id} failed`);
                return Promise.reject(error);
            });
    }

    @Get('promotionDetail')
    async getPromotionDetail(@Query('id') id: string) {
        return await this.promotionService.getPromotionDetail(id);
    }

}
