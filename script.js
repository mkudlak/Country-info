var url = "https://restcountries.eu/rest/v1/name/";
var countryList = $('#countries');
var country = $('#country');
var flag = $('#flag');
var capital = $('#capital');
var region = $('#region');
var subregion = $('#subregion')
var population = $('#population');



$('#search').click(function(){
    $('#show').show();
    searchCountries();
});

function searchCountries() {
    var countryName = $('#country-name').val();
    if (!countryName.length) countryName = 'Poland';
    $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountryList,
        error: function() {
            console.log('something went wrong')
        }
    })
}

function showCountryList(resp) {
    countryList.empty();
    resp.forEach(function(item) {
        $('<h3>').text(item.name).appendTo(country);
        $('<p>').text("<img scr='" + item.flag + "'").appendTo(flag);
        console.log(item.flag);
        $('<p>').text(item.capital).appendTo(capital);
        $('<p>').text(item.region).appendTo(region);
        $('<p>').text(item.subregion).appendTo(subregion);
        $('<p>').text(item.population).appendTo(population);
    });
}