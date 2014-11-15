window.onload = function () {
    
    var jq = document.createElement('script');
    jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"
    document.getElementsByTagName('body')[0].appendChild(jq)
    
    var sm = document.createElement('script');
    sm.src = "https://rawgit.com/KartikTalwar/gmail.js/master/src/gmail.js";
    document.getElementsByTagName('body')[0].appendChild(sm);
    
    var sm = document.createElement('script');
    sm.src = "https://rawgit.com/achehab1/tests/master/myextension.js";
    document.getElementsByTagName('body')[0].appendChild(sm);
    
    window.addEventListener("message", function(event) {
                            if(event.data.type && (event.data.type == "new_email")) {
                           // alert('new mail from ' + event.data.message_id);
                           // port.postMessage({ type: "save_email_id", id: event.data.message_id});
                            //localStorage[event.data.message_id] = localStorage[event.data.message_id] + "Adding";
                            //alert(localStorage[event.data.message_id])
                            localStorage[event.data.message_id]=prompt(event.data.message_id,localStorage[event.data.message_id]);
                            }
                            }, false);
    
    
}