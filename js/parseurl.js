function parseurl(){
    const params = new URLSearchParams(location.search);
    document.getElementById("inputEmail4").value = params.get("email")
    
}

parseurl()