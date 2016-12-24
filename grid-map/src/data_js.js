var timeout;

jQuery(function() {
    loadgridMap();
});

function loadgridMap() {
   jQuery.ajax("./index.php?widgetId=" + widgetId, {
        success : function(htmlData) {
            jQuery("#Grid-map").html("");
            jQuery("#Grid-map").html(htmlData);
            console.log(htmlData);
            var h = document.getElementById("map-icon");
            if (h){
                parent.iResize(window.name, h.scrollHeight + 10);
            } else {
               parent.iResize(window.name, 200);
            }
        }
    });
    if (autoRefresh > 0) {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(refreshgridMap, (autoRefresh * 1000));
    }
}

function refreshgridMap() {
  //location.reload();
  loadgridMap();
}

