

function displayResults(responseJson) {
    console.log('displayResults ran!')
    $('.breed-result').empty();
    $('.breed-result').append(`
    <li><img src="${responseJson.message}"></li>`)
}

function watchForm() {
    console.log('watchForm ran!')
    $('form').submit(event => {
        event.preventDefault();
        $('.breed-result').show();
        let reqImage = $('#text-box').val();
        let URL = `https://dog.ceo/api/breed/${reqImage}/images/random`;
        fetch(URL)
        .then(response => {
          if(response.ok){
            return response.json()
          }
        })
        .then(responseJson => {
          if(responseJson){
            displayResults(responseJson)
          } else {
            throw "bad response";
          }
        })
        .catch(error => {
          console.log("error:", error);
          $('.breed-result').hide()
          alert('Woof! Something went wrong. Play fetch later??')
        });
    });
}


$(function() {
    console.log('App loaded! Waiting for submit')
    watchForm()

})