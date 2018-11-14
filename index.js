
//取得textarea的改變
(function () {
    let source = document.querySelector('#source');
    let destination = document.getElementById('destination').contentWindow;
    function getValue() {
        let data = JSON.stringify(this.value);
        console.log(data);
        destination.postMessage(data, "*");
    }
    source.addEventListener('keyup', getValue);

    let eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
    let eventer = window[eventMethod];
    let messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

    
    eventer(messageEvent, function (e) {
        // console.log(destination.document.querySelector('receive-message'));
        console.log(e);
        console.log(e.data);
        console.log(destination);
        let receiveMessage = destination.contentWindow.document.querySelector('.receive-message')
        receiveMessage.textContent = e.data;
    }, false);
})();

