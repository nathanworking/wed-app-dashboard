// Super cool Animated page transition - Had to disable due to chart.js conflict (and time on project didn't allow for debugging of this) https://codyhouse.co/gem/animated-page-transition-2/

			// jQuery(document).ready(function($){
			// 	//set some variables
			// 	var isAnimating = false,
			// 		firstLoad = false,
			// 		newScaleValue = 1;
			//
			// 	//cache DOM elements
			// 	var dashboard = $('.cd-side-navigation'),
			// 		mainContent = $('.cd-main'),
			// 		loadingBar = $('#cd-loading-bar');
			//
			// 	//select a new section
			// 	dashboard.on('click', 'a', function(event){
			// 		event.preventDefault();
			// 		var target = $(this),
			// 			//detect which section user has chosen
			// 			sectionTarget = target.data('menu');
			// 		if( !target.hasClass('selected') && !isAnimating ) {
			// 			//if user has selected a section different from the one alredy visible - load the new content
			// 			triggerAnimation(sectionTarget, true);
			// 		}
			//
			// 		firstLoad = true;
			// 	});
			//
			// 	//detect the 'popstate' event - e.g. user clicking the back button
			//   	$(window).on('popstate', function() {
			// 	  	if( firstLoad ) {
			// 		    /*
			// 		    Safari emits a popstate event on page load - check if firstLoad is true before animating
			// 		    if it's false - the page has just been loaded
			// 		    */
			// 	      	var newPageArray = location.pathname.split('/'),
			// 	        //this is the url of the page to be loaded
			// 	        newPage = newPageArray[newPageArray.length - 1].replace('.html', '');
			// 	      	if( !isAnimating ) triggerAnimation(newPage, false);
			// 	    }
			// 	    firstLoad = true;
			// 	});
			//
			//   	//scroll to content if user clicks the .cd-scroll icon
			// 	mainContent.on('click', '.cd-scroll', function(event){
			// 		event.preventDefault();
			// 		var scrollId = $(this.hash);
			// 		$(scrollId).velocity('scroll', { container: $(".cd-section") }, 200);
			// 	});
			//
			// 	//start animation
			// 	function triggerAnimation(newSection, bool) {
			// 		isAnimating =  true;
			// 		newSection = ( newSection == '' ) ? 'index' : newSection;
			//
			// 		//update dashboard
			// 		dashboard.find('*[data-menu="'+newSection+'"]').addClass('selected').parent('li').siblings('li').children('.selected').removeClass('selected');
			// 		//trigger loading bar animation
			// 		initializeLoadingBar(newSection);
			// 		//load new content
			// 		loadNewContent(newSection, bool);
			// 	}
			//
			// 	function initializeLoadingBar(section) {
			// 		var	selectedItem =  dashboard.find('.selected'),
			// 			barHeight = selectedItem.outerHeight(),
			// 			barTop = selectedItem.offset().top,
			// 			windowHeight = $(window).height(),
			// 			maxOffset = ( barTop + barHeight/2 > windowHeight/2 ) ? barTop : windowHeight- barTop - barHeight,
			// 			scaleValue = ((2*maxOffset+barHeight)/barHeight).toFixed(3)/1 + 0.001;
			//
			// 		//place the loading bar next to the selected dashboard element
			// 		loadingBar.data('scale', scaleValue).css({
			// 		    height: barHeight,
			// 		    top: barTop
			// 		}).attr('class', '').addClass('loading '+section);
			// 	}
			//
			// 	function loadNewContent(newSection, bool) {
			// 		setTimeout(function(){
			// 			//animate loading bar
			// 			loadingBarAnimation();
			//
			// 			//create a new section element and insert it into the DOM
			// 			var section = $('<section class="cd-section overflow-hidden '+newSection+'"></section>').appendTo(mainContent);
			// 			//load the new content from the proper html file
			// 			section.load(newSection+'.html .cd-section > *', function(event){
			// 				//finish up the animation and then make the new section visible
			// 				var scaleMax = loadingBar.data('scale');
			//
			// 				loadingBar.velocity('stop').velocity({
			// 					scaleY: scaleMax
			// 				}, 400, function(){
			// 					//add the .visible class to the new section element -> it will cover the old one
			// 					section.prev('.visible').removeClass('visible').end().addClass('visible').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			// 						resetAfterAnimation(section);
			// 					});
			//
			// 					//if browser doesn't support transition
			// 					if( $('.no-csstransitions').length > 0 ) {
			// 						resetAfterAnimation(section);
			// 					}
			//
			// 					var url = newSection+'.html';
			//
			// 					if(url!=window.location && bool){
			// 				        //add the new page to the window.history
			// 				        //if the new page was triggered by a 'popstate' event, don't add it
			// 				        window.history.pushState({path: url},'',url);
			// 				    }
			// 				});
			// 			});
			//
			// 		}, 50);
			// 	}
			//
			// 	function loadingBarAnimation() {
			// 		var scaleMax = loadingBar.data('scale');
			// 		if( newScaleValue + 1 < scaleMax) {
			// 			newScaleValue = newScaleValue + 1;
			// 		} else if ( newScaleValue + 0.5 < scaleMax ) {
			// 			newScaleValue = newScaleValue + 0.5;
			// 		}
			//
			// 		loadingBar.velocity({
			// 			scaleY: newScaleValue
			// 		}, 100, loadingBarAnimation);
			// 	}
			//
			// 	function resetAfterAnimation(newSection) {
			// 		//once the new section animation is over, remove the old section and make the new one scrollable
			// 		newSection.removeClass('overflow-hidden').prev('.cd-section').remove();
			// 		isAnimating =  false;
			// 		//reset your loading bar
			// 		resetLoadingBar();
			// 	}
			//
			// 	function resetLoadingBar() {
			// 		loadingBar.removeClass('loading').velocity({
			// 			scaleY: 1
			// 		}, 1);
			// 	}
			//
			// });

