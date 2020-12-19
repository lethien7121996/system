
$('#check-minutes').click(function (e) {
    // Have to stop propagation here
    e.stopPropagation();
    input.clockpicker('show').clockpicker('toggleView', 'minutes');
});

// Date Picker

jQuery('#datepicker').datepicker({
    format: 'dd/mm/yyyy'
});
jQuery('#datepicker-autoclose').datepicker({
    autoclose: true
    , todayHighlight: true
});
jQuery('#end, #start').datepicker({
    format: 'yyyy-mm-ddThh:ii:ssZ',
    value: new Date()
});
jQuery('#date-range').datepicker({
    
    format: 'dd/mm/yyyy'
});
jQuery('#datepicker-inline').datepicker({
    todayHighlight: true,
    format: 'DD/MM/YYYY'
});

// Daterange picker
$('.input-daterange-datepicker').daterangepicker({
    format: 'DD/MM/YYYY'
    , minDate: '06/10/2020'
    , maxDate: '08/10/2021',
    buttonClasses: ['btn', 'btn-sm']
    , applyClass: 'btn-danger'
    , cancelClass: 'btn-inverse',
    locale: {
        format: 'DD/MM/YYYY'
      }
});
$('.input-daterange-timepicker').daterangepicker({
    format: 'DD/MM/YYYY'
    , timePickerIncrement: 30
    , timePicker12Hour: true
    , timePickerSeconds: false
    , buttonClasses: ['btn', 'btn-sm']
    , applyClass: 'btn-danger'
    , cancelClass: 'btn-inverse'
});
$('.input-limit-datepicker').daterangepicker({
    format: 'DD/MM/YYYY'
    , minDate: '06/10/2020'
    , maxDate: '08/10/2020'
    , buttonClasses: ['btn', 'btn-sm']
    , applyClass: 'btn-danger'
    , cancelClass: 'btn-inverse'
    , dateLimit: {
        days: 6
    }
});


  
  
  
    // build the locale selector's options
  
  
 