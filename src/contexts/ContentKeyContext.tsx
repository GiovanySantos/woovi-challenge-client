import { EnumLanguageAvaliable } from "@/types/enums";
import { IContentKeys } from "@/types/interfaces";
import { createContext } from "react";

interface IContentKeyContext {
  contentKeys?: IContentKeys[];
  setContentKeys?: React.Dispatch<React.SetStateAction<IContentKeys[]>>;
  language?: EnumLanguageAvaliable;
  setLanguage?: React.Dispatch<React.SetStateAction<EnumLanguageAvaliable>>;
}

const INITIAL_TEST_VALUE = [
  {
    key: "test_content",
    content: "this is a test",
  },
  {
    key: "test_InputGeneric",
    content: "Test for InputGeneric",
  },
  {
    key: "test_toaster",
    content: "Test for toaster",
  },
];

export const ContentKeyContext = createContext<IContentKeyContext>({
  contentKeys: INITIAL_TEST_VALUE,
  setContentKeys: () => {},
  language: EnumLanguageAvaliable.ptBR,
  setLanguage: () => {},
});

