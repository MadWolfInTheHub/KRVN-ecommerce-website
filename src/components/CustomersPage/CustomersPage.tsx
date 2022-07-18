import React, { FC, useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { orderList } from '../../data/orderList';
import './customer.scss'
import CustomersOrderCard from '../../elements/CustomersOrderCard/CustomersOrderCard';

const CustomersPage: FC = () => {
  const [orderType, setOrderType] = useState('Previous Order');
  const [ordersInProgress, setOrdersInProgress] = useState(orderList.filter(el => el.status.inProgress === true))
  const [ordersCompleted, setOrdersCompleted] = useState(orderList.filter(el => el.status.completed === true))

  
  useEffect((): void => {
    setOrdersInProgress(orderList.filter(el => el.status.inProgress === true));
    setOrdersCompleted(orderList.filter(el => el.status.completed === true));
  }, [orderType]);
  
  useEffect(() => {
    const orderTypeBtn: NodeListOf<Element> = document.querySelectorAll('.ordersNavBtn');

    const onToggleOrderType = (e: any): void => {
      switch (e.target.id) {
        case 'previousOrder':
          setOrderType('Previous Order');
          break;
        case 'ordersInProgress':
          setOrderType('Orders in progress');
          break;
        case 'completedOrders':
          setOrderType("Completed orders");
          break;
        default:
          setOrderType('Previous Order');
          break;
      }
    }

    orderTypeBtn.forEach(btn => btn.addEventListener('click', onToggleOrderType));
    return () => {
      orderTypeBtn.forEach(btn => btn.removeEventListener('click', onToggleOrderType));
    }
  }, []);
  

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
          <nav className='customer-container__userOrders_navigation'>
            <button id='previousOrder' className=' ordersNavBtn' >Last Order</button>
            <button id='ordersInProgress' className='ordersNavBtn'>Orders in progress</button>
            <button id='completedOrders' className='ordersNavBtn'>Completed orders</button>
          </nav>
          <div className='customer-container__userOrders_previousOrders'>
            <h3>{orderType}: </h3> 
            { 
              orderType === 'Previous Order'
              ?
              <>
                Order Id: {orderList[0].orderId}
               { orderList[0].orderItems.map(el => (
                  <CustomersOrderCard el={el} />
                ))}
                <h4 className='customer-container__userOrders_previousOrders-price'>Total: {orderList[0].price}</h4>
              </>
              : null
            }
            { 
              orderType === 'Orders in progress'
              ?
              ordersInProgress.map(el => (
                <>
                  Order Id: {el.orderId}
                  {el.orderItems.map(el => (
                    <CustomersOrderCard el={el}/>
                  ))}
                    <h4 className='customer-container__userOrders_previousOrders-price'>Total: {el.price}</h4>
                </>
              ))
              : null
            }
            { 
              orderType === "Completed orders"
              ?
              ordersCompleted.map(el => (
                <>
                  Order Id: {el.orderId}
                  {el.orderItems.map(el => (
                    <CustomersOrderCard el={el}/>
                  ))}
                  <h4 className='customer-container__userOrders_previousOrders-price'>Total: {el.price}</h4>
                </>
              ))
              : null
            }
          </div>
        </section>
      </main>
    </div>
  );
};

export default CustomersPage;