declare module "@salesforce/apex/QuizController.getQuestionList" {
  export default function getQuestionList(param: {sessionId: any}): Promise<any>;
}
declare module "@salesforce/apex/QuizController.getPlayerList" {
  export default function getPlayerList(param: {maxFetchCount: any}): Promise<any>;
}
declare module "@salesforce/apex/QuizController.getQuizSession" {
  export default function getQuizSession(): Promise<any>;
}
