$(document).ready(function() {
    console.log("ready!");

    var topics = ["Scandal", "Smallville", "Grey's Anatomy", "Gilligan's Island"];

    //create buttons with topic names
    var createButtons = function() {
        for (var i = 0; i < topics.length; i++) {
            var showName = $("<button>"); //creates a button <button></button>
            showName.addClass("topics"); //adding a class topics - <button class = "topics"></button>
            showName.text(topics[i]); //adding the value of the button - <button class = "topics">Scandal</button>
            showName.attr("data-tv", topics[i]);
            $("#item").append(showName) //takes out vegas button and puts it into the actual div buttons
            console.log(showName);
        }
    }

    $("#add-tv").on("click", function(event) {
        // event.preventDefault() prevents the form from trying to submit itself.
        // We're using a form so that the user can hit enter instead of clicking the button if they want
        event.preventDefault();

        // This line will grab the text from the input box
        var tvShow = $("#tv-input").val().trim();

        // The tv show from the textbox is then added to our array
        topics.push(tvShow);

       
        $("#item").empty();
        createButtons();    // calling createButtons which handles the processing of our tv array
    });
    //create an event handler to toggle between still and animated gifs
    $("body").on("click", "img", function() {  //choosing any img in the body - as body is a higher level
        if ($(this).hasClass("still")) {  //looking for an img that has a class of still
          var animate = $(this).attr("data_animate");  //create a variable to hold the url of the animated version
           $(this).attr("src", animate); //swap it to animate
           $(this).removeClass("still");  //take out the still class
        }
        else  {
           var still = $(this).attr("data_still")  //if it is already animated - with no class of still, create a var to hold the still URL
           $(this).attr("src", still);  //swap out the still image
           $(this).addClass("still");  //add the still class back to the image
        }
     });

    createButtons();
    // go get the giphys when you click on one of the topics - in item div
    $("#item").on("click", "button.topics", function() {

        var tv = $(this).attr("data-tv"); //create a var to hold the data tv attr (name of the tv show from the array)
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            tv + "&api_key=dc6zaTOxFJmzC&limit=10";  //var to hold the url that goes to giphy and searches for the tv show name
        var state = $(this).attr("state");  //var to add the state (still) to the giphy img
        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function(response) {  //stop getting the giphys and refer to the group as response
            $("#gifs-appear-here").empty(); //right before we add the button, clear out the other gifs that might have been there from the last one
            // make a variable named results and set it equal to response.data

            var results = response.data;

            //display image and rating
            for (var i = 0; i < results.length; i++) {   //loop through all of the giphys in the response array

                var tvDiv = $("<div class='item'>");
                var rating = results[i].rating;
                var p = $("<p>").text("Rating: " + rating);
                tvDiv.append(p);
                var tvImage = $("<img>");
                tvImage.attr("src", results[i].images.fixed_height_still.url);
                //tvImage.attr("data-animate", results[i].images.fixed_height.url);
                tvDiv.append(tvImage);
                console.log(results[i].images);
                tvImage.attr("data_still", results[i].images.fixed_height_still.url);
                tvImage.attr("data_animate", results[i].images.fixed_height.url);
                $(tvImage).addClass("still");  //this is our flag for the still v animate if else above
                tvDiv.append(tvImage);
                // Append the tvDiv variable to the element with an id of gifs-appear-here.
                $("#gifs-appear-here").prepend(tvDiv);
                console.log(tvDiv);

            }

        });
    });

    
});