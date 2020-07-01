// HELPERS

function log(text) {
    var l = document.getElementById('log');
    l.innerHTML += "<p>" + text + "</p>";
}

function state(text) {
    var l = document.getElementById('state');
    l.innerHTML += text;
}

function error(text) {
    var l = document.getElementById('state');
    l.innerHTML += "Error: " + text + "<br>";
}

// PROMISES

function getQuote() {
    return new Promise(function (resolve, reject) {

        var req = new XMLHttpRequest();
        req.open("GET", "https://www.sws.bfh.ch/~locher/webprog/services/quote.php")
        req.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    resolve(this.responseText);
                } else {
                    reject("An error occured (" + this.status + "): " + this.responseText);
                }
            }
        };
        req.send(null);
    });
}

function toMorse(text) {
    return new Promise(function (resolve, reject) {

        var req = new XMLHttpRequest();
        req.open("GET", "https://www.sws.bfh.ch/~locher/webprog/services/morse.php?text=" + text);
        req.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    resolve(text + "<br/>" + this.responseText);
                } else {
                    reject("An error occured (" + this.status + "): " + this.responseText);
                }
            }
        };
        req.send(null);
    });
}

function getQuoteMorse() {
    return getQuote()
        .then(quote => toMorse(quote))
        .then(quoteMorse => log(quoteMorse))
        .catch(e => {
            error(e);
            return getQuoteMorse();
        })
}

const promises = [];
for (let i = 0; i < 4; i++){
    const promise = getQuoteMorse();
    promises.push(promise);
}

Promise.all(promises).then(r => state("Done"));




