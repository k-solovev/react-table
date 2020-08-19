import React from 'react';

function DetailInfo({ user }) {
  return (
    <div className='detail-info'>
      <p className='detail-info__paragraph'>
        Выбран пользователь:
        <b>
          {' ' + user.firstName + ' ' + user.lastName}
        </b>
      </p>
      <p className='detail-info__paragraph'>
        Описание:
        <textarea defaultValue={user.description} />
      </p>
      <p className='detail-info__paragraph'>
        Адрес проживания: <b>{user.address.streetAddress}</b>
      </p>
      <p className='detail-info__paragraph'>
        Город: <b>{user.address.city}</b>
      </p>
      <p className='detail-info__paragraph'>
        Провинция/штат: <b>{user.address.state}</b>
      </p>
      <p className='detail-info__paragraph'>
        Индекс: <b>{user.address.zip}</b>
      </p>
    </div>
  );
}

export default DetailInfo;
