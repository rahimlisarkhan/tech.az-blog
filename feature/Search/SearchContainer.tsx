import { useSelector } from "shared/hooks/useSelector";
import { Modal } from "shared/components/Modal";
import { useDispatch } from "shared/hooks/useDispatch";
import {
  fillAllData,
  setIsOpenSearch,
} from "shared/store/slices/home/homeSlices";
import { SearchContent } from "./components/SearchContent";
import { useRequest } from "shared/hooks/useRequest";
import { useEffect, useState } from "react";
import { NewsType } from "types/news";
import { changeTitle } from "shared/utils/changeTitle";
import { Motion } from "shared/components/Motion";

export const SearchContainer = () => {
  const isOpen = useSelector((state) => state.home.openSearchBar);
  const allData = useSelector((state) => state.home.allData);
  const dispatch = useDispatch();
  const [filterData, setFilterData] = useState<Array<NewsType> | null>(null);

  const { exc } = useRequest("alldata", {
    onSuccess: (res) => {
      dispatch(fillAllData(res));
    },
  });

  useEffect(() => {
    !allData.length && exc();
  }, []);

  const handleSearchBar = () => {
    dispatch(setIsOpenSearch());
    setFilterData(null);
  };

  const handleSearchData = (title: string) => {
    if (title) {
      setFilterData(
        allData.filter((data) =>
          changeTitle(data.title).includes(changeTitle(title))
        )
      );
    }
  };

  return (
    <Modal isOpen={isOpen} close={handleSearchBar}>
      <SearchContent
        searchData={filterData}
        setFilterData={setFilterData}
        search={handleSearchData}
      />
    </Modal>
  );
};
