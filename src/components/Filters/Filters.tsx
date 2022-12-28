import { useState, useEffect } from "react";

import CheckboxUI from "../UI/CheckboxUI";
import SearchBar from "../UI/SearchBar";
import styles from "./Filters.module.css";

interface FiltersProps {
  bySearchFilter: (searchQuery: string) => void;
  byTypeFilter: (typeQuery: string) => void;
}

const Filters = ({ bySearchFilter, byTypeFilter }: FiltersProps) => {
  const [query, setQuery] = useState("");

  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);

  const inputSearchHandler = (searchQuery: string) => {
    setQuery(searchQuery);
  };

  const checkboxesHandler = (
    selectedCheckbox: string,
    checkboxState: boolean
  ) => {
    if (checkboxState) {
      setSelectedCheckboxes((prev) => [...prev, selectedCheckbox]);
    } else {
      setSelectedCheckboxes((prev) => {
        return [...prev.filter((type) => type !== selectedCheckbox)];
      });
    }
  };

  useEffect(() => {
    console.log(selectedCheckboxes);
  }, [selectedCheckboxes]);

  useEffect(() => {
    console.log(query);
    bySearchFilter(query);
  }, [query]);

  return (
    <>
      <div className={styles.filterBox}>
        <SearchBar onInputSearch={inputSearchHandler} />
      </div>
      <div className={styles.filterBox}>
        <CheckboxUI label="Clothes" onCheckboxClicked={checkboxesHandler} />
        <CheckboxUI label="Jewelery" onCheckboxClicked={checkboxesHandler} />
        <CheckboxUI label="Electronics" onCheckboxClicked={checkboxesHandler} />
      </div>
      <div className={styles.filterBox}>
        <CheckboxUI label="Special checkbox" onCheckboxClicked={byTypeFilter} />
      </div>
    </>
  );
};

export default Filters;
