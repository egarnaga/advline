import {ieFix} from './utils/ie-fix';

import {initModals} from './modules/init-modals';
import {hamburgerMenu} from './modules/hamburger-menu';
import {mobileCasesSlider} from './modules/mobile-cases-slider';
import {mobileBlogSlider} from './modules/mobile-blog-slider';
import {mobileToolsSlider} from './modules/mobile-tools-slider';
import {mobileServicePageSlider} from './modules/mobile-service-page-slider';
import {mobileProcessSlider} from './modules/mobile-process-slider';
import {mobileArticleSlider} from './modules/mobile-article-slider';
import {briefToggle} from './modules/brief-toggle';
import {formValidation} from './modules/form-validation';
import {hoverMenu} from './modules/hover-menu';
import {casesSlider} from './modules/cases-slider';
import {typesSlider} from './modules/types-slider';
import {packagesSlider} from './modules/packages-slider';

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
mobileProcessSlider();
mobileArticleSlider();
briefToggle();
formValidation();
hoverMenu();
casesSlider();
typesSlider();
packagesSlider();
