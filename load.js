


window.onload = function () {
    
    var jq = document.createElement('script');
    jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"
    document.getElementsByTagName('body')[0].appendChild(jq)
    
    var sm = document.createElement('script');
    sm.src = "https://rawgit.com/KartikTalwar/gmail.js/master/src/gmail.js";
    document.getElementsByTagName('body')[0].appendChild(sm);

    ///
    //var sm = document.createElement('script');
    //sm.src = "https://rawgit.com/achehab1/tests/master/jquery.messagebox.js";
    //document.getElementsByTagName('body')[0].appendChild(sm);
    ///
    var sm = document.createElement('script');
    sm.src = "https://rawgit.com/achehab1/tests/master/jquery-ui.js";
    document.getElementsByTagName('body')[0].appendChild(sm);
    
    var sm = document.createElement('link');
    sm.type = 'text/css';
    sm.rel = 'stylesheet';
    sm.href = "https://rawgit.com/achehab1/tests/master/jquery-ui.css";
    document.getElementsByTagName('head')[0].appendChild(sm);
    
  //  var div = document.createElement('<div id="chat" class="ui-dialog ui-widget ui-widget-content ui-corner-all ui-front"> <div class="ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix"> <span class="ui-dialog-title">Chat</span> </div> <textarea style="margin-top: 3px; width: 290px; height: 110px"> </textarea> </div>');
   
    
    var div = document.createElement('div');
    div.id='chat';
    div.class='ui-dialog ui-widget ui-widget-content ui-corner-all ui-front';
    div.innerHTML='<div class="ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix"> <span class="ui-dialog-title">MES NOTES GMAIL</span> </div> <textarea id="chattxt" style="margin-top: 3px; width: 290px; height: 110px"> </textarea>';
    document.body.appendChild(div);
    
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