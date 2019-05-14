const path = require('path');
const root = path.parse(process.mainModule.filename).dir;
const EXPRESS = require('express');
const APP = EXPRESS();
const CORS = require('cors');
const HELMET = require('helmet');
const compressor = require('compression');
const bodyParser = require('body-parser');
require('custom-env').env();

APP.use(CORS());
APP.use(HELMET());
APP.use(compressor({ threshold: 0 }));
APP.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
APP.use(bodyParser.json()); // parse application/json
APP.set('view engine', 'ejs');
APP.use('/static', EXPRESS.static(__dirname + '/public'));

APP.get('/', function(req, res) {
    res.status(200).send('line_bot_api');
});

const route_sampleRoute = require(path.join(root, "routes/line_bot", "index"));
APP.use(`/line_bot`, route_sampleRoute);

let port = process.env.PORT || 3000;

APP.listen(port, () => {
    console.log(`listening port ${port}`);
});
