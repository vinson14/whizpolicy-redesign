import { isAfter } from "date-fns";
import { useEffect } from "react";
import {
  POLICY_INCEPTION_DATE_KEY,
  POLICY_MATURITY_DATE_KEY,
  POLICY_TERM_KEY,
  NON_NEG_MSG,
  AFTER_DATE_MSG,
  AFTER_DATE_MSG_PLACEHOLDER,
  BEFORE_DATE_MSG,
  BEFORE_DATE_MSG_PLACEHOLDER,
} from "../data/ui";
import { getDifferenceInCalendarYears } from "./api";

const usePolicyTerm = (watch, setValue, setError) => {
  const inceptionDate = watch(POLICY_INCEPTION_DATE_KEY);
  const maturityDate = watch(POLICY_MATURITY_DATE_KEY);

  useEffect(() => {
    const years = getDifferenceInCalendarYears(inceptionDate, maturityDate);
    const invalidDate = isAfter(inceptionDate, maturityDate);
    if (invalidDate) {
      setError(POLICY_INCEPTION_DATE_KEY, {
        type: "Date error",
        message: AFTER_DATE_MSG.replace(AFTER_DATE_MSG_PLACEHOLDER, "maturity date"),
      });
      setError(POLICY_MATURITY_DATE_KEY, {
        type: "Date error",
        message: BEFORE_DATE_MSG.replace(BEFORE_DATE_MSG_PLACEHOLDER, "inception date"),
      });
    }
    setValue(POLICY_TERM_KEY, years);
  }, [inceptionDate, maturityDate]);
};

export default usePolicyTerm;
