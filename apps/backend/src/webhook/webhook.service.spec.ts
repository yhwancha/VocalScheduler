import { Test, TestingModule } from '@nestjs/testing';
import { WebhookService } from './webhook.service';
import { ParserService } from '../parser/parser.service';
import { IntentType } from '../parser/parser.dto';

describe('WebhookService', () => {
  let webhookService: WebhookService;
  let parserService: ParserService;

  const mockParserService = {
    parse: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WebhookService,
        {
          provide: ParserService,
          useValue: mockParserService,
        },
      ],
    }).compile();

    webhookService = module.get(WebhookService);
    parserService = module.get(ParserService);

    jest.clearAllMocks();
  });

  it('should parse text and return booking intent', async () => {
    const payload = {
      text: 'I want to book a meeting tomorrow at 3pm',
    };

    mockParserService.parse.mockResolvedValue({
      type: IntentType.BOOK_APPOINTMENT,
      date: new Date('2025-12-15T15:00:00'),
      title: 'Meeting',
    });

    const result = await webhookService.handleMeeting(payload);

    expect(parserService.parse).toHaveBeenCalledWith(
      'I want to book a meeting tomorrow at 3pm',
    );
    expect(result.message).toContain('Booking intent detected');
    expect(result.intent.type).toBe(IntentType.BOOK_APPOINTMENT);
  });

  it('should handle unknown intent', async () => {
    const payload = {
      text: 'random text',
    };

    mockParserService.parse.mockResolvedValue({
      type: IntentType.UNKNOWN,
      date: null,
      title: null,
    });

    const result = await webhookService.handleMeeting(payload);

    expect(result.message).toContain('Intent not recognized');
  });
});