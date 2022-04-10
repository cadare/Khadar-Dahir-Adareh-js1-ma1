const cats = [{
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// Question 1:

const cat = {
    complain: function () {
        console.log('Meow')
    }

}
cat.complain()


//Question 2

var heading = document.querySelector('h3');
heading.innerHTML = 'heading Updated';

console.log(heading)

//Question 3
heading.style.fontSize = '2em'


//Question 4
heading.classList.add("supheading");

// Question 5:

let paragraphs = document.querySelectorAll('p');

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = 'red';
}

// Question 6:

let resultsContainer = document.querySelector('.results');
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = 'yellow';


// Question 7:


function newFunc(list) {
    var result = [];
    for (let i = 0; i < list.length; i++) {
        result = list[i].name;
        console.log(result)

    }

}
newFunc(cats)

// Question 8:

function createCats(cats) {

    for (let i = 0; i < cats.length; i++) {

        let div = document.createElement('div');
        let names = document.createElement('h5');
        let ages = document.createElement('p');


        let catName = cats[i].name;
        let catAge = cats[i].age;

        if (typeof catAge == "undefined") {
            catAge = 'Age unknown'

        }

        names.innerHTML = catName;
        ages.innerHTML = catAge
        div.appendChild(names)
        div.appendChild(ages);

        document.querySelector('.cat-container').appendChild(div);

    }

 return cats;



}
 createCats(cats) 

