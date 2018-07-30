// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change_devoured").on("click", function(event) {
      var id = $(this).data("id");
      var newDevored = $(this).data("devouredstate");
      console.log("new devored = ", newDevored);
      console.log("Do I get here?");
      var burger_devoured = {
        devoured: newDevored
      };
      console.log("Test: ", burger_devoured);
      // Send the PUT request.
      $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: burger_devoured
      }).then(
        function() {
          console.log("changed sleep to", newDevored);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#ca").val().trim(),
        devoured: false
      };
  
      // Send the POST request.
      $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });