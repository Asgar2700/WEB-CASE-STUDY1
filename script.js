
// Get the helpdesk form
const helpdeskForm = document.getElementById("helpdeskForm");

// Handle form submission
helpdeskForm.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();

    // Get form values
    const studentName = document.getElementById("name").value.trim();
    const rollNumber = document.getElementById("roll").value.trim();
    const email = document.getElementById("email").value.trim();
    const category = document.getElementById("cat").value;
    const message = document.getElementById("msg").value.trim();

    // Check required fields
    if (!studentName || !rollNumber || !email || !message) {
        alert("Please fill in all required fields.");
        return;
    }

    // Display confirmation
    alert(
        "Helpdesk request submitted successfully!\n\n" +
        "Student Name: " + studentName + "\n" +
        "Roll Number: " + rollNumber + "\n" +
        "Email: " + email + "\n" +
        "Category: " + category
    );

    // Reset form
    helpdeskForm.reset();
});
