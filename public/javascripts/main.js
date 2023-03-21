/* const deleteBtn = document.querySelector('.delete-btn');
const btnMoveUP = document.querySelector('.move-up-btn');
const btnMoveDOWN = document.querySelector('.move-down-btn'); */
const form = document.getElementsByTagName("form")[0];
const input = document.getElementsByTagName("input")[0];
const btnSubmit = document.querySelector(".submit-btn");
const list = document.querySelector(".list");

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  fetch("/task", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: input.value,
      body: input.value,
    }),
    credentials: "include",
  });
  fetch("/tasks")
    .then((res) => res.json())
    .then((data) => {
      list.innerHTML = "";
      data.forEach((task) => {
        let template = document.querySelector("#taskItem");
        const clone = template.content.cloneNode(true);
        clone.querySelector(".title").textContent = task.title;

        clone.querySelector(".delete-btn").addEventListener("click", (e) => {
          fetch(`/task/${task.id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          });
          reload();
        });
        clone.querySelector(".move-up-btn").addEventListener("click", (e) => {
          fetch(`/moveTaskUp`, {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(task),
          });
          reload();
        });
        clone.querySelector(".move-down-btn").addEventListener("click", (e) => {
          fetch(`/moveTaskDown`, {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(task),
          });
          reload();
        });
        list.appendChild(clone);
        input.value = "";
        input.focus();
        list.scrollTop = list.scrollHeight;
        console.log(data);
      });
    });
});

const reload = () => {
    
    fetch("/tasks")
    .then((res) => res.json())
    .then((data) => {
      list.innerHTML = "";
      data.forEach((task) => {
        let template = document.querySelector("#taskItem");
        const clone = template.content.cloneNode(true);
        clone.querySelector(".title").textContent = task.title;

        clone.querySelector(".delete-btn").addEventListener("click", (e) => {
          fetch(`/task/${task.id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          });
          reload();
        });
        clone.querySelector(".move-up-btn").addEventListener("click", (e) => {
          fetch(`/moveTaskUp`, {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(task),
          });
          reload();
        });
        clone.querySelector(".move-down-btn").addEventListener("click", (e) => {
          fetch(`/moveTaskDown`, {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(task),
          });
          reload();
        });
        list.appendChild(clone);
        input.value = "";
        input.focus();
        list.scrollTop = list.scrollHeight;
        console.log(data);
      });
    });
}
