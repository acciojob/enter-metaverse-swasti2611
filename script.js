 let ptag=document.getElementById("status");
       let btn=document.getElementById("enterBtn");
     
      btn.addEventListener("click",(e)=>{
        let h1=document.createElement("h1");
	h1.innerText="Entered Metaverse";
	ptag.appendChild(h1);
})