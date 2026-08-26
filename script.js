const envelope = document.getElementById("envelope");

const flap = document.getElementById("flap");

const wax = document.getElementById("wax");

const card = document.getElementById("card");

const button = document.getElementById("openBtn");

const details = document.getElementById("details");



let opened = false;



function openEnvelope(){


    if(opened) return;

    opened = true;



    // Step 1:
    // remove wax + open flap

    envelope.classList.add("open");



    // Step 2:
    // show card after flap opens

    setTimeout(()=>{


        card.classList.add("card-show");

    },1000);



    // Step 3:
    // expand card fullscreen


    setTimeout(()=>{


        card.classList.add("card-expand");


    },2400);

    setTimeout(()=>{
        details.classList.add("details-show");
    },3300);



}



button.addEventListener(
    "click",
    openEnvelope
);




/* optional phone shake */

let lastX = 0;

let lastY = 0;

let lastZ = 0;



window.addEventListener(
"devicemotion",
(e)=>{


    let acc = e.accelerationIncludingGravity;


    if(!acc) return;



    let x = acc.x;

    let y = acc.y;

    let z = acc.z;



    let movement =

    Math.abs(x-lastX)
    +
    Math.abs(y-lastY)
    +
    Math.abs(z-lastZ);



    if(movement > 35){

        openEnvelope();

    }


    lastX=x;
    lastY=y;
    lastZ=z;



});
