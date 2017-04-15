/**
 * Created by ChathuraDR on 4/15/2017.
 */



$.getJSON("php/getData.php",function (data) {
    var items = [];
    $.each(data,function (key,val) {
        items.push("<tr>");
        items.push("<td id='"+key+"'>"+val.uId+"</td>");
        items.push("<td id='"+key+"'>"+val.firstName+"</td>");
        items.push("<td id='"+key+"'>"+val.lastName+"</td>");
        items.push("<td id='"+key+"'>"+val.gender+"</td>");
        items.push("</tr>");
    });
    $('<tbody/>',{html:items.join("")}).appendTo("table");
});
