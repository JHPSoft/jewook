//change the text below to reflect your own,
var current="<h3>박제욱 전역!</h3>"
var montharray=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec")

function countdown(yr,m,d){
theyear=yr;themonth=m;theday=d
var today=new Date()
var todayy=today.getYear()
if (todayy < 1000)
todayy+=1900
var todaym=today.getMonth()
var todayd=today.getDate()
var todayh=today.getHours()
var todaymin=today.getMinutes()
var todaysec=today.getSeconds()
var todaystring=montharray[todaym]+" "+todayd+", "+todayy+" "+todayh+":"+todaymin+":"+todaysec
futurestring=montharray[m-1]+" "+d+", "+yr
dd=Date.parse(futurestring)-Date.parse(todaystring)
dday=Math.floor(dd/(60*60*1000*24)*1)
dhour=Math.floor((dd%(60*60*1000*24))/(60*60*1000)*1)
dmin=Math.floor(((dd%(60*60*1000*24))%(60*60*1000))/(60*1000)*1)
dsec=Math.floor((((dd%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1)
if(dday<0){
document.getElementById('timer').innerHTML=current
return
}
else
document.getElementById('timer').innerHTML="<h3>박제욱 전역까지</h3><h2>"+dday+ "일 "+dhour+"시간 "+dmin+" 분 "+dsec+"초 남음</h2>"
setTimeout("countdown(theyear,themonth,theday)",1000)
}
//enter the count down date using the format year/month/day
countdown(2018,02,28)