"use stcrict";

ol.innerHTML = localStorage.getItem("list")

const spanDels = document.querySelectorAll(".delete");

for(let span of spanDels)
{
    span.onclick = () => del(span.parentElement.parentElement)
}

const spanFavs = document.querySelectorAll(".favori")

for(let span of spanFavs)
{
    span.onclick = () => favori(span)
}

function fireConfetti() {    
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
} 

function fireConfetti2() {
    var end = Date.now() + (1 * 1000);

// go Buckeyes!
var colors = ['#bb0000', '#ffffff'];

(function frame() {
  confetti({
    particleCount: 2,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    colors: colors
  });
  confetti({
    particleCount: 2,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
    colors: colors
  });

  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
}());
}

noTache.style.display = (ol.innerHTML == "")? "block" : "none";

form.onsubmit = () =>{
    const li = document.createElement("li");

    const texte = document.createElement("span");
    texte.classList.add("texte");
    texte.textContent = champ.value;

    const spanDel = document.createElement("span");
    spanDel.classList.add("delete", "material-symbols-outlined", "md-24");
    spanDel.textContent = "delete";

    const spanFav = document.createElement("span");
    spanFav.classList.add("favori", "material-symbols-outlined", "md-24");
    spanFav.textContent = "star";

    const spanOpt = document.createElement("span");
    spanOpt.classList.add("spanOpt");

    spanOpt.appendChild(spanFav);
    spanOpt.appendChild(spanDel);

    spanDel.onclick = () => del(li);
    spanFav.onclick = () => favori(spanFav);

    li.appendChild(texte);
    li.appendChild(spanOpt);

    ol.appendChild(li);

    champ.value = "";

    noTache.style.display = "none";

    localStorage.setItem("list", ol.innerHTML);

    return false;
}

function del(element)
{
    element.remove();

    const isListEmpty = (ol.innerHTML == "");
    
    noTache.style.display = isListEmpty? "block" : "none";

    localStorage.setItem("list", ol.innerHTML);

    if (isListEmpty) {
        fireConfetti();
        fireConfetti2()
    }
}

function favori(element)
{
    element.classList.toggle("gold");
    localStorage.setItem("list", ol.innerHTML);
}

const metas = document.getElementsByTagName('meta');
metas[1].content += `, height=${window.innerHeight}`;

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
    });
}