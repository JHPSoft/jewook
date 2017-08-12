/*


function chk(value, prv , id, nxt){
//메시지 2개를 모두 받으면
if(arguments.length==2){
alert(value+' '+prv);
}else{ //1개만 받으면
alert(id);
}
}


function chk(value) {
  var tmp = document.getElementById("point").innerHTML;
  tmp = Number(tmp);
  tmp += value;
  document.getElementById("point").innerHTML=tmp;


}



      //var type = $(this).attr('id').substr(0,3);
      //var id = Number($(this).attr('id').substr(4,3));
        //alert($(this).attr('class'));

//      alert(id);
//      alert(type);
//      alert(id.toString(16));
*/




$('.cell').click(function() 
{

      var point = $(this).data("point");
      var tmp = Number(document.getElementById("point").innerHTML);
      var stats = document.getElementsByClassName("act");
      var bins = "";
      var hexs;
     //alert(typeof point);
           if ( $( this ).hasClass( "chked" ) ) 
           {
                 tmp -= point;
                $( this ).removeClass( "chked" );
                 $(this).data("chk","0");
            } 
            else
            {
                tmp += point;
                $( this ).addClass( "chked" );
                 $(this).data("chk","1");
            } 
   document.getElementById("point").innerHTML=tmp;
   for(var i = 0; i < stats.length ; i++)
       bins += $(stats[i]).data("chk");
   hexs = parseInt(bins, 2);
   document.getElementById("stats").innerHTML = bins + "  " + hexs;
}
);


