const form = document.getElementById("guest-form");
const guestList = document.getElementById("guest-list");
const guestInput = document.getElementById("guest-name");

let guests = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = guestInput.value.trim();

  if (!name) return alert("Please enter a name");
  if (guests.length >= 10) return alert("Guest limit reached (10)");

  const guest = {
    name,
    attending: true,
    id: Date.now()
  };

  guests.push(guest);
  renderGuests();
  form.reset();
});

function renderGuests() {
  guestList.innerHTML = "";

  guests.forEach((guest) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${guest.name} -
      <span class="${guest.attending ? 'attending' : 'not-attending'}">
        ${guest.attending ? "Attending" : "Not Attending"}
      </span>
      <button onclick="toggleRSVP(${guest.id})">Toggle RSVP</button>
      <button onclick="removeGuest(${guest.id})">Remove</button>
    `;
    guestList.appendChild(li);
  });
}

function toggleRSVP(id) {
  guests = guests.map((guest) =>
    guest.id === id ? { ...guest, attending: !guest.attending } : guest
  );
  renderGuests();
}

function removeGuest(id) {
  guests = guests.filter((guest) => guest.id !== id);
  renderGuests();
}
