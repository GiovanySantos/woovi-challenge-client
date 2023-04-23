import { EnumLanguageAvaliable } from "@/types/enums";
import { IContentKeys } from "@/types/interfaces";
import { createContext } from "react";

interface IContentKeyContext {
  contentKeys?: IContentKeys[];
  setContentKeys?: React.Dispatch<React.SetStateAction<IContentKeys[]>>;
  language?: EnumLanguageAvaliable;
  setLanguage?: React.Dispatch<React.SetStateAction<EnumLanguageAvaliable>>;
}

const INITIAL_VALUE = [
  {
    key: "test_content",
    content: "this is a test",
  },
];

export const ContentKeyContext = createContext<IContentKeyContext>({
  contentKeys: INITIAL_VALUE,
  setContentKeys: () => {},
  language: EnumLanguageAvaliable.ptBR,
  setLanguage: () => {},
});

