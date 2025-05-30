let imgBox=document.getElementById("imgBox");
let qrImage=document.getElementById("qrImage");
let qrText=document.getElementById("qrText");
let btn=document.getElementById("btn")
function generateQR(){
    let text=qrText.value.trim();
    if(text===""){
        qrText.classList.add('error');
        setTimeout(()=>{
            qrText.classList.remove('error');
        },1000);
    }
    else{
        qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+text;
        imgBox.classList.add("show-img");
    }
}
btn.addEventListener('click',generateQR);