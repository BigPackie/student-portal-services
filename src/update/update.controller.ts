import { Controller, Get } from '@nestjs/common';
import { UpdateService } from './update.service';

@Controller('update')
export class UpdateController {

    constructor(private updateService: UpdateService){

    };

    @Get('newestAppVersion')
    async getNewsItem() {
       return await this.updateService.getAppVersion();
    }

}
