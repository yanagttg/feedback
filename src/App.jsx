import { useState } from "react";
import "./App.css";
import { FeedbackForm } from "./components/FeedbackForm/FeedbackForm";
import { Modal } from "./components/Modal/Modal";

function App() {
  const [form, setForm] = useState({}); 
  const [showModal, setShowModal] = useState(false);

  const onSubmit = (data) => {
    setForm(data);
    setShowModal(true);
  };
  
  return (
    <>
      <FeedbackForm onSubmit={onSubmit} />
      {form && (
      <Modal title="Спасибо, что пишете" show={showModal}>
        {form.username}, Благодарим за заявку! <br/>
      Мы отправим ответ на Вашу почту {form.email}
       </Modal>
       )}
    </>
  );
}

export default App;
