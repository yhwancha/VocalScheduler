import { Injectable } from '@nestjs/common';
import { BookAppointmentIntent, IntentType, UnkownIntent } from './parser.dto';

export type ParsedIntent = 
    | { type: 'BOOK_APPOINTMENT'; date: Date }
    | { type: 'CANCEL_APPOINTMENT'; date: Date }
    | { type: 'UNKOWN' }

@Injectable()
export class ParserService {
    async parse(text: string): Promise<ParsedIntent> {
        if (!text || text.length === 0) {
            return { type: IntentType.UNKOWN } as UnkownIntent;
        }

        const normalizedText = text.trim().toLowerCase();

        if (this.isBookAppointment(normalizedText)) {
            const date = this.extractDate(normalizedText);

            return {
                type: IntentType.BOOK_APPOINTMENT,
                date,
            } as BookAppointmentIntent;
        }

        return { type: IntentType.UNKOWN } as UnkownIntent;
    }
    
    /**
     * helper methods
     */

    private isBookAppointment(text: string): boolean {
        const appointmentKeywords = [
            'book',
            'appointment',
            'schedule',
            'meeting',
            'reservation',
            'reserve',
        ]

        return appointmentKeywords.some((keyword) => text.includes(keyword));
    }

    private extractDate(text: string): Date {
        const date = new Date();
    
        if (text.includes('tomorrow')) {
          date.setDate(date.getDate() + 1);
        } else {
          date.setDate(date.getDate() + 1);
        }
    
        date.setHours(15, 0, 0, 0);
    
        return date;
      }
}
