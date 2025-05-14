function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    if (!name || !email || !phone) {
        alert("Please fill in all required fields.");
        return false;
    }
    alert("Thank you for your inquiry!");
    return true;
}
