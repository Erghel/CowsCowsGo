let location = document.getElementsByClassName('js-search-filters search-filters')[0];
let searchQuery = document.getElementById('search_form_input').value;
let link = document.createElement('a');
link.setAttribute('href', 'https://swisscows.com/web?culture=en&query='+searchQuery);
link.setAttribute('target', '_blank');
link.setAttribute('rel', 'noopener nofollow noreferrer');
link.innerHTML = "Swisscows";

location.appendChild(link);

