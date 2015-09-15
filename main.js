function addListItem() {
  var text = $('.input').val();
  $('#todolist').append('<li>' +text+ ' <button class="delete">Delete</button></li>' );
  $('.input').val('');
}

function deleteItem() {
  $(this).parent().remove();
}

$(function() {
  $('#add').on('click', addListItem);
  $(document).on('click', '.delete', deleteItem);
});
