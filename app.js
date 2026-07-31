// ==========================================
// CYBER ACADEMY
// MAIN JAVASCRIPT
// ==========================================


document.addEventListener("DOMContentLoaded", () => {

    setupLogin();

    setupRegister();

});


// ==========================================
// PASSWORD SHOW / HIDE
// ==========================================

function togglePassword(inputId, button) {

    const input = document.getElementById(inputId);

    if (!input) {
        return;
    }

    if (input.type === "password") {

        input.type = "text";

        button.textContent = "🙈";

    } else {

        input.type = "password";

        button.textContent = "👁";

    }

}


// ==========================================
// REGISTER
// ==========================================

function setupRegister() {

    const form = document.getElementById("registerForm");

    if (!form) {
        return;
    }


    form.addEventListener("submit", (event) => {

        event.preventDefault();


        const name =
            document.getElementById("registerName").value.trim();

        const phone =
            document.getElementById("registerPhone").value.trim();

        const password =
            document.getElementById("registerPassword").value;

        const password2 =
            document.getElementById("registerPassword2").value;

        const terms =
            document.getElementById("terms").checked;

        const error =
            document.getElementById("registerError");


        error.textContent = "";


        if (name.length < 2) {

            error.textContent =
                "Ism va familiyangizni to'g'ri kiriting.";

            return;

        }


        if (phone.length < 9) {

            error.textContent =
                "Telefon raqamni to'g'ri kiriting.";

            return;

        }


        if (password.length < 6) {

            error.textContent =
                "Parol kamida 6 ta belgidan iborat bo'lishi kerak.";

            return;

        }


        if (password !== password2) {

            error.textContent =
                "Parollar bir xil emas.";

            return;

        }


        if (!terms) {

            error.textContent =
                "Foydalanish shartlariga rozilik bering.";

            return;

        }


        // Hozircha demo ma'lumot
        const user = {

            name: name,

            phone: phone

        };


        localStorage.setItem(
            "cyberAcademyUser",
            JSON.stringify(user)
        );


        localStorage.setItem(
            "cyberAcademyLoggedIn",
            "true"
        );


        window.location.href =
            "dashboard.html";

    });

}


// ==========================================
// LOGIN
// ==========================================

function setupLogin() {

    const form = document.getElementById("loginForm");

    if (!form) {
        return;
    }


    form.addEventListener("submit", (event) => {

        event.preventDefault();


        const phone =
            document.getElementById("loginPhone").value.trim();

        const password =
            document.getElementById("loginPassword").value;

        const error =
            document.getElementById("loginError");


        error.textContent = "";


        if (!phone) {

            error.textContent =
                "Telefon raqamni kiriting.";

            return;

        }


        if (!password) {

            error.textContent =
                "Parolni kiriting.";

            return;

        }


        /*
            Hozircha demo login.

            Haqiqiy login tizimi keyinchalik:

            Frontend
                 ↓
            Backend API
                 ↓
            Database

            orqali ishlaydi.
        */


        localStorage.setItem(
            "cyberAcademyLoggedIn",
            "true"
        );


        window.location.href =
            "dashboard.html";

    });

}