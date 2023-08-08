import {dom, library} from '@fortawesome/fontawesome-svg-core';
import {
    faBlog,
    faDownload,
    faFile,
    faHandshakeSimple,
    faServer,
    faUpRightFromSquare,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

import {faDiscord, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

library.add(faDownload, faUser, faBlog, faServer, faFile, faHandshakeSimple, faDownload, faUpRightFromSquare);
library.add(faGithub, faDiscord, faLinkedin);

window.addEventListener('DOMContentLoaded', () => {
    dom.i2svg();
    dom.watch();
});
