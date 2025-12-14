import { Injectable } from '@nestjs/common';
import { CreateMeetingDto } from './dto/create-meeting.dto';

@Injectable()
export class CalendarService {

    async createMeeting(dto: CreateMeetingDto) {
        console.log("creating meeting", dto);
    }
}
