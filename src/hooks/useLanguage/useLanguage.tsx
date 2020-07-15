import { useState, useEffect } from "react";
import { Lang } from "../../store/Config/types";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";

import { ruLanguage } from "../../language/ru";
import { enLanguage } from "../../language/en";
import { ilLanguage } from "../../language/il";

export const useLanguage = () => {
  const language = useSelector((state: RootState) => state.config.lang);

  const initialState: any = ruLanguage;
  const [words, setWords] = useState(initialState);

  const updateLanguage = (lang: Lang) => {
    const newWords = lang === "ru" ? ruLanguage : lang === "en" ? enLanguage : ilLanguage;
    setWords(newWords);
  };

  const getWord = (item: string) => {
    if (words.hasOwnProperty(item)) return words[item];
    return "~!~";
  };

  useEffect(() => {
    updateLanguage(language);
  }, [language]);

  return getWord;
};
