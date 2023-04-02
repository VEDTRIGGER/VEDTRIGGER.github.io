
let startValue = 1;
let TONUSDRate = 2.45;
let user_id;
let girl_id;
let skill;

window.addEventListener("load", () => {
    const urlParams = new URLSearchParams(window.location.search);
    skill = urlParams.get("skill");
    const name = urlParams.get("name");
    const link = decodeURI(urlParams.get("link"));
    user_id = urlParams.get("user_id");
    girl_id = urlParams.get("id");

    const textName = document.getElementById("name");
    const textTrait = document.getElementById("trait");
    const linkImg = document.getElementById("photo");
    const input = document.querySelector("input");
    const USDPrice = document.getElementById("calcUSD");
    const votes = document.getElementById("votes");
    const btnText = document.getElementById("confirm");

    console.log({
        "user_id": user_id,
        "amount": input.value,
        "girl_id": girl_id
    });

    textTrait.textContent = skill;
    textName.textContent = name;
    linkImg.src = link;

    USDPrice.textContent = (startValue * TONUSDRate).toFixed(2);
    votes.textContent = Math.round(Math.sqrt(startValue));
    btnText.textContent = "SEND 1 TON";
    //input.value = 0.01.toFixed(2);
    // input.setAttribute('size', input.value.replace('.', '').length <= 1 ? 1 : input.value.replace('.', '').length);
    input.addEventListener("input", updateValue);


    function updateValue(e) {
        if (input.value.length === 0 || input.value == 0) {
            btnText.textContent = "SEND TON";
            btnText.className = "disabled";
            USDPrice.textContent = 0;
            votes.textContent = 0;
        } else {
            btnText.className = "active"
            USDPrice.textContent = (Number(e.target.value) * TONUSDRate).toFixed(2);
            votes.textContent = Math.round(Math.sqrt(Number(e.target.value)));
            btnText.textContent = `SEND ${e.target.value} TON`;
            // e.target.setAttribute('size', e.target.value.replace('.', '').length <= 1 ? 1 : e.target.value.replace('.', '').length);
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
    if (user_id !== "" && girl_id !== "") {
        const input = document.querySelector("input");
        let type;
        switch (skill) {
            case "Mind":
                type = "intellect";
                break;
            case "Energy":
                type = "energy";
                break;
            case "Body":
                type = "beauty";
                break;
        }


        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic dGVzdDp0ZXN0");
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "user_id": user_id,
            "amount": input.value,
            "type": type,
            "girl_id": girl_id
        });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://tag.trigger.services/api/ton/give-ton", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

    }
    const modal = document.getElementById("modal-done");
    const MODAL_ACTIVE_CLASS = 'modal-active';
    const BODY_SCROLL_DISABLE_CLASS = 'body-scroll-disable';
    event.preventDefault();
    modal.classList.add(MODAL_ACTIVE_CLASS);
    document.body.classList.add(BODY_SCROLL_DISABLE_CLASS);
    setTimeout(function () {
        Telegram.WebApp.close();
    }, 2000);

}
function setMax() {
    const input = document.querySelector("input");
    const USD = document.getElementById("calcUSD");
    const votes = document.getElementById("votes");
    const btnText = document.getElementById("confirm");
    USD.textContent = (input.value * TONUSDRate).toFixed(2);
    votes.textContent = Math.round(Math.sqrt(Number(input.value)));
    input.value = 687.6;
    btnText.textContent = `SEND ${input.value} TON`;
    btnText.className = "active";
    // input.setAttribute('size', input.value.replace('.', '').length <= 1 ? 1 : input.value.replace('.', '').length);
}

