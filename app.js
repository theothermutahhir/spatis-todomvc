import { Server } from "spatis";
import TodoModel from "./js/todoModel";
import TodoApp from "./js/app";

const server = new Server();

server.when("/", state => {
  return (
    <>
      <footer class="info">
        <p>Double-click to edit a todo</p>
        <p>
          Created by <a href="http://github.com/petehunt/">petehunt</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </>
  );
});
