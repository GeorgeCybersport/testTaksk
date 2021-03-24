import React from "react";
import UserList from "./components/UserList";
import Header from "./components/Header";

function App() {
  const [users, setUsers]=React.useState([]);
  const [activeUsers, setActiveUsers]=React.useState([]);
  async function name() {
    const result = await fetch("https://api.github.com/users", {
      headers: new Headers({ "Accept": "application/vnd.github.v3+json" })}).then(res=>res.json());
    setUsers(result);
    setActiveUsers(result);
  }
  React.useEffect(() =>name(), []);
  return (
  <div className="App">
    <Header setUsers={setActiveUsers} users={users}/>

    <UserList users={activeUsers}/>
  </div>
  );
}

export default App;
