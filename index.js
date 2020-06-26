

function displayResults(responseJson) {
    console.log('displayResults ran!')
    $('.breed-result').append(`
    <li><img src="${responseJson.message}"></li>`)
}

function watchForm() {
    console.log('watchForm ran!')
    $('form').submit(event => {
        event.preventDefault();
        let reqImage = $('#text-box').val();
        let URL = `https://dog.ceo/api/breed/${reqImage}/images/random`;
        fetch(URL).then(response => response.json())
        .then(responseJson =>
            displayResults(responseJson))
            .catch(error => alert('Woof! Something went wrong. Play fetch later??'))
    });
}

$(function() {
    console.log('App loaded! Waiting for submit')
    watchForm()
})