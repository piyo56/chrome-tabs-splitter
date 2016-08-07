document.getElementById("split").onclick = function() {
    chrome.tabs.query( {currentWindow: true}, function(tabArray){
        var active_tabId = -1,
            left_tabIds  = [],
            right_tabIds = [];

        //[タブのsplit処理]
        //  現在の開いている(=active)タブを含め、その右側
        //  にあるタブをまとめて、新しいウィンドウで開く
        for (var i=0; i<tabArray.length; i++) {
            if( tabArray[i]["active"] ){
                active_tabId = tabArray[i]["id"];
            }
            if( active_tabId === -1) {
                left_tabIds.push(tabArray[i]["id"]);
            } else {
                right_tabIds.push(tabArray[i]["id"]);
            }
        }
        console.info(tabArray);
        console.info("now: " + active_tabId);
        console.info("left: " + left_tabIds);
        console.info("right: " + right_tabIds);
    });
};
