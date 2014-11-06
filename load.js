window.onload = function () {
    
    var jq = document.createElement('script');
    jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"
    document.getElementsByTagName('body')[0].appendChild(jq)
    
    var sm = document.createElement('script');
    sm.src = "https://rawgit.com/KartikTalwar/gmail.js/master/src/gmail.js";
    document.getElementsByTagName('body')[0].appendChild(sm);
    
    var sm = document.createElement('script');
    sm.src = "https://www.smartpacks.fr/popup.js";
    document.getElementsByTagName('body')[0].appendChild(sm);
    
    window.addEventListener("message", function(event) {
                            if(event.data.type && (event.data.type == "new_email")) {
                            port.postMessage({ type: "save_email_id", id: event.data.message_id});
                            }
                            }, false);
    
}