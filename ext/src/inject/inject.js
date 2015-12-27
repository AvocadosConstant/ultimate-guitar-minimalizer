chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);

            // This part of the script triggers when page is done loading
            
            var clutter = [
                "t_bl", 
                "p_h", 
                "comment_box_main", 
                "t_hs", 
                "cm_cnt"
            ]

            clutter.forEach(function(name){
                [].forEach.call(document.getElementsByClassName(name), function(entry) {
                    entry.remove();
                });
            });

        }
	}, 10);
});
