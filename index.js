document.addEventListener("DOMContentLoaded", function()
{
    // 按下「X」圖隱藏遮罩層
    //$(".closeDialog").click(function() 
    document.getElementById("closeDialog").addEventListener("click", function()
    {
        ShowModalDialog( false );
    });
    // 按鈕後顯示遮罩層
    //$(".btnOpenModal").click(function()
    document.getElementById("btnOpenModal").addEventListener("click", function()
    {
        ShowModalDialog( true );
    });

                                                                                                                                                        
 
 
});

function ShowModalDialog( YesOrNo )
    {
        if ( true == YesOrNo )
        {
            document.getElementById("DivOverlapMask").style.display = "block";
            document.getElementById("DivDialog").style.display = "block";
            document.getElementById("closeDialog").style.display = "block";

            // document.getElementById("DivOverlapMask").style.visibility = "visible";
            // document.getElementById("DivDialog").style.visibility = "visible";
            // document.getElementById("closeDialog").style.visibility = "visible";
            
            // $("DivOverlapMask").css( "visibility", "visible" );
            // $("DivDialog").css( "visibility", "visible" );
            // $("closeDialog").css( "visibility", "visible" );
        }
        else
        {
            document.getElementById("DivOverlapMask").style.display = "none";
            document.getElementById("DivDialog").style.display = "none";
            document.getElementById("closeDialog").style.display = "none";

            function write(str)
{
    window.document.write(str);
}

write("<!--[if lte IE 8]><script src='css/ie/html5shiv.js'></script><![endif]-->");
write("<script src='js/jquery.min.js'></script>");
write("<script src='js/jquery.dropotron.min.js'></script>");
write("<script src='js/jquery.scrollgress.min.js'></script>");
write("<script src='js/skel.min.js'></script>");
write("<script src='js/skel-layers.min.js'></script>");
write("<script src='js/init.js'></script>");
write("<noscript>");
write("    <link rel='stylesheet' href='css/skel.css' />");
write("    <link rel='stylesheet' href='css/style.css' />");
write("    <link rel='stylesheet' href='css/style-wide.css' />");
write("</noscript>");
write("<!--[if lte IE 8]><link rel='stylesheet' href='css/ie/v8.css' /><![endif]-->");
write("<script>");
write("(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){");
write("(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),");
write("m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)");
write("})(window,document,'script','//www.google-analytics.com/analytics.js','ga');");
write("ga('create', 'UA-58021915-1', 'auto');");
write("ga('send', 'pageview');");
write("</script>");


            // document.getElementById("DivOverlapMask").style.visibility = "hidden";
            // document.getElementById("DivDialog").style.visibility = "hidden";
            // document.getElementById("closeDialog").style.visibility = "hidden";
        // $(".DivOverlapMask").css( "visibility", "hidden" );
        // $(".DivDialog").css( "visibility", "hidden" );
        // $(".closeDialog").css( "visibility", "hidden" );
        }
    }