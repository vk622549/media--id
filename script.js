fetch("data.json")
.then(response => response.json())
.then(data => {

document.getElementById("name").innerHTML = data.name;

document.getElementById("designation").innerHTML = data.designation;

document.getElementById("regno").innerHTML = data.regno;

document.getElementById("media").innerHTML = data.media;

document.getElementById("contact").innerHTML = data.contact;
document.getElementById("contact").href = "tel:" + data.contact;

document.getElementById("email").innerHTML = data.email;
document.getElementById("email").href = "mailto:" + data.email;

document.getElementById("youtube").href = data.youtube;

document.getElementById("facebook").href = data.facebook;

document.getElementById("instagram").href = data.instagram;

document.getElementById("whatsapp").href = "https://wa.me/" + data.whatsapp;

});
