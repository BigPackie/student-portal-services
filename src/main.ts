import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(bodyParser.json({limit: '16mb'}));
  app.use(bodyParser.urlencoded({limit: '16mb', extended: true}));
  
  await app.listen(3000, () => console.log(`Student portal server is ready to fulfill your desires...`));

  app.getUrl().then(url => console.log(`Services available at url ${url}`))
}
bootstrap();
