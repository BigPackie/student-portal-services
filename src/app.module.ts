import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesController } from './messages/messages.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from './database/database.module';
import { UpdateModule } from './update/update.module';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forRoot('mongodb://localhost:27017/studentPortal',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        poolSize: 100
      }),
    DatabaseModule,
    UpdateModule
  ],
  controllers: [AppController, MessagesController],
  providers: [AppService],
})
export class AppModule {}
