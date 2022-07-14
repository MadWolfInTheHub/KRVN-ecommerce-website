import React, { FC } from 'react';
import Footer from '../Footer/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './customer.scss'

const CustomersPage: FC = () => {
  return (
    <div className='customer'>
      <header className='customer-header'>

      </header>
      <main className='customer-container'>
        <section className='customer-container__userInfo'>
          <div className='customer-container__userInfo_img'>
            <FontAwesomeIcon icon={faUser}/>
          </div>
          <h1 className='customer-container__userInfo_name'>name</h1>
          <h3 className='customer-container__userInfo_address'>address</h3>
          <p className='customer-container__userInfo_id'>id</p>
        </section>

        <section className='customer-container__userOrders'>
          <div className='customer-container__userOrders_previousOrders'>
            <span>Last Orders: </span> 0
          </div>
          <div className='customer-container__userOrders_ordersInProgress'>
            <span>Orders in progress: </span> 0
          </div>
          <div className='customer-container__userOrders_completedOrder'>
          <span>Completed orders: </span> 0
          </div>
        </section>
      </main>
    </div>
  );
};

export default CustomersPage;