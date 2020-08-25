import React, { FunctionComponent } from "react";

import Page from "./Page";

export interface PaginationPropTypes {
  currentPageNumber: number;
  totalNumberOfPages: number;
  onChange: (pageNumber: number) => void;
}
const Pagination: FunctionComponent<PaginationPropTypes> = ({
  currentPageNumber,
  totalNumberOfPages,
  onChange,
}) => {
  const pages = Array.from(Array(totalNumberOfPages).keys()).map(
    (pageNumber) => {
      return (
        <Page
          key={pageNumber}
          currentPageNumber={currentPageNumber}
          pageNumber={pageNumber}
          onChange={onChange}
        />
      );
    }
  );

  if (pages.length <= 1) {
    return null;
  }
  return <ul className="pagination">{pages}</ul>;
};

export default Pagination;
