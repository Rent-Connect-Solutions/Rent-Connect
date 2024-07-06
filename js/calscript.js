// Start
_('#calendar').innerHTML = calendar();

// short queySelector
function _(s) {
  return document.querySelector(s);
};

// show todays event info
function showInfo(event) {
  // link 
 var calSource = 'json/aalcalendar.json';
  // get json
  getjson(calSource, function(obj) {
    for (key in obj) {
      // if has event add class
     if(_('[data-id="' + key + '"]')){
     _('[data-id="' + key + '"]').classList.add('event');        
     }
      if (event === key) {
        // template info
        var data = '<h3>' + obj[key].type + '</h3>' +
            '<dl>' +
            '<dt><dfn>Event:</dfn></dt><dd>' + obj[key].title + '</dd>' +
            '<dt><dfn>Date:</dfn></dt><dd>' + obj[key].date + '</dd>' +
            '<dt><dfn>Time:</dfn></dt><dd>' + obj[key].time + '</dd>' +
            '<dt><dfn>Location:</dfn></dt><dd>' + obj[key].location + '</dd>' +
            '<dt><dfn>Description:</dfn></dt><dd>' + obj[key].desc + '</dd>' +
            '<dt><dfn>Join Link:</dfn></dt><dd><a href="' + obj[key].more +
            '" title="Join Link:"> Click here to join</a><dt></dd>' +
            '</dl>';
        return _('#calendar_data').innerHTML = data;
      }
    }
  });
}
// simple calendar
function calendar() {
  // show info on init
  showInfo();

  // vars
  var day_of_week = new Array(
    'Sun', 'Mon', 'Tue',
    'Wed', 'Thu', 'Fri', 'Sat'),
      month_of_year = new Array(
    'January', 'February', 'March',
    'April', 'May', 'June', 'July',
    'August', 'September', 'October',
    'November', 'December'),
      
      Calendar = new Date(),
      year = Calendar.getYear(),
      month = Calendar.getMonth(),
      today = Calendar.getDate(),
      weekday = Calendar.getDay(),
      html = '';

  // start in 1 and this month
  Calendar.setDate(1);
  Calendar.setMonth(month);

  // template calendar
  html = '<table>';
  // head
  html += '<thead>';
  html += '<tr class="head_cal"><th colspan="7">' + month_of_year[month] + '</th></tr>';
  html += '<tr class="subhead_cal"><th colspan="7">' + Calendar.getFullYear() + '</th></tr>';
  html += '<tr class="week_cal">';
  for (index = 0; index < 7; index++) {
    if (weekday == index) {
      html += '<th class="week_event">' + day_of_week[index] + '</th>';
    } else {
      html += '<th>' + day_of_week[index] + '</th>';
    }
  }
  html += '</tr>';
  html += '</thead>';

  // body
  html += '<tbody class="days_cal">';
  html += '</tr>';
  // white zone
  for (index = 0; index < Calendar.getDay(); index++) {
    html += '<td class="white_cal"> </td>';
  }
  
  for (index = 0; index < 31; index++) {
    if (Calendar.getDate() > index) {

      week_day = Calendar.getDay();
      
      if (week_day === 0) {
        html += '</tr>';
      }
      if (week_day !== 7) {
        // this day
        var day = Calendar.getDate();
        var info = (Calendar.getMonth() + 1) + '/' + day + '/' + Calendar.getFullYear();

          // this is where the calendar displays days with an event scheduled
  /*  ORIGINAL */
      if (today === Calendar.getDate()) {
      html += '<td><a class="today_cal" href="#calendar_data" data-id="' + info + '" onclick="showInfo(\'' + info + '\')">' +
      day + '</a></td>';
  

/*  WITH EVENT POPUP 
          if (today === Calendar.getDate()) {
          html += '<td class="tooltip"><a class="today_cal" href="#" data-id="' + info + '" onclick="showInfo(\'' + info + '\')">' 
          + day + '<span class="tooltiptext"> POPUP DETAILS GO HERE' + '</span></a></td>';
          */
        
        showInfo(info); 
          
  showInfo(info); 
      } else {
        html += '<td><a href="#calendar_data" data-id="' + info + '" onclick="showInfo(\'' + info + '\')">' +
          day + '</a></td>';
      }


      }
      if (week_day == 7) {
        html += '</tr>';
      }
    }
    Calendar.setDate(Calendar.getDate() + 1);
  } // end for loop
  return html;
}


//   Get Json data  
function getjson(calSource, callback) {
  var self = this,
      ajax = new XMLHttpRequest();
  ajax.open('GET', calSource, true);
  ajax.onreadystatechange = function() {
    if (ajax.readyState == 4) {
      if (ajax.status == 200) {
        var data = JSON.parse(ajax.responseText);
        return callback(data);
      } else {
        console.log(ajax.status);
      }
    }
  };
  ajax.send();
}
