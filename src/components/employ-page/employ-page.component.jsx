import React, { useEffect, useState } from 'react';

import './employ-page.style.scss';

import CardItem from '../card-item/card-item.component';
import AddModal from '../add-modal/add-modal.component';

const EmployPage = () => {
  const [employees, setEmployees] = useState([]);
  const [isModalShowed, setIsModalShowed] = useState(false);

  useEffect(() => {
    fetch('https://reqres.in/api/users?per_page=12').then(async (response) => {
      const res = await response.json();
      setEmployees([...res.data]);
    });
  }, []);

  const deleteHandler = (id) => {
    setEmployees((prevState) => {
      let newState = prevState.filter((employ) => employ.id !== id);
      console.log(newState);
      return newState;
    });
  };

  const addHandler = (employeeInfo) => {
    setEmployees((prevState) => [
      ...prevState,
      { id: prevState.length, ...employeeInfo },
    ]);
  };

  const employeesCards = employees.map((employ) => (
    <CardItem key={employ.id} props={{ ...employ, deleteHandler }} />
  ));

  return (
    <div className='employ-page-container'>
      <AddModal
        isShowed={isModalShowed}
        onSubmit={addHandler}
        onCancel={() => setIsModalShowed(!isModalShowed)}
      />
      {employeesCards}
      <div className='add-employee-button-container'>
        <span
          className='add-employee-button'
          onClick={() => setIsModalShowed(!isModalShowed)}
        >
          Add
        </span>
      </div>
    </div>
  );
};

export default EmployPage;
