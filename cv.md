# Siarhei Sidarovich
### Junior Frontend Developer
******************************
### Contact information:
**Phone:** +375 29 2430550    
**E-mail:** siarheisidorovich@gmail.com    
**Telegram:** @siarhei_sidarovich    
[LinkedIn](www.linkedin.com/in/siarhei-sidarovich-b09759182)    
********************************
### Abaut me
I am a frontend developer(graduate) with one years of experience.
Strong creative and analytical skills. Team player with an eye for
detail.
*************************
### Skills and Proficiency
* HTML5
* CSS (Preprocessor SCSS/SASS,
* BEM methodology)
* JavaScript (OOP, ES6+, DOM)
* React
* Redux
* TypeScript
* GitHub
* Figma (for web development)
********************************
### Code Examples
***Replace With Alphabet Position:*** *In this kata you are required to, given a string, replace every letter with its position in the alphabet.*
*If anything in the text isn't a letter, ignore it and don't return it.*
*"a" = 1, "b" = 2, etc.*
***Example***
`alphabetPosition("The sunset sets at twelve o' clock.")`
***Solutions***
```
function alphabetPosition(text) {
 let objectNum={a: 1,b: 2,c: 3,d: 4,e: 5,f: 6,g: 7,h: 8,i: 9,j: 10,k: 11,l: 12,m: 13,n: 14,o: 15,p: 16,q: 17,r: 18,s: 19,t: 20,u: 21,v: 22,w: 23,x: 24,y: 25,z: 26}
  let string="";
  for(i=0;i<text.length;i++){
    let symbl=text.charAt(i)
    let num=objectNum[symbl.toLowerCase()];
    if(typeof num !=='undefined'){
      string+=num+" ";
      }
     };
  return string.trim();
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."))
```
***********************************************************
### Education
* ***TEACHMESKILLS***
*Frontend developer(graduate)*
![Certificate](/img/Siarhei%20Sidarovich-01.jpg)
*************************************************
### Languages
* English - Pre-Intermediate
* Italian - Intermediate/Upper-intermediate