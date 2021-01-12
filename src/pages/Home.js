import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  document.title = "Home - To Do List";

  return (
    <div className="Home">
      <header>
        <h1>To Do List</h1>
        <Link to="/login" style={{textDecoration: "none", color: "#fff"}}>Login</Link>
      </header>
      <div className="content">
        <h1>Um lugar para você anotar suas tarefas.</h1>
        <p>Nunca mais esqueça de fazer algo importante.</p>
      </div>
    </div>
  );
}
