goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__45664){
var map__45665 = p__45664;
var map__45665__$1 = (((((!((map__45665 == null))))?(((((map__45665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45665):map__45665);
var m = map__45665__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45665__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45665__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45668_45877 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45669_45878 = null;
var count__45670_45879 = (0);
var i__45671_45880 = (0);
while(true){
if((i__45671_45880 < count__45670_45879)){
var f_45881 = chunk__45669_45878.cljs$core$IIndexed$_nth$arity$2(null,i__45671_45880);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45881], 0));


var G__45882 = seq__45668_45877;
var G__45883 = chunk__45669_45878;
var G__45884 = count__45670_45879;
var G__45885 = (i__45671_45880 + (1));
seq__45668_45877 = G__45882;
chunk__45669_45878 = G__45883;
count__45670_45879 = G__45884;
i__45671_45880 = G__45885;
continue;
} else {
var temp__5735__auto___45886 = cljs.core.seq(seq__45668_45877);
if(temp__5735__auto___45886){
var seq__45668_45887__$1 = temp__5735__auto___45886;
if(cljs.core.chunked_seq_QMARK_(seq__45668_45887__$1)){
var c__4556__auto___45889 = cljs.core.chunk_first(seq__45668_45887__$1);
var G__45890 = cljs.core.chunk_rest(seq__45668_45887__$1);
var G__45891 = c__4556__auto___45889;
var G__45892 = cljs.core.count(c__4556__auto___45889);
var G__45893 = (0);
seq__45668_45877 = G__45890;
chunk__45669_45878 = G__45891;
count__45670_45879 = G__45892;
i__45671_45880 = G__45893;
continue;
} else {
var f_45894 = cljs.core.first(seq__45668_45887__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45894], 0));


var G__45895 = cljs.core.next(seq__45668_45887__$1);
var G__45896 = null;
var G__45897 = (0);
var G__45898 = (0);
seq__45668_45877 = G__45895;
chunk__45669_45878 = G__45896;
count__45670_45879 = G__45897;
i__45671_45880 = G__45898;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45899 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_45899], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_45899)))?cljs.core.second(arglists_45899):arglists_45899)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45676_45900 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45677_45901 = null;
var count__45678_45902 = (0);
var i__45679_45903 = (0);
while(true){
if((i__45679_45903 < count__45678_45902)){
var vec__45690_45904 = chunk__45677_45901.cljs$core$IIndexed$_nth$arity$2(null,i__45679_45903);
var name_45905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45690_45904,(0),null);
var map__45693_45906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45690_45904,(1),null);
var map__45693_45907__$1 = (((((!((map__45693_45906 == null))))?(((((map__45693_45906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45693_45906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45693_45906):map__45693_45906);
var doc_45908 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45693_45907__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45909 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45693_45907__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45905], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45909], 0));

if(cljs.core.truth_(doc_45908)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45908], 0));
} else {
}


var G__45910 = seq__45676_45900;
var G__45911 = chunk__45677_45901;
var G__45912 = count__45678_45902;
var G__45913 = (i__45679_45903 + (1));
seq__45676_45900 = G__45910;
chunk__45677_45901 = G__45911;
count__45678_45902 = G__45912;
i__45679_45903 = G__45913;
continue;
} else {
var temp__5735__auto___45915 = cljs.core.seq(seq__45676_45900);
if(temp__5735__auto___45915){
var seq__45676_45916__$1 = temp__5735__auto___45915;
if(cljs.core.chunked_seq_QMARK_(seq__45676_45916__$1)){
var c__4556__auto___45917 = cljs.core.chunk_first(seq__45676_45916__$1);
var G__45918 = cljs.core.chunk_rest(seq__45676_45916__$1);
var G__45919 = c__4556__auto___45917;
var G__45920 = cljs.core.count(c__4556__auto___45917);
var G__45921 = (0);
seq__45676_45900 = G__45918;
chunk__45677_45901 = G__45919;
count__45678_45902 = G__45920;
i__45679_45903 = G__45921;
continue;
} else {
var vec__45697_45922 = cljs.core.first(seq__45676_45916__$1);
var name_45923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45697_45922,(0),null);
var map__45700_45924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45697_45922,(1),null);
var map__45700_45925__$1 = (((((!((map__45700_45924 == null))))?(((((map__45700_45924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45700_45924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45700_45924):map__45700_45924);
var doc_45926 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45700_45925__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45927 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45700_45925__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45923], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45927], 0));

if(cljs.core.truth_(doc_45926)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45926], 0));
} else {
}


var G__45933 = cljs.core.next(seq__45676_45916__$1);
var G__45934 = null;
var G__45935 = (0);
var G__45936 = (0);
seq__45676_45900 = G__45933;
chunk__45677_45901 = G__45934;
count__45678_45902 = G__45935;
i__45679_45903 = G__45936;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__45703 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__45704 = null;
var count__45705 = (0);
var i__45706 = (0);
while(true){
if((i__45706 < count__45705)){
var role = chunk__45704.cljs$core$IIndexed$_nth$arity$2(null,i__45706);
var temp__5735__auto___45937__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45937__$1)){
var spec_45938 = temp__5735__auto___45937__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45938)], 0));
} else {
}


var G__45939 = seq__45703;
var G__45940 = chunk__45704;
var G__45941 = count__45705;
var G__45942 = (i__45706 + (1));
seq__45703 = G__45939;
chunk__45704 = G__45940;
count__45705 = G__45941;
i__45706 = G__45942;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__45703);
if(temp__5735__auto____$1){
var seq__45703__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__45703__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__45703__$1);
var G__45944 = cljs.core.chunk_rest(seq__45703__$1);
var G__45945 = c__4556__auto__;
var G__45946 = cljs.core.count(c__4556__auto__);
var G__45947 = (0);
seq__45703 = G__45944;
chunk__45704 = G__45945;
count__45705 = G__45946;
i__45706 = G__45947;
continue;
} else {
var role = cljs.core.first(seq__45703__$1);
var temp__5735__auto___45948__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45948__$2)){
var spec_45949 = temp__5735__auto___45948__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45949)], 0));
} else {
}


