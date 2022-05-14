fetch('https://api.airtable.com/v0/appmI7DNf6ICGvK0p/Table%201', {
  headers: {
    Authorization: 'Bearer keyYO5CGRG2VDUV0A', // this is your API key, starting with 'key...' found in your Airtable account
  },
})
  .then(res => res.json()) // tells JS to expect data in json format
  .then(data => {

    const mangaContainer = document.querySelector('.content'); // tell JS about the div we added to our html file so we can put content inside it


    let range = 'all';

    function handleDropdown() {  // this function runs every time a new element is selected
      range = manga.target.field.yearRange // update our instrumentType variable from line 1 with the new value from the dropdown chang event
      // after updating the new filter condition, then re-run our content generation
    }



    data.records

      .filter(manga => {
        return manga.range === 'all' ? manga : manga.yearRange === range; // if our dropdown is set to all, return evey item, otherwise only return items that match selected instrument type
      })
      .forEach(manga => {

        //albumsContainer.innerHTML += `
        //<div class="album">
        //  <h5>${album.fields.release_year}</h5>  
        //  <h3>${album.fields.title}</h3>
        //  <h4>${album.fields.artist}</h4>
        //  <img src="${album.fields.album_cover[0].thumbnails.large.url}" width='200'/>
        //</div>
        //`;

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


});