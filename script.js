(function(fctn) {
    fctn = getlistings('waardevolthuis', 'title,price,url', 250, 'large');
})();


function getlistings(shopname, params, limit) {
    $(document).ready(function () {

        apiKey = "bwttmouuhdydog2vzjj1iu6r";
        etsy_url = "https://openapi.etsy.com/v2/shops/" + shopname + "/listings/active.js?";
        etsy_url += "fields=" + params + "&limit=" + limit + "&includes=MainImage&api_key=" + apiKey;
        // console.log (etsy_url);
        // loop through results and add the listings

        $.getJSON(etsy_url + "&callback=?", function (data) {
            for (var i = 0; i < data.results.length; i++) {
                var result = data.results;

                title = result[i].title.split(' / '); // Define the title and split it
                shortTitle = title[0]; // Choose first title

                image = result[i].MainImage.url_570xN; // Define the image
                url = result[i].url; // Define product url
                price = result[i].price // Define the price
                
                // Create DIV > Product with ID > Product
                elemsProduct = document.createElement('div'); // Add div
                elemsProduct.setAttribute('id', 'product' + [i]); // Add id
                elemsProduct.setAttribute('class', 'products');
                document.body.appendChild(elemsProduct); // Append to body
                // Create DIV > Image with ID > Image
                elemsImage = document.createElement('div'); // Add div
                elemsImage.setAttribute('id', 'image' + [i]); // Add id
                elemsImage.setAttribute('class', 'images');
                document.getElementById('product' + [i]).appendChild(elemsImage); // Append to "product"
                // Create DIV > Title with ID > Title
                elemsTitle = document.createElement('div'); // Add div
                elemsTitle.setAttribute('id', 'title' + [i]); // Add id
                elemsTitle.setAttribute('class', 'titles');
                document.getElementById('product' + [i]).appendChild(elemsTitle); // Append to "product"

                // Add image to the correct DIV
                document.getElementById('image' + [i]).innerHTML = '<a href="' + url + '"><img src="' + image + '"></img></a>';

                // Add title to the correct DIV
                document.getElementById('title' + [i]).innerHTML = '<h3>' + shortTitle + '</h3><p class="price">' + price + '</p>';
            }
        });
    });
}