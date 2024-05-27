import React from 'react';
import { useSelector } from 'react-redux';

const Notification = () => {
  const notifications = useSelector(state => state.notifications) || []; // Provide a default value of []

  return (
    <div className="notification-container">
      {notifications.length > 0 ? (
        notifications.map(notification => (
          <div key={notification.id} className="notification">
            <p>{notification.message}</p>
            
            {/* <button onClick={() => handleDismiss(notification.id)} className="dismiss-button">Dismiss</button> */}
          </div>
        ))
      ) : (
        <p>No notifications</p>
      )}
    </div>
  );
};

export default Notification;

