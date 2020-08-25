import React from 'react';

import Pagination from './Pagination';
import Row from './Row';
import Search from './Search';
import _ from 'lodash';

export interface DataTablePropsType {
  rows: any[];
  rowsPerPage: number;
  locale: string;
}

class DataTable extends React.Component<DataTablePropsType> {
  state = {
    rows: this.props.rows,
    currentPageNumber: 0,
    totalNumberOfPages: this.calculateTotalNumberOfPages(this.props.rows),
  };

  static defaultProps = {
    rowsPerPage: 40,
  };

  calculateTotalNumberOfPages(rows: any[]) {
    const { rowsPerPage } = this.props;
    if (rowsPerPage === 0) return 0;
    return Math.ceil(rows.length / rowsPerPage);
  }

  search(event: React.ChangeEvent<HTMLInputElement>) {
    const { rows } = this.props;
    const text = _.get(event, 'target.value', '');
    let rowsFound = rows;

    if (text) {
      rowsFound = rows.filter((row) => {
        return (
          row.name1.toLowerCase().search(text.toLowerCase()) > -1 || (row.email && row.email.toLowerCase().search(text.toLowerCase()) > -1)
        );
      });
    }

    this.setState({
      rows: rowsFound,
      currentPageNumber: 0,
      totalNumberOfPages: this.calculateTotalNumberOfPages(rowsFound),
    });
  }

  changeToPageNumber(pageNumber: number) {
    this.setState({ currentPageNumber: pageNumber });
  }

  rowsInPageNumber(pageNumber: number) {
    const { rowsPerPage } = this.props;
    const startIndex = pageNumber * rowsPerPage;
    return [startIndex, startIndex + rowsPerPage];
  }

  render() {
    const { rows, currentPageNumber, totalNumberOfPages } = this.state;
    const rowsToRender = rows.map((row) => <Row key={row.per_id} row={row} />).slice(...this.rowsInPageNumber(currentPageNumber));

    return (
      <div>
        <Search onSearch={this.search.bind(this)} />
        <table>
          <tbody>{rowsToRender}</tbody>
        </table>
        <Pagination
          currentPageNumber={currentPageNumber}
          totalNumberOfPages={totalNumberOfPages}
          onChange={this.changeToPageNumber.bind(this)}
        />
      </div>
    );
  }
}

export default DataTable;
