document.addEventListener("DOMContentLoaded", () => {
    const userGrid = document.querySelector("#userBox");

    // Fetch user data from JSONPlaceholder API
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                const userCard = createUserCard(user);
                userGrid.appendChild(userCard);
            });
        })
        .catch(error => console.error("Error fetching users:", error));

    // Function to create a user card
    function createUserCard(user) {
        const card = document.createElement("div");
        card.classList.add("user-card");

        const avatar = document.createElement("img");
        avatar.src = `https://robohash.org/${user.id}`;
        avatar.alt = `${user.username}'s robot avatar`;
        avatar.classList.add("user-avatar");

        const userInfo = document.createElement("div");
        userInfo.classList.add("user-info");

        const userName = document.createElement("h2");
        userName.textContent = user.name;

        const userUsername = document.createElement("p");
        userUsername.textContent = `Username: ${user.username}`;

        const userEmail = document.createElement("p");
        userEmail.textContent = `Email: ${user.email}`;

        userInfo.appendChild(userName);
        userInfo.appendChild(userUsername);
        userInfo.appendChild(userEmail);

        card.appendChild(avatar);
        card.appendChild(userInfo);

        return card;
    }
});
