
// //Declaration +affectation
// let prenom ='khadija';
// let  age = '37';
// let enligne = true;
// let choix = null;
// console.log(typeof prenom);
// console.log(typeof age);
// console.log(typeof enligne);
// console.log(typeof choix);
// //Concenténation
// console.log(prenom + ' '+ age +'ans');
// console.log("Je m'appelle ${prenom},j'ai ${age} ans");
// //Echapper un caractere
// console.log('il fait "beau aujourd\'hui"');
// //Déclaration  et affaection de const
// const ville = 'Dakar';
// //Array
// let tab =['Pommes',30,true, ['bleu','rouge'], prenom];
// //Grandeur du tab
// console.log(tab.length);
// //index 1
// console.log(tab[1]);
// //Mot rouge
// console.log(tab[3][1]);

// // Object
// let personne = {
//         prenom: 'khadija',
//         age: '37',
//         adresse: {
//         rue: '12 rue de la mare',
//         ville: 'Dakar',
// }
// };
// console.log(personne.prenom);
// console.log(personne['prenom']);
// console.log(personne.adresse.rue);

// let a = 5;
// let b =2 ;
// //addition
// console.log(a+b);
// //SOUSTACtion
// console.log(a-b);
// //DIVISION
// console.log(a/b);
// //MODULO
// console.log(a%b);
// //Incrementation
// a += 1 //a++ equivaut a : a=a+1
// console.log(a);
// //Decrementer
// b -= 1;//b-- equivaut a : a=a-1
// console.log(b);

//Condition IF
// let age =prompt ('Saisir votre age');
// if(age <18) {
//         alert('Vous etes mineur');
// }
// else if (age >= 70) {
//         alert('Vous etes Senior');
// }
// else{
//         alert('Vous etes Majeur');
// }
//Condition SWITCH
// let vehicule =prompt('Quel vehicule souhaitez vous ? peugeot,bmw,ferarri');
// let km = prompt('Combien de km souhaitez vous faire ?');

// const prix = {
// peugeot:0.4,
// bmw:0.6,
// ferarri:0.8,
// };
// switch(vehicule){
//         case 'peugeot':{
//                 alert('Vous payerez : ' + prix.peugeot * km + '£');
//                 break;
//         }

//         case 'bmw':{
//                 alert('Vous payerez : ' + prix.bmw * km + '£');
//                 break;
//         }

//         case 'ferarri':{
//                 alert('Vous payerez : ' + prix.ferarri * km + '£');
//                 break;
//         }
//         default:
//        alert('Veuillez choisir un véhicule proposé');         
// }



//BOUCLE FOR
// for(let i = 0; i < 3; i += 1){
//    console.log('Boucle :' + i);     
// }
// //Parcourir un tab
// let tab = ['Pomme','Bannane', 'Fraise'];
// console.log('--For--');
// for(let i = 0 ; i < tab.length; i += 1){
//         console.log(tab[i]);
// }

// console.log('--While--');
// let j= 0;
// while(j < tab.length){
//         console.log(tab[j]);
//         j += 1;
// }

// console.log('-- Do While--');
// let k= 0;
//  do{
//        console.log(tab[k]);
//         k += 1;
// } while (k < tab.length);
