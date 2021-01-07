import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Página inicial do site</h1>
      <Link to="/login">Login</Link>
    </div>
  );
}
