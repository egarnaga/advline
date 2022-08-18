import {ieFix} from './utils/ie-fix';

import {initModals} from './modules/init-modals';
import {hamburgerMenu} from './modules/hamburger-menu';
import {mobileCasesSlider} from './modules/mobile-cases-slider';
import {mobileBlogSlider} from './modules/mobile-blog-slider';
import {mobileToolsSlider} from './modules/mobile-tools-slider';
import {mobileServicePageSlider} from './modules/mobile-service-page-slider';

// Utils
// ---------------------------------

ieFix();

// Modules
// ---------------------------------

initModals();
hamburgerMenu();
mobileCasesSlider();
mobileBlogSlider();
mobileToolsSlider();
mobileServicePageSlider();
