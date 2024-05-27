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
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;
  width: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: left;
`;

const RawInformation = styled.div`
  margin-top: 10px;
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 8px;
`;

const NotificationPage = () => {
  const [selectedNotification, setSelectedNotification] = useState(null);

  // Simulated notifications
  const notifications = [
    { id: 1, message: 'New order received', order: { id: 12345, items: ['Widget A', 'Widget B'], total: 50.00, customer: 'John Doe' } },
    { id: 2, message: 'Payment processed', order: { id: 12346, items: ['Widget C'], total: 30.00, customer: 'Jane Smith' } },
    { id: 3, message: 'Item shipped', order: { id: 12347, items: ['Widget A'], total: 20.00, customer: 'Mike Johnson' } },
    { id: 4, message: 'Delivery scheduled', order: { id: 12348, items: ['Widget B'], total: 25.00, customer: 'Emily Brown' } },
  ];

  const handleNotificationClick = (notification) => {
    setSelectedNotification(notification);
  };

  const handleDismissClick = () => {
    setSelectedNotification(null);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Notifications</h1>
      <NotificationContainer>
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
      {selectedNotification && (
        <NotificationDetailsCard>
          <h2>Order Details</h2>
          <p><strong>Order ID:</strong> {selectedNotification.order.id}</p>
          <RawInformation>
            <p><strong>Items:</strong></p>
            <pre>{JSON.stringify(selectedNotification.order.items, null, 2)}</pre>
          </RawInformation>
          <p><strong>Total:</strong> ${selectedNotification.order.total.toFixed(2)}</p>
          <p><strong>Customer:</strong> {selectedNotification.order.customer}</p>
          <DismissButton onClick={handleDismissClick}>Close</DismissButton>
        </NotificationDetailsCard>
      )}
    </div>
  );
};

export default NotificationPage;
