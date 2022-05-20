import { useSelector } from "shared/hooks/useSelector";
import { Modal } from "shared/components/Modal";
import { useDispatch } from "shared/hooks/useDispatch";
import {
  fillAllData,
  setIsOpenSearch,
} from "shared/store/slices/home/homeSlices";
import { SearchContent } from "./components/SearchContent";
import { useRequest } from "shared/hooks/useRequest";
import { useEffect, useMemo, useState } from "react";
import { changeTitle } from "shared/utils/changeTitle";
import ErrorBoundary from "shared/components/ErrorBoundary/ErrorBoundary";
import { useMounted } from "shared/hooks/useMounted";

export const SearchContainer = () => {
  const isOpen = useSelector((state) => state.home.openSearchBar);
  const allData = useSelector((state) => state.home.allData);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const mounted = useMounted();

  const openSearchBar = useSelector((state) => state.home.openSearchBar);

  const { exc } = useRequest("alldata", {
    onSuccess: (res) => {
      dispatch(fillAllData(res));
    },
  });

  useEffect(() => {
    if (openSearchBar) {
      !allData.length && exc();
    }
  }, [openSearchBar]);

  const filterData = useMemo(() => {
    if (value) {
      return allData.filter((data) =>
        changeTitle(data.title).includes(changeTitle(value))
      );
    }
  }, [value]);

  const handleSearchBar = () => {
    dispatch(setIsOpenSearch());
    setValue("");
  };

  const handleSearchData = (title: string) => {
    if (title) {
      setValue(title);
    }
  };

  return (
    <Modal isOpen={isOpen} close={handleSearchBar}>
      <ErrorBoundary>
        <SearchContent
          searchData={filterData}
          setValue={setValue}
          search={handleSearchData}
        />
      </ErrorBoundary>
    </Modal>
  );
};
