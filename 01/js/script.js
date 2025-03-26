var titulo=document.getElementById("titulo");
titulo.innerText="Titulo Modificado";

var parrafos=document.getElementsByClassName("parrafo");
parrafos[0].innerText="Parrafo 1 modificado";
parrafos[1].innerText="Parrafo 2 modificado";
parrafos[2].innerText="Parrafo 3 modificado";

var body=document.getElementById("cuerpo");
cuerpo.style.backgroundColor="#f4f4f4";
cuerpo.style.textAlign="center";

titulo.style.color="#333";
titulo.style.fontStyle="forte";
titulo.style.marginBottom="15px";
titulo.style.text-Transform("uppercase");

parrafos.style.fontSize="18px";
parrafos.style.padding="10px";
parrafos.style.withd="60%";
parrafos.style.borderleft="5px solid";
parrafos.style.borderradio="5px";
parrafos.style.lineHeight="1.6";

parrafos[0].style.color="#e74c3c";
parrafos[0].style.backgroundColor="#ffe6e6";
parrafos[0]