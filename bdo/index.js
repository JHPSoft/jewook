String.prototype.trim = function() {
    return this.replace(/(^\s*)|(\s*$)/gi, "");
};

function bintohex(val2){
    var bins = val2.trim();
    var hexs = "";
    for(var i = 0; i < (bins.length/4) ; i++)
    {
        hexs += parseInt(bins.substr(4*i , 4) , 2).toString(16);
    }
    return hexs;
}

function hextobin(val16){
    var hexs = val16.trim();
    var bins = "";
    for(var i = 0; i < hexs.length ; i++)
    {
        var tmp = parseInt(hexs.substr(i , 1) , 16).toString(2);
            while(tmp.length < 4 )
                tmp = "0" + tmp;
      
        bins += tmp;
    }
    return bins;
}


function getstats()
{
    var url = new URL(location.href);
    var c = hextobin(url.searchParams.get("stats")).substr(1,143);

    for(var i = 0; i < $('.cell').length ; i++)
    {
        if( c.substr(i,1) == "1" )
        {
            $(".cell").eq(i).addClass( "chked" );
            $(".cell").eq(i).data("chk","1");
        }
    }
    document.getElementById("stats").innerHTML = c;
    checking();
    
}

function checking()
{
    var points = 0;
    
    for(var i = 0; i < $('.cell').length ; i++)
    {
        if( $(".cell").eq(i).data("chk") == "1" )
            $(".cell").eq(i).addClass( "chked" );
    }
    
    for(var j = 0; j < $('.chked').length ; j++)
    {
        points += $(".chked").eq(j).data("point");
    }
    document.getElementById("point").innerHTML= points;
}

function makeurl()
{
    var bins = "0";
    
    for(var j = 0; j < $('.cell').length ; j++)
    {
        bins += $(".cell").eq(j).data("chk");
    }
    document.getElementById("point").innerHTML= bintohex(bins);
    alert(bins);
    alert(bintohex(bins));
}


$('.cell').click(function() 
{
    var points = 0;
    //alert( $('.cell').length);
    if ( $( this ).hasClass( "chked" ) ) 
    {
        $( this ).removeClass( "chked" );
        $(this).data("chk","0");
    } 
    else
    {
        $( this ).addClass( "chked" );
        $(this).data("chk","1");
    } 
    
    checking();
}
);