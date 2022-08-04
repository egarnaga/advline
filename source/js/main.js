import {ieFix} from './utils/ie-fix';

import {initModals} from './modules/init-modals';
import {hamburgerMenu} from './modules/hamburger-menu';

// Utils
// ---------------------------------

ieFix();

// Modules
// ---------------------------------

initModals();
hamburgerMenu();
