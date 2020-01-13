import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { Logger } from "@nestjs/common";

import * as config from 'config';

async function bootstrap() {
  const logger = new Logger("bootstrap");
  const app = await NestFactory.create(AppModule);
  const serverConfig = config.get('server');

  app.enableCors();

  let port = process.env.PORT || serverConfig.port;
  await app.listen(port);
  logger.log(`Application listening of ${port}`);
}
bootstrap();
