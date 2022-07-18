const requestURL = 'json/data.json';
const cards = document.querySelector('#temples-container');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const temples = jsonObject['temples'];
    temples.forEach(displayTemples);
  });

function displayTemples(temple) {
    let card = document.createElement('section');
    //card.className += "temple-card";
    //Temple Card//
    let h2 = document.createElement('h2');
    //h2.className += "temple-title";
    h2.textContent = `${temple.country}`;

    let portrait = document.createElement('img');
    portrait.className += "portrait";
    portrait.setAttribute('src', temple.picture);
    portrait.setAttribute('alt', `${temple.country}`);
    
    let address = document.createElement("p");
    let address_title = document.createElement("h2");
    address_title.textContent = `Address`
    address.className += "temple-address";
    address.textContent = `${temple.address}`;
    let phone = document.createElement("p");
    phone.className += "temple-phone";
    phone.textContent = `${temple.phone}`;
    let phone_title = document.createElement("h2");
    phone_title.textContent = "Phone";
    let services = temple.services;
    let services_title = document.createElement("h2");
    services_title.textContent = `Services`;
    services_list = services.split(";");
    let history = temple.history;
    let history_title = document.createElement("h2");
    history_title.textContent = "History";
    history_list = history.split(";");
    // Add elements //
    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(address_title)
    card.appendChild(address);
    card.appendChild(phone_title)
    card.appendChild(phone);
    card.appendChild(services_title);
    let servicesLen = services_list.length
    for (var i=0; i<servicesLen; i++){
        let service_element = document.createElement("p");
        service_element.textContent = services_list[i];
        service_element.className += "service-element";
        card.appendChild(service_element)
    }
    card.appendChild(history_title);
    let historyLen = history_list.length
    for (var i=0; i<historyLen; i++){
      let history_element = document.createElement("p");
      history_element.textContent = history_list[i];
      history_element.className += "history-element";
      card.appendChild(history_element)
  }
    document.querySelector('#temples-container').appendChild(card);
    
  }
