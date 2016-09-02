// Add your JavaScript here

$(function() {
  addFormEventHandler();
})

function addFormEventHandler() {
  $('form.index').on('ajax:complete', function(e, request, status){
    $('tbody').prepend(`<tr><td>${request.responseJSON.content}</td><td><a href="/tasks/${request.responseJSON.location.id}">Show</a></td><td><a href="/tasks/${request.responseJSON.location.id}/edit">Edit</a></td><td><a href="/tasks/${request.responseJSON.location.id}/fuckoff">Destroy</a></td></tr>`)
  })
}