import { Injectable, Logger } from '@nestjs/common';
import { IntentType } from '../parser/parser.dto';
import { ParserService } from '../parser/parser.service';

@Injectable()
export class WebhookService {

  private readonly logger = new Logger(WebhookService.name);

  constructor(private readonly parserService: ParserService) {}

  async handleMeeting(payload: any) {
    this.logger.log(`Incoming webhook payload: ${JSON.stringify(payload)}`);

    const text: string = payload?.text ?? '';

    const intent = await this.parserService.parse(text);

    this.logger.log(`Parsed intent: ${JSON.stringify(intent)}`);

    if (intent.type === IntentType.BOOK_APPOINTMENT) {
      return {
        message: `TEST OK: Booking intent detected for ${intent.date.toLocaleString()}`,
        intent,
      };
    }

    return {
      message: 'TEST OK: Intent not recognized',
      intent,
    };
  }
}
