
/*
Esercizio di oggi: Lista della spesa con ciclo while nome repo: js-lista-spesa
Consegna:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
Consigli:
Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while
*/

let lista = ['pane', 'pasta', 'vino', 'sale','cocacola', 'rum'];
console.log(lista[0]);


let ul = document.getElementById('listaspesa');

let i = 0;
while (i < lista.length){
    let li = document.createElement('li');
    let strong = document.createElement('strong');
    
    ul.appendChild(li).appendChild(strong).appendChild(document.createTextNode(lista[i]));

    i++;
}
