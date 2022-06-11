import styles from "./Highlighter.module.scss";
import Highlighter from "react-highlight-words";

type Props = {
  text: string;
  searchWord: string;
};

export const HighlighterContent = ({ searchWord, text }: Props) => {
  return (
    <Highlighter
      highlightClassName={styles.highlightClass}
      searchWords={[searchWord]}
      autoEscape={true}
      textToHighlight={text}
    />
  );
};
