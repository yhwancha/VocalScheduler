import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { WebhookService } from './webhook.service';

@Controller('webhook')
export class WebhookController {
  constructor(private readonly webhookService: WebhookService) {}

  @Post('voice')
  @HttpCode(HttpStatus.OK)
  async handleReservation(@Body() body: any) {
    return this.webhookService.handleReservation(body);
  }
}