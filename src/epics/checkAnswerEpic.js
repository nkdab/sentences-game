import { ofType } from "redux-observable";
import { mergeMap } from "rxjs/operators";
import { START_VALIDATE_ANSWER } from "../constants";
import { toggleMatched, toggleValidating } from "../actions/gameActions";

const answerValidate = (answer, answerData) => {
  const answerDataString = answerData.map(item => item.title).join(" ");
  return answer.toLowerCase() === answerDataString.toLowerCase();
};

const checkAnswerEpic = (action$, state$) =>
  action$.pipe(
    ofType(START_VALIDATE_ANSWER),
    mergeMap(() => {
      const { answer, answerData } = state$.value;
      if (answerValidate(answer, answerData)) {
        return [toggleMatched(), toggleValidating()];
      }
      return [toggleValidating()];
    })
  );

export { checkAnswerEpic };
