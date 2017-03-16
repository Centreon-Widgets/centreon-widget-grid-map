var timeout;

function loadgridMap() {
   jQuery.ajax("./index.php?widgetId=" + widgetId, {
        success : function(htmlData) {
            jQuery("#Grid-map").html("");
            jQuery("#Grid-map").html(htmlData);
        }
    });
    resizegridMap();
}

function resizegridMap() {
            var h = document.getElementById("Grid-map");
            if (h){
                parent.iResize(window.name, h.scrollHeight + 10);
            } else {
               parent.iResize(window.name, 200);
            }
}

function refreshgridMap() {
  //location.reload();
  loadgridMap();
}

jQuery(function() {
    if (autoRefresh > 0) {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(refreshgridMap, (autoRefresh * 1000));
    }
    resizegridMap();
});
