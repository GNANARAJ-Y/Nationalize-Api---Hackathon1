function getUsers() {
    fetch("https://api.nationalize.io/?name=raj", {
      method: "GET"
    })
      .then((data) => {
        console.log(data);
        return data.json();
      })
      .then((users) => loadUsers(users));
  }
  
  function loadUsers(users) {
    const userList = document.createElement("div");
    userList.className = "user-list";
    users.forEach((user) => {
      const userContainer = document.createElement("div");
      userContainer.className = "user-container";
  
      userContainer.innerHTML = `
      <div class="row">
      <div class="col-sm">
        <h3 class="user-name">${user.name}</h3>
        <span class="user-country" >${"Country: " + user.country}</span><br>
        <span class="user-country_id" >${
          "Country_id: " + user.country_id
        }</span><br>
        <span class="user-probability" >${
          "Probability: " + user.probability
        }</span><br>
      </div>
      </div>
      
        `;
      userList.append(userContainer);
    });
  
    document.body.append(userList);
  }
  
  getUsers();