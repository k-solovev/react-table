import React, { useEffect, useState } from 'react';
import _ from 'lodash';

import Loader from './components/Loader';
import Table from './components/Table';

function App() {
  const url =
    'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';
  const rowsCount = 30;
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const [sort, setSort] = useState('desc');
  const [sortField, setSortField] = useState('id');

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(true);
      });
  }, []);

  const onActiveItem = (sortField) => {
    const svgNodes = document.querySelectorAll('.header-row__cell svg');
    const svg = document.querySelector(`.header-row__cell[data-col=${sortField}] svg`);

    svgNodes.forEach(svg => svg.classList.remove('rotated'))
    svg.classList.toggle('rotated');
  };

  const onSort = (sortField) => {
    const clonedUsers = users.concat();
    const sortType = sort === 'asc' ? 'desc' : 'asc';

    const orderedUsers = _.orderBy(clonedUsers, sortField, sortType);
    setUsers(orderedUsers);
    setSort(sortType);
    setSortField(sortField);
    onActiveItem(sortField);
  };

  const pageHandler = ({ selected }) => {
    setCurrentPage(selected);
  };

  const displayUsers = users ? _.chunk(users, rowsCount)[currentPage] : null;
  console.log('displayUsers', displayUsers);

  return (
    <div className='app'>
      {isLoading ? (
        <Table
          users={users}
          displayUsers={displayUsers}
          onSort={onSort}
          rowsCount={rowsCount}
          pageHandler={pageHandler}
        />
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
