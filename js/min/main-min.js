var isLateralNavAnimating=!1;$(".cd-nav-trigger").on("click",function(a){a.preventDefault(),isLateralNavAnimating||($(this).parents(".csstransitions").length>0&&(isLateralNavAnimating=!0),$("body").toggleClass("navigation-is-open"),$(".cd-navigation-wrapper").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){isLateralNavAnimating=!1}))}),$("#tooltip").tooltipster({content:$("#tooltip_content").detach(),contentCloning:!1,animation:"fade",delay:0,trigger:"click"}),$(".alert-icon").on("click",function(){$(".alert-icon").toggleClass("new-alert")}),$("#start").ready(function(){$.amaran({message:'<span class="alert-sub"> Alert</span> This is really important so you should stop what you are doing to look at this message',position:"top middle",inEffect:"fadeIn",outEffect:"slideTop",closeOnClick:!1,closeButton:!0,sticky:!0})}),Chart.defaults.global.legend=!1,Chart.defaults.global.maintainAspectRatio=!1;var lineTensionValue=0,hourly_traffic_data={labels:["12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm","8pm"],datasets:[{lineTension:lineTensionValue,data:[203,540,254,24,352,520,354,530,620]}]},daily_traffic_data={labels:["MON","TUE","WED","THU","FRI","SAT","SUN"],datasets:[{lineTension:lineTensionValue,data:[403,540,254,430,352,520,354]}]},daily_traffic_data_bar={labels:["MON","TUE","WED","THU","FRI","SAT","SUN"],datasets:[{lineTension:lineTensionValue,backgroundColor:"rgba(115, 120, 186, 1)",data:[403,540,254,430,352,520,354]}]},weekly_traffic_data={labels:["1-7","7-14","14-21","21-28","28-31","1-7","7-14"],datasets:[{lineTension:lineTensionValue,data:[610,520,562,491,557,450,420]}]},monthly_traffic_data={labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug"],datasets:[{lineTension:lineTensionValue,data:[1017,701,570,651,762,601,772,650]}]},mobile_traffic_data={labels:["Desktop","Phones","Tablet"],datasets:[{lineTension:lineTensionValue,data:[60,30,15],backgroundColor:["#7378BA","#91C694","#81B0BD"]}]};Chart.defaults.global.elements.line.backgroundColor="rgba(115, 120, 186,0.3)",Chart.defaults.global.elements.line.borderWidth=2,Chart.defaults.global.elements.line.borderColor="rgba(115, 120, 186, 1)",Chart.defaults.global.elements.point.radius=6,Chart.defaults.global.elements.point.backgroundColor="rgb(255, 255, 255)",Chart.defaults.global.elements.point.borderWidth=3,Chart.defaults.global.elements.point.borderColor="rgba(115, 120, 186, 1)",Chart.defaults.global.elements.point.hoverRadius=6,Chart.defaults.global.elements.point.hoverBorderWidth=3;var weekly_traffic_chart=document.getElementById("traffic-data"),weekly_data_line=new Chart(weekly_traffic_chart,{type:"line",data:weekly_traffic_data});$(".traffic-nav li").click(function(){$(".traffic-nav li a").removeAttr("id","selected"),$(this).children().attr("id","selected")}),$(".hourly-toggle").click(function(){$(".traffic-data-box").empty(),$(".traffic-data-box").html('<canvas id="traffic-data" height="400"><canvas>');var a=document.getElementById("traffic-data"),t=new Chart(a,{type:"line",data:hourly_traffic_data})}),$(".daily-toggle").click(function(){$(".traffic-data-box").empty(),$(".traffic-data-box").html('<canvas id="traffic-data" height="400"><canvas>');var a=document.getElementById("traffic-data"),t=new Chart(a,{type:"line",data:daily_traffic_data})}),$(".weekly-toggle").click(function(){$(".traffic-data-box").empty(),$(".traffic-data-box").html('<canvas id="traffic-data" height="400"><canvas>');var a=document.getElementById("traffic-data"),t=new Chart(a,{type:"line",data:weekly_traffic_data})}),$(".monthly-toggle").click(function(){$(".traffic-data-box").empty(),$(".traffic-data-box").html('<canvas id="traffic-data" height="400"><canvas>');var a=document.getElementById("traffic-data"),t=new Chart(a,{type:"line",data:monthly_traffic_data})});var daily_traffic_bar_chart=document.getElementById("daily-traffic-data"),daily_data_bar=new Chart(daily_traffic_bar_chart,{type:"bar",data:daily_traffic_data_bar}),mobile_traffic_doughnut_chart=document.getElementById("mobile-traffic-data"),mobile_data_doughnut=new Chart(mobile_traffic_doughnut_chart,{type:"doughnut",data:mobile_traffic_data});$("#member-search-button").click(function(){$(".user-message").val()?swal("Oh my gosh... you did it :)"):swal("Ops! Try filling everything out")});