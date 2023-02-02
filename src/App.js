import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [submit, setSubmit] = useState(false);

  return (
    <div>
      <header>
        <h1>Créer un compte</h1>
      </header>
      <div className="App">
        <form
          className={submit === false ? "Formulaire" : "Hidden"}
          onSubmit={(event) => {
            event.preventDefault();
            setSubmit(true);
            if (password !== confirm) {
              alert("ERREUR : Les mots de passe ne coresspondent pas.");
            }
          }}
        >
          <p>Name</p>
          <input
            value={name}
            type="text"
            placeholder="Votre nom"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <p>Email</p>
          <input
            value={email}
            type="email"
            placeholder="Votre e-mail"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <p>Mot de passe</p>
          <input
            value={password}
            type="password"
            placeholder="Votre mot de passe"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <p>Confirmation du mot de passe</p>
          <input
            value={confirm}
            type="password"
            placeholder="Veuillez retaper votre mot de passe"
            onChange={(event) => {
              setConfirm(event.target.value);
            }}
          />
          <button type="submit">Register</button>
        </form>
        <section className={submit === true ? "recap" : "caché"}>
          <h1>Résumé de vos identifiants</h1>
          <p>{name}</p>
          <p>{email}</p>
          <p>{password}</p>
          <button
            onSubmit={() => {
              setSubmit(false);
            }}
          >
            Editer mes identifiants
          </button>
        </section>
      </div>
    </div>
  );
}

export default App;
