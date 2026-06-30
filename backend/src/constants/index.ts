export const OPPORTUNITY_CATEGORIES = {
  INTERNSHIP: 'INTERNSHIP',
  SCHOLARSHIP: 'SCHOLARSHIP',
  HACKATHON: 'HACKATHON',
  RESEARCH: 'RESEARCH',
} as const;

export const USER_ROLES = {
  STUDENT: 'STUDENT',
  ADMIN: 'ADMIN',
} as const;

export const OPPORTUNITY_SOURCES = {
  MANUAL: 'MANUAL',
  PDF: 'PDF',
  GMAIL: 'GMAIL',
  WEB: 'WEB',
} as const;

export const MATCH_SCORE_THRESHOLDS = {
  HIGH: 75,
  MEDIUM: 50,
  LOW: 25,
} as const;
