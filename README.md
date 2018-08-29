INTRODUCTION
============

This module is a simple solution to provide a new slider widget for numeric 
fields. The widget consists in a draggable handle (slider) within a range as an 
option for the traditional Drupal core's "Number field" widget.
This module proposal is not the same from 
Range (https://www.drupal.org/project/range) module.
This module will not provide a solution for inputing range values. 
This module is for selecting number values within a pre-defined range, using
jQueryUI.Slider component (https://jqueryui.com/slider/) to provide a different
way to insert number values that contains minimum and maximum allowed values.


REQUIREMENTS
============
This module has no requirements.


INSTALLATION
============

Install as you would normally install a contributed Drupal module. See:
   https://drupal.org/documentation/install/modules-themes/modules-8
   for further information.


CONFIGURATION
=============
1. Create a new Number field within the desired Content Type:
    * For example, for "foo" content type, go to Structure » Content Types » 
      Foo » + Add field
       Add a new Number field. The number field can be either Number (decimal),
       Number (float) or Number (integer).
    * Configure all field preferences. The "Minimum" and "Maximum" fields will
      be used to define the slider range. A range of 100 will be considered if 
      these options were not provided.
2. Choose "Range Slider" as the widget for this field in Administration » 
    Structure » Content Types » Foo » Manage form display
    Click on "Save" button.


MAINTAINERS
-----------

Current maintainers:
 * Geovanne Borges Bertonha (bertonha) - https://drupal.org/u/bertonha
