---
---
$(document).ready ->
  # add target="_blank" to all links
  $('a').attr 'target', '_blank'
  $('a.scroll-on-page-link,a.page-link').attr 'target', ''
