import './App.css';
import styled from "styled-components";
import { useState } from "react";
// ================== React Icons.
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";


function App() {
  // ================== State.
  const [ email, setEmail ] = useState("");
  const [ error, setError ] = useState(false);


  // ================== Notify me click.
  const applyNotify = () => {
    if (email.length === 0) {
      setError(true);
    } else if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      setError(true);
    } else {
      setError(false);
      setEmail("");
      alert("Bla bla etc etc!");
    }
  }


  // ================== Handle input change.
  const handleChange = (e) => {
    setEmail(e.target.value);
  }



  return (
    <div className="App">
      <MainComponent>
        <img src="./images/logo.svg" alt="Logo" className="logo" />
        <h1>We are launching <span>soon!</span></h1>
        <p>Subscribe and get notified</p>
        {/* ================== Form component. ================== */}
        <FormComponent>
          <div>
            <input type="text" placeholder="Your email address..." className={error ? "input-error" : null } value={email} onChange={handleChange} />
            <p className={error ? "input-error-message" : "hide-error-message"}>Please provide a valid email address...</p>
          </div>
          <button onClick={applyNotify} >Notify Me</button>
        </FormComponent>

        <img src="./images/illustration-dashboard.png" alt="Illustration" className="illustration"/>

        {/* ================== Social media buttons. ================== */}
        <SocialMedia>
          <button><FaFacebookF /></button>
          <button><FaTwitter /></button>
          <button><GrInstagram /></button>
        </SocialMedia>

        <p className="copyright">&copy; Copyright Ping. All rights reserved.</p>
      </MainComponent>
    </div>
  );
}

export default App;



// ================== Main component.
const MainComponent = styled.div`
  width: min(85%, 600px);
  text-align: center;
  margin: 5rem 0;

  .logo {
    width: 60px;

    @media (min-width: 768px) {
      width: 65px;
    }
  }

  h1 {
    color: var(--dark-gray);
    margin: 2.5rem 0 0.7rem;
    font-size: 23px;

    span {
      color: var(--very-dark-blue);
      font-weight: var(--fw-bold);
    }

    @media (min-width: 768px) {
      font-size: 32px;
      margin: 2rem 0 0.7rem;
    }
  }

  p {
    font-size: 14px;
    letter-spacing: 0;
  }

  .illustration {
    width: 100%;
    margin: 4rem 0;

    @media (min-width: 540px) {
      margin: 3rem 0;
    }
  }

  .copyright {
    color: var(--dark-gray);
    font-size: 12px;
  }
`


// ================== Forn component.
const FormComponent = styled.div`
  margin-top: 2.5rem;

  @media (min-width: 540px) {
    display: flex;
    width: 90%;
    margin: 2.5rem auto 0;
  }

  div {
    width: 90%;
    margin: 0 auto;

    @media (min-width: 540px) {
      width: 70%;
      height: 45px;
    }
  }

  input {
    background-color: transparent;
    color: var(--pale-blue);
    width: 100%;
    height: 42px;
    padding: 0 2rem;
    font-size: 14px;
    border: 1px solid var(--dark-gray);
    border-radius: 50px;
    outline: none;
    cursor: pointer;
    transition: all 0.25s ease-in-out;

    &:focus {
      border: none;
      outline: 2px solid var(--pale-blue);
    }

    @media (min-width: 768px) {
      height: 45px;
    }
  }

  .input-error {
    border: 1px solid var(--light-red);
  }

  .input-error-message {
    color: var(--light-red);
    text-align: left;
    margin: 0.5rem 0 0 0.1rem;
  }
  .hide-error-message {
    display: none;
  }

  button {
    background-color: var(--blue);
    color: #ffffff;
    width: 90%;
    height: 42px;
    margin-top: 0.7rem;
    font-size: 14px;
    font-weight: var(--fw-semi-bold);
    letter-spacing: 0.7px;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.25s ease-in-out;

    &:hover {
      background-color: #769cff;
    }

    @media (min-width: 540px) {
      width: 30%;
      height: 45px;
      margin-top: 0;
      margin-left: 1rem;
    }
  }
`


// ================== Social media buttons.
const SocialMedia = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  button {
    background-color: transparent;
    color: var(--blue);
    font-size: 14px;
    border: 1px solid var(--pale-blue);
    border-radius: 50px;
    padding: 0.5rem 0.5rem 0.4rem;
    cursor: pointer;
    transition: all 0.25s ease-in-out;

    &:hover {
      background-color: var(--blue);
      color: #ffffff;
    }
  }
`