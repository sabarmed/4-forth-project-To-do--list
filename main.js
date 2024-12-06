const button = document.querySelector("button");
const input = document.querySelector("input");
const form = document.querySelector("form");
const container = document.getElementById("container");

form.addEventListener("submit", (eo) => {
  eo.preventDefault();
  const task = `<div class="task">
            <span class="icon-star icon"></span>
        
            <p class="task-text">${input.value}</p>
        
          <div>
            <span class="icon-trash icon"></span>
           
            <span class="icon-angry2 icon"></span>
          </div>
             <!-- <span class="icon-heart"></span> -->
            </div> `;

  container.innerHTML += task;
  input.value = "";
});
container.addEventListener("click", (eo) => {
  // //   if (eo.target.className == "icon-trash icon") {
  // //     eo.target.parentElement.parentElement.remove();
  // //   } else if (eo.target.className == "icon-angry2 icon") {
  // //     eo.target.classList.add("dn");
  // //     const heart = `<span class="icon-heart"></span>`;

  // //     eo.target.parentElement.parentElement
  // //       .getElementsByClassName("task-text")[0]
  // //       .classList.add("finish");
  // //     eo.target.parentElement.innerHTML += heart;
  // // } else if (eo.target.className == "icon-heart") {
  //     // eo.target.parentElement.parentElement
  //     //   .getElementsByClassName("task-text")[0]
  //     //   .classList.remove("finish");
  //     // eo.target.classList.add("dn");

  //     // const addAngry = ` <span class="icon-angry2 icon"></span>`;
  //     // eo.target.parentElement.innerHTML += addAngry;

  // // } else if (eo.target.className == "icon-star icon") {
  // //     eo.target.classList.add("orange");
  // //     container.prepend(eo.target.parentElement);
  //   } else if (eo.target.className == "icon-star icon orange") {
  //     eo.target.classList.remove("orange");
  //   }
  // });

  switch (eo.target.className) {
    case "icon-trash icon":
      eo.target.parentElement.parentElement.remove();
      break;

    case "icon-angry2 icon":
      eo.target.classList.add("dn");
      const heart = `<span class="icon-heart"></span>`;

      eo.target.parentElement.parentElement
        .getElementsByClassName("task-text")[0]
        .classList.add("finish");
      eo.target.parentElement.innerHTML += heart;

      break;

    case "icon-heart":
      eo.target.parentElement.parentElement
        .getElementsByClassName("task-text")[0]
        .classList.remove("finish");
      eo.target.classList.add("dn");

      const addAngry = ` <span class="icon-angry2 icon"></span>`;
      eo.target.parentElement.innerHTML += addAngry;
      break;

    case "icon-star icon":
      eo.target.classList.add("orange");
      container.prepend(eo.target.parentElement);
      break;

    case "icon-star icon orange":
      eo.target.classList.remove("orange");
      break;

    default:
      break;
  }
});



