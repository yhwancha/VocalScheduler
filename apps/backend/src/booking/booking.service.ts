import { Injectable } from '@nestjs/common';
import { CalendarService } from '../calendar/calendar.service';

@Injectable()
export class BookingService {

    constructor(private readonly calendarService: CalendarService) {}

    async createBooking(dto: any) {
        this.calendarService.createMeeting(dto);
        console.log("creating booking", dto);
    }
}
