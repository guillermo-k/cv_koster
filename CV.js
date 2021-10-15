var fecha= new Date;
var año=fecha.getFullYear();
var mes=fecha.getMonth();
var dia=fecha.getDay();
var edad
if(mes>2 || (mes==2 & dia>=10)){
    var edad= (año-1985);
} else{
    var edad= (año-1986);
}
const a = document.querySelector('#edad')
a.insertAdjacentText("beforebegin",edad)
