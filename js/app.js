/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/

var changeName = document.getElementById('name1');
changeName.innerHTML = 'Tay-Tay';

/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/

var changePosition = document.getElementById('position2');
changePosition.innerHTML = 'Project Manager';

/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/

var changeAlias = document.getElementById('alias3');
changeAlias.innerHTML = 'Concatenation';

/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/

var changeProfile = document.getElementsByClassName('profile');
console.log(changeProfile)
changeProfile[0].innerHTML = 'Dave Chappelle'

/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/

var changeProfile = document.getElementsByClassName('profile');
console.log(changeProfile)
changeProfile[1].innerHTML = 'wataaaaah'

/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/

var changeAlias2 = document.getElementsByClassName('alias');
console.log(changeAlias2)
changeAlias2[2].innerHTML = 'idk'

/*7. David Ige

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "David Ige".

Append this div element to the nameParent div*/

var makeName = document.createElement('div');
makeName.id = 'name7';
makeName.innerHTML = 'David Ige'
nameParent.appendChild(makeName);
 
/*8. The Dos Equis Dude

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Stay Thirsty My Friends".

Append this div element to the aliasParent div.*/

var makeAlias = document.createElement('div');
makeAlias.id = 'alias8';
makeAlias.innerHTML = 'Stay thirsty my friends.'
aliasParent.appendChild(makeAlias);

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

var newProfile = document.createElement('div')
newProfile.id = 'profileBao'
newProfile.innerHTML = "Hi, im from WeChat and I'm super cute";
name9.appendChild(newProfile);

var newHobbies = document.createElement('div');
newHobbies.id = 'hobbies';
newHobbies.innerHTML = 'I like to chat with my friends all day on WeChat';
profileBao.appendChild(newHobbies);

