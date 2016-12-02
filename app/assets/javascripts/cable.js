// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the rails generate channel command.
//
//= require action_cable
//= require_self
//= require_tree ./channels

(function() {
  this.App || (this.App = {});

  App.cable = ActionCable.createConsumer();

}).call(this);

// var select_all = document.getElementById("select_all"); //select all checkbox
// var checkboxes = document.getElementsByClassName("checkbox"); //checkbox items

// //select all checkboxes
// select_all.addEventListener('click', function(e){
//     for (i = 0; i < checkboxes.length; i++) { 
//         checkboxes[i].checked = select_all.checked;
//     }
// });


// for (var i = 0; i < checkboxes.length; i++) {
//     checkboxes[i].addEventListener('click', function(e){ //".checkbox" change 
//         //uncheck "select all", if one of the listed checkbox item is unchecked
//         if(this.checked == false){
//             select_all.checked = false;
//         }
//         //check "select all" if all checkbox items are checked
//         if(document.querySelectorAll('.checkbox:checked').length == checkboxes.length){
//             select_all.checked = true;
//         }
//     });
// }


