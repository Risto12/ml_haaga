(function parseurl(){
    const params = new URLSearchParams(location.search);
    document.getElementById("name").value = params.get("name")
    document.getElementById("email").value = params.get("email")
    document.getElementById("birthYear").value = params.get("birthYear")
    document.getElementById("phoneNumber").value = params.get("phoneNumber")
    document.getElementById("postalCode").value = params.get("postalCode")
    document.getElementById("luggage").value = params.get("luggage")
    document.getElementById("duration").checked = params.get("duration") === "true" ? true : false
    document.getElementById("kela").checked = params.get("kela") === "true" ? true : false
})();

//?email=world&name=risto&phoneNumber=02100101&postalCode=3131&luggage=311&birthYear=1999&duration=true&kela=true