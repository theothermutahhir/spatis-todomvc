import React, { useState } from "react";
import Server from "spatis";
import { AllTodos } from "./js/AllTodos.jsx";

const server = new Server();

server.setState({
  todos: []
});

server.useHtml("./index.html");
server.staticFilesSourcePath("./dist");
server.addStylesheets(["css/base.css", "css/index.css"]);

server.when("/", state => {
  return <AllTodos state={state} />;
});

server.listen().then(() => {
  console.log("Server started");
});
