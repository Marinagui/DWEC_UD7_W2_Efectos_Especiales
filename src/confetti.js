import JSConfetti from 'js-confetti';

const jsConfetti = new JSConfetti();

let moreConfetti = document.getElementById("confetti");

moreConfetti.onclick = mostrarConfetti;

function mostrarConfetti() {
    moreConfetti.disabled = true;
    jsConfetti.addConfetti()
    .then(() => moreConfetti.disabled = false);
}

// asíncrona alternativa
async function mostrarConfettiAsync() {
    moreConfetti.disabled = true;
    await jsConfetti.addConfetti();
    moreConfetti.disabled = false;
}