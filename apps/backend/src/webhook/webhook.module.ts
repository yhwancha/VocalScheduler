import { Module } from '@nestjs/common';
import { WebhookService } from './webhook.service';
import { WebhookController } from './webhook.controller';
import { ParserModule } from '../parser/parser.module';

@Module({
  controllers: [WebhookController],
  providers: [WebhookService],
  imports: [ParserModule],
})
export class WebhookModule {}
