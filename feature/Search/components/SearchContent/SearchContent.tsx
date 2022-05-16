import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useRef, useState } from "react";
import {
  SearchContentStyled,
  SearchInputBox,
  SearchInput,
  SearchButton,
  SearchList,
} from "./SearchContent.styled";
import { SearchCard } from "../SearchCard";
import { NewsType } from "types/news";
import { Typograph } from "shared/components/Typograph/Typograph";
interface SearchProps {
  search: (text: string) => void;
  setValue: (data: null) => void;
  searchData: NewsType[];
}

export const SearchContent = ({
  search,
  searchData,
  setValue,
}: SearchProps) => {
  const [inputPosition, setInputPosition] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <SearchContentStyled>
      <SearchInputBox inputPosition={inputPosition}>
        <SearchInput
          ref={inputRef}
          onFocus={() => {
            setValue(null);
            setInputPosition(true);
          }}
          onKeyPress={({ key }) =>
            key === "Enter" && search(inputRef.current?.value)
          }
        />
        <SearchButton onClick={() => search(inputRef.current?.value)}>
          <SearchIcon />
        </SearchButton>
      </SearchInputBox>

      <SearchList inputPosition={inputPosition}>
        {Array.isArray(searchData) && !searchData.length && (
          <Typograph color="white" font="25">
            Axtarılan nəticə tapılmadı...
          </Typograph>
        )}
        {searchData?.map((news) => (
          <SearchCard
            key={`search-news-${news.id}`}
            news={news}
            searchWord={inputRef.current?.value}
          />
        ))}
      </SearchList>
    </SearchContentStyled>
  );
};
