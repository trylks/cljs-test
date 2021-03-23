goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__46255__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__46255 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46256__i = 0, G__46256__a = new Array(arguments.length -  0);
while (G__46256__i < G__46256__a.length) {G__46256__a[G__46256__i] = arguments[G__46256__i + 0]; ++G__46256__i;}
  args = new cljs.core.IndexedSeq(G__46256__a,0,null);
} 
return G__46255__delegate.call(this,args);};
G__46255.cljs$lang$maxFixedArity = 0;
G__46255.cljs$lang$applyTo = (function (arglist__46257){
var args = cljs.core.seq(arglist__46257);
return G__46255__delegate(args);
});
G__46255.cljs$core$IFn$_invoke$arity$variadic = G__46255__delegate;
return G__46255;
})()
);

(o.error = (function() { 
var G__46258__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__46258 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46259__i = 0, G__46259__a = new Array(arguments.length -  0);
while (G__46259__i < G__46259__a.length) {G__46259__a[G__46259__i] = arguments[G__46259__i + 0]; ++G__46259__i;}
  args = new cljs.core.IndexedSeq(G__46259__a,0,null);
} 
return G__46258__delegate.call(this,args);};
G__46258.cljs$lang$maxFixedArity = 0;
G__46258.cljs$lang$applyTo = (function (arglist__46260){
var args = cljs.core.seq(arglist__46260);
return G__46258__delegate(args);
});
G__46258.cljs$core$IFn$_invoke$arity$variadic = G__46258__delegate;
return G__46258;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
