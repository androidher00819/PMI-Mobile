let currentElement = null; // Store the element being edited
const modal = document.getElementById("editModal");
const closeModalButton = document.getElementById("closeModal");
const saveModalButton = document.getElementById("saveModal");
const modalInput = document.getElementById("modalInput");

// Open the modal and populate input with current element content
function openEditModal(element) {
  currentElement = element;
  modalInput.value = element.textContent.trim(); // Pre-fill input
  modal.style.display = "block";
}

// Close the modal
closeModalButton.onclick = function () {
  modal.style.display = "none";
};

// Save the edited content back to the element
saveModalButton.onclick = function () {
  if (currentElement) {
    currentElement.textContent = modalInput.value; // Update text content
  }
  modal.style.display = "none"; // Close modal
};

// Close modal when clicking outside
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


function addRow() {
  // Create a new container for the row
  const fillUpInfoHeader = document.createElement("div");
  fillUpInfoHeader.classList.add("fill-up-info-header");

  // Add vessel name
  const vesselNameDiv = document.createElement("div");
  vesselNameDiv.classList.add("vessel-name");
  vesselNameDiv.innerHTML = `
      <p class="fill-container" onclick="openEditModal(this)">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path fill="currentColor" d="..."/>
        </svg> New Vessel
      </p>
    `;

  // Add vessel type
  const vesselTypeDiv = document.createElement("div");
  vesselTypeDiv.classList.add("vessel-type");
  vesselTypeDiv.innerHTML = `
      <p class="fill-container" onclick="openEditModal(this)">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path fill="currentColor" d="..."/>
        </svg> Vessel Type
      </p>
    `;

  // Add flag nationality
  const flagNationalityDiv = document.createElement("div");
  flagNationalityDiv.classList.add("flag-nationality");
  flagNationalityDiv.innerHTML = `
      <p class="fill-container" onclick="openEditModal(this)">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path fill="currentColor" d="..."/>
        </svg> Nationality
      </p>
    `;

  // Append the new elements to the row container
  fillUpInfoHeader.appendChild(vesselNameDiv);
  fillUpInfoHeader.appendChild(vesselTypeDiv);
  fillUpInfoHeader.appendChild(flagNationalityDiv);

  // Append the new row to the main container
  document
    .querySelector(".fill-up-form-container")
    .appendChild(fillUpInfoHeader);
}