import React from 'react';

import { User } from '../App';

const Row = (props: { row: User }) => {
  const { row } = props;

  return (
    <tr>
      <td>
        <a href={row.edit_path}>{row.name1}</a>
        <br />
        <small>{row.email}</small>
      </td>
    </tr>
  );
};

export default Row;
