;(function($){

  	jQuery.fn.sendFormLP = function(options){

  		options = $.extend({
            toEmail: 'zerakul87@mail.ru',
            fromEmail: 'info@sergeibelousov.ru',
            interval : 5000
        }, options);

	    var make = function(){
	      
	    	$(this).submit(function(e){
	        	e.preventDefault();

	        	var $this = $(this);

	            var i = true;
	            var toEmail = options.toEmail;
	            var fromEmail = options.fromEmail;
	            var them = $this.data('them');
	            var $items = $this.find('[name]');
	            var $required = $this.find('[data-required]');
	            var objShow = $this.data('show')
	            var objHide = $this.data('hide')

	            $items.removeClass('error');

	            $required.each(function(){
	            	if($(this).val() == ''){
	            		i = false
	            		$(this).addClass('error');
	            	}
	            });

	            if(i == true){
		            var arr = [];
		            var m_action = $this.attr('action');

		            $items.each(function(){
		            	var nam = $(this).data('name');
		            	var val = $(this).val();
		            	arr.push(nam+val);
		            });

		            var m_data = '';

		            for(q=0; q <= arr.length-1; q++){
		            	m_data = m_data+arr[q]+'\n';
		            }
		            
		            $.ajax({
		                type: 'POST',
		                url: m_action,
		                data: {
		                	m_data:m_data,
		                	toEmail:toEmail,
		                	fromEmail:fromEmail,
		                	them:them
		                },
		                success: function(result){
		                    $items.val('');
		                    $(objShow).fadeIn();
		                    $(objHide).hide();

		                    setInterval(function(){
		                    	$(objShow).fadeOut();
		                    }, options.interval);
		                }
		            });
	            }
	        });

	    };
	 
	    return this.each(make); 

  	};

})(jQuery);

$(function(){

	$('form').sendFormLP({
		toEmail: 'info@sergeibelousov.ru',
		fromEmail: 'serj@mail.ru',
		interval: 1000
	});

});
