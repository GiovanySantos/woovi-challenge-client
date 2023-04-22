import { EnumLanguageAvaliable } from "@/types/enums";
import { IContentKeys } from "@/types/interfaces";
import { createContext } from "react";

interface IContentKeyContext {
  contentKeys?: IContentKeys[];
  setContentKeys?: React.Dispatch<React.SetStateAction<IContentKeys[]>>;
  language?: EnumLanguageAvaliable;
  setLanguage?: React.Dispatch<React.SetStateAction<EnumLanguageAvaliable>>;
}

const LANGUAGE_INITIAL_VALUE: EnumLanguageAvaliable =
  EnumLanguageAvaliable.ptBR;

export const ContentKeyContext = createContext<IContentKeyContext>({
  contentKeys: undefined,
  setContentKeys: () => {},
  language: LANGUAGE_INITIAL_VALUE,
  setLanguage: () => {},
});

