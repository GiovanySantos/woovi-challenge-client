import { EnumLanguageAvaliable } from "@/types/enums";
import { IContentKeys } from "@/types/interfaces";
import { createContext } from "react";

interface IContentKeyContext {
  contentKeys?: IContentKeys[];
  setContentKeys?: React.Dispatch<React.SetStateAction<IContentKeys[]>>;
  language?: EnumLanguageAvaliable;
  setLanguage?: React.Dispatch<React.SetStateAction<EnumLanguageAvaliable>>;
}

export const ContentKeyContext = createContext<IContentKeyContext>({
  contentKeys: undefined,
  setContentKeys: () => {},
  language: EnumLanguageAvaliable.ptBR,
  setLanguage: () => {},
});

