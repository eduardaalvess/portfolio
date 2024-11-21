import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
  
    const templateParams = {
      from_name: formData.name,
      message: formData.message,
      reply_to: formData.email,
    };

    emailjs
      .send(
        "service_7bkfc6o", 
        "template_wpyngpo", 
        templateParams,      
        "rRaFaTr-gIZFosh1g"   
      )
      .then(
        (result) => {
          alert("Mensagem enviada com sucesso!");
          setFormData({ name: "", email: "", message: "" }); 
        },
        (error) => {
          alert("Erro ao enviar mensagem, tente novamente.");
        }
      );
  };
  

  return (
    <div className="contato-section" id="contact">
      <h2>Entre em Contato</h2>
      <form onSubmit={sendEmail} className="form-container">
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Digite seu nome"
          required
        />

        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Digite seu e-mail"
          required
        />

        <label htmlFor="message">Mensagem</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          placeholder="Digite sua mensagem"
          required
        ></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ContactForm;