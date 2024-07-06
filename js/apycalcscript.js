function setInputFilter(textbox, inputFilter) {
	["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
	  textbox.addEventListener(event, function() {
		if (inputFilter(this.value)) {
		  this.oldValue = this.value;
		  this.oldSelectionStart = this.selectionStart;
		  this.oldSelectionEnd = this.selectionEnd;
		} else if (this.hasOwnProperty("oldValue")) {
		  this.value = this.oldValue;
		  this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
		}
	  });
	});
}

jQuery(document).ready(function($){
	function FormatNumber(val,decimal){
		return Number(val.toFixed(decimal));
	}
	function round(num, decimalPlaces = 0) {
		var p = Math.pow(10, decimalPlaces);
		var n = (num * p) * (1 + Number.EPSILON);
		return Math.round(n) / p;
	}
	function setResult(id,label,result){
		var elem = document.querySelector('#'+id).children;
		elem[0].innerHTML = label;
		elem[1].innerHTML = result;
	}
	
	function calculate(e){
		var tokenName = $('#tokenName').val();
		var purchased = +$('#purchased').val().replace(/,/g,'');
		var pricePaid = +$('#pricePaid').val().replace(/,/g,'');

		var apy = +$('#apy').val().replace(/,/g,'');
		var stakingPeriod = +$('#stakingPeriod').val().replace(/,/g,'');
		var tokenPrice = +$('#tokenPrice').val().replace(/,/g,'');

		var v0 = (purchased*pricePaid);
		var v0_res = 'on '+ purchased +' Tokens Purchased'

		var v1 = (purchased*(apy/100))/365*stakingPeriod;
		var v2 = (((purchased*(apy/100))/365*stakingPeriod*tokenPrice));
		var v3 = (purchased*(apy/100))/365*tokenPrice;

		// Set Results
		$('#v0').text('$'+addCommas(v0.toFixed(2)));
		$('#v1').text(addCommas(v1.toFixed(4)));
		$('#v2').text('$'+addCommas(v2.toFixed(2)));
		$('#v3').text('$'+addCommas(v3.toFixed(2)));

		$('#v0_res').text(v0_res);
		$('.periodDays').text(stakingPeriod);
		$('.tokenName').text(tokenName);
		$('.apy').text(apy+'% ');
	}


// console.log(tax_rate.split(',').map(e=>e/100))
String.prototype.changeDecimal = function(){
	return this.replace(/[,.]/g, m => (m === ',' ? '.' : ','));
}
function addCommas(nStr) {
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
			x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}
$('.calc-input').on('input', function(e){
	calculate(e)
	if(e.target.nodeName != 'SELECT'){
	  var val = this.value.replace(/,/g, '')
	  this.value = (addCommas(val.replace(/[^0-9.e\,]/, '')));
	}
}).trigger('input');
	
//document.querySelector('#calculateBtn').addEventListener('click',function(e){
//calculate(e);
//})

})


