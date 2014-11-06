// gmail code

var runCode = function() {
    gmail = Gmail();
    
    var email_data = gmail.get.email_data();
    if(email_data) {
        window.postMessage({"type" : "edata", "str_data" : JSON.stringify(email_data) }, '*');
    }
    
    gmail.observe.on('open_email', function(id, url, body, xhr) {
                     console.log("id:", id, "url:", url, 'body', body, 'xhr', xhr);
                     console.log(gmail.get.email_data(id));
                     console.log('new email!', id);
                     window.postMessage({ "type": "new_email", "message_id": id }, "*");
                     });
    
}


// check if jquery is loaded and init
var checkLoaded = function() {
    if(window.jQuery) {
        $.fn.onAvailable = function(e) {
            var t = this.selector;
            var n = this;
            if (this.length > 0) e.call(this);
            else {
                var r = setInterval(function () {
                                    if ($(t).length > 0) {
                                    e.call($(t));
                                    clearInterval(r);
                                    }
                                    }, 50);
            }
        };
        
        // your code
        runCode();
        
    } else {
        setTimeout(checkLoaded, 100);
    }
}
alert('myextension');

checkLoaded();