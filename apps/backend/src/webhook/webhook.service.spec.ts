import { Test, TestingModule } from '@nestjs/testing';
import { WebhookService } from './webhook.service';
import { CalendarService } from 'src/calendar/calendar.service';

// webhook.service.spec.ts
describe("WebhookService", () => {
  let service: WebhookService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        WebhookService,
        {
          provide: CalendarService,
          useValue: mockCalendarService,
        },
      ],
    }).compile();

    service = module.get(WebhookService);
  });

  it("should create a calendar event when meeting.ready payload is valid", async () => {
    const payload: MeetingReadyDto = {
      event: "meeting.ready",
      source: "chatgpt",
      sessionId: "session_abc123",
      confidence: 0.93,
      intent: {
        type: "CREATE_MEETING",
        slots: {
          title: "Intro Call",
          startTime: "2025-12-14T15:00:00-06:00",
          endTime: "2025-12-14T15:30:00-06:00",
        },
      },
      rawTranscript: "I want to book a meeting tomorrow at 3pm",
    };

    const result = await service.handleMeeting(payload);

    expect(mockCalendarService.createMeeting).toHaveBeenCalledWith({
      title: "Intro Call",
      startTime: new Date("2025-12-14T15:00:00-06:00"),
      endTime: new Date("2025-12-14T15:30:00-06:00"),
    });

    expect(result).toEqual({ status: "created" });
  });
});

