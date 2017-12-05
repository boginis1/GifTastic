

    $("button").on("click", function() {
      var tv = $(this).attr("data-tv");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        tv + "&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {
        // Step 1: Run this file, click a button, and see what the response object looks like in the browser's console.
        // Open up the data key, then open up the 0th, element. Study the keys and how the JSON is structured.

        console.log(response);

        // Step 2: since the image information is inside of the data key,
        // make a variable named results and set it equal to response.data

        // =============== put step 2 in between these dashes
        var results = response.data;

        // ========================

        for (var i = 0; i < results.length; i++) {

        // Step 3: uncomment the for loop above and the closing curly bracket below
          var tvDiv = $("<div class='item'>");
                // Make a div with jQuery and store it in a variable named animalDiv.
          var rating = results[i].rating;
          var p = $("<p>").text("Rating: " + rating);
        // Make a paragraph tag with jQuery and store it in a variable named p.
        // Set the inner text of the paragraph to the rating of the image in results[i].
        tvDiv.append(p);
        var tvImage = $("<img>");
        // Make an image tag with jQuery and store it in a variable named animalImage.
        tvImage.attr("src", results[i].images.fixed_height.url);
        tvImage.attr("data-animate", results[i].images.fixed_height.url);
        tvDiv.append(tvImage);
        tvImage.attr("data_still", results[i].images.fixed_height_still.url);
        
        tvDiv.append(tvImage);
        // Prepend the animalDiv variable to the element with an id of gifs-appear-here.
        $("#gifs-appear-here").prepend(tvDiv);
        console.log(tvDiv);
        // ============= put step 3 in between these dashes ======================

        // CODE GOES HERE

        // ==============================================

        // STEP FOUR: open the file in the browser and click on the images.
        // Then cli
     
        // ==================================
        }

    });

   
    });

$("div.item").on("click", function() {
       console.log("this" + this);
        // STEP TWO: make a variable named state and then store the image's data-state into it.
        var still = $(this).attr("data-still");
        var animate = $(this).attr("data-animate");
        // Use the .attr() method for this.

         //if the variable state is equal to 'still',
        // then update the src attribute of this image to it's data-animate value,
        // and update the data-state attribute to 'animate'.

        // If state is equal to 'animate', then update the src attribute of this
        // image to it's data-still value and update the data-state attribute to 'still'
        // ============== FILL IN CODE HERE FOR STEP THREE =========================
        if (tvImage.attr() === "data-still") {
            $(this).attr("src", $(this).attr("src"));
            $(this).attr("data-animate", "animate")
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-still", "still")
        }
         });
  </script>
</body>

</html>