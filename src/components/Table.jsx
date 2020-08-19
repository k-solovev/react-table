import React, { useState } from 'react';
import Pagination from 'react-paginate';

import HeaderRow from './HeaderRow';
import Row from './Row';
import DetailInfo from './DetailInfo';

function Table({ users, displayUsers, onSort, rowsCount, pageHandler }) {
  const [user, setUser] = useState(null);

  const onDetailInfo = (user) => {
    setUser(user);
  };

  return (
    <div className='table'>
      <HeaderRow onSort={onSort} />
      {displayUsers &&
        displayUsers.map((user, index) => <Row key={index} user={user} onDetailInfo={onDetailInfo} />)}
      {user ? <DetailInfo user={user} /> : null}
      {users.length > rowsCount ? (
        <Pagination
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={users.length / rowsCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          onPageChange={pageHandler}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      ) : null}
    </div>
  );
}

export default Table;
