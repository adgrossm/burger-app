

// Make sure we wait to attach our handlers until the DOM is fully loaded.
// $(function() {
//     $("#waiting").on("click", function(event) {
//       var id = $(this).data("id");
//       var newBurger = 
//         $(this).data("newburger").val().trim(),
  
      
 
      // // Send the PUT request.
      // $.ajax("/api/burgers/" + id, {
      //   type: "PUT",
      //   data: burgers
      // }).then(
      //   function() {
      //     console.log("changed sleep to", burgers);
      //     // Reload the page to get the updated list
      //     location.reload();
      //   }
      // );
    // });
$(function(){ 
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#newBurger").val().trim(),
        devoured: 0,
        // id: (`${id}`)
        // not sure what I need below the cat had sleep value of true or false but I need to have the id value
        // id: $("[value=1]").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("Added new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  // button to move from left side where devour = false to right side where devour = true
    $(".devour-it").on("click", function(event) {
      event.preventDefault();
      var id = $(this).data("id");
      
      var isDevoured = {
        devoured: 1
      };
      // Send the Update request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: isDevoured
      }).then(
        function() {
          console.log("Devoured burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
});