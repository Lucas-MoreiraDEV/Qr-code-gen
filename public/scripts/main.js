const btn = document.querySelector('button');
const img = document.querySelector('img');

btn.addEventListener('click', async () => {
    let texto = document.querySelector('input').value;
    
    try {
    const qrCodeDataURL = await QRCode.toDataURL(texto, {
      color: {
        dark: "#000000ff",
        light: "#f0f8ff",
      }});
    img.src = qrCodeDataURL;
  } catch (error) {
    console.log(error)
  }
});

