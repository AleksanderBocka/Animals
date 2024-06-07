import React from "react";
import "./NavBar.css";
import SearchBar from "../SearchBar/SearchBar";
import Dropdown from "../Dropdown/Dropdown";

export default function NavBar({ setSelectedAnimal, query, setQuery }) {
  return (
    <header className="navBar">
      <h3>LOGO</h3>
      <SearchBar query={query} setQuery={setQuery} />
      <nav>
        <Dropdown setSelectedAnimal={setSelectedAnimal} />
        <a href="/#">About Us</a>
        <a href="/#">Contact Us</a>
      </nav>
    </header>
  );
}
