(function ($, window, Drupal) {

  Drupal.behaviors.rangeSliderWidget = {
    attach: function attach() {
      var $fields = document.querySelectorAll('.range-slider-widget-field');
      for (var i = 0; i < $fields.length; ++i) {
        var $field = $fields[i];
        var $min = parseFloat($field.getAttribute("min")) || 0;
        var $max = parseFloat($field.getAttribute("max")) || (min+100);
        var $step = parseFloat($field.getAttribute("step")) || 0.1;
        var $value = parseFloat($field.getAttribute("value")) || 0.1;
        var $container = $field.parentNode;
        var $slider = $container.querySelector('.range-slider-widget');

        if ($slider && $slider.length > 0) {
          noUiSlider.create($slider, {
            start: $value,
            range: {
              'min': $min,
              'max': $max
            },
            step: $step
          });
          $slider.noUiSlider.on('update', function (values, handle) {
            $field.setAttribute('value', values[handle]);
          });
        }
      }
    }
  };

})(jQuery, window, Drupal);
