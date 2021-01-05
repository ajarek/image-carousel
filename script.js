const img=['Nature.jpg','Nature1.jpg','Nature2.jpg','Nature3.jpg']
const imgBox= document.querySelector('.imgBox');
window.setInterval(auto,3000)
k=0
function auto(){
    if(k>=4){k=0}
    imgBox.style. background=`url(${img[k]})`
     k++
}
i=0
function next(){
  
    if(i>=4){i=0}
    imgBox.style. background=`url(${img[i]})`
    i++   
}
j=3
function prev(){
    if(j<0){j=3}
    imgBox.style. background=`url(${img[j]})`
   j--
}
