/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/


/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/


/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/


/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/



/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/



/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/



/*7. David Ige

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "David Ige".

Append this div element to the nameParent div*/

 
/*8. The Dos Equis Dude

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Stay Thirsty My Friends".

Append this div element to the aliasParent div.*/



//Final Boss
/*9. Create your own profile.*/

var imgElem = document.getElementsByTagName('img');
console.log(imgElem);

var divBlock = document.getElementsByClassName('block3')
console.log(divBlock)

imgElem[8].src = 'https://bit.ly/2RhiB9x'

var newName = document.createElement('div');
newName.id = 'name9';
newName.innerHTML = 'Xiao bao bao';
divBlock[2].appendChild(newName);

var posBlock = document.getElementsByClassName()