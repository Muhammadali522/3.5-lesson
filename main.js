const text = prompt("Ismingizni qriting");
const harf = prompt("Harf kriting");
let KattaHarf = text.toLowerCase();
if(KattaHarf.includes( harf )){
    alert(`${KattaHarf} isminda ${harf} mavjud`)
}else{
    alert(`${KattaHarf} isminda ${harf} mavjud emas`)
}