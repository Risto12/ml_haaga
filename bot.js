function addBot() {
    // this code is from https://anthonychu.ca/post/microsoft-bot-framework-web-embed-collapsible-window/
    const div = document.createElement("div");
    document.getElementsByTagName('body')[0].appendChild(div);
    div.outerHTML = "<div id='botDiv' style='height: 38px; position: fixed; bottom: 0; z-index: 1000; background-color: #fff'><div id='botTitleBar' style='height: 38px; width: 400px; position:fixed; cursor: pointer;'></div><iframe id='botFrame' width='400px' height='600px' src='https://webchat.botframework.com/embed/project0187-bot?s=mqxVWPVPyz0.XwVzlS6jLOxuc7Wc7h2rFXBNztdB7EJlJowJ5y9c8JU'></iframe></div>"; 
    document.querySelector('body').addEventListener('click', (val) => {
        val.target.matches = val.target.matches || val.target.msMatchesSelector;
        if (val.target.matches('#botTitleBar')) { 
            const botDiv = document.querySelector('#botDiv'); 
            botDiv.style.height = botDiv.style.height == '600px' ? '38px' : '600px';
        };
    });
    
}

addBot()
