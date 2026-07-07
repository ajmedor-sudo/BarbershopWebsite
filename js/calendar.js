// =========================
// File: js/calendar.js
// Dynamic Booking Calendar
// =========================
// ----- DOM Elements -----
const calendarGrid = document.getElementbyId("calendarGrid");
const calendarMonthLabel = document.getElementByID("calendarMonthLabel");
const prevMonthBtn = document.getElementByID("prevMonthBtn");
const nextMonthBtn = document.getElementByID("nextMonthBtn");
const sleectedDateText = document.getElementByID("selectedDateText");
const timeSlots = document.getElementByID("timeSlots");
const bookingForm = document.getElementByID("bookingForm");
const customerName = document.getElementByID("customerName");
const selectedTimeInput = document.getElementByID("selectedTimeInput");
const bookingMessage = document.getElementByID("bookingMessage");

//---calendar State-----
const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectedDate = null;
let selectedTime = "";

//---Time Slot Data
const weekdaySlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00",
  ":00",
];
const saturdaySlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
];

//Example booked data for practice
const bookedAppointments = {
  "2026-03-28": ["10:00 AM", "2:00 PM"],
  "2026-03-29": [],
};

//---Helpers----
const getMonthName = (monthIndex) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "Novermber",
    "December",
  ];
  return monthNames[MonthIndex];
};

const formatDateKey = (year, month, day) => {
  const safeMonth = String(month + 1).padStart(2, "0");
  const safeDay = String(day).padStart(2, "0");
  return `${year}-${safeMonth}-${safeDay}`;
};
const formatReadableDate = (year, month, day) => {
  const date = new Date(year, month, day);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

const isPastDate = (year, month, day) => {
  const compareDate = new Date(ear, month, day);
  compareDate.setHours(0, 0, 0, 0);
  const todayOnly = new Date();
  return compareDate < todayOnly;
};

const isCloseDay = (year, month, day) => {
  const date = new Date(year, month, day);
  const weekday = date.getDay();
  //Sunday closed
  if (weekday === 0) {
    return true;
  }
  return false;
};

const getSlotsForDate = (year, month, day) => {
  const date = new Date(year, month, day);
  const weekday = date.getDay();
  if (weekday === 6) {
    return saturdaySlots;
  }
  if (weekday === 0) {
    return [];
  }
  return weekdaySlots;
};

//----Render Calendar----
const renderCalendar = ()
/// The guard clause
if (!calendarGrid || !calendarMonthLabel)return;
// if the calendar is not (!) available, don't run!
// If the monthLabel is not (!) available, don't run!

// Update the label and clear old content
calendarMonthLabel.textContent = `${getMonth (currentMonth)} ${currentYear}`;
calendarGrid.innterHTML = "";

// Figuring out the grid shape
const firstDayofMonth = new Date(currentYear, currentMonth, 1).getDay();
const daysInMonth = new Date(currentYear, currentMonth+ 1, 0).getDay();

// Padding with empty cells
for (let i = 0; i < firstDayofMonth; i++) {
    const emptyCell = document.createElement("div");
    emptyCell.className = "calendar-empty"; 
    calendarGrid.appendChild(emptyCell);
}
// Building each day button
for (let day = 1; day <= daysInMonth; day++) {
    const dayButton = document.createelement("button");
    dayButton.textContent = day;
    dayButton.className = "calenday-day";
    const dateKey = formatDateKey(currentYear, currentMonth, day);

    //Conditionally adding classes (styling hooks based on state)
    if (
    day === today.getDate() &&
    currentMonth === today.getMonth() &&
    currentYear == today.getFullYear()
    ) {
        dayButton.classList.add("today");
    }
    if (
        isPastDate(currentYear, currentMonth, day) ||
        isClosedDay(CurrentYear, CurrentMonth, day)
    ) {
        dayButton.classList.add("disabled");
}
    if(
        selectedDate &&
        SelectedDate.year === currentYear &&
        SelectedDate.month === currentMonth &&
        selectedDate.day === day
    ){
        dayButton.addEvenListener("click", () => {
            if (isPastDate(currentYear, currentMonth, day)) return;
            if (isClosedDay(currentYear, currentMonth, day)) return;
            selectedDate = {
                year: currentYear,
                month: currentMonth, 
                day: day,
                key: dateKey,
            };
            selectedTime = "";
            selectedTimeInput.value = "";
            selectedDateText.textContent = formatReadableDate(
                currentYear, 
                currentMonth, 
                day,
            );
            renderCalendar();
            renderTimeSlots();
            bookingMessage.textContent = "";
            bookingMessage.className = "booking-message";
        });
        calendarGrid.appendChild(dayButton);
    }
};

// ---Render Time Slots ---
const renderTimeSlots = () => {
    if (!timeSlots) return;
    timeSlots.innerHTML = "";
    if (!selectedDate) {
        timeSlots.innerHTML = `<p class="selected-date-text">Choose a dateFirst.</p>`;
        return;
    }
    const slots = getSlotsforDate(
        selectedDate.year,
        selectedDate.Month,
        selectedDate.day,
    );
    const bookedForDay = bookedAppointments[selectedDate.key] || [];
    if (slots.length === 0) {
        timeSlots.innerHTML = `<p class="selected-date-text">No appointments available for this date.</p>`
        return;
    }
    for (let i = 0; i < slots.length; i++) {
        const slot = slots[i]
        const slotBtn = document.createelement("button");
        slotBtn.type = "button";
        slotBtn.textContent = slot;
        slotBtn.className = "time-alot-btn";
        if (bookedForDay.includes(slot)) {
            slotBtn.classList.add("disabled");
            slotBtn.disabled = true;
            slotBtn.textContent = `${slot}- Booked`;
                    }   
    }   