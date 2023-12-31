const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

const directoryUrl = 'https://tyrpak.github.io/wdd230/chamber/data/directory.json';

const cards = document.querySelector('.grid');

async function getMemberData() {
    const response = await fetch(directoryUrl);
    const data = await response.json();
    displayMembers(data.members);
  }
  
getMemberData();

const displayMembers = (members) => {
    members.forEach((member) => {
    
    let card = document.createElement('section');
    let name = document.createElement('h2'); // fill in the blank
    let sign = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');

    
    // Build the image by setting all the relevant attributes
    sign.setAttribute('src', member.imageurl);
    sign.setAttribute('alt', `Sign of ${member.name}`); // fill in the blank
    sign.setAttribute('loading', 'lazy');
    sign.setAttribute('width', '256');
    sign.setAttribute('height', '256');
    // Build the h2 content out to show the member
    name.innerHTML = `<a href="${member.websiteurl}">${member.name}</a>`; // fill in the blank

    address.textContent = `Address: ${member.address}`;   
    phone.textContent = `Phone: ${member.phone}`;   

    // Append the section(card) with the created elements
    card.appendChild(sign);
    card.appendChild(name); 
    
    card.appendChild(address);
    card.appendChild(phone);
    
    cards.appendChild(card);
  
    });
  }
