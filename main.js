let name = prompt("Ismingizni kiriting");
let word = prompt("Birorta harf kiriting");
let include = name.includes(word)

if (include) {
    alert(name + " ismining ichida " + word + " harfi mavjud");
}else{
    alert(name + " ismining ichida " + word + " harfi mavjud emas");
}