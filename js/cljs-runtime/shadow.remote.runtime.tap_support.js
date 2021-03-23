goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__46135,p__46136){
var map__46138 = p__46135;
var map__46138__$1 = (((((!((map__46138 == null))))?(((((map__46138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46138):map__46138);
var svc = map__46138__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46138__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46138__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46138__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__46139 = p__46136;
var map__46139__$1 = (((((!((map__46139 == null))))?(((((map__46139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46139):map__46139);
var msg = map__46139__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46139__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46139__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46139__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46139__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__46155,p__46156){
var map__46157 = p__46155;
var map__46157__$1 = (((((!((map__46157 == null))))?(((((map__46157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46157):map__46157);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46157__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__46158 = p__46156;
var map__46158__$1 = (((((!((map__46158 == null))))?(((((map__46158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46158):map__46158);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46158__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__46163,p__46164){
var map__46167 = p__46163;
var map__46167__$1 = (((((!((map__46167 == null))))?(((((map__46167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46167):map__46167);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46167__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46167__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__46168 = p__46164;
var map__46168__$1 = (((((!((map__46168 == null))))?(((((map__46168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46168):map__46168);
var msg = map__46168__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46168__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__46178,tid){
var map__46179 = p__46178;
var map__46179__$1 = (((((!((map__46179 == null))))?(((((map__46179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46179):map__46179);
var svc = map__46179__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46179__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__46188 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__46189 = null;
var count__46190 = (0);
var i__46191 = (0);
while(true){
if((i__46191 < count__46190)){
var vec__46202 = chunk__46189.cljs$core$IIndexed$_nth$arity$2(null,i__46191);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46202,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46202,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__46217 = seq__46188;
var G__46218 = chunk__46189;
var G__46219 = count__46190;
var G__46220 = (i__46191 + (1));
seq__46188 = G__46217;
chunk__46189 = G__46218;
count__46190 = G__46219;
i__46191 = G__46220;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46188);
if(temp__5735__auto__){
var seq__46188__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46188__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46188__$1);
var G__46221 = cljs.core.chunk_rest(seq__46188__$1);
var G__46222 = c__4556__auto__;
var G__46223 = cljs.core.count(c__4556__auto__);
var G__46224 = (0);
seq__46188 = G__46221;
chunk__46189 = G__46222;
count__46190 = G__46223;
i__46191 = G__46224;
continue;
} else {
var vec__46205 = cljs.core.first(seq__46188__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46205,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46205,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__46225 = cljs.core.next(seq__46188__$1);
var G__46226 = null;
var G__46227 = (0);
var G__46228 = (0);
seq__46188 = G__46225;
chunk__46189 = G__46226;
count__46190 = G__46227;
i__46191 = G__46228;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__46184_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__46184_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__46185_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__46185_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__46186_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__46186_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__46187_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__46187_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__46211){
var map__46212 = p__46211;
var map__46212__$1 = (((((!((map__46212 == null))))?(((((map__46212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46212):map__46212);
var svc = map__46212__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46212__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46212__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
