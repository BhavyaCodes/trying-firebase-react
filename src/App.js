import { useState } from "react";
import FirebaseAuthService from "./FirebaseAuthService";
import "./App.scss";
// eslint-disable-next-line no-unused-vars
import firebase from "./FirebaseConfig";

import LoginForm from "./components/LoginForm";

function App() {
  const [user, setUser] = useState(null);

  FirebaseAuthService.subscribeToAuthChanges(setUser);
  return (
    <div className="App">
      <div className="title-row">
        <h1 className="title">Firebase Recipies</h1>
        <LoginForm existingUser={user}></LoginForm>
      </div>
    </div>
  );
}

export default App;
