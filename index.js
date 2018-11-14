
//取得textarea的改變
(function () {
    let source = document.querySelector('#source');
    
    function getValue() {
        let data = JSON.stringify(this.value);
        let destination = document.getElementById('destination').contentWindow;
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
        let receiveMessage = document.querySelector('.receive-message')
        receiveMessage.textContent = e.data;
    }, false);
})();

