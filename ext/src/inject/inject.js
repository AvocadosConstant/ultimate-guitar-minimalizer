chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);

            // This part of the script triggers when page is done loading
            
            var clutter = [
                "t_bl", 
                "p_h", 
                "t_comments",
                "separator",
                "comment_box_main",
                "comment_box_h_main",
                "t_hs", 
                "cm_cnt",
                "bdrunion",
                "head_ad_UG"
            ]

            clutter.forEach(function(name){
                [].forEach.call(document.getElementsByClassName(name), function(entry) {
                    entry.remove();
                });
            });

            var ads = document.getElementById("advanced_search");
            ads.remove();
        }
	}, 10);
});
