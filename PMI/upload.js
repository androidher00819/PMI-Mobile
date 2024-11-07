
  const modal = document.getElementById('month-modal');
  const openModalBtn = document.getElementById('open-modal-btn');
  const closeBtn = document.querySelector('.close');
  const selectMonthBtn = document.getElementById('select-month-btn');
  const monthSelect = document.getElementById('month-select');
  const selectedMonthElement = document.getElementById('selected-month');
  const displaySelectedMonthElement = document.getElementById('display-selected-month');

  // Open modal when button is clicked
  openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  // Close modal when close button is clicked
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Get selected month when select button is clicked
  selectMonthBtn.addEventListener('click', () => {
    const selectedMonth = monthSelect.options[monthSelect.selectedIndex].text;
    selectedMonthElement.innerText = `You selected: ${selectedMonth}`;
    displaySelectedMonthElement.innerText = `Selected Month: ${selectedMonth}`;
    modal.style.display = 'none';
  });







const select = document.querySelector(".select");
const options_list = document.querySelector(".options-list");
const options = document.querySelectorAll(".option");

//show & hide options list
select.addEventListener("click", () => {
  options_list.classList.toggle("active");
  select.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
});

//select option
options.forEach((option) => {
  option.addEventListener("click", () => {
    options.forEach((option) => {
      option.classList.remove("selected");
    });
    select.querySelector("span").innerHTML = option.innerHTML;
    option.classList.add("selected");
    options_list.classList.toggle("active");
    select.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
  });
});





