document.getElementById('moreInfoBtn').addEventListener('click', function() {
    var moreInfoDiv = document.getElementById('moreInfo');
    if (moreInfoDiv.style.display === 'none' || moreInfoDiv.style.display === '') {
      moreInfoDiv.style.display = 'block';
    } else {
      moreInfoDiv.style.display = 'none';
    }
  });