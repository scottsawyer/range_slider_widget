(function ($, window, Drupal) {
  Drupal.behaviors.rangeSliderWidget = {
    attach: function attach() {
      $(".range-slider-widget-field").each(function(){
        var $element = $(this);
        var min = parseFloat($element.attr("min")) || 0;
        var max = parseFloat($element.attr("max")) || (min+100);
        var step = parseFloat($element.attr("step")) || 0.1;
        var value = parseFloat($element.val()) || min;
        var $container = $element.parent();
        var $slider = $container && $container.find('.range-slider-widget');

        if($slider && $slider.length > 0) {
          $slider.slider({
            step: step,
            min: min,
            max: max,
            value: value,
            slide: function( event, ui ) {
              $element.val( ui.value );
            }
          });
        }

      });

    }
  };
})(jQuery, window, Drupal);
