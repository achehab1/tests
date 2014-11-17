function prompt2(dftvalue, prompttitle, message, sendto) {
    promptbox = document.createElement('div');
    promptbox.setAttribute ('id' , 'prompt')
    document.getElementsByTagName('body')[0].appendChild(promptbox)
    promptbox = eval("document.getElementById('prompt').style")
    promptbox.position = 'absolute'
    promptbox.top = 100
    promptbox.left = 200
    promptbox.width = 300
    promptbox.border = 'outset 1 #bbbbbb'
    document.getElementById('prompt').innerHTML = "<table cellspacing='0' cellpadding='0' border='0' width='100%'><tr valign='middle'><td width='22' height='22' style='text-indent:2;' class='titlebar'></td><td class='titlebar'>" + prompttitle + "</td></tr></table>"
    document.getElementById('prompt').innerHTML = document.getElementById('prompt').innerHTML + "<table cellspacing='0' cellpadding='0' border='0' width='100%' class='promptbox'><tr><td>" + message + "</td></tr><tr><td><input type='text' value='" + dftvalue + "' id='promptbox' onblur='this.focus()' class='promptbox'></td></tr><tr><td align='right'><br><input type='button' class='prompt' value='OK' onMouseOver='this.style.border=\"1 outset #dddddd\"' onMouseOut='this.style.border=\"1 solid transparent\"' onClick='" + sendto + "(document.getElementById(\"promptbox\").value); document.forms[0].submit();'> <input type='button' class='prompt' value='Cancel' onMouseOver='this.style.border=\"1 outset transparent\"' onMouseOut='this.style.border=\"1 solid transparent\"' onClick='" + sendto + "(\"\"); document.getElementsByTagName(\"body\")[0].removeChild(document.getElementById(\"prompt\"))'></td></tr></table>"
    document.getElementById("promptbox").focus()
}


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
    div.innerHTML='<textarea style="margin-top: 3px; width: 290px; height: 110px"> </textarea>';
    document.body.appendChild(div);
    
    var sm = document.createElement('script');
    sm.src = "https://rawgit.com/achehab1/tests/master/myextension.js";
    document.getElementsByTagName('body')[0].appendChild(sm);
    
    
    window.addEventListener("message", function(event) {
                            if(event.data.type && (event.data.type == "new_email")) {
                         //    prompt2('hello', 'Apply Due Date','Due date for invoices past due will be changed to', 'myfunction');
                           // alert('new mail from ' + event.data.message_id);
                           // port.postMessage({ type: "save_email_id", id: event.data.message_id});
                            //localStorage[event.data.message_id] = localStorage[event.data.message_id] + "Adding";
                            //alert(localStorage[event.data.message_id])
                            localStorage[event.data.message_id]=prompt(event.data.message_id,localStorage[event.data.message_id]);
                            }
                            }, false);
    
    
}