document.addEventListener("DOMContentLoaded", function () {
    var timeInput = document.getElementById("Utime");

    timeInput.addEventListener("input", function () {
        var selectedTime = new Date("1970-01-01T" + this.value + ":00");

        var minTime = new Date("1970-01-01T08:00:00");
        var maxTime = new Date("1970-01-01T17:00:00");

        if (selectedTime < minTime || selectedTime > maxTime) {
            alert("Please select a time between 8:00 am and 5:00 pm.");
            this.value = "08:00"; 
        }
    });
});

;