var likecounts = [];
var likes = document.getElementsByClassName("like-counts")
for (var i = 0; i < likes.length; i++) {
    var num = likes.item(i).innerHTML;
    likecounts[i] = num.match(/\d/g).join('');
}

function like(element) {
    par = element.parentNode;
    parid = par.getAttribute("id");
    nid = parseInt(parid);
    likecounts[nid] ++;
    document.getElementsByClassName("like-counts")[nid].innerHTML = `${likecounts[nid]} like(s)`
}