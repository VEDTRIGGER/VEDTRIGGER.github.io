
window.addEventListener("load", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const skill = urlParams.get("skill");
    const name = urlParams.get("name");
    const link = decodeURI(urlParams.get("link"));

    const text_name = document.getElementById("name");
    text_name.textContent = name;
    const text_trait = document.getElementById("trait");
    text_trait.textContent = skill;
    const link_img = document.getElementById("photo");
    link_img.src = link;
    
    
    const input = document.querySelector("input");
    const log = document.getElementById("calcUah");
    log.textContent = (0.01*80.6).toFixed(2);
    const btnText = document.getElementById("confirm");
    btnText.textContent = "Send 0.01 toncoin";
    input.addEventListener("input", updateValue);

    function updateValue(e) {
        log.textContent = (Number(e.target.value)*80.6).toFixed(2);
        btnText.textContent = `Send ${e.target.value} toncoin`;
    }

   
   
            btn.addEventListener('click', (event) => {
                
            })


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

}
function setMax(){
    const input = document.querySelector("input");
    input.value = 687.6
    const log = document.getElementById("calcUah");
    log.textContent = (687.6*80.6).toFixed(2);
    const btnText = document.getElementById("confirm");
    btnText.textContent = `Send 687.6 toncoin`;
}

