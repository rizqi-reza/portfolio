import { MainPage } from 'pages/main';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.scss';
require('./assets/js/jquery.sticky.js');
require('./assets/js/jquery.appear.js');
require('./assets/js/bootstrap.min.js');
require('./assets/js/bootsnav.js');
require('./assets/js/progressbar.js');
require('./assets/js/custom.js');

ReactDOM.render(<MainPage />, document.getElementById('root'));
