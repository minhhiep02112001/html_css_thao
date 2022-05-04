let navbar = document.querySelector('.navbar');



document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}


document.querySelector("#cart-btn").addEventListener("click",function (e){
    location.href = "./cart.html";
})

var btnIconHeader = document.querySelectorAll('.btn-btn-click-icon');

btnIconHeader.forEach((item , index)=>{
    var check = true;
        item.addEventListener('click' , event => {
            event.preventDefault;
            var arr = document.querySelectorAll(".model-icon");
            arr.forEach(val => {
                val.classList.remove("show");
            })
            document.querySelector("#more").checked=true;
            let children = event.target.querySelector("div.model-icon").classList;
            
            if(check ==true){
                children.add("show");
                check = false;
            }else{
                children.remove("show");
                check = true;
            }
        })
});
 

document.querySelector("#search-btn").addEventListener("click" , (item)=>{
    var checkbox = item.target.querySelector("#more");
    var arr = document.querySelectorAll(".model-icon");
            arr.forEach(val => {
                val.classList.remove("show");
            })
    var check = checkbox.checked;
    if(!check){
        checkbox.checked= true;
    }else{
        checkbox.checked= false;
    }
    console.log(checkbox.checked);
})

window.onscroll = () => {

    navbar.classList.remove('active');

}

var li = document.querySelectorAll('ul li a');
li.forEach((item)=>{
    item.addEventListener('click', function (e){
        e.preventDefault();
        if (this.parentNode.querySelectorAll('ul').length  <= 0 ){
            var href = this.href;
            location.href=href;
        }

    })
});

document.querySelector("#login-btn").addEventListener('click', ()=>{
    location.href = './login.html';
});


  