declare module "@salesforce/apex/QuizEditorController.getAllQuestions" {
  export default function getAllQuestions(): Promise<any>;
}
declare module "@salesforce/apex/QuizEditorController.setSessionQuestions" {
  export default function setSessionQuestions(param: {sessionId: any, questionIds: any}): Promise<any>;
}
declare module "@salesforce/apex/QuizEditorController.getSessionQuestions" {
  export default function getSessionQuestions(param: {sessionId: any}): Promise<any>;
}
