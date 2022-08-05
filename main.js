// Create an array of five numbers 3, 6, 2, 8, 3.Create a function that determines if there is a duplicated number in the array.

var array = [ 3, 6, 2, 8, 3]
    console.log(array);

var findDuplicates = array => array.filter((item, index) => array.indexOf(item) !== index)
var duplicateElement = findDuplicates(array);
console.log("The number that is duplicate is: " +  duplicateElement);


// Create an array of five numbers: 2, 9, 4, 5, 6. Determine the highest number in the array and print.

var arry = [ 2, 9, 4, 5, 6];
var largest= 0;

for (i=0; i<=largest;i++){
    if (arry[i]>largest) {
        var largest=arry[i];
    }
}
console.log("The highest number is " + largest);

// Create a program that prints all the prime numbers up until 100.

for ( var count=2; count<=100; count++){
    var notPrime = false;

    for(var i=2; i<=count; i++){
        if(count%i===0 && i!==count){
            notPrime = true;
        }
    }
    if(notPrime === false){
        console.log(count);
    }
}

// Create a Guess The Number game, where the program will generate a random number from 1 to 9, 
// and the user will be asked to enter a number until they guess correctly. 
// The program most validate if the user enter a string.

const num = Math.ceil(Math.random() * 9);
console.log(num);
 const gnum = prompt('Guess the number between 1 and 9 inclusive');

 if (gnum == num){
   console.log('Matched');
 }else{
   console.log('The number was ' + gnum);
 }
 while (num == null || /\D/.test(num) || num == ""){
    num = prompt("Enter a VALID number: ");
 }

//  Create a function that adds a tip of 20% automatically to any receipt. You must print the total;
// the initial price, plus the tip.

var cantidad,precio,desc,compra,pagar;

	precio = parseFloat(prompt("Ingresar precio"));
	cantidad = parseFloat(prompt("Ingresar cantidad"));

	compra = precio*cantidad;
	desc = compra*0.20;
	pagar = compra-desc;

	document.write("El desceunto es: " + desc + " ");
	document.write("El total a pagar es: " + pagar);