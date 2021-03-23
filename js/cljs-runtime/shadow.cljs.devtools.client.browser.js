goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___46834 = arguments.length;
var i__4737__auto___46835 = (0);
while(true){
if((i__4737__auto___46835 < len__4736__auto___46834)){
args__4742__auto__.push((arguments[i__4737__auto___46835]));

var G__46836 = (i__4737__auto___46835 + (1));
i__4737__auto___46835 = G__46836;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq46635){
var G__46636 = cljs.core.first(seq46635);
var seq46635__$1 = cljs.core.next(seq46635);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46636,seq46635__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__46637 = cljs.core.seq(sources);
var chunk__46638 = null;
var count__46639 = (0);
var i__46640 = (0);
while(true){
if((i__46640 < count__46639)){
var map__46647 = chunk__46638.cljs$core$IIndexed$_nth$arity$2(null,i__46640);
var map__46647__$1 = (((((!((map__46647 == null))))?(((((map__46647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46647):map__46647);
var src = map__46647__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46647__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46647__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46647__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46647__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e46649){var e_46839 = e46649;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_46839);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_46839.message)].join('')));
}

var G__46840 = seq__46637;
var G__46841 = chunk__46638;
var G__46842 = count__46639;
var G__46843 = (i__46640 + (1));
seq__46637 = G__46840;
chunk__46638 = G__46841;
count__46639 = G__46842;
i__46640 = G__46843;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46637);
if(temp__5735__auto__){
var seq__46637__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46637__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46637__$1);
var G__46847 = cljs.core.chunk_rest(seq__46637__$1);
var G__46848 = c__4556__auto__;
var G__46849 = cljs.core.count(c__4556__auto__);
var G__46850 = (0);
seq__46637 = G__46847;
chunk__46638 = G__46848;
count__46639 = G__46849;
i__46640 = G__46850;
continue;
} else {
var map__46650 = cljs.core.first(seq__46637__$1);
var map__46650__$1 = (((((!((map__46650 == null))))?(((((map__46650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46650):map__46650);
var src = map__46650__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46650__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46650__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46650__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46650__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e46652){var e_46851 = e46652;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_46851);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_46851.message)].join('')));
}

var G__46852 = cljs.core.next(seq__46637__$1);
var G__46853 = null;
var G__46854 = (0);
var G__46855 = (0);
seq__46637 = G__46852;
chunk__46638 = G__46853;
count__46639 = G__46854;
i__46640 = G__46855;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__46655 = cljs.core.seq(js_requires);
var chunk__46656 = null;
var count__46657 = (0);
var i__46658 = (0);
while(true){
if((i__46658 < count__46657)){
var js_ns = chunk__46656.cljs$core$IIndexed$_nth$arity$2(null,i__46658);
var require_str_46856 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_46856);


var G__46857 = seq__46655;
var G__46858 = chunk__46656;
var G__46859 = count__46657;
var G__46860 = (i__46658 + (1));
seq__46655 = G__46857;
chunk__46656 = G__46858;
count__46657 = G__46859;
i__46658 = G__46860;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46655);
if(temp__5735__auto__){
var seq__46655__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46655__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46655__$1);
var G__46861 = cljs.core.chunk_rest(seq__46655__$1);
var G__46862 = c__4556__auto__;
var G__46863 = cljs.core.count(c__4556__auto__);
var G__46864 = (0);
seq__46655 = G__46861;
chunk__46656 = G__46862;
count__46657 = G__46863;
i__46658 = G__46864;
continue;
} else {
var js_ns = cljs.core.first(seq__46655__$1);
var require_str_46865 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_46865);


var G__46866 = cljs.core.next(seq__46655__$1);
var G__46867 = null;
var G__46868 = (0);
var G__46869 = (0);
seq__46655 = G__46866;
chunk__46656 = G__46867;
count__46657 = G__46868;
i__46658 = G__46869;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__46667){
var map__46668 = p__46667;
var map__46668__$1 = (((((!((map__46668 == null))))?(((((map__46668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46668):map__46668);
var msg = map__46668__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46668__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46668__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46670(s__46671){
return (new cljs.core.LazySeq(null,(function (){
var s__46671__$1 = s__46671;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__46671__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__46676 = cljs.core.first(xs__6292__auto__);
var map__46676__$1 = (((((!((map__46676 == null))))?(((((map__46676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46676):map__46676);
var src = map__46676__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46676__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46676__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__46671__$1,map__46676,map__46676__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__46668,map__46668__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46670_$_iter__46672(s__46673){
return (new cljs.core.LazySeq(null,((function (s__46671__$1,map__46676,map__46676__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__46668,map__46668__$1,msg,info,reload_info){
return (function (){
var s__46673__$1 = s__46673;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__46673__$1);
if(temp__5735__auto____$1){
var s__46673__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__46673__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__46673__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__46675 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__46674 = (0);
while(true){
if((i__46674 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__46674);
cljs.core.chunk_append(b__46675,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__46872 = (i__46674 + (1));
i__46674 = G__46872;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46675),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46670_$_iter__46672(cljs.core.chunk_rest(s__46673__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46675),null);
}
} else {
var warning = cljs.core.first(s__46673__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46670_$_iter__46672(cljs.core.rest(s__46673__$2)));
}
} else {
return null;
}
break;
}
});})(s__46671__$1,map__46676,map__46676__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__46668,map__46668__$1,msg,info,reload_info))
,null,null));
});})(s__46671__$1,map__46676,map__46676__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__46668,map__46668__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46670(cljs.core.rest(s__46671__$1)));
} else {
var G__46873 = cljs.core.rest(s__46671__$1);
s__46671__$1 = G__46873;
continue;
}
} else {
var G__46874 = cljs.core.rest(s__46671__$1);
s__46671__$1 = G__46874;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__46681_46875 = cljs.core.seq(warnings);
var chunk__46682_46876 = null;
var count__46683_46877 = (0);
var i__46684_46878 = (0);
while(true){
if((i__46684_46878 < count__46683_46877)){
var map__46689_46879 = chunk__46682_46876.cljs$core$IIndexed$_nth$arity$2(null,i__46684_46878);
var map__46689_46880__$1 = (((((!((map__46689_46879 == null))))?(((((map__46689_46879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46689_46879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46689_46879):map__46689_46879);
var w_46881 = map__46689_46880__$1;
var msg_46882__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46689_46880__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_46883 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46689_46880__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_46884 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46689_46880__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_46885 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46689_46880__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_46885)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_46883),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_46884),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_46882__$1)].join(''));


var G__46886 = seq__46681_46875;
var G__46887 = chunk__46682_46876;
var G__46888 = count__46683_46877;
var G__46889 = (i__46684_46878 + (1));
seq__46681_46875 = G__46886;
chunk__46682_46876 = G__46887;
count__46683_46877 = G__46888;
i__46684_46878 = G__46889;
continue;
} else {
var temp__5735__auto___46890 = cljs.core.seq(seq__46681_46875);
if(temp__5735__auto___46890){
var seq__46681_46891__$1 = temp__5735__auto___46890;
if(cljs.core.chunked_seq_QMARK_(seq__46681_46891__$1)){
var c__4556__auto___46892 = cljs.core.chunk_first(seq__46681_46891__$1);
var G__46893 = cljs.core.chunk_rest(seq__46681_46891__$1);
var G__46894 = c__4556__auto___46892;
var G__46895 = cljs.core.count(c__4556__auto___46892);
var G__46896 = (0);
seq__46681_46875 = G__46893;
chunk__46682_46876 = G__46894;
count__46683_46877 = G__46895;
i__46684_46878 = G__46896;
continue;
} else {
var map__46691_46897 = cljs.core.first(seq__46681_46891__$1);
var map__46691_46898__$1 = (((((!((map__46691_46897 == null))))?(((((map__46691_46897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46691_46897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46691_46897):map__46691_46897);
var w_46899 = map__46691_46898__$1;
var msg_46900__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46691_46898__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_46901 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46691_46898__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_46902 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46691_46898__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_46903 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46691_46898__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_46903)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_46901),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_46902),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_46900__$1)].join(''));


var G__46904 = cljs.core.next(seq__46681_46891__$1);
var G__46905 = null;
var G__46906 = (0);
var G__46907 = (0);
seq__46681_46875 = G__46904;
chunk__46682_46876 = G__46905;
count__46683_46877 = G__46906;
i__46684_46878 = G__46907;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__46663_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__46663_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__46698){
var map__46699 = p__46698;
var map__46699__$1 = (((((!((map__46699 == null))))?(((((map__46699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46699):map__46699);
var msg = map__46699__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46699__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__46701 = cljs.core.seq(updates);
var chunk__46703 = null;
var count__46704 = (0);
var i__46705 = (0);
while(true){
if((i__46705 < count__46704)){
var path = chunk__46703.cljs$core$IIndexed$_nth$arity$2(null,i__46705);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__46747_46908 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__46751_46909 = null;
var count__46752_46910 = (0);
var i__46753_46911 = (0);
while(true){
if((i__46753_46911 < count__46752_46910)){
var node_46912 = chunk__46751_46909.cljs$core$IIndexed$_nth$arity$2(null,i__46753_46911);
if(cljs.core.not(node_46912.shadow$old)){
var path_match_46913 = shadow.cljs.devtools.client.browser.match_paths(node_46912.getAttribute("href"),path);
if(cljs.core.truth_(path_match_46913)){
var new_link_46914 = (function (){var G__46761 = node_46912.cloneNode(true);
G__46761.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_46913),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__46761;
})();
(node_46912.shadow$old = true);

(new_link_46914.onload = ((function (seq__46747_46908,chunk__46751_46909,count__46752_46910,i__46753_46911,seq__46701,chunk__46703,count__46704,i__46705,new_link_46914,path_match_46913,node_46912,path,map__46699,map__46699__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_46912);
});})(seq__46747_46908,chunk__46751_46909,count__46752_46910,i__46753_46911,seq__46701,chunk__46703,count__46704,i__46705,new_link_46914,path_match_46913,node_46912,path,map__46699,map__46699__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_46913], 0));

goog.dom.insertSiblingAfter(new_link_46914,node_46912);


var G__46915 = seq__46747_46908;
var G__46916 = chunk__46751_46909;
var G__46917 = count__46752_46910;
var G__46918 = (i__46753_46911 + (1));
seq__46747_46908 = G__46915;
chunk__46751_46909 = G__46916;
count__46752_46910 = G__46917;
i__46753_46911 = G__46918;
continue;
} else {
var G__46919 = seq__46747_46908;
var G__46920 = chunk__46751_46909;
var G__46921 = count__46752_46910;
var G__46922 = (i__46753_46911 + (1));
seq__46747_46908 = G__46919;
chunk__46751_46909 = G__46920;
count__46752_46910 = G__46921;
i__46753_46911 = G__46922;
continue;
}
} else {
var G__46923 = seq__46747_46908;
var G__46924 = chunk__46751_46909;
var G__46925 = count__46752_46910;
var G__46926 = (i__46753_46911 + (1));
seq__46747_46908 = G__46923;
chunk__46751_46909 = G__46924;
count__46752_46910 = G__46925;
i__46753_46911 = G__46926;
continue;
}
} else {
var temp__5735__auto___46927 = cljs.core.seq(seq__46747_46908);
if(temp__5735__auto___46927){
var seq__46747_46928__$1 = temp__5735__auto___46927;
if(cljs.core.chunked_seq_QMARK_(seq__46747_46928__$1)){
var c__4556__auto___46929 = cljs.core.chunk_first(seq__46747_46928__$1);
var G__46930 = cljs.core.chunk_rest(seq__46747_46928__$1);
var G__46931 = c__4556__auto___46929;
var G__46932 = cljs.core.count(c__4556__auto___46929);
var G__46933 = (0);
seq__46747_46908 = G__46930;
chunk__46751_46909 = G__46931;
count__46752_46910 = G__46932;
i__46753_46911 = G__46933;
continue;
} else {
var node_46934 = cljs.core.first(seq__46747_46928__$1);
if(cljs.core.not(node_46934.shadow$old)){
var path_match_46935 = shadow.cljs.devtools.client.browser.match_paths(node_46934.getAttribute("href"),path);
if(cljs.core.truth_(path_match_46935)){
var new_link_46936 = (function (){var G__46762 = node_46934.cloneNode(true);
G__46762.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_46935),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__46762;
})();
(node_46934.shadow$old = true);

(new_link_46936.onload = ((function (seq__46747_46908,chunk__46751_46909,count__46752_46910,i__46753_46911,seq__46701,chunk__46703,count__46704,i__46705,new_link_46936,path_match_46935,node_46934,seq__46747_46928__$1,temp__5735__auto___46927,path,map__46699,map__46699__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_46934);
});})(seq__46747_46908,chunk__46751_46909,count__46752_46910,i__46753_46911,seq__46701,chunk__46703,count__46704,i__46705,new_link_46936,path_match_46935,node_46934,seq__46747_46928__$1,temp__5735__auto___46927,path,map__46699,map__46699__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_46935], 0));

goog.dom.insertSiblingAfter(new_link_46936,node_46934);


var G__46937 = cljs.core.next(seq__46747_46928__$1);
var G__46938 = null;
var G__46939 = (0);
var G__46940 = (0);
seq__46747_46908 = G__46937;
chunk__46751_46909 = G__46938;
count__46752_46910 = G__46939;
i__46753_46911 = G__46940;
continue;
} else {
var G__46941 = cljs.core.next(seq__46747_46928__$1);
var G__46942 = null;
var G__46943 = (0);
var G__46944 = (0);
seq__46747_46908 = G__46941;
chunk__46751_46909 = G__46942;
count__46752_46910 = G__46943;
i__46753_46911 = G__46944;
continue;
}
} else {
var G__46945 = cljs.core.next(seq__46747_46928__$1);
var G__46946 = null;
var G__46947 = (0);
var G__46948 = (0);
seq__46747_46908 = G__46945;
chunk__46751_46909 = G__46946;
count__46752_46910 = G__46947;
i__46753_46911 = G__46948;
continue;
}
}
} else {
}
}
break;
}


var G__46949 = seq__46701;
var G__46950 = chunk__46703;
var G__46951 = count__46704;
var G__46952 = (i__46705 + (1));
seq__46701 = G__46949;
chunk__46703 = G__46950;
count__46704 = G__46951;
i__46705 = G__46952;
continue;
} else {
var G__46953 = seq__46701;
var G__46954 = chunk__46703;
var G__46955 = count__46704;
var G__46956 = (i__46705 + (1));
seq__46701 = G__46953;
chunk__46703 = G__46954;
count__46704 = G__46955;
i__46705 = G__46956;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46701);
if(temp__5735__auto__){
var seq__46701__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46701__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46701__$1);
var G__46957 = cljs.core.chunk_rest(seq__46701__$1);
var G__46958 = c__4556__auto__;
var G__46959 = cljs.core.count(c__4556__auto__);
var G__46960 = (0);
seq__46701 = G__46957;
chunk__46703 = G__46958;
count__46704 = G__46959;
i__46705 = G__46960;
continue;
} else {
var path = cljs.core.first(seq__46701__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__46763_46961 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__46767_46962 = null;
var count__46768_46963 = (0);
var i__46769_46964 = (0);
while(true){
if((i__46769_46964 < count__46768_46963)){
var node_46966 = chunk__46767_46962.cljs$core$IIndexed$_nth$arity$2(null,i__46769_46964);
if(cljs.core.not(node_46966.shadow$old)){
var path_match_46967 = shadow.cljs.devtools.client.browser.match_paths(node_46966.getAttribute("href"),path);
if(cljs.core.truth_(path_match_46967)){
var new_link_46968 = (function (){var G__46775 = node_46966.cloneNode(true);
G__46775.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_46967),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__46775;
})();
(node_46966.shadow$old = true);

(new_link_46968.onload = ((function (seq__46763_46961,chunk__46767_46962,count__46768_46963,i__46769_46964,seq__46701,chunk__46703,count__46704,i__46705,new_link_46968,path_match_46967,node_46966,path,seq__46701__$1,temp__5735__auto__,map__46699,map__46699__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_46966);
});})(seq__46763_46961,chunk__46767_46962,count__46768_46963,i__46769_46964,seq__46701,chunk__46703,count__46704,i__46705,new_link_46968,path_match_46967,node_46966,path,seq__46701__$1,temp__5735__auto__,map__46699,map__46699__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_46967], 0));

goog.dom.insertSiblingAfter(new_link_46968,node_46966);


var G__46969 = seq__46763_46961;
var G__46970 = chunk__46767_46962;
var G__46971 = count__46768_46963;
var G__46972 = (i__46769_46964 + (1));
seq__46763_46961 = G__46969;
chunk__46767_46962 = G__46970;
count__46768_46963 = G__46971;
i__46769_46964 = G__46972;
continue;
} else {
var G__46973 = seq__46763_46961;
var G__46974 = chunk__46767_46962;
var G__46975 = count__46768_46963;
var G__46976 = (i__46769_46964 + (1));
seq__46763_46961 = G__46973;
chunk__46767_46962 = G__46974;
count__46768_46963 = G__46975;
i__46769_46964 = G__46976;
continue;
}
} else {
var G__46977 = seq__46763_46961;
var G__46978 = chunk__46767_46962;
var G__46979 = count__46768_46963;
var G__46980 = (i__46769_46964 + (1));
seq__46763_46961 = G__46977;
chunk__46767_46962 = G__46978;
count__46768_46963 = G__46979;
i__46769_46964 = G__46980;
continue;
}
} else {
var temp__5735__auto___46981__$1 = cljs.core.seq(seq__46763_46961);
if(temp__5735__auto___46981__$1){
var seq__46763_46982__$1 = temp__5735__auto___46981__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46763_46982__$1)){
var c__4556__auto___46983 = cljs.core.chunk_first(seq__46763_46982__$1);
var G__46984 = cljs.core.chunk_rest(seq__46763_46982__$1);
var G__46985 = c__4556__auto___46983;
var G__46986 = cljs.core.count(c__4556__auto___46983);
var G__46987 = (0);
seq__46763_46961 = G__46984;
chunk__46767_46962 = G__46985;
count__46768_46963 = G__46986;
i__46769_46964 = G__46987;
continue;
} else {
var node_46988 = cljs.core.first(seq__46763_46982__$1);
if(cljs.core.not(node_46988.shadow$old)){
var path_match_46989 = shadow.cljs.devtools.client.browser.match_paths(node_46988.getAttribute("href"),path);
if(cljs.core.truth_(path_match_46989)){
var new_link_46990 = (function (){var G__46776 = node_46988.cloneNode(true);
G__46776.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_46989),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__46776;
})();
(node_46988.shadow$old = true);

(new_link_46990.onload = ((function (seq__46763_46961,chunk__46767_46962,count__46768_46963,i__46769_46964,seq__46701,chunk__46703,count__46704,i__46705,new_link_46990,path_match_46989,node_46988,seq__46763_46982__$1,temp__5735__auto___46981__$1,path,seq__46701__$1,temp__5735__auto__,map__46699,map__46699__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_46988);
});})(seq__46763_46961,chunk__46767_46962,count__46768_46963,i__46769_46964,seq__46701,chunk__46703,count__46704,i__46705,new_link_46990,path_match_46989,node_46988,seq__46763_46982__$1,temp__5735__auto___46981__$1,path,seq__46701__$1,temp__5735__auto__,map__46699,map__46699__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_46989], 0));

goog.dom.insertSiblingAfter(new_link_46990,node_46988);


var G__46993 = cljs.core.next(seq__46763_46982__$1);
var G__46994 = null;
var G__46995 = (0);
var G__46996 = (0);
seq__46763_46961 = G__46993;
chunk__46767_46962 = G__46994;
count__46768_46963 = G__46995;
i__46769_46964 = G__46996;
continue;
} else {
var G__46997 = cljs.core.next(seq__46763_46982__$1);
var G__46998 = null;
var G__46999 = (0);
var G__47000 = (0);
seq__46763_46961 = G__46997;
chunk__46767_46962 = G__46998;
count__46768_46963 = G__46999;
i__46769_46964 = G__47000;
continue;
}
} else {
var G__47002 = cljs.core.next(seq__46763_46982__$1);
var G__47003 = null;
var G__47004 = (0);
var G__47005 = (0);
seq__46763_46961 = G__47002;
chunk__46767_46962 = G__47003;
count__46768_46963 = G__47004;
i__46769_46964 = G__47005;
continue;
}
}
} else {
}
}
break;
}


var G__47006 = cljs.core.next(seq__46701__$1);
var G__47007 = null;
var G__47008 = (0);
var G__47009 = (0);
seq__46701 = G__47006;
chunk__46703 = G__47007;
count__46704 = G__47008;
i__46705 = G__47009;
continue;
} else {
var G__47010 = cljs.core.next(seq__46701__$1);
var G__47011 = null;
var G__47012 = (0);
var G__47013 = (0);
seq__46701 = G__47010;
chunk__46703 = G__47011;
count__46704 = G__47012;
i__46705 = G__47013;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__46779){
var map__46780 = p__46779;
var map__46780__$1 = (((((!((map__46780 == null))))?(((((map__46780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46780):map__46780);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46780__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__46790){
var map__46791 = p__46790;
var map__46791__$1 = (((((!((map__46791 == null))))?(((((map__46791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46791):map__46791);
var _ = map__46791__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46791__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__46794,done,error){
var map__46795 = p__46794;
var map__46795__$1 = (((((!((map__46795 == null))))?(((((map__46795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46795):map__46795);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46795__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__46800,done,error){
var map__46801 = p__46800;
var map__46801__$1 = (((((!((map__46801 == null))))?(((((map__46801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46801):map__46801);
var msg = map__46801__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46801__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46801__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46801__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__46803){
var map__46804 = p__46803;
var map__46804__$1 = (((((!((map__46804 == null))))?(((((map__46804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46804):map__46804);
var src = map__46804__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46804__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__46810 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__46810) : done.call(null,G__46810));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__46811){
var map__46812 = p__46811;
var map__46812__$1 = (((((!((map__46812 == null))))?(((((map__46812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46812):map__46812);
var msg__$1 = map__46812__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46812__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e46814){var ex = e46814;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__46816){
var map__46817 = p__46816;
var map__46817__$1 = (((((!((map__46817 == null))))?(((((map__46817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46817):map__46817);
var env = map__46817__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46817__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__46822){
var map__46823 = p__46822;
var map__46823__$1 = (((((!((map__46823 == null))))?(((((map__46823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46823):map__46823);
var msg = map__46823__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46823__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__46828){
var map__46829 = p__46828;
var map__46829__$1 = (((((!((map__46829 == null))))?(((((map__46829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46829):map__46829);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46829__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46829__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__46831){
var map__46832 = p__46831;
var map__46832__$1 = (((((!((map__46832 == null))))?(((((map__46832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46832):map__46832);
var svc = map__46832__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46832__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
