	
var flag = 1
var intNumMonths=1
$(window).resize(function(){
	numMoths();
});

function numMoths(){
	var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
	if(width>767)
	{
		$( ".datepicker" ).datepicker( "option", "numberOfMonths", 2 );
	}else{
		$( ".datepicker" ).datepicker( "option", "numberOfMonths", 1 );
	}	
}

$(function() {
	var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
	if(width>767)
	{
		intNumMonths=2
	}

	$(".input1").click(function(){
		flag = 1;
	});

	$(".input2").click(function(){
		flag = 2;
	});

	$(".datepicker" ).datepicker({
		minDate: 0,
		numberOfMonths: intNumMonths,
		defaultDate: 0,

		beforeShowDay: function(date) {
			var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $(".input1").val());
			var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $(".input2").val());
			return [true, date1 && ((date.getTime() == date1.getTime()) || (date2 && date >= date1 && date <= date2)) ? "dp-highlight" : ""]
		},

		onSelect: function(dateText) {

			var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $(".input1").val());
			var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $(".input2").val());

			if (!date1 && !date2) {
				$(".input1").val(dateText);
				$(this).datepicker()
					flag=2;
					if (date1 && date2) {
						$('div.datepicker').fadeOut('medium');		
					}
			}

			else if (date1 && date2) {
				
				if(flag==1){
				
					var x1=new Date();
					var fecha = dateText.split("/");
  					x1.setFullYear(fecha[2],fecha[1]-1,fecha[0]);

  					var x2=new Date();
  					var fecha2 = convertDate(date2).split("/");
  					x2.setFullYear(fecha2[2],fecha2[1]-1,fecha2[0]);

					if (x1>=x2) {
						$(".input2").val("");
					}
					$(".input1").val(dateText);	
				}

				else{
				
					var x1=new Date();
					var fecha = dateText.split("/");
  					x1.setFullYear(fecha[2],fecha[1]-1,fecha[0]);

  					var x2=new Date();
  					var fecha2 = convertDate(date1).split("/");
  					x2.setFullYear(fecha2[2],fecha2[1]-1,fecha2[0]);

					if (x1<=x2) {
						$(".input1").val("");		
					}
					$(".input2").val(dateText);	
				}
				
				$(this).datepicker()
					if (date1 && date2) {
						$('div.datepicker').fadeOut('medium');		
					}
							
			}

			else {

				if ($(".input1").val().length > 0 && $(".input2").val()=='' && flag==1) {
				
					$(".input1").val(dateText);
				}

				else  {
					
					if (flag==1) {
					
					var x1=new Date();
					var fecha = dateText.split("/");
  					x1.setFullYear(fecha[2],fecha[1]-1,fecha[0]);

  					var x2=new Date();
  					var fecha2 = convertDate(date2).split("/");
  					x2.setFullYear(fecha2[2],fecha2[1]-1,fecha2[0]);

  					if (x1>=x2) {
  					
						$(".input2").val("");		
					}
					
						$(".input1").val(dateText);		
					}

					else {

						var x1=new Date();
						var fecha = dateText.split("/");
      					x1.setFullYear(fecha[2],fecha[1]-1,fecha[0]);

      					var x2=new Date();
      					var fecha2 = convertDate(date1).split("/");
      					x2.setFullYear(fecha2[2],fecha2[1]-1,fecha2[0]);

  					if (x1<=x2) {
  						
						$(".input1").val("");		
					}
						
						$(".input2").val(dateText);
					}
				}

				$(this).datepicker();
				$('div.datepicker').fadeOut('medium');
			}
		}
	});
	
});


function validarFechaMenorActual(date){
	var x=new Date();
	var fecha = date.split("/");
	x.setFullYear(fecha[2],fecha[1]-1,fecha[0]);
	var today = new Date();

	if (x >= today)
	return false;
	else
	return true;
}

function convertDate(inputFormat) {
	function pad(s) { return (s < 10) ? '0' + s : s; }
	var d = new Date(inputFormat);
	return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/');
}


$(window).load(function() {

	$('.input1').click(function() {$(".datepicker").show() });
	$('.input2').click(function() {$(".datepicker").show() });

	$(document).mouseup(function(e) {
		var container = $(".datepicker");
		if (container.has(e.target).length === 0) {
			$('div.datepicker').fadeOut('medium')
		}
	})
});


$(function() {
	$(".datepicker2").datepicker({
		minDate: 3,
		numberOfMonths: 1,
		defaultDate: 0,

		beforeShowDay: function(date) {
        var datex = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $(".input3").val());
        return [true, datex && (( date.getTime() == datex.getTime() )) ? "dp-highlight" : ""]			
    },
		
		onSelect: function(dateText, inst) {
			var datex = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $(".input3").val());
				$(".input3").val(dateText);
				$(this).datepicker();
				$('div.datepicker2').fadeOut('medium');
		} 
	})
});


$(window).load(function() {
	
	$('.input3').click(function() {$(".datepicker2").show() });
	
	$(document).mouseup(function(e) {
		var container = $(".datepicker2");
		if (container.has(e.target).length === 0) {
			$('div.datepicker2').fadeOut('medium')
		}
	})
});