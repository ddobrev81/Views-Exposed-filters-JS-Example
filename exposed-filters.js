(function ($, Drupal, window, document, undefined) {

  Drupal.behaviors.eventListFilters = {
    attach: function(context, settings) {
      $('#edit-field-event-type-tid option:first').html(Drupal.t('FILTER1'));
      $('#edit-field-event-region-tid option:first').html(Drupal.t('FILTER2'));
      $('#edit-field-event-topic-tid option:first').html(Drupal.t('FILTER3'));
      $('#edit-field-target-group-tid option:first').html(Drupal.t('FILTER4'));

      $('#edit-field-start-time-value-wrapper').click(function (e) { // Do not close widget when date inputs or date format description is clicked.
        e.stopPropagation();
      });

      $('#ui-datepicker-div').click(function (e) { // Do not close the widget when calendar is clicked.
        e.stopPropagation();
      });

      $('body').click(function (e) {
        var dateWidget = $('#views-exposed-form-events-page #edit-field-start-time-value-wrapper .views-widget');
        dateWidget.removeClass('active-date-widget');
        dateWidget.prev('label').removeClass('date-label-with-drop');
      });

      $('#views-exposed-form-events-page #edit-field-start-time-value-wrapper label').once('event-toggle-widgets').click(function(e) {
        e.stopPropagation();
        var $this = $(this);
        $this.siblings('.views-widget').toggleClass('active-date-widget');
        $this.toggleClass("date-label-with-drop");
      });
    }
  };
})(jQuery, Drupal, this, this.document);
