import {dom, library} from '@fortawesome/fontawesome-svg-core';
import {
    faArrowUpFromBracket,
    faBlog,
    faDownload,
    faEnvelope,
    faFile,
    faHandshakeSimple,
    faImage,
    faListCheck,
    faQuestion,
    faRotateRight,
    faServer,
    faUpRightFromSquare,
    faUser,
    faUserPlus,
} from '@fortawesome/free-solid-svg-icons';

import {faDiscord, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

library.add(faDownload, faUser, faBlog, faServer, faFile, faHandshakeSimple, faDownload, faUpRightFromSquare, faEnvelope, faListCheck, faImage, faQuestion, faArrowUpFromBracket, faRotateRight, faUserPlus);
library.add(faGithub, faDiscord, faLinkedin);

window.addEventListener('DOMContentLoaded', () => {
    dom.i2svg();
    dom.watch();
});
