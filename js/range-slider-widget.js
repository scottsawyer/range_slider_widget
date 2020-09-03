(function ($, window, Drupal) {

  Drupal.behaviors.rangeSliderWidget = {
    attach: function attach() {
      var $fields = $('.range-slider-widget-field', context).once('rangeSliderWidget').each(function() {
        var $field = $(this);
        var $min = parseFloat($field.attr('min')) || 0;
        var $max = parseFloat($field.attr('max')) || (min+100);
        var $step = parseFloat($field.attr('step')) || 0.1;
        var $value = parseFloat($field.val()) || min;
        var $container = $field.parent();
        var $slider = $container.find('.range-slider-widget')[0];

        if ($slider !== "undefined") {
          noUiSlider.create($slider, {
            start: [$value],
            range: {
              'min': [$min],
              'max': [$max]
            },
            step: $step
          }, true);

          $slider.noUiSlider.on("update", function(values, handle) {
            $field.val(values[handle]);
          }
        }
      });
    }
  };

})(jQuery, window, Drupal);
