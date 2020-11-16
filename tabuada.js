document.querySelector('#btn').addEventListener('click',() =>{
    let num, cont;
    num = document.querySelector('#num').value;
    num = parseInt(num);

    cont = 1;
    while (cont <11) {
        document.write(num + 'X'+ cont +" = " + num*cont);
        
        cont = cont + 1;
        document.write ("<br/>");
    }
});