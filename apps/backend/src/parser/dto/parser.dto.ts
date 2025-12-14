export const ParserDto = {
    BOOK_APPOINTMENT: 'BOOK_APPOINTMENT',
    CANCEL_APPOINTMENT: 'CANCEL_APPOINTMENT',
    UNKNOWN: 'UNKNOWN',
} as const;

export type ParserDto = typeof ParserDto[keyof typeof ParserDto];