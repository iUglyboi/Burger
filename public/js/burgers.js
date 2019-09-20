$(function() {
    $(".new-burger").on("click", function(event) {
      var id = $(this).data("id");
      var newBurger = $(this).data("newsleep");
  
      var newTreat = {
        burger_name: newBurger
      };
      $.ajax("/burger/make" + id, {
        type: "PUT",
        data: newBurger
      }).then(
        function() {
          console.log("changed burger to", newBurger);
          location.reload();
        }
      );
    });
    $(".submit-button").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#custom_burger required value=").val().trim(),
            devoured: false
          };
      
          $.ajax("/api/make", {
            type: "POST",
            data: newBurger
          }).then(
            function() {
              console.log("created new cat");
              // Reload the page to get the updated list
              location.reload();
            }
          );
        });
        $.ajax("/api/make" + id, {
            type: "DELETE"
          }).then(
            function() {
              console.log("deleted burger", id);
              // Reload the page to get the updated list
              location.reload();
            }
          );
        });