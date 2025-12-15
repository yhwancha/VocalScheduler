import { Test, TestingModule } from '@nestjs/testing';
import { BookingService } from './booking.service';
import { CalendarService } from '../calendar/calendar.service';

describe('BookingService', () => {
  let service: BookingService;

  const mockCalendarService = {
    createMeeting: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BookingService,
        {
          provide: CalendarService,
          useValue: mockCalendarService,
        },
      ],
    }).compile();

    service = module.get<BookingService>(BookingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
