var body = document.body //defines body so it can be appended to the h3

var friendNames = ['Baby Yoda', 'Mando', 'Luke', 'Kylo Ren', 'Chewbacca']; //friend variables

var locationNames = ['Tatoonie', 'Coruscant', 'Naboo',
    'Serenno', 'Hoth', 'Millennium Falcon', 'Death Star', 'Yavin',
    'Bespin', 'Nevarro', 'Arvala-7', 'Sorgan', 'Star Destroyer', 'podracer',   // location variables
    'starfighter', 'TIE Fighter', 'Chalmuns Cantina', 'Endor', 'Mustafar', 'Kashyyyk'];

var weaponNames = ['lightsaber', 'rubber duck', 'blender', 'rock', 'violin', 'penny',       //weapon variables
    'ewok', 'garbage can', 'furby', 'porg'];


//ready function to make sure the page works
$(document).ready(function () {

    // for loop to display 'accusation #'
    for (var i = 1; i < 101; i++) {
        var h3 = $('<h3 class = h3>Accusation ' + (i) + '</h3>') //creates the h3 accusatoin header 
        $(body).append(h3) //appends the h3 to the body
        var clickAlert = randomClue(i); //defines a click alert to the function 
        h3.click(clickAlert) //creates the click alert
    
        
    } 


    //function the create the random array alert statement
    function randomClue(num) {
        return function () {
            //modulus(%) that sorts through and randomizes the friendNames array
            var friends = num % friendNames.length
            console.log(friends);

            //modulus(%) that sorts through and randomizes the locationNames
            var locations = num % locationNames.length
            console.log(locations);

            //modulus(%) that sorts through and randomizes the weaponNames
            var weapons = num % weaponNames.length
            console.log(weapons);

            //alert popup that give the accusation statement randomized from the modulus + arrays(%)
            alert('I accuse ' + friendNames[friends] + ' with the ' + weaponNames[weapons] + ' in the ' + locationNames[locations] + '!')

        }
    }
})




// Accusation (i) : 'I accuse ' (friends), ' with the ' (weapons) ' in the ' (locations)
