goog.provide('cljstest.frontend.app');
cljstest.frontend.app.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
cljstest.frontend.app.hook_browser_navigation_BANG_ = (function cljstest$frontend$app$hook_browser_navigation_BANG_(){
var G__26084 = (new goog.history.Html5History());
goog.events.listen(G__26084,goog.history.EventType.NAVIGATE,(function (event){
return secretary.core.dispatch_BANG_(event.token);
}));

G__26084.setEnabled(true);

return G__26084;
});
cljstest.frontend.app.app_routes = (function cljstest$frontend$app$app_routes(){
secretary.core.set_config_BANG_(new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__25974__auto___26097 = (function (params__25975__auto__){
if(cljs.core.map_QMARK_(params__25975__auto__)){
var map__26085 = params__25975__auto__;
var map__26085__$1 = (((((!((map__26085 == null))))?(((((map__26085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26085):map__26085);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljstest.frontend.app.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
if(cljs.core.vector_QMARK_(params__25975__auto__)){
var vec__26087 = params__25975__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljstest.frontend.app.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__25974__auto___26097);


var action__25974__auto___26098 = (function (params__25975__auto__){
if(cljs.core.map_QMARK_(params__25975__auto__)){
var map__26090 = params__25975__auto__;
var map__26090__$1 = (((((!((map__26090 == null))))?(((((map__26090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26090):map__26090);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljstest.frontend.app.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"about","about",1423892543));
} else {
if(cljs.core.vector_QMARK_(params__25975__auto__)){
var vec__26092 = params__25975__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljstest.frontend.app.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"about","about",1423892543));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/about",action__25974__auto___26098);


return cljstest.frontend.app.hook_browser_navigation_BANG_();
});
cljstest.frontend.app.home = (function cljstest$frontend$app$home(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Home Page"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/about"], null),"about page"], null)], null);
});
cljstest.frontend.app.about = (function cljstest$frontend$app$about(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"About Page"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"home page"], null)], null);
});
if((typeof cljstest !== 'undefined') && (typeof cljstest.frontend !== 'undefined') && (typeof cljstest.frontend.app !== 'undefined') && (typeof cljstest.frontend.app.current_page !== 'undefined')){
} else {
cljstest.frontend.app.current_page = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26095 = cljs.core.get_global_hierarchy;
return (fexpr__26095.cljs$core$IFn$_invoke$arity$0 ? fexpr__26095.cljs$core$IFn$_invoke$arity$0() : fexpr__26095.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljstest.frontend.app","current-page"),(function (){
var fexpr__26096 = cljs.core.deref(cljstest.frontend.app.app_state);
return (fexpr__26096.cljs$core$IFn$_invoke$arity$1 ? fexpr__26096.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"page","page",849072397)) : fexpr__26096.call(null,new cljs.core.Keyword(null,"page","page",849072397)));
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljstest.frontend.app.current_page.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"home","home",-74557309),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljstest.frontend.app.home], null);
}));
cljstest.frontend.app.current_page.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"about","about",1423892543),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljstest.frontend.app.about], null);
}));
cljstest.frontend.app.current_page.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
}));
cljstest.frontend.app.init = (function cljstest$frontend$app$init(){
cljstest.frontend.app.app_routes();

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljstest.frontend.app.current_page], null),document.getElementById("app"));
});
goog.exportSymbol('cljstest.frontend.app.init', cljstest.frontend.app.init);

//# sourceMappingURL=cljstest.frontend.app.js.map
