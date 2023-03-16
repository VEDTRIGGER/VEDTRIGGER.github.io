
let startValue = 1;
let TONUSDRate = 2.54;


window.addEventListener("load", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const skill = urlParams.get("skill");
    const name = urlParams.get("name");
    const link = decodeURI(urlParams.get("link"));

    const textName = document.getElementById("name");
    const textTrait = document.getElementById("trait");
    const linkImg = document.getElementById("photo");
    const input = document.querySelector("input");
    const USDPrice = document.getElementById("calcUSD");
    const btnText = document.getElementById("confirm");

    textTrait.textContent = skill;
    textName.textContent = name;
    linkImg.src = link;

    USDPrice.textContent = (startValue * TONUSDRate).toFixed(2);
    btnText.textContent = "SEND 1 TON";
    //input.value = 0.01.toFixed(2);
    input.setAttribute('size', input.value.replace('.', '').length <= 1 ? 1 : input.value.replace('.', '').length);
    input.addEventListener("input", updateValue);
    

    function updateValue(e) {
        if (input.value.length === 0) {
            btnText.textContent = "ENTER AMOUNT";
            btnText.className = "disabled";
            USDPrice.textContent = 0;
        } else {
            btnText.className = "active"
            USDPrice.textContent = (Number(e.target.value) * TONUSDRate).toFixed(2);
            btnText.textContent = `SEND ${e.target.value} TON`;
            e.target.setAttribute('size', e.target.value.replace('.', '').length <= 1 ? 1 : e.target.value.replace('.', '').length);
        }
        
    }
});

function closeTelegramWebApp() {
    event.preventDefault();
    Telegram.WebApp.close();
}

function redirectToThanks() {
    //window.location.href="https://vedtrigger.github.io/thanks.html"
    // window.open("thanks.html","_self")
    const modal = document.getElementById("modal-done");
    const MODAL_ACTIVE_CLASS = 'modal-active';
    const BODY_SCROLL_DISABLE_CLASS = 'body-scroll-disable';
    event.preventDefault();
    modal.classList.add(MODAL_ACTIVE_CLASS);
    document.body.classList.add(BODY_SCROLL_DISABLE_CLASS);
    setTimeout(function () {
        Telegram.WebApp.close();
      }, 3000);

}
function setMax() {
    const input = document.querySelector("input");
    const log = document.getElementById("calcUSD");
    const btnText = document.getElementById("confirm");
    log.textContent = (input.value * TONUSDRate).toFixed(2);
    input.value = 687.6
    btnText.textContent = `SEND ${input.value} TON`;
    btnText.className = "active"
    input.setAttribute('size', input.value.replace('.', '').length <= 1 ? 1 : input.value.replace('.', '').length);
}

