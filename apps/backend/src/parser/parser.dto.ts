export enum IntentType {
    BOOK_APPOINTMENT = 'BOOK_APPOINTMENT',
    CANCEL_APPOINTMENT = 'CANCEL_APPOINTMENT',
    UNKOWN = 'UNKOWN',
}

export interface BookAppointmentIntent {
    type: IntentType.BOOK_APPOINTMENT;
    date: Date;
}

export interface UnkownIntent {
    type: IntentType.UNKOWN;
}

export type ParsedIntent = BookAppointmentIntent | UnkownIntent;