fetch('https://api.airtable.com/v0/appmI7DNf6ICGvK0p/Table%201',{ 
    headers: {
        Authorization: 'Bearer keyYO5CGRG2VDUV0A',
    }
})        
    .then(response => response.json())
    .then(data => {
      console.log(data);

      const mangabooks = document.querySelector('.mangabooks');


      data.records.forEach(manga => {
          console.log(manga);


          mangabooks.innerHTML += `
            <div class="manga-title">
                <h3>${manga.fields.language}<h3>
            </div>
                `;

      });

    });

ask for filter demo

.filter(album => {  //check or unchecked -> turns into false or true
    return album.fields.release_year > 1969;
} 