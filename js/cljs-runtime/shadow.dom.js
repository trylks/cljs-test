goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_43255 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_43255(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_43260 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_43260(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__42061 = coll;
var G__42062 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__42061,G__42062) : shadow.dom.lazy_native_coll_seq.call(null,G__42061,G__42062));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__42168 = arguments.length;
switch (G__42168) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__42176 = arguments.length;
switch (G__42176) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__42195 = arguments.length;
switch (G__42195) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__42230 = arguments.length;
switch (G__42230) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__42254 = arguments.length;
switch (G__42254) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__42274 = arguments.length;
switch (G__42274) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e42307){if((e42307 instanceof Object)){
var e = e42307;
return console.log("didnt support attachEvent",el,e);
} else {
throw e42307;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__42334 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__42335 = null;
var count__42336 = (0);
var i__42337 = (0);
while(true){
if((i__42337 < count__42336)){
var el = chunk__42335.cljs$core$IIndexed$_nth$arity$2(null,i__42337);
var handler_43303__$1 = ((function (seq__42334,chunk__42335,count__42336,i__42337,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__42334,chunk__42335,count__42336,i__42337,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_43303__$1);


var G__43304 = seq__42334;
var G__43305 = chunk__42335;
var G__43306 = count__42336;
var G__43307 = (i__42337 + (1));
seq__42334 = G__43304;
chunk__42335 = G__43305;
count__42336 = G__43306;
i__42337 = G__43307;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42334);
if(temp__5735__auto__){
var seq__42334__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42334__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__42334__$1);
var G__43308 = cljs.core.chunk_rest(seq__42334__$1);
var G__43309 = c__4556__auto__;
var G__43310 = cljs.core.count(c__4556__auto__);
var G__43311 = (0);
seq__42334 = G__43308;
chunk__42335 = G__43309;
count__42336 = G__43310;
i__42337 = G__43311;
continue;
} else {
var el = cljs.core.first(seq__42334__$1);
var handler_43312__$1 = ((function (seq__42334,chunk__42335,count__42336,i__42337,el,seq__42334__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__42334,chunk__42335,count__42336,i__42337,el,seq__42334__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_43312__$1);


var G__43315 = cljs.core.next(seq__42334__$1);
var G__43316 = null;
var G__43317 = (0);
var G__43318 = (0);
seq__42334 = G__43315;
chunk__42335 = G__43316;
count__42336 = G__43317;
i__42337 = G__43318;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__42359 = arguments.length;
switch (G__42359) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__42370 = cljs.core.seq(events);
var chunk__42371 = null;
var count__42372 = (0);
var i__42373 = (0);
while(true){
if((i__42373 < count__42372)){
var vec__42389 = chunk__42371.cljs$core$IIndexed$_nth$arity$2(null,i__42373);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42389,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42389,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__43333 = seq__42370;
var G__43334 = chunk__42371;
var G__43335 = count__42372;
var G__43336 = (i__42373 + (1));
seq__42370 = G__43333;
chunk__42371 = G__43334;
count__42372 = G__43335;
i__42373 = G__43336;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42370);
if(temp__5735__auto__){
var seq__42370__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42370__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__42370__$1);
var G__43339 = cljs.core.chunk_rest(seq__42370__$1);
var G__43340 = c__4556__auto__;
var G__43341 = cljs.core.count(c__4556__auto__);
var G__43342 = (0);
seq__42370 = G__43339;
chunk__42371 = G__43340;
count__42372 = G__43341;
i__42373 = G__43342;
continue;
} else {
var vec__42395 = cljs.core.first(seq__42370__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42395,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42395,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__43344 = cljs.core.next(seq__42370__$1);
var G__43345 = null;
var G__43346 = (0);
var G__43347 = (0);
seq__42370 = G__43344;
chunk__42371 = G__43345;
count__42372 = G__43346;
i__42373 = G__43347;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__42401 = cljs.core.seq(styles);
var chunk__42402 = null;
var count__42403 = (0);
var i__42404 = (0);
while(true){
if((i__42404 < count__42403)){
var vec__42417 = chunk__42402.cljs$core$IIndexed$_nth$arity$2(null,i__42404);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42417,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42417,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__43350 = seq__42401;
var G__43351 = chunk__42402;
var G__43352 = count__42403;
var G__43353 = (i__42404 + (1));
seq__42401 = G__43350;
chunk__42402 = G__43351;
count__42403 = G__43352;
i__42404 = G__43353;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42401);
if(temp__5735__auto__){
var seq__42401__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42401__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__42401__$1);
var G__43356 = cljs.core.chunk_rest(seq__42401__$1);
var G__43357 = c__4556__auto__;
var G__43358 = cljs.core.count(c__4556__auto__);
var G__43359 = (0);
seq__42401 = G__43356;
chunk__42402 = G__43357;
count__42403 = G__43358;
i__42404 = G__43359;
continue;
} else {
var vec__42433 = cljs.core.first(seq__42401__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42433,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42433,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__43368 = cljs.core.next(seq__42401__$1);
var G__43369 = null;
var G__43370 = (0);
var G__43371 = (0);
seq__42401 = G__43368;
chunk__42402 = G__43369;
count__42403 = G__43370;
i__42404 = G__43371;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__42449_43377 = key;
var G__42449_43378__$1 = (((G__42449_43377 instanceof cljs.core.Keyword))?G__42449_43377.fqn:null);
switch (G__42449_43378__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_43383 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_43383,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_43383,"aria-");
}
})())){
el.setAttribute(ks_43383,value);
} else {
(el[ks_43383] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__42472){
var map__42473 = p__42472;
var map__42473__$1 = (((((!((map__42473 == null))))?(((((map__42473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42473):map__42473);
var props = map__42473__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42473__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__42477 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42477,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42477,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42477,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__42482 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__42482,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__42482;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__42489 = arguments.length;
switch (G__42489) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__42496){
var vec__42497 = p__42496;
var seq__42498 = cljs.core.seq(vec__42497);
var first__42499 = cljs.core.first(seq__42498);
var seq__42498__$1 = cljs.core.next(seq__42498);
var nn = first__42499;
var first__42499__$1 = cljs.core.first(seq__42498__$1);
var seq__42498__$2 = cljs.core.next(seq__42498__$1);
var np = first__42499__$1;
var nc = seq__42498__$2;
var node = vec__42497;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__42501 = nn;
var G__42502 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__42501,G__42502) : create_fn.call(null,G__42501,G__42502));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__42503 = nn;
var G__42504 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__42503,G__42504) : create_fn.call(null,G__42503,G__42504));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__42518 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42518,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42518,(1),null);
var seq__42521_43405 = cljs.core.seq(node_children);
var chunk__42522_43406 = null;
var count__42523_43407 = (0);
var i__42524_43408 = (0);
while(true){
if((i__42524_43408 < count__42523_43407)){
var child_struct_43409 = chunk__42522_43406.cljs$core$IIndexed$_nth$arity$2(null,i__42524_43408);
var children_43410 = shadow.dom.dom_node(child_struct_43409);
if(cljs.core.seq_QMARK_(children_43410)){
var seq__42562_43412 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_43410));
var chunk__42564_43413 = null;
var count__42565_43414 = (0);
var i__42566_43415 = (0);
while(true){
if((i__42566_43415 < count__42565_43414)){
var child_43416 = chunk__42564_43413.cljs$core$IIndexed$_nth$arity$2(null,i__42566_43415);
if(cljs.core.truth_(child_43416)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_43416);


var G__43418 = seq__42562_43412;
var G__43419 = chunk__42564_43413;
var G__43420 = count__42565_43414;
var G__43421 = (i__42566_43415 + (1));
seq__42562_43412 = G__43418;
chunk__42564_43413 = G__43419;
count__42565_43414 = G__43420;
i__42566_43415 = G__43421;
continue;
} else {
var G__43422 = seq__42562_43412;
var G__43423 = chunk__42564_43413;
var G__43424 = count__42565_43414;
var G__43425 = (i__42566_43415 + (1));
seq__42562_43412 = G__43422;
chunk__42564_43413 = G__43423;
count__42565_43414 = G__43424;
i__42566_43415 = G__43425;
continue;
}
} else {
var temp__5735__auto___43434 = cljs.core.seq(seq__42562_43412);
if(temp__5735__auto___43434){
var seq__42562_43436__$1 = temp__5735__auto___43434;
if(cljs.core.chunked_seq_QMARK_(seq__42562_43436__$1)){
var c__4556__auto___43437 = cljs.core.chunk_first(seq__42562_43436__$1);
var G__43438 = cljs.core.chunk_rest(seq__42562_43436__$1);
var G__43439 = c__4556__auto___43437;
var G__43440 = cljs.core.count(c__4556__auto___43437);
var G__43441 = (0);
seq__42562_43412 = G__43438;
chunk__42564_43413 = G__43439;
count__42565_43414 = G__43440;
i__42566_43415 = G__43441;
continue;
} else {
var child_43444 = cljs.core.first(seq__42562_43436__$1);
if(cljs.core.truth_(child_43444)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_43444);


var G__43445 = cljs.core.next(seq__42562_43436__$1);
var G__43446 = null;
var G__43447 = (0);
var G__43448 = (0);
seq__42562_43412 = G__43445;
chunk__42564_43413 = G__43446;
count__42565_43414 = G__43447;
i__42566_43415 = G__43448;
continue;
} else {
var G__43449 = cljs.core.next(seq__42562_43436__$1);
var G__43450 = null;
var G__43451 = (0);
var G__43452 = (0);
seq__42562_43412 = G__43449;
chunk__42564_43413 = G__43450;
count__42565_43414 = G__43451;
i__42566_43415 = G__43452;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_43410);
}


var G__43456 = seq__42521_43405;
var G__43457 = chunk__42522_43406;
var G__43458 = count__42523_43407;
var G__43459 = (i__42524_43408 + (1));
seq__42521_43405 = G__43456;
chunk__42522_43406 = G__43457;
count__42523_43407 = G__43458;
i__42524_43408 = G__43459;
continue;
} else {
var temp__5735__auto___43460 = cljs.core.seq(seq__42521_43405);
if(temp__5735__auto___43460){
var seq__42521_43461__$1 = temp__5735__auto___43460;
if(cljs.core.chunked_seq_QMARK_(seq__42521_43461__$1)){
var c__4556__auto___43462 = cljs.core.chunk_first(seq__42521_43461__$1);
var G__43464 = cljs.core.chunk_rest(seq__42521_43461__$1);
var G__43465 = c__4556__auto___43462;
var G__43466 = cljs.core.count(c__4556__auto___43462);
var G__43467 = (0);
seq__42521_43405 = G__43464;
chunk__42522_43406 = G__43465;
count__42523_43407 = G__43466;
i__42524_43408 = G__43467;
continue;
} else {
var child_struct_43469 = cljs.core.first(seq__42521_43461__$1);
var children_43470 = shadow.dom.dom_node(child_struct_43469);
if(cljs.core.seq_QMARK_(children_43470)){
var seq__42575_43471 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_43470));
var chunk__42577_43472 = null;
var count__42578_43473 = (0);
var i__42579_43474 = (0);
while(true){
if((i__42579_43474 < count__42578_43473)){
var child_43476 = chunk__42577_43472.cljs$core$IIndexed$_nth$arity$2(null,i__42579_43474);
if(cljs.core.truth_(child_43476)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_43476);


var G__43477 = seq__42575_43471;
var G__43478 = chunk__42577_43472;
var G__43479 = count__42578_43473;
var G__43480 = (i__42579_43474 + (1));
seq__42575_43471 = G__43477;
chunk__42577_43472 = G__43478;
count__42578_43473 = G__43479;
i__42579_43474 = G__43480;
continue;
} else {
var G__43481 = seq__42575_43471;
var G__43482 = chunk__42577_43472;
var G__43483 = count__42578_43473;
var G__43484 = (i__42579_43474 + (1));
seq__42575_43471 = G__43481;
chunk__42577_43472 = G__43482;
count__42578_43473 = G__43483;
i__42579_43474 = G__43484;
continue;
}
} else {
var temp__5735__auto___43485__$1 = cljs.core.seq(seq__42575_43471);
if(temp__5735__auto___43485__$1){
var seq__42575_43486__$1 = temp__5735__auto___43485__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42575_43486__$1)){
var c__4556__auto___43487 = cljs.core.chunk_first(seq__42575_43486__$1);
var G__43488 = cljs.core.chunk_rest(seq__42575_43486__$1);
var G__43489 = c__4556__auto___43487;
var G__43490 = cljs.core.count(c__4556__auto___43487);
var G__43491 = (0);
seq__42575_43471 = G__43488;
chunk__42577_43472 = G__43489;
count__42578_43473 = G__43490;
i__42579_43474 = G__43491;
continue;
} else {
var child_43492 = cljs.core.first(seq__42575_43486__$1);
if(cljs.core.truth_(child_43492)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_43492);


var G__43494 = cljs.core.next(seq__42575_43486__$1);
var G__43495 = null;
var G__43496 = (0);
var G__43497 = (0);
seq__42575_43471 = G__43494;
chunk__42577_43472 = G__43495;
count__42578_43473 = G__43496;
i__42579_43474 = G__43497;
continue;
} else {
var G__43499 = cljs.core.next(seq__42575_43486__$1);
var G__43500 = null;
var G__43501 = (0);
var G__43502 = (0);
seq__42575_43471 = G__43499;
chunk__42577_43472 = G__43500;
count__42578_43473 = G__43501;
i__42579_43474 = G__43502;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_43470);
}


var G__43505 = cljs.core.next(seq__42521_43461__$1);
var G__43506 = null;
var G__43507 = (0);
var G__43508 = (0);
seq__42521_43405 = G__43505;
chunk__42522_43406 = G__43506;
count__42523_43407 = G__43507;
i__42524_43408 = G__43508;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__42629 = cljs.core.seq(node);
var chunk__42630 = null;
var count__42631 = (0);
var i__42632 = (0);
while(true){
if((i__42632 < count__42631)){
var n = chunk__42630.cljs$core$IIndexed$_nth$arity$2(null,i__42632);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__43519 = seq__42629;
var G__43520 = chunk__42630;
var G__43521 = count__42631;
var G__43522 = (i__42632 + (1));
seq__42629 = G__43519;
chunk__42630 = G__43520;
count__42631 = G__43521;
i__42632 = G__43522;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42629);
if(temp__5735__auto__){
var seq__42629__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42629__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__42629__$1);
var G__43525 = cljs.core.chunk_rest(seq__42629__$1);
var G__43526 = c__4556__auto__;
var G__43527 = cljs.core.count(c__4556__auto__);
var G__43528 = (0);
seq__42629 = G__43525;
chunk__42630 = G__43526;
count__42631 = G__43527;
i__42632 = G__43528;
continue;
} else {
var n = cljs.core.first(seq__42629__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__43534 = cljs.core.next(seq__42629__$1);
var G__43535 = null;
var G__43536 = (0);
var G__43537 = (0);
seq__42629 = G__43534;
chunk__42630 = G__43535;
count__42631 = G__43536;
i__42632 = G__43537;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__42653 = arguments.length;
switch (G__42653) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__42664 = arguments.length;
switch (G__42664) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__42683 = arguments.length;
switch (G__42683) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___43549 = arguments.length;
var i__4737__auto___43550 = (0);
while(true){
if((i__4737__auto___43550 < len__4736__auto___43549)){
args__4742__auto__.push((arguments[i__4737__auto___43550]));

var G__43552 = (i__4737__auto___43550 + (1));
i__4737__auto___43550 = G__43552;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__42732_43554 = cljs.core.seq(nodes);
var chunk__42733_43555 = null;
var count__42734_43556 = (0);
var i__42735_43557 = (0);
while(true){
if((i__42735_43557 < count__42734_43556)){
var node_43558 = chunk__42733_43555.cljs$core$IIndexed$_nth$arity$2(null,i__42735_43557);
fragment.appendChild(shadow.dom._to_dom(node_43558));


var G__43559 = seq__42732_43554;
var G__43560 = chunk__42733_43555;
var G__43561 = count__42734_43556;
var G__43562 = (i__42735_43557 + (1));
seq__42732_43554 = G__43559;
chunk__42733_43555 = G__43560;
count__42734_43556 = G__43561;
i__42735_43557 = G__43562;
continue;
} else {
var temp__5735__auto___43563 = cljs.core.seq(seq__42732_43554);
if(temp__5735__auto___43563){
var seq__42732_43564__$1 = temp__5735__auto___43563;
if(cljs.core.chunked_seq_QMARK_(seq__42732_43564__$1)){
var c__4556__auto___43565 = cljs.core.chunk_first(seq__42732_43564__$1);
var G__43567 = cljs.core.chunk_rest(seq__42732_43564__$1);
var G__43568 = c__4556__auto___43565;
var G__43569 = cljs.core.count(c__4556__auto___43565);
var G__43570 = (0);
seq__42732_43554 = G__43567;
chunk__42733_43555 = G__43568;
count__42734_43556 = G__43569;
i__42735_43557 = G__43570;
continue;
} else {
var node_43573 = cljs.core.first(seq__42732_43564__$1);
fragment.appendChild(shadow.dom._to_dom(node_43573));


var G__43574 = cljs.core.next(seq__42732_43564__$1);
var G__43575 = null;
var G__43576 = (0);
var G__43577 = (0);
seq__42732_43554 = G__43574;
chunk__42733_43555 = G__43575;
count__42734_43556 = G__43576;
i__42735_43557 = G__43577;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq42726){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42726));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__42737_43579 = cljs.core.seq(scripts);
var chunk__42738_43580 = null;
var count__42739_43581 = (0);
var i__42740_43582 = (0);
while(true){
if((i__42740_43582 < count__42739_43581)){
var vec__42748_43583 = chunk__42738_43580.cljs$core$IIndexed$_nth$arity$2(null,i__42740_43582);
var script_tag_43584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42748_43583,(0),null);
var script_body_43585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42748_43583,(1),null);
eval(script_body_43585);


var G__43589 = seq__42737_43579;
var G__43590 = chunk__42738_43580;
var G__43591 = count__42739_43581;
var G__43592 = (i__42740_43582 + (1));
seq__42737_43579 = G__43589;
chunk__42738_43580 = G__43590;
count__42739_43581 = G__43591;
i__42740_43582 = G__43592;
continue;
} else {
var temp__5735__auto___43594 = cljs.core.seq(seq__42737_43579);
if(temp__5735__auto___43594){
var seq__42737_43602__$1 = temp__5735__auto___43594;
if(cljs.core.chunked_seq_QMARK_(seq__42737_43602__$1)){
var c__4556__auto___43603 = cljs.core.chunk_first(seq__42737_43602__$1);
var G__43605 = cljs.core.chunk_rest(seq__42737_43602__$1);
var G__43606 = c__4556__auto___43603;
var G__43607 = cljs.core.count(c__4556__auto___43603);
var G__43608 = (0);
seq__42737_43579 = G__43605;
chunk__42738_43580 = G__43606;
count__42739_43581 = G__43607;
i__42740_43582 = G__43608;
continue;
} else {
var vec__42754_43609 = cljs.core.first(seq__42737_43602__$1);
var script_tag_43610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42754_43609,(0),null);
var script_body_43611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42754_43609,(1),null);
eval(script_body_43611);


var G__43613 = cljs.core.next(seq__42737_43602__$1);
var G__43614 = null;
var G__43615 = (0);
var G__43616 = (0);
seq__42737_43579 = G__43613;
chunk__42738_43580 = G__43614;
count__42739_43581 = G__43615;
i__42740_43582 = G__43616;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__42759){
var vec__42762 = p__42759;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42762,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42762,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__42784 = arguments.length;
switch (G__42784) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__42839 = cljs.core.seq(style_keys);
var chunk__42840 = null;
var count__42841 = (0);
var i__42842 = (0);
while(true){
if((i__42842 < count__42841)){
var it = chunk__42840.cljs$core$IIndexed$_nth$arity$2(null,i__42842);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__43632 = seq__42839;
var G__43633 = chunk__42840;
var G__43634 = count__42841;
var G__43635 = (i__42842 + (1));
seq__42839 = G__43632;
chunk__42840 = G__43633;
count__42841 = G__43634;
i__42842 = G__43635;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42839);
if(temp__5735__auto__){
var seq__42839__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42839__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__42839__$1);
var G__43636 = cljs.core.chunk_rest(seq__42839__$1);
var G__43637 = c__4556__auto__;
var G__43638 = cljs.core.count(c__4556__auto__);
var G__43639 = (0);
seq__42839 = G__43636;
chunk__42840 = G__43637;
count__42841 = G__43638;
i__42842 = G__43639;
continue;
} else {
var it = cljs.core.first(seq__42839__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__43644 = cljs.core.next(seq__42839__$1);
var G__43645 = null;
var G__43646 = (0);
var G__43647 = (0);
seq__42839 = G__43644;
chunk__42840 = G__43645;
count__42841 = G__43646;
i__42842 = G__43647;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k42853,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__42865 = k42853;
var G__42865__$1 = (((G__42865 instanceof cljs.core.Keyword))?G__42865.fqn:null);
switch (G__42865__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42853,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__42867){
var vec__42868 = p__42867;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42868,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42868,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42852){
var self__ = this;
var G__42852__$1 = this;
return (new cljs.core.RecordIter((0),G__42852__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42854,other42855){
var self__ = this;
var this42854__$1 = this;
return (((!((other42855 == null)))) && ((this42854__$1.constructor === other42855.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42854__$1.x,other42855.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42854__$1.y,other42855.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42854__$1.__extmap,other42855.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__42852){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__42886 = cljs.core.keyword_identical_QMARK_;
var expr__42887 = k__4388__auto__;
if(cljs.core.truth_((pred__42886.cljs$core$IFn$_invoke$arity$2 ? pred__42886.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__42887) : pred__42886.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__42887)))){
return (new shadow.dom.Coordinate(G__42852,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42886.cljs$core$IFn$_invoke$arity$2 ? pred__42886.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__42887) : pred__42886.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__42887)))){
return (new shadow.dom.Coordinate(self__.x,G__42852,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__42852),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__42852){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__42852,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__42857){
var extmap__4419__auto__ = (function (){var G__42906 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__42857,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__42857)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42906);
} else {
return G__42906;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__42857),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__42857),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k42912,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__42920 = k42912;
var G__42920__$1 = (((G__42920 instanceof cljs.core.Keyword))?G__42920.fqn:null);
switch (G__42920__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42912,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__42923){
var vec__42924 = p__42923;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42924,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42924,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42911){
var self__ = this;
var G__42911__$1 = this;
return (new cljs.core.RecordIter((0),G__42911__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42913,other42914){
var self__ = this;
var this42913__$1 = this;
return (((!((other42914 == null)))) && ((this42913__$1.constructor === other42914.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42913__$1.w,other42914.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42913__$1.h,other42914.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42913__$1.__extmap,other42914.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__42911){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__42939 = cljs.core.keyword_identical_QMARK_;
var expr__42940 = k__4388__auto__;
if(cljs.core.truth_((pred__42939.cljs$core$IFn$_invoke$arity$2 ? pred__42939.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__42940) : pred__42939.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__42940)))){
return (new shadow.dom.Size(G__42911,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42939.cljs$core$IFn$_invoke$arity$2 ? pred__42939.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__42940) : pred__42939.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__42940)))){
return (new shadow.dom.Size(self__.w,G__42911,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__42911),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__42911){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__42911,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__42916){
var extmap__4419__auto__ = (function (){var G__42954 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__42916,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__42916)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42954);
} else {
return G__42954;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__42916),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__42916),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__43788 = (i + (1));
var G__43789 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__43788;
ret = G__43789;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__43003){
var vec__43004 = p__43003;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43004,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43004,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__43011 = arguments.length;
switch (G__43011) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__43804 = ps;
var G__43805 = (i + (1));
el__$1 = G__43804;
i = G__43805;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__43062 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43062,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43062,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43062,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__43068_43820 = cljs.core.seq(props);
var chunk__43069_43821 = null;
var count__43070_43822 = (0);
var i__43071_43823 = (0);
while(true){
if((i__43071_43823 < count__43070_43822)){
var vec__43083_43824 = chunk__43069_43821.cljs$core$IIndexed$_nth$arity$2(null,i__43071_43823);
var k_43825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43083_43824,(0),null);
var v_43826 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43083_43824,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_43825);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_43825),v_43826);


var G__43830 = seq__43068_43820;
var G__43831 = chunk__43069_43821;
var G__43832 = count__43070_43822;
var G__43833 = (i__43071_43823 + (1));
seq__43068_43820 = G__43830;
chunk__43069_43821 = G__43831;
count__43070_43822 = G__43832;
i__43071_43823 = G__43833;
continue;
} else {
var temp__5735__auto___43834 = cljs.core.seq(seq__43068_43820);
if(temp__5735__auto___43834){
var seq__43068_43836__$1 = temp__5735__auto___43834;
if(cljs.core.chunked_seq_QMARK_(seq__43068_43836__$1)){
var c__4556__auto___43837 = cljs.core.chunk_first(seq__43068_43836__$1);
var G__43838 = cljs.core.chunk_rest(seq__43068_43836__$1);
var G__43839 = c__4556__auto___43837;
var G__43840 = cljs.core.count(c__4556__auto___43837);
var G__43841 = (0);
seq__43068_43820 = G__43838;
chunk__43069_43821 = G__43839;
count__43070_43822 = G__43840;
i__43071_43823 = G__43841;
continue;
} else {
var vec__43098_43842 = cljs.core.first(seq__43068_43836__$1);
var k_43843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43098_43842,(0),null);
var v_43844 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43098_43842,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_43843);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_43843),v_43844);


var G__43848 = cljs.core.next(seq__43068_43836__$1);
var G__43849 = null;
var G__43850 = (0);
var G__43851 = (0);
seq__43068_43820 = G__43848;
chunk__43069_43821 = G__43849;
count__43070_43822 = G__43850;
i__43071_43823 = G__43851;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__43107 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43107,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43107,(1),null);
var seq__43111_43853 = cljs.core.seq(node_children);
var chunk__43113_43854 = null;
var count__43114_43855 = (0);
var i__43115_43856 = (0);
while(true){
if((i__43115_43856 < count__43114_43855)){
var child_struct_43860 = chunk__43113_43854.cljs$core$IIndexed$_nth$arity$2(null,i__43115_43856);
if((!((child_struct_43860 == null)))){
if(typeof child_struct_43860 === 'string'){
var text_43861 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_43861),child_struct_43860].join(''));
} else {
var children_43862 = shadow.dom.svg_node(child_struct_43860);
if(cljs.core.seq_QMARK_(children_43862)){
var seq__43185_43863 = cljs.core.seq(children_43862);
var chunk__43187_43864 = null;
var count__43188_43865 = (0);
var i__43189_43866 = (0);
while(true){
if((i__43189_43866 < count__43188_43865)){
var child_43868 = chunk__43187_43864.cljs$core$IIndexed$_nth$arity$2(null,i__43189_43866);
if(cljs.core.truth_(child_43868)){
node.appendChild(child_43868);


var G__43869 = seq__43185_43863;
var G__43870 = chunk__43187_43864;
var G__43871 = count__43188_43865;
var G__43872 = (i__43189_43866 + (1));
seq__43185_43863 = G__43869;
chunk__43187_43864 = G__43870;
count__43188_43865 = G__43871;
i__43189_43866 = G__43872;
continue;
} else {
var G__43874 = seq__43185_43863;
var G__43875 = chunk__43187_43864;
var G__43876 = count__43188_43865;
var G__43877 = (i__43189_43866 + (1));
seq__43185_43863 = G__43874;
chunk__43187_43864 = G__43875;
count__43188_43865 = G__43876;
i__43189_43866 = G__43877;
continue;
}
} else {
var temp__5735__auto___43878 = cljs.core.seq(seq__43185_43863);
if(temp__5735__auto___43878){
var seq__43185_43879__$1 = temp__5735__auto___43878;
if(cljs.core.chunked_seq_QMARK_(seq__43185_43879__$1)){
var c__4556__auto___43880 = cljs.core.chunk_first(seq__43185_43879__$1);
var G__43881 = cljs.core.chunk_rest(seq__43185_43879__$1);
var G__43882 = c__4556__auto___43880;
var G__43883 = cljs.core.count(c__4556__auto___43880);
var G__43884 = (0);
seq__43185_43863 = G__43881;
chunk__43187_43864 = G__43882;
count__43188_43865 = G__43883;
i__43189_43866 = G__43884;
continue;
} else {
var child_43885 = cljs.core.first(seq__43185_43879__$1);
if(cljs.core.truth_(child_43885)){
node.appendChild(child_43885);


var G__43888 = cljs.core.next(seq__43185_43879__$1);
var G__43889 = null;
var G__43890 = (0);
var G__43891 = (0);
seq__43185_43863 = G__43888;
chunk__43187_43864 = G__43889;
count__43188_43865 = G__43890;
i__43189_43866 = G__43891;
continue;
} else {
var G__43893 = cljs.core.next(seq__43185_43879__$1);
var G__43894 = null;
var G__43895 = (0);
var G__43896 = (0);
seq__43185_43863 = G__43893;
chunk__43187_43864 = G__43894;
count__43188_43865 = G__43895;
i__43189_43866 = G__43896;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_43862);
}
}


var G__43898 = seq__43111_43853;
var G__43899 = chunk__43113_43854;
var G__43900 = count__43114_43855;
var G__43901 = (i__43115_43856 + (1));
seq__43111_43853 = G__43898;
chunk__43113_43854 = G__43899;
count__43114_43855 = G__43900;
i__43115_43856 = G__43901;
continue;
} else {
var G__43902 = seq__43111_43853;
var G__43903 = chunk__43113_43854;
var G__43904 = count__43114_43855;
var G__43905 = (i__43115_43856 + (1));
seq__43111_43853 = G__43902;
chunk__43113_43854 = G__43903;
count__43114_43855 = G__43904;
i__43115_43856 = G__43905;
continue;
}
} else {
var temp__5735__auto___43906 = cljs.core.seq(seq__43111_43853);
if(temp__5735__auto___43906){
var seq__43111_43909__$1 = temp__5735__auto___43906;
if(cljs.core.chunked_seq_QMARK_(seq__43111_43909__$1)){
var c__4556__auto___43910 = cljs.core.chunk_first(seq__43111_43909__$1);
var G__43911 = cljs.core.chunk_rest(seq__43111_43909__$1);
var G__43912 = c__4556__auto___43910;
var G__43913 = cljs.core.count(c__4556__auto___43910);
var G__43914 = (0);
seq__43111_43853 = G__43911;
chunk__43113_43854 = G__43912;
count__43114_43855 = G__43913;
i__43115_43856 = G__43914;
continue;
} else {
var child_struct_43918 = cljs.core.first(seq__43111_43909__$1);
if((!((child_struct_43918 == null)))){
if(typeof child_struct_43918 === 'string'){
var text_43919 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_43919),child_struct_43918].join(''));
} else {
var children_43922 = shadow.dom.svg_node(child_struct_43918);
if(cljs.core.seq_QMARK_(children_43922)){
var seq__43193_43923 = cljs.core.seq(children_43922);
var chunk__43195_43924 = null;
var count__43196_43925 = (0);
var i__43197_43926 = (0);
while(true){
if((i__43197_43926 < count__43196_43925)){
var child_43929 = chunk__43195_43924.cljs$core$IIndexed$_nth$arity$2(null,i__43197_43926);
if(cljs.core.truth_(child_43929)){
node.appendChild(child_43929);


var G__43930 = seq__43193_43923;
var G__43931 = chunk__43195_43924;
var G__43932 = count__43196_43925;
var G__43933 = (i__43197_43926 + (1));
seq__43193_43923 = G__43930;
chunk__43195_43924 = G__43931;
count__43196_43925 = G__43932;
i__43197_43926 = G__43933;
continue;
} else {
var G__43934 = seq__43193_43923;
var G__43935 = chunk__43195_43924;
var G__43936 = count__43196_43925;
var G__43937 = (i__43197_43926 + (1));
seq__43193_43923 = G__43934;
chunk__43195_43924 = G__43935;
count__43196_43925 = G__43936;
i__43197_43926 = G__43937;
continue;
}
} else {
var temp__5735__auto___43938__$1 = cljs.core.seq(seq__43193_43923);
if(temp__5735__auto___43938__$1){
var seq__43193_43939__$1 = temp__5735__auto___43938__$1;
if(cljs.core.chunked_seq_QMARK_(seq__43193_43939__$1)){
var c__4556__auto___43940 = cljs.core.chunk_first(seq__43193_43939__$1);
var G__43941 = cljs.core.chunk_rest(seq__43193_43939__$1);
var G__43942 = c__4556__auto___43940;
var G__43943 = cljs.core.count(c__4556__auto___43940);
var G__43944 = (0);
seq__43193_43923 = G__43941;
chunk__43195_43924 = G__43942;
count__43196_43925 = G__43943;
i__43197_43926 = G__43944;
continue;
} else {
var child_43945 = cljs.core.first(seq__43193_43939__$1);
if(cljs.core.truth_(child_43945)){
node.appendChild(child_43945);


var G__43946 = cljs.core.next(seq__43193_43939__$1);
var G__43947 = null;
var G__43948 = (0);
var G__43949 = (0);
seq__43193_43923 = G__43946;
chunk__43195_43924 = G__43947;
count__43196_43925 = G__43948;
i__43197_43926 = G__43949;
continue;
} else {
var G__43950 = cljs.core.next(seq__43193_43939__$1);
var G__43951 = null;
var G__43952 = (0);
var G__43953 = (0);
seq__43193_43923 = G__43950;
chunk__43195_43924 = G__43951;
count__43196_43925 = G__43952;
i__43197_43926 = G__43953;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_43922);
}
}


var G__43958 = cljs.core.next(seq__43111_43909__$1);
var G__43959 = null;
var G__43960 = (0);
var G__43961 = (0);
seq__43111_43853 = G__43958;
chunk__43113_43854 = G__43959;
count__43114_43855 = G__43960;
i__43115_43856 = G__43961;
continue;
} else {
var G__43964 = cljs.core.next(seq__43111_43909__$1);
var G__43965 = null;
var G__43966 = (0);
var G__43967 = (0);
seq__43111_43853 = G__43964;
chunk__43113_43854 = G__43965;
count__43114_43855 = G__43966;
i__43115_43856 = G__43967;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___43974 = arguments.length;
var i__4737__auto___43975 = (0);
while(true){
if((i__4737__auto___43975 < len__4736__auto___43974)){
args__4742__auto__.push((arguments[i__4737__auto___43975]));

var G__43976 = (i__4737__auto___43975 + (1));
i__4737__auto___43975 = G__43976;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq43204){
var G__43205 = cljs.core.first(seq43204);
var seq43204__$1 = cljs.core.next(seq43204);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43205,seq43204__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__43209 = arguments.length;
switch (G__43209) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__25807__auto___43997 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25808__auto__ = (function (){var switch__25722__auto__ = (function (state_43230){
var state_val_43232 = (state_43230[(1)]);
if((state_val_43232 === (1))){
var state_43230__$1 = state_43230;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43230__$1,(2),once_or_cleanup);
} else {
if((state_val_43232 === (2))){
var inst_43227 = (state_43230[(2)]);
var inst_43228 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_43230__$1 = (function (){var statearr_43236 = state_43230;
(statearr_43236[(7)] = inst_43227);

return statearr_43236;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43230__$1,inst_43228);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__25723__auto__ = null;
var shadow$dom$state_machine__25723__auto____0 = (function (){
var statearr_43238 = [null,null,null,null,null,null,null,null];
(statearr_43238[(0)] = shadow$dom$state_machine__25723__auto__);

(statearr_43238[(1)] = (1));

return statearr_43238;
});
var shadow$dom$state_machine__25723__auto____1 = (function (state_43230){
while(true){
var ret_value__25724__auto__ = (function (){try{while(true){
var result__25725__auto__ = switch__25722__auto__(state_43230);
if(cljs.core.keyword_identical_QMARK_(result__25725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25725__auto__;
}
break;
}
}catch (e43244){var ex__25726__auto__ = e43244;
var statearr_43245_44010 = state_43230;
(statearr_43245_44010[(2)] = ex__25726__auto__);


if(cljs.core.seq((state_43230[(4)]))){
var statearr_43246_44011 = state_43230;
(statearr_43246_44011[(1)] = cljs.core.first((state_43230[(4)])));

} else {
throw ex__25726__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44012 = state_43230;
state_43230 = G__44012;
continue;
} else {
return ret_value__25724__auto__;
}
break;
}
});
shadow$dom$state_machine__25723__auto__ = function(state_43230){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__25723__auto____0.call(this);
case 1:
return shadow$dom$state_machine__25723__auto____1.call(this,state_43230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__25723__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__25723__auto____0;
shadow$dom$state_machine__25723__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__25723__auto____1;
return shadow$dom$state_machine__25723__auto__;
})()
})();
var state__25809__auto__ = (function (){var statearr_43247 = f__25808__auto__();
(statearr_43247[(6)] = c__25807__auto___43997);

return statearr_43247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25809__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
