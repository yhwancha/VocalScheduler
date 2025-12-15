import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { CalendarModule } from '../calendar/calendar.module';

@Module({
  imports: [CalendarModule],  // ← CalendarModule을 import!
  controllers: [BookingController],
  providers: [BookingService],
  exports: [BookingService],  // ← CalendarService는 제거
})
export class BookingModule {}