//---------------------------------------------//
//------------- Mobile Navigation -------------//
//---------------------------------------------//
	var isLateralNavAnimating = false;

	//open/close lateral navigation
	$('.cd-nav-trigger').on('click', function(event){
		event.preventDefault();
		//stop if nav animation is running
		if( !isLateralNavAnimating ) {
			if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true;

			$('body').toggleClass('navigation-is-open');
			$('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				//animation is over
				isLateralNavAnimating = false;
			});
		}
	});

	//---------------------------------------------//
	//-------- Notifications (tooltipster plugin)--------//
	//---------------------------------------------//

	$('#tooltip').tooltipster({
	      // we detach the element from the page and give it to Tooltipster to serve as content
      content: $('#tooltip_content').detach(),
	      // if you use a single element as content for several tooltips, set this option to true
      contentCloning: false,
			animation: 'fade',
			delay: 0,
			trigger: 'click'
  });

	// Allows for toggle of new alert class for icon (only works with click on icon)
	$('.alert-icon').on('click', function(){
		$( ".alert-icon" ).toggleClass( "new-alert" );
	});

	//---------------------------------------------//
	//-------- Alert Notification (sweetalert plugin) --------//
	//---------------------------------------------//
	$('#start').ready(function(){
	    $.amaran({
	        'message'   :'<span class="alert-sub"> Alert</span> This is really important so you should stop what you are doing to look at this message',
	        'position'  :'top middle',
					inEffect: "fadeIn",
					outEffect: "slideTop",
					closeOnClick: false,
					closeButton: true,
					sticky: true
	    });
	});



	//---------------------------------------------//
	//-------- Charts --------//
	//---------------------------------------------//

// Global Chart Settings
Chart.defaults.global.legend = false;
Chart.defaults.global.maintainAspectRatio = false;

// Storing in Var so it's not in random areas (couldn't get this to work in Chart.js global values)
  var lineTensionValue = 0;

// Data Variables for custom toggle action & repeated chart data use
///// Note: color preferences are overridden on gobal configs (eg: line chart)
	var hourly_traffic_data = {
	            labels : ["12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm"],
	            datasets : [
	                {
										  lineTension: lineTensionValue,
											data : [203,540,254,030,352,520,354,530,620]
	                }
	            ]
	        };
	var daily_traffic_data = {
	            labels : ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
	            datasets : [
	                {
										  lineTension: lineTensionValue,
											data : [403,540,254,430,352,520,354]
	                }
	            ]
	        };

//-------- Quick fix --------//
	//Problem: Can't get universal bar config to work so this would apply to both the line & bar charts.
			var daily_traffic_data_bar = {
			            labels : ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
			            datasets : [
			                {
												  lineTension: lineTensionValue,
													backgroundColor: "rgba(115, 120, 186, 1)",
													data : [403,540,254,430,352,520,354]
			                }
			            ]
			        };
