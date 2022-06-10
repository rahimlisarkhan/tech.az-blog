import { useSelector } from "shared/hooks/useSelector";
import { Modal } from "shared/components/Modal";
import { useDispatch } from "shared/hooks/useDispatch";
import { setIsOpenSearch } from "shared/store/slices/home/homeSlices";
import { SearchContent } from "./components/SearchContent";
import { useState } from "react";
import ErrorBoundary from "shared/components/ErrorBoundary/ErrorBoundary";
import { resultSearchApi } from "api/search";
import { useRequest } from "shared/hooks/useRequest";

export const SearchContainer = () => {
  const isOpen = useSelector((state) => state.home.openSearchBar);
  const dispatch = useDispatch();
  const [searchData, setSearchData] = useState([]);

  const { exc } = useRequest((params: string) => resultSearchApi(params), {
    onSuccess: ({ results }) => {
      let { articles, news, videos } = results;
      setSearchData([...news, ...articles, ...videos]);
    },
  });

  const handleSearchBar = () => {
    dispatch(setIsOpenSearch());
    setSearchData([]);
  };

  return (
    <Modal isOpen={isOpen} close={handleSearchBar}>
      <ErrorBoundary>
        <SearchContent
          searchData={searchData}
          search={(title: string) => exc(title)}
        />
      </ErrorBoundary>
    </Modal>
  );
};
