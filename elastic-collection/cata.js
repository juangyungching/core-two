  fetch('https://api.airtable.com/v0/appmI7DNf6ICGvK0p/Table%201', {
  headers: {
    Authorization: 'Bearer keyYO5CGRG2VDUV0A', // this is your API key, starting with 'key...' found in your Airtable account
  },
  })

  .then(res => res.json()) // tells JS to expect data in json format
  .then(data => {
    console.log(data);

    let filterValue = 'all';
    const mangaContainer = document.querySelector('.content'); // tell JS about the div we added to our html file so we can put content inside it
    
    function generateContent(){
    
    mangaContainer.innerHTML = '';


    data.records
      .filter(manga => {
        return filterValue === 'all' ? manga : manga.fields.yearRange === filterValue; // if our dropdown is set to all, return evey item, otherwise only return items that match selected instrument type
      })
      .sort((a, b) => {
        return a.fields.title- b.fields.title;
      })
      .forEach(manga => {

          mangaContainer.innerHTML += `
          <div class="manga">
              <div class="cover-container">
                  <img src="${manga.fields.comicCover[0].thumbnails.large.url}">
              </div>
              <h4>${manga.fields.title}</h4>
              <h5>${manga.fields.artistName}</h5>
              <h6>${manga.fields.yearRange}</h6>
              <h2>${manga.fields.style}</h2>
          </div>
          `;
        });
      }
      
      generateContent();

document.querySelector('#year-range-filter').addEventListener('change',() => { 
    filterValue = event.target.value;
    generateContent();

})

      });





   // listen for change event on select dropdown fromHTML
   //filter.addEventListener('change', () => {
   //   filterValue = event.target.value; // update filterValue with value from selected option
    //generateContent(); // after updating filter value, then re-run the content generation to caputre
