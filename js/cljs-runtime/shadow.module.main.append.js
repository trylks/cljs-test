
shadow.cljs.devtools.client.env.module_loaded('main');

try { cljstest.frontend.app.init(); } catch (e) { console.error("An error occurred when calling (cljstest.frontend.app/init)"); throw(e); }