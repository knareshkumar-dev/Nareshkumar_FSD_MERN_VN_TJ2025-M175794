const http = require('http');
const {spawnSync} = require('child_process');

const urls = process.argv.slice(2);
const timeout = 120000; // 120s per URL

function check(url){
  return new Promise(resolve => {
    try{
      const req = http.get(url, {timeout: 2000}, res => { res.resume(); resolve(true); });
      req.on('error', () => resolve(false));
      req.on('timeout', () => { req.destroy(); resolve(false); });
    }catch(e){ resolve(false); }
  });
}

(async () => {
  for(const url of urls){
    console.log('Waiting for', url);
    const start = Date.now();
    let ok = false;
    while(Date.now() - start < timeout){
      // eslint-disable-next-line no-await-in-loop
      if(await check(url)) { ok = true; break; }
      // eslint-disable-next-line no-await-in-loop
      await new Promise(r => setTimeout(r, 1000));
    }
    if(ok){
      console.log('Responding at', url);
      const res = spawnSync('node', ['scripts/run-axe.js', url], { stdio: 'inherit' });
      process.exit(res.status);
    }
  }
  console.error('No frontend response on provided ports');
  process.exit(1);
})();
