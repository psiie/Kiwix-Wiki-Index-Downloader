var nrc = require("node-run-cmd");
nrc.run("wget http://download.kiwix.org/wp1/arwiki_2017-07/redirects.lzma", {
  onData: data => {
    console.log(data);
  }
});
