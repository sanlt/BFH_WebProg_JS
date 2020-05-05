var alphabetString =
    "a=.-;b=-...;c=-.-.;d=-..;e=.;f=..-;g=--.;h=....;i=..;j=.---;k=-.-;l=.-..;" +
    "m=--;n=-.;o=---;p=.---.;q=--.-;r=.-.;s=...;t=-;u=..-;v=...-;w=.--;x=-..-;" +
    "y=-.-;z=--..; =;.=.-.-.-;,=--..--;?=..--..";

var splitted = alphabetString.split(";");

for (var i = 0; i < splitted.length; i++) {
    var res =  splitted[i].substring(2, splitted[i].length);
    res = res.charAt(0);
}

var textToSplit = "i am morse code";

var charToMorseCode = function (x) {
    for (var i = 0; i < splitted.length; i++) {
        if (splitted[i].charAt(0) == x){
            temp = splitted[i].split("=");
            return temp[1];
        }
    }
};

document.write(charToMorseCode("a"))
document.write("<br>");
console.log(charToMorseCode("a"));

var convertToMorse = function (text) {
    var temp = "";
    for (var i = 0; i <text.length; i++){
        var code = text.charAt(i);
        temp = temp + charToMorseCode(code);
        }
    return temp;
};

document.write(convertToMorse(textToSplit));
console.log(convertToMorse(textToSplit));