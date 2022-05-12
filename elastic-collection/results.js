console.log('hi')

// basic version from class
// first, we fetch our data from Airtable
fetch('https://api.airtable.com/v0/appmI7DNf6ICGvK0p/Table%201', {
  headers: {
    Authorization: 'Bearer keyYO5CGRG2VDUV0A', // this is your API key, starting with 'key...' found in your Airtable account
  },
})
  .then(res => res.json()) // tells JS to expect data in json format
  .then(data => {

    // all your code should go inside here

    console.log(data); // first, log out your data. Explore it in the browser console.

    const manga = document.querySelector('.manga'); // tell JS about the div we added to our html file so we can put content inside it
   

    const randomNumber = Math.round(Math.random() * (data.records.length - 1));
    const selectedManga = data.records[randomNumber];

console.log({selectedManga});

manga.style.backgroundImage = `url(${selectedManga.fields.comicCover[0].thumbnails.large.url})`

const bookTitle = document.querySelector('.book-title'); // tell JS about the div we added to our html file so we can put content inside it
bookTitle.innerHTML = `${selectedManga.fields.manga}`




  const artistName = document.querySelector('.artist-name');
  artistName.innerHTML = `${selectedManga.fields.artistName}`
  


  const publishedYear = document.querySelector('.year');
  publishedYear.innerHTML = `${selectedManga.fields.publishedYear}`
  
  });



  function refreshPage(){
      window.location.reload()
  }
