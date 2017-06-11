/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {
  $(document).ready(function(){
    $('.view-videos .view-content').slick({
    appendArrows: '.view-videos .view-content',
    nextArrow: '<div class="slick-next"></div>',
    prevArrow: '<div class="slick-prev"></div>',
  });
  });

// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.my_custom_behavior = {
  attach: function(context, settings) {


  $(document).ready(function(){
  $('.page-node-4 .node tbody').each(function () {
    $(this).addClass('element-invisible')
  });
  $('.page-node-4 caption').each(function () {
    $(this).click(function () {
      $(this).next().toggleClass('element-invisible')
    })
   });

  })


  }
};


})(jQuery, Drupal, this, this.document);

// Add missed translations
Drupal.locale.strings[""]["@count[2] seconds"] = "@count[2] секунд";
Drupal.locale.strings[""]["@count[2] minutes"] = "@count[2] минут";
Drupal.locale.strings[""]["@count[2] hours"] = "@count[2] часов";
Drupal.locale.strings[""]["@count[2] weeks"] = "@count[2] недель";
