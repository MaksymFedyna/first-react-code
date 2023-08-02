import React, {useState} from "react";
import Tweet from "./Tweet"

function App() {
    const [users, setUsers] = useState([
        {name: "Maks", message: "My first tweet"},
        {name: "John", message: "I am a new user"},
        {name: "Ed", message: "I am a teacher"}
    ]);

  return (
      <div className="app">
          {users.map(user => (
              <Tweet name={user.name} message={user.message}/>
          ))}
      </div>
  );
}

export default App;
