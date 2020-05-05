var alphabetString =
    "a=.-;b=-...;c=-.-.;d=-..;e=.;f=..-;g=--.;h=....;i=..;j=.---;k=-.-;l=.-..;" +
    "m=--;n=-.;o=---;p=.---.;q=--.-;r=.-.;s=...;t=-;u=..-;v=...-;w=.--;x=-..-;" +
    "y=-.-;z=--..; =;.=.-.-.-;,=--..--;?=..--..";

var splitted = alphabetString.split(";");

function Char(value, representation) {
    this.value = value;
    this.representation = representation;
}

Char.prototype.toString = function () {
    return this.value + ': ' + this.representation;
};

var a = new Char('a', ".-");
var b = new Char('b', "-...");
var c = new Char('c', "-.-.");
var d = new Char('d', "-..");
var e = new Char('e', ".");
var f = new Char('f', "..-");
var g = new Char('g', "--.");
var h = new Char('h', "....");
var i = new Char('i', "..");
var j = new Char('j', ".---");
var k = new Char('k', "-.-");
var l = new Char('l', ".-..");
var m = new Char('m', "--");
var n = new Char('n', "-.");
var o = new Char('o', "---");
var p = new Char('p', ".---");
var q = new Char('q', "--.-");
var r = new Char('r', ".-.");
var s = new Char('s', "...");
var t = new Char('t', "-");
var u = new Char('u', "..-");
var v = new Char('v', "...-");
var w = new Char('w', ".--");
var x = new Char('x', "-..-");
var y = new Char('y', "-.-");
var z = new Char('z', "--..");

console.log(a.toString());


console.log("\n");
console.log("====================================================");
console.log("\n");

// ================================================================

function Font(name, chars) {
    this.name = name;
    this.chars = chars;
}

var alphabet = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];

Font.prototype.getCharDelimiter = function () {
    return " ";
};

Font.prototype.render = function (text) {
    var rendered = "";
    var delimiter = this.getCharDelimiter();
    for (var i = 0; i < text.length; i++) {
        for (var j = 0; j < this.chars.length; j++) {
            if (text.charAt(i) == this.chars[j].value) {
                rendered = rendered.concat(this.chars[j].representation);
                rendered = rendered.concat(delimiter);
            }
        }
    }
    return rendered;
};

Font.prototype.write = function (text, output) {
    output = output || console.log;
    if (typeof output === "function") output(this.render(text));
};

Font.prototype.toString = function () {
    return this.name + ':' + this.chars + " ";
};

var type = new Font("italic", alphabet);

console.log(type.toString());
type.write("abcd");
console.log(type.render("abcd"));

console.log("\n\n");
console.log("====================================================");
console.log("\n\n");

var morseFont = new Font("morseFont", alphabet);

morseFont.getCharDelimiter = function() {
    return "/";
};

morseFont.render = function (text) {
  text.toLowerCase();
    var rendered = "";
    var delimiter = this.getCharDelimiter();
    for (var i = 0; i < text.length; i++) {
        for (var j = 0; j < this.chars.length; j++) {
            if (text.charAt(i) == this.chars[j].value) {
                rendered = rendered.concat(this.chars[j].representation);
                rendered = rendered.concat(delimiter);
                break;
            }
        }
    }
    return rendered;
};

morseFont.write("abc", console.log());
console.log(morseFont.toString());
console.log("\n\n");
console.log("====================================================");
console.log("\n\n");