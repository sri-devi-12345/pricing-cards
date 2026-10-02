const billingToggle = document.getElementById("billingToggle");

const amounts = document.querySelectorAll(".amount");

const periods = document.querySelectorAll(".period");

const monthlyText = document.getElementById("monthlyText");

const yearlyText = document.getElementById("yearlyText");


billingToggle.addEventListener("change", function () {

    if (billingToggle.checked) {

        // YEARLY

        amounts.forEach(function (amount) {

            amount.textContent = amount.dataset.yearly;

        });

        periods.forEach(function (period) {

            period.textContent = "/year";

        });

        monthlyText.classList.remove("active");

        yearlyText.classList.add("active");

    } else {

        // MONTHLY

        amounts.forEach(function (amount) {

            amount.textContent = amount.dataset.monthly;

        });

        periods.forEach(function (period) {

            period.textContent = "/month";

        });

        yearlyText.classList.remove("active");

        monthlyText.classList.add("active");

    }

});