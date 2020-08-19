import React from 'react';

function Row({ user, onDetailInfo }) {
  const userColumn = ['id', 'firstName', 'lastName', 'email', 'phone'];

  return (
    <div className='row'>
      {userColumn &&
        userColumn.map((item, index) => {
          return (
            <div onClick={onDetailInfo.bind('null', user)} key={index} className='row__cell'>
              {user[item]}
            </div>
          );
        })}
    </div>
  );
}

export default Row;
