import { Module } from '@nestjs/common';
import { WebhookService } from './webhook.service';
import { WebhookController } from './webhook.controller';
import { ParserModule } from '../parser/parser.module';
import { BookingModule } from '../booking/booking.module';

@Module({
  controllers: [WebhookController],
  providers: [WebhookService],
  imports: [
    ParserModule,
    BookingModule,
  ],
})
export class WebhookModule {}