var G__45950 = cljs.core.next(seq__45703__$1);
var G__45951 = null;
var G__45952 = (0);
var G__45953 = (0);
seq__45703 = G__45950;
chunk__45704 = G__45951;
count__45705 = G__45952;
i__45706 = G__45953;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__45958 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__45959 = cljs.core.ex_cause(t);
via = G__45958;
t = G__45959;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__45728 = datafied_throwable;
var map__45728__$1 = (((((!((map__45728 == null))))?(((((map__45728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45728):map__45728);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45728__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45728__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45728__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__45729 = cljs.core.last(via);
var map__45729__$1 = (((((!((map__45729 == null))))?(((((map__45729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45729):map__45729);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45729__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45729__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45729__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__45730 = data;
var map__45730__$1 = (((((!((map__45730 == null))))?(((((map__45730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45730):map__45730);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45730__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45730__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45730__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__45731 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__45731__$1 = (((((!((map__45731 == null))))?(((((map__45731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45731):map__45731);
var top_data = map__45731__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45731__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45743 = phase;
var G__45743__$1 = (((G__45743 instanceof cljs.core.Keyword))?G__45743.fqn:null);
switch (G__45743__$1) {
case "read-source":
var map__45744 = data;
var map__45744__$1 = (((((!((map__45744 == null))))?(((((map__45744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45744):map__45744);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45744__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45744__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__45746 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__45746__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45746,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45746);
var G__45746__$2 = (cljs.core.truth_((function (){var fexpr__45752 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45752.cljs$core$IFn$_invoke$arity$1 ? fexpr__45752.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45752.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45746__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45746__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45746__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45746__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__45759 = top_data;
var G__45759__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45759,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45759);
var G__45759__$2 = (cljs.core.truth_((function (){var fexpr__45763 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45763.cljs$core$IFn$_invoke$arity$1 ? fexpr__45763.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45763.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45759__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45759__$1);
var G__45759__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45759__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45759__$2);
var G__45759__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45759__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45759__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45759__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45759__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__45768 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45768,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45768,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45768,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45768,(3),null);
var G__45775 = top_data;
var G__45775__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45775,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__45775);
var G__45775__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45775__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__45775__$1);
var G__45775__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45775__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__45775__$2);
var G__45775__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45775__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45775__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45775__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45775__$4;
}

break;
case "execution":
var vec__45792 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45792,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45792,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45792,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45792,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__45714_SHARP_){
var or__4126__auto__ = (p1__45714_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__45796 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45796.cljs$core$IFn$_invoke$arity$1 ? fexpr__45796.cljs$core$IFn$_invoke$arity$1(p1__45714_SHARP_) : fexpr__45796.call(null,p1__45714_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__45797 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__45797__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45797,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__45797);
var G__45797__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45797__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45797__$1);
var G__45797__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45797__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__45797__$2);
var G__45797__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45797__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__45797__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45797__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45797__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45743__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__45821){
var map__45822 = p__45821;
var map__45822__$1 = (((((!((map__45822 == null))))?(((((map__45822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45822):map__45822);
var triage_data = map__45822__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45822__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45822__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45822__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45822__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45822__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45822__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45822__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45822__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__45836 = phase;
var G__45836__$1 = (((G__45836 instanceof cljs.core.Keyword))?G__45836.fqn:null);
switch (G__45836__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__45837 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__45838 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45839 = loc;
var G__45840 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45841_45974 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45842_45975 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45843_45976 = true;
var _STAR_print_fn_STAR__temp_val__45844_45977 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45843_45976);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45844_45977);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45811_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45811_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45842_45975);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45841_45974);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45837,G__45838,G__45839,G__45840) : format.call(null,G__45837,G__45838,G__45839,G__45840));

break;
case "macroexpansion":
var G__45846 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__45847 = cause_type;
var G__45848 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45849 = loc;
var G__45850 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45846,G__45847,G__45848,G__45849,G__45850) : format.call(null,G__45846,G__45847,G__45848,G__45849,G__45850));

break;
case "compile-syntax-check":
var G__45851 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__45852 = cause_type;
var G__45853 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45854 = loc;
var G__45855 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45851,G__45852,G__45853,G__45854,G__45855) : format.call(null,G__45851,G__45852,G__45853,G__45854,G__45855));

break;
case "compilation":
var G__45856 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__45857 = cause_type;
var G__45858 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45859 = loc;
var G__45860 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45856,G__45857,G__45858,G__45859,G__45860) : format.call(null,G__45856,G__45857,G__45858,G__45859,G__45860));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__45861 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__45862 = symbol;
var G__45863 = loc;
var G__45864 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45866_45983 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45867_45984 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45868_45985 = true;
var _STAR_print_fn_STAR__temp_val__45869_45986 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45868_45985);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45869_45986);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45817_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45817_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45867_45984);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45866_45983);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45861,G__45862,G__45863,G__45864) : format.call(null,G__45861,G__45862,G__45863,G__45864));
} else {
var G__45870 = "Execution error%s at %s(%s).\n%s\n";
var G__45871 = cause_type;
var G__45872 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45873 = loc;
var G__45874 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45870,G__45871,G__45872,G__45873,G__45874) : format.call(null,G__45870,G__45871,G__45872,G__45873,G__45874));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45836__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
