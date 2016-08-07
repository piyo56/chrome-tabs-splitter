document.getElementById("bookmark").onclick = function() {
    document.body.style.height = "300px";
    document.getElementById("bookmark_setting").style.display = "block";
    chrome.bookmarks.getTree(function(bookmark_tree) {
        console.info(bookmark_tree);
    });

    //chrome.windows.create({
    //        "width":   300,
    //        "height":  300,
    //        "focused": true,
    //        "type":    "popup"
    //    }, function (window_info){
    //    });
};

/*
function getBookmarkDir(bookmark_tree){
    var bookmark_info = ["];
    for (var i=0; i<bookmark_tree.length; i++) {
        
}
*/
