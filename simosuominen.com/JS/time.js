    var dt = new Date();
    var month = dt.getMonth() + 1;
    var day = dt.getDate();
    var year = dt.getFullYear();
    var hh = dt.getHours();
    var mm = dt.getMinutes();

    if (mm < 10) {
        var realmm = "0" + mm;
    } else {
        var realmm = mm;
    }
    document.write("Today is " + day + "." + month + "." + year + ". The time is: " + hh + ":" + realmm);
