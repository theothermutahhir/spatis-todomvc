import React from "react";
import Server from "spatis";
import { AllTodos } from "./js/AllTodos.jsx";

const server = new Server();

const Footer = () => (
  <footer class="info">
    <p>Double-click to edit a todo</p>
    <p>
      Created by <a href="http://github.com/petehunt/">petehunt</a>
    </p>
    <p>
      Part of <a href="http://todomvc.com">TodoMVC</a>
    </p>
  </footer>
);

server.when("/", state => {
  return <AllTodos state={state} />;
});

server.listen().then(() => {
  console.log("Server started");
});
