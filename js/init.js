window.onload = function() {
    var store_button   = document.getElementById("store");
    var retrieve_button = document.getElementById("retrieve");
    
    if (!localStorage) {
        store_button.style.display   = "none";
        retrieve_button.style.display = "none";
        document.getElementById("func_buttons").style.width = "180px";
        return;
    } 
    
    //keyの存在確認
    var item = localStorage.getItem("temporarily_stored_tabs");
    if(item === null) {
        retrieve_button.style.display = "none";
        document.getElementById("func_buttons").style.width = "275px";
    } else {
        store_button.style.display    = "none";
        document.getElementById("func_buttons").style.width = "315px";
    }
    
    //ボタンにおしこむようなデザインを追加
    var buttons = ["split", "store", "bookmark", "save"];
    for(var i=0; i<buttons.length; i++) {
        document.getElementById(buttons[i]).addEventListener("mousedown", function(e){
            //class追加
            this.classList.add("pushed");
        });
        document.getElementById(buttons[i]).addEventListener("mouseup", function(e){
            //class削除
            this.classList.remove("pushed");
        });
    }
};

