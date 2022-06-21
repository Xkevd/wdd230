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
    h2.id = "website-title";
    let portrait = document.createElement('img');

    h2.textContent = `${website.name}`
    
    // Site logo //
    portrait.setAttribute('src', website.picture);
    portrait.classList.add("website-logo");
    portrait.setAttribute('alt', `${website.name}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.id = "website-logo";

    // Membership levels //
    let memberContainer = document.createElement("div");
    memberContainer.id = "member-container";
    let siteLink = document.createElement("a");
    siteLink.setAttribute('href', `${website.website}`)
    let level = document.createElement("p");
    level.id = "website-level";
    let levelImg = document.createElement("img");
    levelImg.id = "level-img";
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

    // Other data //
    let address = document.createElement("p");
    address.id = "website-address";
    let phone = document.createElement("p");
    phone.id = "website-phone";

    address.innerHTML = `<strong>Address:</strong> ${website.address}`;
    phone.innerHTML = `<strong>Phone: </strong>${website.phone}`;
    siteLink.innerHTML = `<strong>${website.website}</strong>`
    level.innerHTML = `<strong>${website.level} members</strong>`

    // Add elements
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