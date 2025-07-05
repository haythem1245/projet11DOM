let vars = document.querySelectorAll(".fa-heart")
for(let i=0;i<vars.length;i++){
  let v =vars[i];

  v.addEventListener("click",()=>{
  v.classList.toggle("liked");
})

}
let bts = document.querySelectorAll(".fa-plus-circle");
let bts2 = document.querySelectorAll(".fa-minus-circle");
let rp = document.querySelectorAll(".quantity");

let total =document.querySelector(".total");
let prix = document.querySelectorAll(".unit-price");

const updateTotal =()=>{
  somme=0;
  for(let i=0;i<prix.length;i++)
  {let p = parseFloat(prix[i].textContent);
    let q = parseInt(rp[i].textContent);
    somme += p * q;}
    total.textContent = "Total: " + somme + " $";
};



let compt=[];
for (let i = 0; i < rp.length; i++) {
  compt.push(0);
}
const inct =(i)=> ++compt[i];
const dcrt =(i)=> {
  if(compt[i]>0){
    compt[i]--;
  }
  return compt[i];
}

for(let i =0;i<bts.length;i++){
  let b1=bts[i];
  b1.addEventListener("click",()=>{
    rp[i].textContent=inct(i);
    updateTotal();
  })
}
for(let i =0;i<bts2.length;i++){
  let b2=bts2[i];
  b2.addEventListener("click",()=>{
    rp[i].textContent=dcrt(i);
    updateTotal();
  })
}



let sup = document.querySelectorAll(".fa-trash-alt");

for (let i=0;i<sup.length;i++){
  let s=sup[i];
  s.addEventListener("click",()=>{
    s.closest(".card-body").remove();
    updateTotal();
  })
}
