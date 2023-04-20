
$('#check-darkmode').on('click', function () {
    checked= $('body').hasClass('dark-mode')
    if ($(this).is(':checked')) {
      $('body').addClass('dark-mode')
    } else {
      $('body').removeClass('dark-mode')
    }
  })
