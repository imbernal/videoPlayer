
$(document).ready(function () {


  var video = '';
  var newSource = '';
  video = $("#video")[0];

  $('#slowDown').click(function(){
    video.playbackRate -= 0.5;
  });

  $('#speedUp').click(function(){
      video.playbackRate += 0.5;
  });

  $('#changeSource button').click(function(){
    localStorage.setItem(newSource, [newSource, video.currentTime]);
    newSource = $('#changeSource input').val();
    if (localStorage.getItem(newSource) !== null) {
        var temp = localStorage.getItem(newSource).split(',');
        $('video').attr('src', temp[0]);
        $('video')[0].currentTime = temp[1];
        $('#changeSource input').val('');
    }
    else {
        localStorage.setItem(newSource, newSource);
        $('video').attr('src', localStorage.getItem(newSource));
        $('#changeSource input').val('');
    }
    $('video')[0].load();
  });
});
