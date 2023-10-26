function sendMessage1() {
    const inputMassage = document.getElementById("us1");
    const chat = document.getElementById("chat");
    const message = inputMassage.value.trim();

    if (message === "") return;

    const user1MessageBox = document.getElementById("users");
    // const user2MessageBox = document.getElementById("user2");
    const newMessage = document.createElement("p");
    newMessage.textContent = message;

    user1MessageBox.appendChild(newMessage);
    newMessage.className = "user1-message";

    inputMassage.value = "";
    chat.scrollTop = chat.scrollHeight;
}

function sendMessage2() {
    const inputMassage = document.getElementById("us2");
    const chat = document.getElementById("chat");
    const message = inputMassage.value.trim();

    if (message === "") return;

    const user1MessageBox = document.getElementById("users");
    // const user2MessageBox = document.getElementById("user2");
    const newMessage = document.createElement("p");
    newMessage.textContent = message;

    user1MessageBox.appendChild(newMessage);
    newMessage.className = "user2-message";

    inputMassage.value = "";
    chat.scrollTop = chat.scrollHeight;
}