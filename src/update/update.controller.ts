import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { UpdateService } from './update.service';
import { LoggingInterceptor } from 'src/logging.interceptor';

@UseInterceptors(LoggingInterceptor)
@Controller('update')
export class UpdateController {

    constructor(private updateService: UpdateService){

    };

    @Get('newestAppVersion')
    async getNewAppVersion() {
       return await this.updateService.getAppVersion();
    }

}
