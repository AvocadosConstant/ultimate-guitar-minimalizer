var btn;

function setStatus(onStatus) {
  chrome.storage.sync.set({'on': onStatus}, function() {
    updateBtn();
  });
}

function toggleStatus() {
  chrome.storage.sync.get('on', function(result){
    setStatus(!result.on);
  });
}

function updateBtn() {
  chrome.storage.sync.get('on', function(result){
    btn.innerHTML = result.on ? 'ON' : 'OFF';
  });
}

document.addEventListener('DOMContentLoaded', function () {
  btn = document.getElementById("button");
  btn.addEventListener('click', toggleStatus);

  updateBtn();
});

