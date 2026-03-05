import { useEffect, useState } from "react";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";

function App() {
  const [shuttles, setShuttles] = useState([]);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  // 1️⃣ Fetch all shuttles
  const fetchShuttles = () => {
    fetch("http://127.0.0.1:5000/shuttles")
      .then(res => res.json())
      .then(data => setShuttles(data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchShuttles();
  }, []);

  // 2️⃣ Add new shuttle
  const addShuttle = () => {
    fetch("http://127.0.0.1:5000/shuttles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, location })
    })
      .then(() => {
        setName("");
        setLocation("");
        fetchShuttles(); // refresh list
      })
      .catch(err => console.log(err));
  };

  // 3️⃣ Delete shuttle
  const deleteShuttle = (id) => {
    fetch(`http://127.0.0.1:5000/shuttles/${id}`, { method: "DELETE" })
      .then(() => fetchShuttles())
      .catch(err => console.log(err));
  };

  return (
    
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <Header/>
      <SideBar/>

      <h1>Shuttle Tracking System</h1>

      {/* Add shuttle form */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Shuttle Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={addShuttle}>Add Shuttle</button>
      </div>

      {/* Shuttle list */}
      <ul>
        {shuttles.map((s) => (
          <li key={s.id}>
            {s.name} - {s.location} 
            <button onClick={() => deleteShuttle(s.id)} style={{ marginLeft: "10px" }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;