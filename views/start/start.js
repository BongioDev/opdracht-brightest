
// clear local storage
localStorage.clear();

function saveUserName() {
    localStorage.setItem("user_name", document.getElementById('userName').value);
}