import qr from "qr-image";
import fs from "fs";

const botaoEnviar = document.getElementById("buttonEnviar");
const linkDigitado = document.getElementById("dado");


botaoEnviar.addEventListener("click", () => {
    var qrCode = qr.image(linkDigitado.value)

    fs.createWriteStream('QrCode.png');

    post
})