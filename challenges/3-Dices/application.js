// $(document).ready(function() {
//   $('#roller button.add').on('click', function() {
//     $('.dice').append('<div class="die">0</div>');
//   });
//
//   $('#roller button.roll').on('click', function() {
//     $('.die').each(function(k, die) {
//       var value = Math.floor((Math.random()*6)+1);
//       $(die).text(value);
//     });
//   });
// });

function Die(sides) {
  this.sides = sides
  this.value = 1
}

Die.prototype.roll = function(die) {
  die.value = Math.floor((Math.random()*6)+1)
}

function Controller(view, model) {
  this.view = view
  this.model = model
}

Controller.prototype.init = function() {
  this.plantEventListeners(this.view.addDie, this.rollAllDices)
}

Controller.prototype.plantEventListeners = function(addHandler, rollHandler) {
  this
  $('#roller button.add').on('click', addHandler)
  $('#roller button.roll').on('click', rollHandler.bind(this))
}

Controller.prototype.rollAllDices = function() {
  var controller = this
  $('.die').each(function(k, die){
    controller.model.roll(die)
    controller.view.changeDieText(die, die.value)
  })
}


function View() {

}

View.prototype.addDie = function() {
  $('.dice').append('<div class="die">0</div>');
}

View.prototype.changeDieText = function(die, value) {
  $(die).text(value);
}

game = new Controller(new View(), new Die())
game.init()
