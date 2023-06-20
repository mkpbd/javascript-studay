async function* fetchCommits(repo) {
  let url = `https://api.github.com/repos/${repo}/commits`;
  while (url) {
    const response = await fetch(url, {
      // (1)
      headers: { "User-Agent": "Our script" }, // github requires user-agent header
    });
    const body = await response.json(); // (2) parses response as JSON (array of commits)
    // (3) the URL of the next page is in the headers, extract it
    let nextPage = response.headers.get("Link").match(/<(.*?)>; rel="next"/);
    nextPage = nextPage && nextPage[1];
    url = nextPage;
    for (let commit of body) {
      // (4) yield commits one by one, until the page ends
      yield commit;
    }
  }
}

//============ An example of use (shows commit authors in console): =========

(async () => {
  let count = 0;
  for await (const commit of fetchCommits(
    "javascript-tutorial/en.javascript.info"
  )) {
    console.log(commit.author.login);
    if (++count == 100) {
      // let's stop at 100 commits
      break;
    }
  }
})();
