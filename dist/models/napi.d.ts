export interface BotDetectionResult {
    score: number;
    reasons: string[];
    isBot: boolean;
    clientIp: string;
    userAgent: string;
}
