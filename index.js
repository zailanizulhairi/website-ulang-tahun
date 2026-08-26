// login page scripts
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    validateForm();
});

function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    //validasi username dan password, username dan password bisa diganti sesuai keinginan
    if (username === "marisa" && password === "zai") {
        Swal.fire({
            icon: "Success",
            title: "Login Success!",
            text: "Welcome Marrrrrr",
            showConfirmButton: false,
            timer: 1500,
        }).then(function () {
            window.location.href = "birthday.html";
        });
    } else {
        Swal.fire({
            icon: "Error",
            title: "Login Fail!",
            text: "Cuba cek lagi username dengan passwordnya tu:)",
            confirmButtonText: "Cuba lagi",
            confirmButtonColor: "#ff7675",
        });
    }
}
