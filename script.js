fetch("data.json")
.then(function(response){
    return response.json();
})
.then(function(data){

    document.getElementById("name").innerText = data.name;
    document.getElementById("designation").innerText = data.designation;
    document.getElementById("regno").innerText = data.regno;
    document.getElementById("media").innerText = data.media;

    document.getElementById("contact").innerText = data.contact;
    document.getElementById("contact").href = "tel:" + data.contact;

    document.getElementById("email").innerText = data.email;
    document.getElementById("email").href = "mailto:" + data.email;

    document.getElementById("youtube").href = data.youtube;
    document.getElementById("facebook").href = data.facebook;
    document.getElementById("instagram").href = data.instagram;
    document.getElementById("whatsapp").href = "https://wa.me/" + data.whatsapp;

})
.catch(function(error){
    console.log(error);
});
