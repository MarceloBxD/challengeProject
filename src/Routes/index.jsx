import React from "react";
import { Routes as Rs, Route } from "react-router-dom";
import { Soluctions } from "../sections/Soluctions/";
import { Clients } from "../sections/Clients";
import { Prices } from "../sections/Prices";
import { Contact } from "../sections/Contact";
import { Home } from "../sections/Home";

export const Routes = () => {
  return (
    <Rs>
      <Route path="/" element={<Home />} />
      <Route path="/soluctions" element={<Soluctions />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/prices" element={<Prices />} />
      <Route path="/contact" element={<Contact />} />
    </Rs>
  );
};
