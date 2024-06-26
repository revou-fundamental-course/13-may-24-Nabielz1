let segitigaButton = document.getElementById("segitigaButton");
let jajarButton = document.getElementById("jajarButton");
let segitiga = document.getElementById("segitiga");
let jajar = document.getElementById("jajar");
let alasInputLuasSegitiga = document.getElementById("alasLuasSegitiga");
let tinggiInputLuasSegitiga = document.getElementById("tinggiLuasSegitiga");
let sisi1InputKelilingSegitiga = document.getElementById("sisi1KelilingSegitiga");
let sisi2InputKelilingSegitiga = document.getElementById("sisi2KelilingSegitiga");
let sisi3InputKelilingSegitiga = document.getElementById("sisi3KelilingSegitiga");
let hitungButtonLuasSegitiga = document.getElementById("hitungButtonLuasSegitiga");
let hitungButtonKelilingSegitiga = document.getElementById("hitungButtonKelilingSegitiga");
let resetButtonLuasSegitiga = document.getElementById("resetButtonLuasSegitiga");
let resetButtonKelilingSegitiga = document.getElementById("resetButtonKelilingSegitiga");
let hasil1ElementLuasSegitiga = document.getElementById("hasil1LuasSegitiga");
let hasil2ElementLuasSegitiga = document.getElementById("hasil2LuasSegitiga");
let hasil3ElementLuasSegitiga = document.getElementById("hasil3LuasSegitiga");
let hasil1ElementKelilingSegitiga = document.getElementById("hasil1KelilingSegitiga");
let hasil2ElementKelilingSegitiga = document.getElementById("hasil2KelilingSegitiga");
let hasil3ElementKelilingSegitiga = document.getElementById("hasil3KelilingSegitiga");

let alasInputLuasJajar = document.getElementById("alasLuasJajar");
let tinggiInputLuasJajar = document.getElementById("tinggiLuasJajar");
let sisi1InputKelilingJajar = document.getElementById("sisi1KelilingJajar");
let sisi2InputKelilingJajar = document.getElementById("sisi2KelilingJajar");
let hitungButtonLuasJajar = document.getElementById("hitungButtonLuasJajar");
let hitungButtonKelilingJajar = document.getElementById("hitungButtonKelilingJajar")
let resetButtonLuasJajar = document.getElementById("resetButtonLuasJajar");
let resetButtonKelilingJajar = document.getElementById("resetButtonKelilingJajar");
let hasil1ElementLuasJajar = document.getElementById("hasil1LuasJajar");
let hasil2ElementLuasJajar = document.getElementById("hasil2LuasJajar");
let hasil3ElementLuasJajar = document.getElementById("hasil3LuasJajar");
let hasil1ElementKelilingJajar = document.getElementById("hasil1KelilingJajar");
let hasil2ElementKelilingJajar = document.getElementById("hasil2KelilingJajar");
let hasil3ElementKelilingJajar = document.getElementById("hasil3KelilingJajar");

segitigaButton.addEventListener("click", function() {
    segitiga.style.display = "block";
    jajar.style.display = "none";
});

jajarButton.addEventListener("click", function() {
    segitiga.style.display = "none";
    jajar.style.display = "block";
});

segitiga.style.display = "none";
jajar.style.display = "none";

hitungButtonLuasSegitiga.addEventListener("click", function() {

    let alas = parseFloat(alasInputLuasSegitiga.value);
    let tinggi = parseFloat(tinggiInputLuasSegitiga.value);

    if (isNaN(alas) || isNaN(tinggi)) {
        hasil1ElementLuasSegitiga.textContent = "Harap masukkan nilai yang valid untuk alas dan tinggi.";
        return;
    }

    let luas = 0.5 * alas * tinggi;

    hasil1ElementLuasSegitiga.textContent = "L = 1/2 x a x t";
    hasil2ElementLuasSegitiga.textContent = "L = 1/2 x " + alas + " x " + tinggi;
    hasil3ElementLuasSegitiga.textContent = "Luas segitiga adalah: " + luas;
});

