import React, { FunctionComponent } from 'react';

export interface PagePropType {
  pageNumber: number;
  currentPageNumber: number;
  onChange: (pageNumber: number) => void;
}
const Page: FunctionComponent<PagePropType> = (props) => {
  const { pageNumber, currentPageNumber, onChange } = props;

  const isActivePage = () => {
    return currentPageNumber === pageNumber;
  };

  const renderedPageNumber = () => {
    return pageNumber + 1;
  };

  const click = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    onChange(pageNumber);
  };

  if (isActivePage()) {
    return (
      <li className="page-item mr-1">
        <button className="page-link button-outline" onClick={click}>
          {renderedPageNumber()}
        </button>
      </li>
    );
  }
  return (
    <li className="page-item mr-1">
      <button className="page-link" onClick={click}>
        {renderedPageNumber()}
      </button>
    </li>
  );
};

export default Page;
