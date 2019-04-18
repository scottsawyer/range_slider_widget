<?php

namespace Drupal\range_slider_widget\Plugin\Field\FieldWidget;

use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\Plugin\Field\FieldWidget\NumberWidget;
use Drupal\Core\Form\FormStateInterface;

/**
 * Plugin implementation of the 'range_slider_widget' widget.
 *
 * @FieldWidget(
 *   id = "range_slider_widget",
 *   module = "range_slider_widget",
 *   label = @Translation("Range Slider"),
 *   field_types = {
 *     "integer",
 *     "decimal",
 *     "float"
 *   }
 * )
 */
class RangeSliderWidget extends NumberWidget {

  /**
   * {@inheritdoc}
   */
  public static function defaultSettings() {
    return [];
  }

  /**
   * {@inheritdoc}
   */
  public function settingsForm(array $form, FormStateInterface $form_state) {
    return [];
  }

  /**
   * {@inheritdoc}
   */
  public function settingsSummary() {
    return [];
  }

  /**
   * {@inheritdoc}
   */
  public function formElement(FieldItemListInterface $items, $delta, array $element, array &$form, FormStateInterface $form_state) {
    $form['#attached']['library'][] = 'range_slider_widget/range_slider_widget';
    $element = parent::formElement($items, $delta, $element, $form, $form_state);
    $element['value']['#field_suffix'] = (isset($element['value']['#field_suffix']) ? $element['value']['#field_suffix'] : '') . "<div class='range-slider-widget'></div>";
    $element['value']['#attributes']['class'][] = "range-slider-widget-field";
    $element['value']['#attributes']['readonly'] = "readonly";
    return $element;
  }

}
