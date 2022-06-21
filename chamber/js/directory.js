const requestURL = 'json/data.json';
const cards = document.querySelector('#directory-body');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const websites = jsonObject['websites'];
    websites.forEach(displayWebsite);
  });


function displayWebsite(website) {
    let card = document.createElement('section');
    card.id = "website-card";
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');

    h2.textContent = `${website.name}`
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', website.picture);
    portrait.classList.add("website-logo");
    portrait.setAttribute('alt', `${website.name}`);
    portrait.setAttribute('loading', 'lazy');
    let memberContainer = document.createElement("div");
    memberContainer.id = "member-container";
    let siteLink = document.createElement("a");
    siteLink.setAttribute('href', `${website.website}`)
    let level = document.createElement("p");
    level.id = "website-level";
    let levelImg = document.createElement("img");
    if(website.level == "Gold"){
        levelImg.setAttribute("src", "images/directory/gold.png")
        levelImg.classList.add("gold")
    }if(website.level == "Silver"){
        levelImg.setAttribute("src", "images/directory/silver.png")
        levelImg.classList.add("silver")
    }if(website.level == "Bronze"){
        levelImg.setAttribute("src", "images/directory/bronze.png")
        levelImg.classList.add("bronze")
    }
    let address = document.createElement("p");
    let phone = document.createElement("p");

    address.innerHTML = `<strong>Address:</strong> ${website.address}`;
    phone.innerHTML = `<strong>Phone: </strong>${website.phone}`;
    siteLink.innerHTML = `<strong>${website.website}</strong>`
    level.innerHTML = `<strong>${website.level} members</strong>`

    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(memberContainer);
    memberContainer.appendChild(levelImg);
    memberContainer.appendChild(level);
    card.appendChild(portrait);
    card.appendChild(siteLink)
    card.appendChild(address);
    card.appendChild(phone);

  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('#directory-body').appendChild(card);
  }