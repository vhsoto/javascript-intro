$(document).ready(function() {  // Codigo Procedural Procedimental --> OOP
  // Event Listener
  $('#roller button.add').on('click', function() { // Controlador
    $('.dice').append('<div class="die">0</div>') // Vista
  })

  // Event listener
  $('#roller button.roll').on('click', function() { // Controlador
    $('.die').each(function(index, dieHtml) { // Controlador
      var value = Math.floor((Math.random()*6)+1) // Model
      $(dieHtml).text(value) // Vista
    })
  })
})


function Die () {

}

function View() {

}


function Controller(model, view) {
  this.view = view
  this.model = model
}





var controller = new Controller(new Die(), new View())
