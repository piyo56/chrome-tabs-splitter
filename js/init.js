window.onload = function() {
    var store_div      = document.getElementById("li_store");
    var store_button   = document.getElementById("store");
    var retreve_button = document.getElementById("retreve");
    
    if (!localStorage) {
        store_div.style.display      = "none";
        store_button.style.display   = "none";
        retreve_button.style.display = "none";
        return;
    } 
    
    //keyの存在確認
    var item = localStorage.getItem("temporarily_stored_tabs");
    if(item === null) {
        retreve_button.style.display = "none";
    } else {
        store_button.style.display    = "none";
    }
};
