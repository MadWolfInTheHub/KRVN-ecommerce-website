import React, { FC } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { orderList } from '../../data/orderList';
import './customer.scss'
import { Link } from 'react-router-dom';
import CustomersOrderCard from '../../elements/CustomersOrderCard/CustomersOrderCard';

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
            <span>Last Order: </span>
            {
              orderList[0].orderItems.map(el => (
                <CustomersOrderCard el={el}/>
              ))
            }
            <div>Total: {orderList[0].price}</div>
          </div>
          <div className='customer-container__userOrders_ordersInProgress'>
            <span>Orders in progress: </span>{orderList.filter(el => el.status.inProgress === true).length}
          </div>
          <div className='customer-container__userOrders_completedOrder'>
          <span>Completed orders: </span>{orderList.filter(el => el.status.completed === true).length}
          </div>
        </section>
      </main>
    </div>
  );
};

export default CustomersPage;