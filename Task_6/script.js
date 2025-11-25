const userTableBody = document.querySelector("#userTable tbody");
const refreshBtn = document.getElementById("refreshBtn");
const loader = document.getElementById("loader");

async function fetchUsers() {
    loader.style.display = "block";
    userTableBody.innerHTML = "";

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();

        data.forEach(user => {
            const tr = document.createElement("tr");

            const nameTd = document.createElement("td");
            nameTd.textContent = user.name; 
            tr.appendChild(nameTd);

            const emailTd = document.createElement("td");
            emailTd.textContent = user.email; 
            tr.appendChild(emailTd);

            const cityTd = document.createElement("td");
            cityTd.textContent = user.address.city; 
            tr.appendChild(cityTd);

            userTableBody.appendChild(tr);
        });
    } catch (error) {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.colSpan = 3;
        td.textContent = "Failed to fetch users.";
        tr.appendChild(td);
        userTableBody.appendChild(tr);
    } finally {
        loader.style.display = "none";
    }
}


refreshBtn.addEventListener("click", fetchUsers);


fetchUsers();
