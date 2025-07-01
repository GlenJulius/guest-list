// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("guest-form");
  const input = document.getElementById("guest-name");
  const guestList = document.getElementById("guest-list");

  // Listen for form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    const guestName = input.value.trim(); // Get input value

    if (guestName === "") return; // Ignore empty input

    // Create a new list item for the guest
    const listItem = document.createElement("li");
    listItem.textContent = guestName;

    // Create a delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginLeft = "10px";

    // Add event listener to delete the guest
    deleteBtn.addEventListener("click", () => {
      guestList.removeChild(listItem);
    });

    // Add the delete button to the list item
    listItem.appendChild(deleteBtn);

    // Add the list item to the guest list
    guestList.appendChild(listItem);

    // Clear the input field
    input.value = "";
  });
});