resetButtonLuasSegitiga.addEventListener("click", function() {

    alasInputLuasSegitiga.value = '';
    tinggiInputLuasSegitiga.value = '';

    hasil1ElementLuasSegitiga.textContent = '';
    hasil2ElementLuasSegitiga.textContent = '';
    hasil3ElementLuasSegitiga.textContent = '';
});

hitungButtonKelilingSegitiga.addEventListener("click", function() {

    let sisi1 = parseFloat(sisi1InputKelilingSegitiga.value);
    let sisi2 = parseFloat(sisi2InputKelilingSegitiga.value);
    let sisi3 = parseFloat(sisi3InputKelilingSegitiga.value);

    if (isNaN(sisi1) || isNaN(sisi2) || isNaN(sisi3)) {
        hasil1ElementKelilingSegitiga.textContent = "Harap masukkan nilai yang valid untuk alas dan tinggi.";
        return;
    }

    let keliling = sisi1 + sisi2 + sisi3;

    hasil1ElementKelilingSegitiga.textContent = "K = S1 + S2 + S3";
    hasil2ElementKelilingSegitiga.textContent = "K = " + sisi1 + " + " + sisi2 + " + " + sisi3;
    hasil3ElementKelilingSegitiga.textContent = "Keliling segitiga adalah: " + keliling;
});

resetButtonKelilingSegitiga.addEventListener("click", function() {

    sisi1InputKelilingSegitiga.value = '';
    sisi2InputKelilingSegitiga.value = '';
    sisi3InputKelilingSegitiga.value = '';

    hasil1ElementKelilingSegitiga.textContent = '';
    hasil2ElementKelilingSegitiga.textContent = '';
    hasil3ElementKelilingSegitiga.textContent = '';
});

hitungButtonLuasJajar.addEventListener("click", function() {

    let alas1 = parseFloat(alasInputLuasJajar.value);
    let tinggi1 = parseFloat(tinggiInputLuasJajar.value);

    if (isNaN(alas1) || isNaN(tinggi1)) {
        hasil1ElementLuasJajar.textContent = "Harap masukkan nilai yang valid untuk alas dan tinggi.";
        return;
    }

    let luas1 = alas1 * tinggi1;

    hasil1ElementLuasJajar.textContent = "L = a x t";
    hasil2ElementLuasJajar.textContent = "L = " + alas1 + " x " + tinggi1;
    hasil3ElementLuasJajar.textContent = "Luas jajar genjang adalah: " + luas1;
});

resetButtonLuasJajar.addEventListener("click", function() {

    alasInputLuasJajar.value = '';
    tinggiInputLuasJajar.value = '';

    hasil1ElementLuasJajar.textContent = '';
    hasil2ElementLuasJajar.textContent = '';
    hasil3ElementLuasJajar.textContent = '';
});

hitungButtonKelilingJajar.addEventListener("click", function() {

    let sisi1j = parseFloat(sisi1InputKelilingJajar.value);
    let sisi2j = parseFloat(sisi2InputKelilingJajar.value);

    if (isNaN(sisi1j) || isNaN(sisi2j)) {
        hasil1ElementKelilingJajar.textContent = "Harap masukkan nilai yang valid untuk alas dan tinggi.";
        return;
    }

    let keliling1 = 2*sisi1j + 2*sisi2j;

    hasil1ElementKelilingJajar.textContent = "K = 2a + 2b";
    hasil2ElementKelilingJajar.textContent = "K = 2 x " + sisi1j + " + " + "2 x " + sisi2j;
    hasil3ElementKelilingJajar.textContent = "Keliling jajar genjang adalah: " + keliling1;
});

resetButtonKelilingJajar.addEventListener("click", function() {

    sisi1InputKelilingJajar.value = '';
    sisi2InputKelilingJajar.value = '';
    
    hasil1ElementKelilingJajar.textContent = '';
    hasil2ElementKelilingJajar.textContent = '';
    hasil3ElementKelilingJajar.textContent = '';
});



