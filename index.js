
//取得textarea的改變
(function () {
    let source = document.querySelector('#source');
    let destination = document.getElementById('destination').contentWindow;
    function getValue() {
        let data = this.value;
        destination.postMessage(data, '*');
    }
    source.addEventListener('input', getValue);
})();

let eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
let eventer = window[eventMethod];
let messageEvent = eventMethod === "attachEvent" ? "onmessage" : "message";

// Listen to message from child window
eventer(messageEvent, function (e) {
    let receiveMessage = destination.querySelector('.receive-message')
    receiveMessage.textContent = e.data;
}, false);