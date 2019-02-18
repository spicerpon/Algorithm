	ins_cart_selected_opt('direct');

	var price = $('input:hidden[name=payment_amount]').val();
	$('#use_point_value').val(price);
	$("#point_use_button").trigger("click");
	sms_auth_process_order();
