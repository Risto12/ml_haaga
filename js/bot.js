function chatBot() {
    const popup = document.getElementById('bot')
    const close = document.getElementById('closeBot')
    const zoom_in_out = document.getElementById('biggerSmaller')
    
    document.querySelector('#botButton').addEventListener('click', (val) => {
        if(popup.style.display === "block"){
            popup.style.display = "none"
            close.style.display = "none"
            zoom_in_out.style.display = "none"
        }else{
            popup.style.display = "block"
            close.style.display = "block"
            zoom_in_out.style.display = "block"
        }
    });

    document.querySelector('#closeBot').addEventListener('click', (val) => {
        if(popup.style.display === "block"){
            popup.style.display = "none"
            close.style.display = "none"
            zoom_in_out.style.display = "none"
        }else{
            popup.style.display = "block"
            close.style.display = "block"
            zoom_in_out.style.display = "block"
        }
    });
    
    document.querySelector('#biggerSmaller').addEventListener('click', (val) => {
        /* THIS IS TERRIBLEEE 
            MY EYES ARE BLEEDINGG :'''''(
        */
        const viewpane =  document.getElementsByClassName("wc-chatview-panel");
        const wcheader = document.getElementsByClassName("wc-header")
        viewpane[0].id = "chatviewBig"
        wcheader[0].id = "headchat"
        document.getElementById("headchat").addEventListener('click', (val2) => {
            viewpane[0].id = null;
        })
    });


};

function activateGreeting(){
    const params = BotChat.queryParams(location.search);
    var chatLocale = params['locale'] || window.navigator.language;

    const botConnectionSettings = new BotChat.DirectLine({
        domain: params['domain'],
        secret: 'mqxVWPVPyz0.XwVzlS6jLOxuc7Wc7h2rFXBNztdB7EJlJowJ5y9c8JU',
        webSocket: params['webSocket'] && params['webSocket'] === 'true'
    });

    BotChat.App({
        botConnection: botConnectionSettings,
        user: { id: 'userid' },
        bot: { id: 'botid' },
        locale: chatLocale,
        resize: 'detect'
    }, document.getElementById('bot'));

    botConnectionSettings.postActivity({
        type: 'event',
        from: { id: 'userid' },
        locale: chatLocale,
        name: 'myCustomEvent',
        value: 'test'
    }).subscribe(function (id) {});
}

function openChatBot(){
    setTimeout(() => {
        const popup = document.getElementById('bot')
        const close = document.getElementById('closeBot')
        popup.style.display = "block"
        close.style.display = "block"
    }, 3000)
    
}

chatBot()
activateGreeting()
