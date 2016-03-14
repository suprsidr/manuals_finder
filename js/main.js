(function($){

  if($('[data-manuals-finder]').length) {
    $("<link/>", {
      rel : "stylesheet",
      type : "text/css",
      href : "css/parts-finder.min.css"
    }).appendTo("head");
    $.ajax({
      url : 'js/manuals-finder.min.js',
      cache: true,
      dataType : "script"
    });
  }

})(window.jQuery);
