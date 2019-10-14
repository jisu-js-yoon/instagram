let input_box = document.getElementById('comment');
let button_box = document.getElementById("click_button");

function button_color(){

    input_box.addEventListener("input", function () {
        if (input_box.value) {
                button_box.style.opacity = "1";


        }if (input_box.value.length === 0){
                button_box.style.opacity = "0.3";
        }
    });


    button_box.addEventListener("click",function () {
        if (input_box.value) {
            let list = document.createElement('li');
            let span_id = document.createElement('span');
            let span_comment = document.createElement('span');
            span_id.innerHTML = "jisu_yoon";
            span_id.className = 'owner_id';
            span_comment.className = 'comment_line';
            list.appendChild(span_id);
            list.appendChild(span_comment);

            span_comment.innerHTML = input_box.value;
            input_box.value = "";
            button_box.style.opacity = "0.3";
            document.getElementsByClassName('ol')[0].appendChild(list);
        }
    });


    input_box.addEventListener('keypress',function(e){
        if (input_box.value) {
            if (e.keyCode === 13) {
                let list = document.createElement('li');
                let span_id = document.createElement('span');
                let span_comment = document.createElement('span');
                span_id.innerHTML = "jisu_yoon";
                span_id.className = 'owner_id';
                span_comment.className = 'comment_line';
                list.appendChild(span_id);
                list.appendChild(span_comment);
                span_comment.innerHTML = input_box.value;

                input_box.value = "";
                button_box.style.opacity = "0.3";
                document.getElementsByClassName('ol')[0].appendChild(list);
            }
        }
    })
}
button_color();


