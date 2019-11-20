import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesController } from './messages/messages.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forRoot('mongodb://localhost/studentPortal'),
    DatabaseModule
  ],
  controllers: [AppController, MessagesController],
  providers: [AppService],
})
export class AppModule {}
