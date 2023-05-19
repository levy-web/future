import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    const openWhatsApp = () => {
      const phoneNumber = '+254 791716946'; // Replace with your phone number
      const message = 'Hello, welcome to Sams solutions. how may I help you?'; // Replace with your default message
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
    };
  
    return (
      <div className="whatsapp-button" onClick={openWhatsApp}>
        <FaWhatsapp />
      </div>
    );
  };
  
export default WhatsAppButton;