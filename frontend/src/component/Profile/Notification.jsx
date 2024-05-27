import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components for notification container and notification
const NotificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const NotificationBox = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 15px 20px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  width: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const NotificationText = styled.p`
  margin-left: 10px;
  color: #333;
  font-weight: bold;
  flex: 1;
`;

const DismissButton = styled.button`
  background-color: transparent;
  border: none;
  color: #777;
  cursor: pointer;
  font-size: 18px;
`;

const NoNotificationsMessage = styled.p`
  color: #777;
  text-align: center;
`;

const NotificationDetailsCard = styled.div`
  background-color: darkgray;
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;
  width: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: left;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const OrderImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 10px;
`;

const RawInformation = styled.div`
  margin-top: 10px;
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 8px;
  color:black;
`;

const NotificationPage = () => {
  const [selectedNotification, setSelectedNotification] = useState(null);

  // Simulated notifications
  const notifications = [
    { id: 1, message: 'New order received', foodName: 'Pizza', imageURL: 'https://en.wikipedia.org/wiki/Pizza#/media/File:Pizza-3007395.jpg', order: { id: 12345, items: ['Pizza', 'Coke'], total: 20.00, customer: 'John Doe' } },
    { id: 2, message: 'Payment processed', order: { id: 12346, items: ['Burger', 'Fries'], total: 15.00, customer: 'Jane Smith' } },
    { id: 3, message: 'Item shipped', order: { id: 12347, items: ['Salad'], total: 10.00, customer: 'Mike Johnson' } },
    { id: 4, message: 'Delivery scheduled', order: { id: 12348, items: ['Sushi', 'Soda'], total: 25.00, customer: 'Emily Brown' } },
  ];

  const handleNotificationClick = (notification) => {
    setSelectedNotification(notification);
  };

  const handleDismissClick = () => {
    setSelectedNotification(null);
  };

  return (
    <div style={{ position: 'relative' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Notifications</h1>
      <NotificationContainer>
        {selectedNotification && (
          <NotificationDetailsCard>
            <h2>Order Details</h2>
            {selectedNotification.message === 'New order received' && (
              <div>
                <OrderImage src={selectedNotification.imageURL} alt={selectedNotification.foodName} />
                <p><strong>Food Name:</strong> {selectedNotification.foodName}</p>
              </div>
            )}
            <p><strong>Order ID:</strong> {selectedNotification.order.id}</p>
            <RawInformation>
              <p><strong>Items:</strong></p>
              <ul>
                {selectedNotification.order.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </RawInformation>
            <p><strong>Total:</strong> ${selectedNotification.order.total.toFixed(2)}</p>
            <p><strong>Customer:</strong> {selectedNotification.order.customer}</p>
            <DismissButton onClick={handleDismissClick}>Close</DismissButton>
          </NotificationDetailsCard>
        )}
        {notifications.length > 0 ? (
          notifications.map(notification => (
            <NotificationBox key={notification.id} onClick={() => handleNotificationClick(notification)}>
              <NotificationText>{notification.message}</NotificationText>
            </NotificationBox>
          ))
        ) : (
          <NoNotificationsMessage>No new notifications</NoNotificationsMessage>
        )}
      </NotificationContainer>
    </div>
  );
};

export default NotificationPage;
