let id_box = document.getElementById('login_id');
let password_box = document.getElementById('login_password');
let button_box = document.getElementById('login_button');

function login_fun() {
    id_box.addEventListener("input",function () {
        if(id_box.value){
            password_box.addEventListener("input",function () {
                if(password_box.value){
                    button_box.style.opacity = "1";
                }
            })
        }
    })
}
login_fun();