//-------- Quick fix --------//

	var weekly_traffic_data = {
	            labels : ["1-7", "7-14", "14-21", "21-28", "28-31","1-7", "7-14"],
	            datasets : [
	                {
										  lineTension: lineTensionValue,
	                    data : [610,520,562,491,557,450,420]
	                }
	            ]
	        };
	var monthly_traffic_data = {
	            labels : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
	            datasets : [
	                {
										  lineTension: lineTensionValue,
	                    data : [1017,701,570,651,762,601,772,650]
	                }
	            ]
	        };
	var mobile_traffic_data = {
	            labels : ["Desktop", "Phones", "Tablet"],
	            datasets : [
	                {
										  lineTension: lineTensionValue,
	                    data : [60, 30, 15],
											backgroundColor: [
													"#7378BA",
													"#91C694",
													"#81B0BD"
											],
	                }
	            ]
	        };


//---------------------------//
//---- Large Traffic Chart ----//
//---------------------------//

	// Line & Point Settings
	Chart.defaults.global.elements.line.backgroundColor = 'rgba(115, 120, 186,0.3)';
	Chart.defaults.global.elements.line.borderWidth = 2;
	Chart.defaults.global.elements.line.borderColor = 'rgba(115, 120, 186, 1)';
	Chart.defaults.global.elements.point.radius = 6;
	Chart.defaults.global.elements.point.backgroundColor = 'rgb(255, 255, 255)';
	Chart.defaults.global.elements.point.borderWidth = 3;
	Chart.defaults.global.elements.point.borderColor = 'rgba(115, 120, 186, 1)';
	Chart.defaults.global.elements.point.hoverRadius = 6;
	Chart.defaults.global.elements.point.hoverBorderWidth = 3;

// Chart to display on load (weekly)
		var weekly_traffic_chart = document.getElementById("traffic-data");
		var weekly_data_line = new Chart(weekly_traffic_chart, {
		    type: 'line',
		    data: weekly_traffic_data
		});

// Toggle Selected class ID
$(".traffic-nav li").click(function(){
    $(".traffic-nav li a").removeAttr('id', 'selected');
    $(this).children().attr('id', 'selected');
});

// Click Funcations for the Data Type Toggles (Custom chart nav)
	$(".hourly-toggle").click(function(){
		$(".traffic-data-box").empty();
    $(".traffic-data-box").html('<canvas id="traffic-data" height="400"><canvas>');
		var hourly_traffic_chart = document.getElementById("traffic-data");
		var hourly_data_line = new Chart(hourly_traffic_chart, {
		    type: 'line',
		    data: hourly_traffic_data
		});
	});

	$(".daily-toggle").click(function(){
		$(".traffic-data-box").empty();
    $(".traffic-data-box").html('<canvas id="traffic-data" height="400"><canvas>');
		var daily_traffic_chart = document.getElementById("traffic-data");
		var daily_data_line = new Chart(daily_traffic_chart, {
		    type: 'line',
		    data: daily_traffic_data
		});
	});

	$(".weekly-toggle").click(function(){
		$(".traffic-data-box").empty();
    $(".traffic-data-box").html('<canvas id="traffic-data" height="400"><canvas>');
		var weekly_traffic_chart = document.getElementById("traffic-data");
		var weekly_data_line = new Chart(weekly_traffic_chart, {
		    type: 'line',
		    data: weekly_traffic_data
		});
	});

	$(".monthly-toggle").click(function(){
		$(".traffic-data-box").empty();
    $(".traffic-data-box").html('<canvas id="traffic-data" height="400"><canvas>');
		var monthly_traffic_chart = document.getElementById("traffic-data");
		var monthly_data_line = new Chart(monthly_traffic_chart, {
		    type: 'line',
		    data: monthly_traffic_data
		});
	});


//---------------------------//
//-------- Other Charts --------//
//---------------------------//

// Bar chart for Daily traffic (using daily data)
		var daily_traffic_bar_chart = document.getElementById("daily-traffic-data");
		var daily_data_bar = new Chart(daily_traffic_bar_chart, {
		    type: 'bar',
		    data: daily_traffic_data_bar
		});

// Doughnut chart for Mobile traffic (using daily data)
		var mobile_traffic_doughnut_chart = document.getElementById("mobile-traffic-data");
		var mobile_data_doughnut = new Chart(mobile_traffic_doughnut_chart, {
		    type: 'doughnut',
		    data: mobile_traffic_data
		});


		//---------------------------------------------//
		//------------- Forms -------------//
		//---------------------------------------------//

$("#member-search-button").click(function() {
	if (!$(".user-message").val()){
		 swal("Ops! Try filling everything out")
	} else {
		swal("Oh my gosh... you did it :)")
		}
});
