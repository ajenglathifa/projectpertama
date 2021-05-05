let listExperience = document.querySelector("#listExperience");

let dataExperience = [
  {
    title: "Ana",
    desc: "fiksi ilmiah",
  },
];
const addExperience = (event) => {
  event.preventDefault();

  let messageTitle = prompt("Tambahkan Nama Anda");
  let messageDesc = prompt("Tambahkan Rekomendasi Genre Anda");

  let newData = {
    title: messageTitle,
    desc: messageDesc,
  };

  dataExperience.push(newData);

  newData = {
    title: "",
    desc: "",
  };

  dataExperience.map((item) => {
    let displayList = document.createElement("li");
    let displayTitle = document.createElement("p");

    // tampilkan <p></p>
    displayTitle.innerHTML = `<p class="tags">${item.title}<br /><span>${item.desc} </span><span>January, 2019 - now</span></span></p>`;
    displayList.appendChild(displayTitle);
    listExperience.appendChild(displayList);
  });
};
