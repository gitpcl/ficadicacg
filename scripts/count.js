// JQuery Solution
$.getJSON("https://graph.facebook.com/v3.2/17841401861492594?fields=business_discovery.username(ficadicacg){followers_count,media_count}&access_token=EAACdhjVBlp0BAMJrgAZAEef9K4cpTdR4JPAZBCHwBogoWbdibsxNTDVoNSUbgbD9YEaELaETbuFUZBmF1kXUzlqIDpHMTM4HPPXT8soq5KvnYdqQGZAmrxjobbWZBPyPZBap6kS2D6VjybOxQLv4TudfOkS5ZCZCR1QiSZAA0WTYpZBgZDZD", function(data) {

    const followers = data.business_discovery.followers_count;

    const media = data.business_discovery.media_count;

    function commaSeparateNumber(val){
        while (/(\d+)(\d{3})/.test(val.toString())){
          val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
        }
        return val;
    }

    $(".followers_count_landing").append((followers/1000).toFixed(1) + ' K');

    $(".followers_count").append((followers/1000).toFixed(1) + 'K' + '<p>Followers</p>');

    $(".media_count").append(commaSeparateNumber(media + '<p>Media Posted</p>'));

})

