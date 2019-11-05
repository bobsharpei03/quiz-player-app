declare module "@salesforce/apex/QuizController.getQuizSettings" {
  export default function getQuizSettings(): Promise<any>;
}
declare module "@salesforce/apex/QuizController.getWinnerStats" {
  export default function getWinnerStats(): Promise<any>;
}
declare module "@salesforce/apex/QuizController.getPlayerAnswerStats" {
  export default function getPlayerAnswerStats(param: {playerId: any}): Promise<any>;
}
declare module "@salesforce/apex/QuizController.getCurrentQuestion" {
  export default function getCurrentQuestion(param: {sessionId: any}): Promise<any>;
}
declare module "@salesforce/apex/QuizController.getAnswerStats" {
  export default function getAnswerStats(): Promise<any>;
}
declare module "@salesforce/apex/QuizController.getPlayersSortedByScore" {
  export default function getPlayersSortedByScore(param: {maxFetchCount: any}): Promise<any>;
}
declare module "@salesforce/apex/QuizController.getQuizSession" {
  export default function getQuizSession(): Promise<any>;
}
declare module "@salesforce/apex/QuizController.triggerNextPhase" {
  export default function triggerNextPhase(param: {sessionId: any}): Promise<any>;
}
