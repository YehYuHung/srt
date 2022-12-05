// place at : deploy/ghpages.js
// you can see more info at https://github.com/tschaub/gh-pages
// reference Url : https://github.com/andrew781026/F2E_Card
const path = require('path');
const ghpages = require('gh-pages');

const options = {
    branch: 'gh-pages',
    repo: 'https://github.com/YehYuHung/srt.git' // project github repo
};

const callback = err => {
    if (err) console.error(err);
    else console.log("publish success");
};

/**
 * This task pushes to the `master` branch of the configured `repo`.
 */
ghpages.publish(path.resolve(__dirname, '../dist'), options, callback)