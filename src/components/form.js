import styled from "styled-components";
import Overlay from "./overlay";
import React from "react";
import ReactDOM from "react-dom";
import Close from "../icons/icon-close";

const modalRoot = document.getElementById("formular");

class ModalPortal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }
  componentDidMount() {
    modalRoot.appendChild(this.el);
  }
  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default function Modal({ isActive, setModal }) {
  if (isActive) {
    return (
      <ModalPortal>
        <Form setModal={setModal} />
      </ModalPortal>
    );
  }
  return null;
}

const FormStyled = styled.form`
  color: white;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: fixed;
  inset-block-start: 50%;
  transform: translateY(-50%) translateX(-50%);
  inset-inline-start: 50%;
  background: #0d1117;
  padding: 1.5rem;
  border-radius: 0.5rem;
  inline-size: 24rem;

  .labelInput {
    display: flex;
    flex-direction: column;
  }
  .input {
    padding: 0.5rem;
    border: none;
    border-radius: 0.5rem;
    background: #0d1117;
    border: 1px solid grey;
    color: var(--main-white);
  }
  .label {
    padding: 0.2rem 0.5rem;
  }
  .enviar {
    background: var(--main-white);
    color: #22262c;
    cursor: pointer;
    border: 1px solid transparent;
    padding: 0.5rem;
    font-size: 1rem;
  }
  .enviar:hover {
    background: #22262c;
    color: var(--main-white);
    border: 1px solid gray;
  }
  .titleForm {
    margin: 0;
    text-align: center;
    color: var(--main-white);
  }
  @media screen and (max-width: 780px) {
    inline-size: 80%;
  }
`;

const Form = ({ setModal }) => {
  return (
    <Overlay>
      <FormStyled
        id="formu"
        className="formu"
        onSubmit={async function handleSubmit(event) {
          event.preventDefault();
          const form = new FormData(event.currentTarget);
          const action = "https://formspree.io/f/xknajgqd";
          const response = await fetch(action, {
            method: "POST",
            body: form,
            headers: {
              Accept: "application/json",
            },
          });

          if (response.ok === true) {
            const formulario = document.getElementById("formu");
            formulario.reset();
            setModal(false);
            setTimeout(() => {
              alert("Thank you for contacting me, I will contact you soon!");
            }, 500);
          }
        }}
      >
        <Close setModal={setModal} />
        <h2 className="titleForm">Let's talk</h2>
        <div className="labelInput">
          <input
            autoComplete="off"
            className="input"
            type="text"
            name="name"
            placeholder="Full name"
            required
          />
        </div>
        <div className="labelInput">
          <input
            autoComplete="off"
            className="input"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="labelInput">
          <textarea
            className="input"
            autoComplete="off"
            type="text"
            name="message"
            cols="30"
            rows="10"
            required
            placeholder="Message..."
          />
        </div>
        <div className="labelInput">
          <input className="input enviar" type="submit" value="Enviar" />
        </div>
      </FormStyled>
    </Overlay>
  );
};
