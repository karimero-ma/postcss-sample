$(document).ready(function () {
  //alert('hoge');
});

$(function () {
  $('.js-balloon').on({
    'mouseenter': function () {
      var offset = $(this).offset();
      var top = offset.top + $(this).height() + 12;
      var left = offset.left;
      $('#saveBalloon').show(100);
      $('#saveBalloon').offset({ top: top, left: left });
    },
    'mouseleave': function () {
      $('#saveBalloon').hide(100);
    }
  });
});