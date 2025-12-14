export enum IntentType {
    BOOK_APPOINTMENT = 'BOOK_APPOINTMENT',
    CANCEL_APPOINTMENT = 'CANCEL_APPOINTMENT',
    UNKNOWN = 'UNKNOWN',
}

export interface BookAppointmentIntent {
    type: IntentType.BOOK_APPOINTMENT;
    date: Date;
}

export interface UnknownIntent {
    type: IntentType.UNKNOWN;
}

export type ParsedIntent = BookAppointmentIntent | UnknownIntent;