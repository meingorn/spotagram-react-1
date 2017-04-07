let flickrImages = []
let url = "https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=1d8d38fe92286045c8cd4e4c48cdf529&safe_search=1&per_page=60"

axios.get(url + "&format=json&jsoncallback=?", {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
