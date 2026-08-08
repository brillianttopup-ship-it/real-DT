document.addEventListener("DOMContentLoaded", function () {

    /* ================= LOADER ================= */
    window.onload = function(){
        document.getElementById("loader").style.display = "none";
    };

    /* ================= SCROLL TO TOP ================= */
    let topBtn = document.getElementById("topBtn");

    window.onscroll = function(){
        if(document.documentElement.scrollTop > 200){
            topBtn.style.display = "block";
        }else{
            topBtn.style.display = "none";
        }
    };

    topBtn.addEventListener("click", function(){
        window.scrollTo({top:0, behavior:"smooth"});
    });

    /* ================= WHATSAPP BOOKING ================= */
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.querySelector("input[type='text']").value;
        let phone = document.querySelector("input[type='tel']").value;
        let email = document.querySelector("input[type='email']").value;
        let pickup = document.querySelectorAll("select")[0].value;
        let destination = document.querySelectorAll("select")[1].value;
        let date = document.querySelector("input[type='date']").value;
        let vehicle = document.querySelectorAll("select")[2].value;
        let message = document.querySelector("textarea").value;

        let whatsappMessage =
`🚖 DT Travel Agency Booking 🚖

Name: ${name}
Phone: ${phone}
Email: ${email}
Pickup: ${pickup}
Destination: ${destination}
Vehicle: ${vehicle}
Date: ${date}
Notes: ${message}`;

        window.open("https://wa.me/27647779768?text=" + encodeURIComponent(whatsappMessage));

        // popup
        document.getElementById("popup").style.display = "block";
        setTimeout(()=>{
            document.getElementById("popup").style.display = "none";
        },3000);

        form.reset();
    });

    /* ================= ROUTE BUTTONS ================= */
    document.querySelectorAll(".card button").forEach(btn=>{
        btn.addEventListener("click", function(){

            let route = this.parentElement.querySelector("h3").innerText;
            let price = this.parentElement.querySelector("h1").innerText;

            let msg = `Route: ${route} - ${price}`;

            window.open("https://wa.me/27647779768?text=" + encodeURIComponent(msg));
        });
    });

});