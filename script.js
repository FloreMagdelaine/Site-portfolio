console.log("Hello World")

///////////////////// Mode Nuit

const btnNuit = document.querySelector("#modeNuit");
let estNuit = true;

function appliqueNuit() {
	document.querySelector('p.titre').style.color = "rgb(255, 255, 255)";
	document.querySelector('nav.navbar').style.backgroundColor = "rgb(30, 30, 30)";
    document.getElementById('modeNuit').innerHTML = " Mode jour ";
}

function appliqueJour() {
	document.querySelector('p.titre').style.color = "rgb(0, 0, 0)";
	document.querySelector('nav.navbar').style.backgroundColor = "rgb(250, 250, 250)";
    document.getElementById('modeNuit').innerHTML = " Mode nuit ";
}

btnNuit.addEventListener("click", function() {
    if (estNuit) {
        document.querySelector('nav.navbar').classList.toggle(appliqueNuit());
        estNuit = false;
    } else {
        document.querySelector('nav.navbar').classList.toggle(appliqueJour());
        estNuit = true;
    }
})

////////////////////// Titre changeant de couleur

const slogan = document.querySelector("p.slogan");
let select = 0;

const colors = ["blue", "green", "red", "purple", "orange", "yellow"];

slogan.addEventListener("click", function () {
    slogan.classList.remove(colors[select]);
    if (select > 4) {
        select = 0;
    } 
    
    else {
        select += 1;
    }
    
    slogan.classList.add(colors[select]);
})

///////////////////////////////////// Animation images

const ratio  = 0.5

const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
  }

const handleIntersect = function (entries, observer) {
    entries.forEach (function (entry) {
        if  (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    })
  }
  
const observer = new IntersectionObserver(handleIntersect, options);

document.querySelectorAll('.reveal').forEach(function(r) {
    observer.observe(r)
})



// const dessins = document.querySelectorAll('reveal');

// dessins.addEventListener("scroll", function () {
//     dessins.array.forEach(element => {
//         classList.add('reveal-visible')
//     })
// })


// dessins.addEventListener ("scroll", function() {
//     revealing()
// })
  