// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .

$(function(){

	$('#my-profile').click(function(){
		$('#school-row').css('display', 'none');
		$('#student-row').css('display', 'none');	
		$('#school-admin-row').css('display', 'block');
		
		setTimeout(function(){
			// $('#school-row').css('display', 'none');

			// $('#needs-margin').css('margin-top', '30px');
			// $('#student-elements').css('display', 'block');
			// $('.el-row').css('height', '25%');
			// $('.el-field').css('overflow-y', 'scroll');
			// $('#student-more').css('display', 'none');

			// $('#student-row').animate({height: '520px'}, "slow");
		}, 300);
	});


});