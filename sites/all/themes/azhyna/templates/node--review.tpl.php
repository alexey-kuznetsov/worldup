<?php
/**
 * @file
 * Returns the HTML for a node.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728164
 */
?>
<article class="node-review <?php print $classes; ?> clearfix"<?php print $attributes; ?>>
  <div class="review-author">
  <?php if ($title_prefix || $title_suffix || $display_submitted || $unpublished || !$page && $title): ?>
      <?php print render($title_prefix); ?>
      <?php if (!$page && $title): ?>
        <h3<?php print $title_attributes; ?>><?php print $title; ?></h3>
      <?php endif; ?>
      <?php print render($title_suffix); ?>
        <div class="submitted">
           <?php print date('Y.m.d', $created); ?>
        </div>

      <?php if ($unpublished): ?>
        <mark class="unpublished"><?php print t('Unpublished'); ?></mark>
      <?php endif; ?>

  <?php endif; ?>
  </div>
  <div class="review-content">
  <?php
    // We hide the comments and links now so that we can render them later.
    hide($content['comments']);
    hide($content['links']);
    print render($content);
  ?>
  </div>
</article>
