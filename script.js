(function(fctn) {
    fctn = getlistings('waardevolthuis', 'title,price,url,description', 250, 'large');
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
                description = result[i].description.slice(0, 160) + '...';
                console.log(description);

                image = result[i].MainImage.url_570xN; // Define the image
                url = result[i].url; // Define product url
                price = result[i].price // Define the price
                
                // Create DIV for Product
                elemsProduct = document.createElement('div'); // Add div
                elemsProduct.setAttribute('id', 'product-' + [i]); // Add id
                elemsProduct.setAttribute('class', 'products');
                document.getElementById('feed-container').appendChild(elemsProduct); // Append to "feed-container"

                // Create DIV for Image
                elemsImage = document.createElement('div'); // Add div
                elemsImage.setAttribute('id', 'image-' + [i]); // Add id
                elemsImage.setAttribute('class', 'images');
                document.getElementById('product-' + [i]).appendChild(elemsImage); // Append to "product"

                // Create DIV for Title
                elemsTitle = document.createElement('div'); // Add div
                elemsTitle.setAttribute('id', 'title-' + [i]); // Add id
                elemsTitle.setAttribute('class', 'titles');
                document.getElementById('product-' + [i]).appendChild(elemsTitle); // Append to "product"

                // Create DIV for Description
                elemsTitle = document.createElement('div'); // Add div
                elemsTitle.setAttribute('id', 'description-' + [i]); // Add id
                elemsTitle.setAttribute('class', 'descriptions');
                document.getElementById('product-' + [i]).appendChild(elemsTitle); // Append to "product"

                // Create DIV for Price
                elemsTitle = document.createElement('div'); // Add div
                elemsTitle.setAttribute('id', 'price-' + [i]); // Add id
                elemsTitle.setAttribute('class', 'prices');
                document.getElementById('product-' + [i]).appendChild(elemsTitle); // Append to "product"

                // Add variable data to the correct DIV
                document.getElementById('image-' + [i]).innerHTML = '<a href="' + url + '"><img src="' + image + '"></img></a>'; // Image
                document.getElementById('title-' + [i]).innerHTML = '<h3>' + shortTitle + '</h3>'; // Title
                document.getElementById('description-' + [i]).innerHTML = '<p>' + description + '</p>'; // Description
                document.getElementById('price-' + [i]).innerHTML = '<p>&euro; ' + price + '</p>'; // Price
            }
        });
    });
}
