function convertDay(d, short) {
    if(short){
        var day = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
    }else{
        var day = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    }
    return day[d]
}
function convertMonth(m, short) {
    if(short){
        var month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    }else{
        var month = ["January", "February", "March", "April", "May", "June", "July","August","September","October","November","Decemter"]
    }
    return month[m]
}
function timeImprove(time, t) {
    var year = time.getFullYear();
    var month = convertMonth(time.getMonth(), false);
    var date = time.getDate()
    var min = time.getMinutes()
    var hour = time.getHours()
    var sec = time.getSeconds()
    if(date < 10){date = "0"+date}
    if(min < 10){min = "0"+min}
    if(hour < 10){hour = "0"+hour}
    if(sec < 10){ sec = "0"+sec}
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    switch(t){
        case 'time':
            time = hour + ':' + min + ':' + sec
            break;
        case 'date':
            time = date + ' ' + month + ' ' + year
            break
        default:
            break;
    }
    return time;
}
module.exports = {convertDay,convertMonth,timeImprove}
