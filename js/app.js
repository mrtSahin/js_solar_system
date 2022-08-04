

const input=document.querySelector('input')

const calculateBtn=document.querySelector('.calculateBtn')
const resultDiv=document.querySelector('.resultDiv')
const img=document.querySelector('img')
const h3=document.querySelector('h3')
const span=document.querySelector('span')
const section=document.querySelector('section')
const weight=document.querySelector('#weight')

const dropbtn=document.querySelector('.dropbtn')
const as=document.querySelectorAll('a')

let kutle
input.addEventListener('blur',e=>{
    kutle=e.target.value
    return kutle
})

let yerCekimIvmesi
as[0].addEventListener('click',e=>{
    dropbtn.innerHTML=e.target.innerHTML
    yerCekimIvmesi=9.8
    return yerCekimIvmesi
})
as[1].addEventListener('click',e=>{
    dropbtn.innerHTML=e.target.innerHTML
    yerCekimIvmesi=24,79
    return yerCekimIvmesi
})
as[2].addEventListener('click',e=>{
    dropbtn.innerHTML=e.target.innerHTML
    yerCekimIvmesi = 3,721
    return yerCekimIvmesi
})
as[3].addEventListener('click',e=>{
    dropbtn.innerHTML=e.target.innerHTML
    yerCekimIvmesi=8,87
    return yerCekimIvmesi
})
as[4].addEventListener('click',e=>{
    dropbtn.innerHTML=e.target.innerHTML
    yerCekimIvmesi=3,7
    return yerCekimIvmesi
})
as[5].addEventListener('click',e=>{
    dropbtn.innerHTML=e.target.innerHTML
    yerCekimIvmesi=10,44
    return yerCekimIvmesi
})
as[6].addEventListener('click',e=>{
    dropbtn.innerHTML=e.target.innerHTML
    yerCekimIvmesi=8,87
    return yerCekimIvmesi
})
as[7].addEventListener('click',e=>{
    dropbtn.innerHTML=e.target.innerHTML
    yerCekimIvmesi=1,62
    return yerCekimIvmesi
})
as[8].addEventListener('click',e=>{
    dropbtn.innerHTML=e.target.innerHTML
    yerCekimIvmesi=11,15
    return yerCekimIvmesi
})





calculateBtn.addEventListener('click',()=>{
    
    
    if(dropbtn.innerHTML!='Select Planet' &&  !isNaN(kutle)){
        resultDiv.style.display='flex'
        img.style.display='flex'
        section.style.display='grid'
        h3.style.display='none'
        img.src='../imgs/'+dropbtn.innerHTML+'.png'
        span.innerHTML=dropbtn.innerHTML+'&nbsp;'
        span.style.fontWeight="bold"
        let agirlik=yerCekimIvmesi*kutle
        weight.innerHTML=agirlik.toFixed(1)+'N'
    }
    if(isNaN(kutle)||kutle==''){
        img.style.display='none'
        section.style.display='none'
        h3.style.display='flex'
        h3.innerHTML='Mass must be number'
    }
    
})