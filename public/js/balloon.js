$(document).ready(function () {
  $('.balloon').each(function () {
    var balloon = $(this);
    var attrFor = $(this).data('for');
    console.log(attrFor);
    if (attrFor !== undefined) {
      $(attrFor).on({
        'mouseenter': function () {
          adjust(balloon, $(this));
        },
        'mouseleave': function () {
          balloon.hide(100);
        }
      });
    }
  });

  function adjust(balloon, target) {
    var topClass = 'balloon-top_';
    if (balloon.hasClass(topClass + 'left')) {
      var offset = target.offset();
      var top = offset.top + target.height() + 12;
      var left = offset.left;
      balloon.show(100);
      balloon.offset({ top: top, left: left });
    } else if (balloon.hasClass(topClass + 'center')) {

    } else if (balloon.hasClass(topClass + 'right')) {

    }
  }
});

$(function () {
  /*$('.js-balloon').on({
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
  });*/
});