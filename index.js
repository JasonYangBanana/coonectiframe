
//取得textarea的改變
(function () {
    var source = document.querySelector('#source');
    function getValue() {
        var data = this.value;
        var destination = document.getElementById('destination').contentWindow;
        console.log(data);
        destination.postMessage(data, "*");
    }
    source.addEventListener('keyup', getValue);

    // let eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
    // let eventer = window[eventMethod];
    // let messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

    
    window.addEventListener('message', function (e) {
        // console.log(destination.document.querySelector('receive-message'));
        console.log(e);
        console.log(e.data);
        console.log(destination);
        console.log(destination.document);
        console.log(destination.document.querySelector('.receive-message'))
        var receiveMessage = destination.document.querySelector('.receive-message')
        receiveMessage.textContent = e.data;
    }, false);
})();

