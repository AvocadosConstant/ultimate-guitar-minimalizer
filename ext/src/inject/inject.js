function minimalize() {
  var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);

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
          "head_ad_UG",
          "vote-success",
          "fb-meta",
          "b-hats-banner",
          "js-survey-banner",
          "adv_bottom",
          "js-ab-regular",
          "b-suggest-correction",
          "abs",
      ]

      clutter.forEach(function(name){
          [].forEach.call(document.getElementsByClassName(name), function(entry) {
              entry.remove();
          });
      });

      var ads = document.getElementById("advanced_search");
      if(ads) ads.remove();
      //chrome.tabs.executeScript(null, {code:"document.body.style.backgroundColor='#FFF'"});
    }
  }, 200);
}

chrome.storage.sync.get('on', function(result){
  if(result.on) minimalize();
});
