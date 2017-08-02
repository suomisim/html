function submitFunction (){

    var warning = "Contact info missing or not valid. Please check you have filled all contact info properly.";
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var email = document.getElementById("email").value;
    var website = document.getElementById("website").value;
    var message = document.getElementById("message").value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    var re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;

    if (firstname == "") {
        alert(warning);
    } else if (lastname == "") {
        alert(warning);
    } else if (age == "" || age < 18 || age > 99) {
        alert(warning);
    } else if (gender == "") {
        alert(warning);
    } else if (email == "" || atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        alert(warning);
    } else if (website == "" || !re.test(website)) {
        alert(warning);
    } else if (message == "" || !re.test(message)) {
        alert(warning);
    } else {

        var allResults = "Your name is " + firstname + " " + lastname + "\n" + "You are a " + age + " years old " + gender + "\n" + "Your email-address is " + email + " and your website address is " + website + "\n" + "You submitted a following message: " + message;
        var resultsOut = document.getElementById("results");
        resultsOut.value = allResults;
        document.getElementById("resultbox").style.visibility = "visible";
    }
}
function hideBox() {
    document.getElementById("resultbox").style.visibility = "hidden";
}

function dateFunction() {
    var dt = new Date();
    var month = dt.getMonth() + 1;
    var day = dt.getDate();
    var year = dt.getFullYear();
    var hh = dt.getHours();
    var mm = dt.getMinutes();
    var totalDate = "Today is " + day + "." + month + "." + year + ". The time is: " + hh + ":" + mm;
    var outPut = document.getElementById("dateoutput");
    outPut.value = totalDate;
}
function testFunction() {
    alert("Hello world! Isn't Javascript annoying?!");
}
function bigImg(x) {
    x.style.height = "256px";
    x.style.width = "512px";
}

function normalImg(x) {
    x.style.height = "128px";
    x.style.width = "256px";
}
function scrollFunction() {
    alert("You've been scrolling around!");
}
function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode != 46 && charCode > 31
        && (charCode < 48 || charCode > 57))
        return false;
    return true;
}


function isNumericKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode != 46 && charCode > 31
        && (charCode < 48 || charCode > 57))
        return true;
    return false;
}
function addRemoveSkill() {
    //A function to add a skill to skill list. Works only once per page reload, since it messes up the skill IDs.
    var new6 = document.getElementById("skill5").textContent;
    var new6id = document.getElementById("skill5").id;
    document.getElementById("skill5").textContent = new6;
    document.getElementById("skill5").id = new6id;
    var new5 = document.getElementById("skill4").textContent;
    var new5id = document.getElementById("skill4").id;
    document.getElementById("skill4").textContent = new5;
    document.getElementById("skill4").id = new5id;
    var new4 = document.getElementById("skill3").textContent;
    var new4id = document.getElementById("skill3").id;
    document.getElementById("skill3").textContent = new4;
    document.getElementById("skill3").id = new4id;
    var new3 = document.getElementById("skill2").textContent;
    var new3id = document.getElementById("skill2").id;
    document.getElementById("skill2").textContent = new3;
    document.getElementById("skill2").id = new3id;
    var new2 = document.getElementById("skill1").textContent;
    var new2id = document.getElementById("skill1").id;
    document.getElementById("skill1").textContent = new2;
    document.getElementById("skill1").id = new2id;
    var newSkill = document.getElementById("newskill").value;
    document.getElementById("skill1").textContent = newSkill;
}
function progressClick() {
    document.getElementById("pbar1").style.width = "100%";
    document.getElementById("pbar1").textContent = "100%";
    document.getElementById("pbar2").style.width = "100%";
    document.getElementById("pbar2").textContent = "100%";
    document.getElementById("pbar3").style.width = "100%";
    document.getElementById("pbar3").textContent = "100%";
    document.getElementById("pbar4").style.width = "100%";
    document.getElementById("pbar4").textContent = "100%";
    document.getElementById("pbar5").style.width = "20%";
    document.getElementById("pbar5").textContent = "20%";
}
