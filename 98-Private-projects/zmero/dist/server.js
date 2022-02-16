var express = require('express');
var app = express();
var port = 4000;
app.use(express.static('client/build'));
//gets
app.get('/get-famous-restaurants', function (req, res) {
    var Data = [{ id: 1, name: 'shila-sharon cohen Kitchen & bar', image: 'https://media-cdn.tripadvisor.com/media/photo-s/03/7a/47/6d/shila.jpg', booking: 27 },
        { id: 2, name: 'Cafe Popular', image: 'https://cdn.archilovers.com/projects/c_383_f83bb625-ff28-414b-a700-8e4bebde941b.jpg', booking: 22 },
        { id: 3, name: 'Taizu', image: 'https://bestrest.rest/wp-content/uploads/2019/05/TAIZU_017.jpg', booking: 20 },
        { id: 5, name: 'Hakosem', image: 'https://cdn.istores.co.il/image/upload/if_ar_gt_2:1/c_fill,h_662,w_555/c_fill,h_662,w_555/if_else/c_fill,q_100,w_555/if_end/dpr_2/v1614106887/clients/109701/5e9b9717137eea988b88592d0861cc3a64d59fcd.jpg', booking: 15 }, { id: 4, name: 'La Regence', image: 'https://images.jpost.com/image/upload/f_auto,fl_lossy/t_JM_ArticleMainImageFaceDetect/399693', booking: 5 }];
    console.log(Data);
    res.send(Data);
});
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
