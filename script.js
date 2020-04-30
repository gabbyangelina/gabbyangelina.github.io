(function(){
    var words = [
        ' a photographer',
        ' an illustrator',
        ' a creative thinker',
        ' an explorer',
        ' a lifelong learner',
        
        ], i = 0;
    setInterval(function(){
        $('#changingword').fadeOut(function(){
            $(this).html(words[i=(i+1)%words.length]).fadeIn();
        });
    }, 3000);
      
})();

