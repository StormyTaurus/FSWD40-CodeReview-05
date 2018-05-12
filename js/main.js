var Persons =[
	{
		name: 'John',
		surname: 'Doe',
		favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
		age: 25,
		myPhoto: "img/image1.png",
		likes: 35 //numeric property used to store likes
	},

	{
		name: 'Betti',
		surname: 'Pötsch',
		favoritePerformers: ["Jason Derulo", "Pink", "David Guetta"],
		age: 24,
		myPhoto: "img/image2.png",
		likes: 25 //numeric property used to store likes
	},

	{
		name: 'Chris',
		surname: 'Schrawuzl',
		favoritePerformers: ["Papa Roach", "Linkin Park", "Garbage"],
		age: 23,
		myPhoto: "img/image3.png",
		likes: 45 //numeric property used to store likes
	},

	{
		name: 'Bine',
		surname: 'Wagner',
		favoritePerformers: ["Backstreet Boys", "Take That", "Spice Girls"],
		age: 30,
		myPhoto: "img/image4.png",
		likes: 15 //numeric property used to store likes
	},



];



//Info First Person

document.getElementById("namePerson1").innerHTML = Persons[0].name;

document.getElementById("surnamePerson1").innerHTML = Persons[0].surname;

document.getElementById("favoritePerformersPerson1").innerHTML = Persons[0].favoritePerformers;

document.getElementById("agePerson1").innerHTML = Persons[0].age;

document.getElementById("picturePerson1").src= Persons[0].myPhoto;


//Info Second Person

document.getElementById("namePerson2").innerHTML = Persons[1].name;

document.getElementById("surnamePerson2").innerHTML = Persons[1].surname;

document.getElementById("favoritePerformersPerson2").innerHTML = Persons[1].favoritePerformers;

document.getElementById("agePerson2").innerHTML = Persons[1].age;

document.getElementById("picturePerson2").src=Persons[1].myPhoto;

//Info Third Person

document.getElementById("namePerson3").innerHTML = Persons[2].name;

document.getElementById("surnamePerson3").innerHTML = Persons[2].surname;

document.getElementById("favoritePerformersPerson3").innerHTML = Persons[2].favoritePerformers;

document.getElementById("agePerson3").innerHTML = Persons[2].age;

document.getElementById("picturePerson3").src=Persons[2].myPhoto;

//Info Fourth Person

document.getElementById("namePerson4").innerHTML = Persons[3].name;

document.getElementById("surnamePerson4").innerHTML = Persons[3].surname;

document.getElementById("favoritePerformersPerson4").innerHTML = Persons[3].favoritePerformers;

document.getElementById("agePerson4").innerHTML = Persons[3].age;

document.getElementById("picturePerson4").src=Persons[3].myPhoto;

// COUNTER

	var counter1 = Persons[0].likes;
    var counter2 = Persons[1].likes;
    var counter3 = Persons[2].likes;
    var counter4 = Persons[3].likes;

    document.getElementById("counterOutput1").innerHTML = counter1;

     document.getElementById("counterOutput2").innerHTML = counter2;

      document.getElementById("counterOutput3").innerHTML = counter3;

       document.getElementById("counterOutput4").innerHTML = counter4;


    $(document).ready(function() {

        $("#like1").click(function() {
            counter1++;

            $("#counterOutput1").text(counter1);
        });

        $("#like2").click(function() {
            counter2++;

            $("#counterOutput2").text(counter2);
        });

        $("#like3").click(function() {
            counter3++;

            $("#counterOutput3").text(counter3);
        });

        $("#like4").click(function() {
            counter4++;

            $("#counterOutput4").text(counter4);
        });


    });

