import { Test, TestingModule } from '@nestjs/testing';
import { WebhookController } from './webhook.controller';
import { WebhookService } from './webhook.service';
import { ParserService } from '../parser/parser.service';
import { BookingService } from '../booking/booking.service';

describe('WebhookController', () => {
  let controller: WebhookController;

  const mockParserService = {
    parse: jest.fn(),
  };

  const mockBookingService = {
    createBooking: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WebhookController],
      providers: [
        WebhookService,
        {
          provide: ParserService,
          useValue: mockParserService,
        },
        {
          provide: BookingService,
          useValue: mockBookingService,
        },
      ],
    }).compile();

    controller = module.get<WebhookController>(WebhookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
