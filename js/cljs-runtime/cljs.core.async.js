goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__39198 = arguments.length;
switch (G__39198) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39205 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39205 = (function (f,blockable,meta39206){
this.f = f;
this.blockable = blockable;
this.meta39206 = meta39206;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39207,meta39206__$1){
var self__ = this;
var _39207__$1 = this;
return (new cljs.core.async.t_cljs$core$async39205(self__.f,self__.blockable,meta39206__$1));
}));

(cljs.core.async.t_cljs$core$async39205.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39207){
var self__ = this;
var _39207__$1 = this;
return self__.meta39206;
}));

(cljs.core.async.t_cljs$core$async39205.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39205.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async39205.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async39205.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async39205.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta39206","meta39206",1686095401,null)], null);
}));

(cljs.core.async.t_cljs$core$async39205.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39205.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39205");

(cljs.core.async.t_cljs$core$async39205.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async39205");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39205.
 */
cljs.core.async.__GT_t_cljs$core$async39205 = (function cljs$core$async$__GT_t_cljs$core$async39205(f__$1,blockable__$1,meta39206){
return (new cljs.core.async.t_cljs$core$async39205(f__$1,blockable__$1,meta39206));
});

}

return (new cljs.core.async.t_cljs$core$async39205(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__39243 = arguments.length;
switch (G__39243) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__39254 = arguments.length;
switch (G__39254) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__39267 = arguments.length;
switch (G__39267) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_42030 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_42030) : fn1.call(null,val_42030));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_42030) : fn1.call(null,val_42030));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__39275 = arguments.length;
switch (G__39275) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___42042 = n;
var x_42043 = (0);
while(true){
if((x_42043 < n__4613__auto___42042)){
(a[x_42043] = x_42043);

var G__42044 = (x_42043 + (1));
x_42043 = G__42044;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39303 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39303 = (function (flag,meta39304){
this.flag = flag;
this.meta39304 = meta39304;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39303.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39305,meta39304__$1){
var self__ = this;
var _39305__$1 = this;
return (new cljs.core.async.t_cljs$core$async39303(self__.flag,meta39304__$1));
}));

(cljs.core.async.t_cljs$core$async39303.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39305){
var self__ = this;
var _39305__$1 = this;
return self__.meta39304;
}));

(cljs.core.async.t_cljs$core$async39303.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39303.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async39303.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async39303.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async39303.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta39304","meta39304",78068754,null)], null);
}));

(cljs.core.async.t_cljs$core$async39303.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39303.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39303");

(cljs.core.async.t_cljs$core$async39303.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async39303");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39303.
 */
cljs.core.async.__GT_t_cljs$core$async39303 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async39303(flag__$1,meta39304){
return (new cljs.core.async.t_cljs$core$async39303(flag__$1,meta39304));
});

}

return (new cljs.core.async.t_cljs$core$async39303(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39319 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39319 = (function (flag,cb,meta39320){
this.flag = flag;
this.cb = cb;
this.meta39320 = meta39320;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39321,meta39320__$1){
var self__ = this;
var _39321__$1 = this;
return (new cljs.core.async.t_cljs$core$async39319(self__.flag,self__.cb,meta39320__$1));
}));

(cljs.core.async.t_cljs$core$async39319.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39321){
var self__ = this;
var _39321__$1 = this;
return self__.meta39320;
}));

(cljs.core.async.t_cljs$core$async39319.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39319.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async39319.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async39319.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async39319.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta39320","meta39320",526903966,null)], null);
}));

(cljs.core.async.t_cljs$core$async39319.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39319.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39319");

(cljs.core.async.t_cljs$core$async39319.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async39319");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39319.
 */
cljs.core.async.__GT_t_cljs$core$async39319 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async39319(flag__$1,cb__$1,meta39320){
return (new cljs.core.async.t_cljs$core$async39319(flag__$1,cb__$1,meta39320));
});

}

return (new cljs.core.async.t_cljs$core$async39319(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39327_SHARP_){
var G__39337 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39327_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__39337) : fret.call(null,G__39337));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39328_SHARP_){
var G__39338 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39328_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__39338) : fret.call(null,G__39338));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__42089 = (i + (1));
i = G__42089;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42090 = arguments.length;
var i__4737__auto___42091 = (0);
while(true){
if((i__4737__auto___42091 < len__4736__auto___42090)){
args__4742__auto__.push((arguments[i__4737__auto___42091]));

var G__42092 = (i__4737__auto___42091 + (1));
i__4737__auto___42091 = G__42092;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__39372){
var map__39376 = p__39372;
var map__39376__$1 = (((((!((map__39376 == null))))?(((((map__39376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39376):map__39376);
var opts = map__39376__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq39359){
var G__39360 = cljs.core.first(seq39359);
var seq39359__$1 = cljs.core.next(seq39359);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39360,seq39359__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__39381 = arguments.length;
switch (G__39381) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__25807__auto___42102 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25808__auto__ = (function (){var switch__25722__auto__ = (function (state_39406){
var state_val_39407 = (state_39406[(1)]);
if((state_val_39407 === (7))){
var inst_39402 = (state_39406[(2)]);
var state_39406__$1 = state_39406;
var statearr_39408_42106 = state_39406__$1;
(statearr_39408_42106[(2)] = inst_39402);

(statearr_39408_42106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39407 === (1))){
var state_39406__$1 = state_39406;
var statearr_39409_42110 = state_39406__$1;
(statearr_39409_42110[(2)] = null);

(statearr_39409_42110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39407 === (4))){
var inst_39385 = (state_39406[(7)]);
var inst_39385__$1 = (state_39406[(2)]);
var inst_39386 = (inst_39385__$1 == null);
var state_39406__$1 = (function (){var statearr_39414 = state_39406;
(statearr_39414[(7)] = inst_39385__$1);

return statearr_39414;
})();
if(cljs.core.truth_(inst_39386)){
var statearr_39416_42112 = state_39406__$1;
(statearr_39416_42112[(1)] = (5));

} else {
var statearr_39418_42113 = state_39406__$1;
(statearr_39418_42113[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39407 === (13))){
var state_39406__$1 = state_39406;
var statearr_39421_42114 = state_39406__$1;
(statearr_39421_42114[(2)] = null);

(statearr_39421_42114[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39407 === (6))){
var inst_39385 = (state_39406[(7)]);
var state_39406__$1 = state_39406;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39406__$1,(11),to,inst_39385);
} else {
if((state_val_39407 === (3))){
var inst_39404 = (state_39406[(2)]);
var state_39406__$1 = state_39406;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39406__$1,inst_39404);
} else {
if((state_val_39407 === (12))){
var state_39406__$1 = state_39406;
var statearr_39423_42124 = state_39406__$1;
(statearr_39423_42124[(2)] = null);

(statearr_39423_42124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39407 === (2))){
var state_39406__$1 = state_39406;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39406__$1,(4),from);
} else {
if((state_val_39407 === (11))){
var inst_39395 = (state_39406[(2)]);
var state_39406__$1 = state_39406;
if(cljs.core.truth_(inst_39395)){
var statearr_39425_42127 = state_39406__$1;
(statearr_39425_42127[(1)] = (12));

} else {
var statearr_39428_42128 = state_39406__$1;
(statearr_39428_42128[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39407 === (9))){
var state_39406__$1 = state_39406;
var statearr_39431_42129 = state_39406__$1;
(statearr_39431_42129[(2)] = null);

(statearr_39431_42129[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39407 === (5))){
var state_39406__$1 = state_39406;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39432_42130 = state_39406__$1;
(statearr_39432_42130[(1)] = (8));

} else {
var statearr_39433_42131 = state_39406__$1;
(statearr_39433_42131[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39407 === (14))){
var inst_39400 = (state_39406[(2)]);
var state_39406__$1 = state_39406;
var statearr_39434_42134 = state_39406__$1;
(statearr_39434_42134[(2)] = inst_39400);

(statearr_39434_42134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39407 === (10))){
var inst_39392 = (state_39406[(2)]);
var state_39406__$1 = state_39406;
var statearr_39435_42139 = state_39406__$1;
(statearr_39435_42139[(2)] = inst_39392);

(statearr_39435_42139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39407 === (8))){
var inst_39389 = cljs.core.async.close_BANG_(to);
var state_39406__$1 = state_39406;
var statearr_39439_42146 = state_39406__$1;
(statearr_39439_42146[(2)] = inst_39389);

(statearr_39439_42146[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__25723__auto__ = null;
var cljs$core$async$state_machine__25723__auto____0 = (function (){
var statearr_39440 = [null,null,null,null,null,null,null,null];
(statearr_39440[(0)] = cljs$core$async$state_machine__25723__auto__);

(statearr_39440[(1)] = (1));

return statearr_39440;
});
var cljs$core$async$state_machine__25723__auto____1 = (function (state_39406){
while(true){
var ret_value__25724__auto__ = (function (){try{while(true){
var result__25725__auto__ = switch__25722__auto__(state_39406);
if(cljs.core.keyword_identical_QMARK_(result__25725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25725__auto__;
}
break;
}
}catch (e39442){var ex__25726__auto__ = e39442;
var statearr_39443_42149 = state_39406;
(statearr_39443_42149[(2)] = ex__25726__auto__);


if(cljs.core.seq((state_39406[(4)]))){
var statearr_39444_42152 = state_39406;
(statearr_39444_42152[(1)] = cljs.core.first((state_39406[(4)])));

} else {
throw ex__25726__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42157 = state_39406;
state_39406 = G__42157;
continue;
} else {
return ret_value__25724__auto__;
}
break;
}
});
cljs$core$async$state_machine__25723__auto__ = function(state_39406){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25723__auto____1.call(this,state_39406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25723__auto____0;
cljs$core$async$state_machine__25723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25723__auto____1;
return cljs$core$async$state_machine__25723__auto__;
})()
})();
var state__25809__auto__ = (function (){var statearr_39446 = f__25808__auto__();
(statearr_39446[(6)] = c__25807__auto___42102);

return statearr_39446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25809__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__39455){
var vec__39456 = p__39455;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39456,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39456,(1),null);
var job = vec__39456;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__25807__auto___42163 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25808__auto__ = (function (){var switch__25722__auto__ = (function (state_39463){
var state_val_39464 = (state_39463[(1)]);
if((state_val_39464 === (1))){
var state_39463__$1 = state_39463;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39463__$1,(2),res,v);
} else {
if((state_val_39464 === (2))){
var inst_39460 = (state_39463[(2)]);
var inst_39461 = cljs.core.async.close_BANG_(res);
var state_39463__$1 = (function (){var statearr_39466 = state_39463;
(statearr_39466[(7)] = inst_39460);

return statearr_39466;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39463__$1,inst_39461);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25723__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25723__auto____0 = (function (){
var statearr_39468 = [null,null,null,null,null,null,null,null];
(statearr_39468[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25723__auto__);

(statearr_39468[(1)] = (1));

return statearr_39468;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25723__auto____1 = (function (state_39463){
while(true){
var ret_value__25724__auto__ = (function (){try{while(true){
var result__25725__auto__ = switch__25722__auto__(state_39463);
if(cljs.core.keyword_identical_QMARK_(result__25725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25725__auto__;
}
break;
}
}catch (e39469){var ex__25726__auto__ = e39469;
var statearr_39470_42170 = state_39463;
(statearr_39470_42170[(2)] = ex__25726__auto__);


if(cljs.core.seq((state_39463[(4)]))){
var statearr_39471_42173 = state_39463;
(statearr_39471_42173[(1)] = cljs.core.first((state_39463[(4)])));

} else {
throw ex__25726__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42174 = state_39463;
state_39463 = G__42174;
continue;
} else {
return ret_value__25724__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25723__auto__ = function(state_39463){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25723__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25723__auto____1.call(this,state_39463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25723__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25723__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25723__auto__;
})()
})();
var state__25809__auto__ = (function (){var statearr_39475 = f__25808__auto__();
(statearr_39475[(6)] = c__25807__auto___42163);

return statearr_39475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25809__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__39477){
var vec__39482 = p__39477;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39482,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39482,(1),null);
var job = vec__39482;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___42177 = n;
var __42179 = (0);
while(true){
if((__42179 < n__4613__auto___42177)){
var G__39487_42182 = type;
var G__39487_42183__$1 = (((G__39487_42182 instanceof cljs.core.Keyword))?G__39487_42182.fqn:null);
switch (G__39487_42183__$1) {
case "compute":
var c__25807__auto___42188 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__42179,c__25807__auto___42188,G__39487_42182,G__39487_42183__$1,n__4613__auto___42177,jobs,results,process,async){
return (function (){
var f__25808__auto__ = (function (){var switch__25722__auto__ = ((function (__42179,c__25807__auto___42188,G__39487_42182,G__39487_42183__$1,n__4613__auto___42177,jobs,results,process,async){
return (function (state_39500){
var state_val_39501 = (state_39500[(1)]);
if((state_val_39501 === (1))){
var state_39500__$1 = state_39500;
var statearr_39502_42193 = state_39500__$1;
(statearr_39502_42193[(2)] = null);

(statearr_39502_42193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39501 === (2))){
var state_39500__$1 = state_39500;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39500__$1,(4),jobs);
} else {
if((state_val_39501 === (3))){
var inst_39498 = (state_39500[(2)]);
var state_39500__$1 = state_39500;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39500__$1,inst_39498);
} else {
if((state_val_39501 === (4))){
var inst_39490 = (state_39500[(2)]);
var inst_39491 = process(inst_39490);
var state_39500__$1 = state_39500;
if(cljs.core.truth_(inst_39491)){
var statearr_39505_42196 = state_39500__$1;
(statearr_39505_42196[(1)] = (5));

} else {
var statearr_39506_42197 = state_39500__$1;
(statearr_39506_42197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39501 === (5))){
var state_39500__$1 = state_39500;
var statearr_39508_42198 = state_39500__$1;
(statearr_39508_42198[(2)] = null);

(statearr_39508_42198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39501 === (6))){
var state_39500__$1 = state_39500;
var statearr_39509_42204 = state_39500__$1;
(statearr_39509_42204[(2)] = null);

(statearr_39509_42204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39501 === (7))){
var inst_39496 = (state_39500[(2)]);
var state_39500__$1 = state_39500;
var statearr_39510_42205 = state_39500__$1;
(statearr_39510_42205[(2)] = inst_39496);

(statearr_39510_42205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__42179,c__25807__auto___42188,G__39487_42182,G__39487_42183__$1,n__4613__auto___42177,jobs,results,process,async))
;
return ((function (__42179,switch__25722__auto__,c__25807__auto___42188,G__39487_42182,G__39487_42183__$1,n__4613__auto___42177,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25723__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25723__auto____0 = (function (){
var statearr_39512 = [null,null,null,null,null,null,null];
(statearr_39512[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25723__auto__);

(statearr_39512[(1)] = (1));

return statearr_39512;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25723__auto____1 = (function (state_39500){
while(true){
var ret_value__25724__auto__ = (function (){try{while(true){
var result__25725__auto__ = switch__25722__auto__(state_39500);
if(cljs.core.keyword_identical_QMARK_(result__25725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25725__auto__;
}
break;
}
}catch (e39518){var ex__25726__auto__ = e39518;
var statearr_39519_42209 = state_39500;
(statearr_39519_42209[(2)] = ex__25726__auto__);


if(cljs.core.seq((state_39500[(4)]))){
var statearr_39520_42212 = state_39500;
(statearr_39520_42212[(1)] = cljs.core.first((state_39500[(4)])));

} else {
throw ex__25726__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42213 = state_39500;
state_39500 = G__42213;
continue;
} else {
return ret_value__25724__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25723__auto__ = function(state_39500){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25723__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25723__auto____1.call(this,state_39500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25723__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25723__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25723__auto__;
})()
;})(__42179,switch__25722__auto__,c__25807__auto___42188,G__39487_42182,G__39487_42183__$1,n__4613__auto___42177,jobs,results,process,async))
})();
var state__25809__auto__ = (function (){var statearr_39521 = f__25808__auto__();
(statearr_39521[(6)] = c__25807__auto___42188);

return statearr_39521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25809__auto__);
});})(__42179,c__25807__auto___42188,G__39487_42182,G__39487_42183__$1,n__4613__auto___42177,jobs,results,process,async))
);


break;
case "async":
var c__25807__auto___42217 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__42179,c__25807__auto___42217,G__39487_42182,G__39487_42183__$1,n__4613__auto___42177,jobs,results,process,async){
return (function (){
var f__25808__auto__ = (function (){var switch__25722__auto__ = ((function (__42179,c__25807__auto___42217,G__39487_42182,G__39487_42183__$1,n__4613__auto___42177,jobs,results,process,async){
return (function (state_39538){
var state_val_39539 = (state_39538[(1)]);
if((state_val_39539 === (1))){
var state_39538__$1 = state_39538;
var statearr_39544_42226 = state_39538__$1;
(statearr_39544_42226[(2)] = null);

(statearr_39544_42226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39539 === (2))){
var state_39538__$1 = state_39538;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39538__$1,(4),jobs);
} else {
if((state_val_39539 === (3))){
var inst_39536 = (state_39538[(2)]);
var state_39538__$1 = state_39538;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39538__$1,inst_39536);
} else {
if((state_val_39539 === (4))){
var inst_39528 = (state_39538[(2)]);
var inst_39529 = async(inst_39528);
var state_39538__$1 = state_39538;
if(cljs.core.truth_(inst_39529)){
var statearr_39548_42231 = state_39538__$1;
(statearr_39548_42231[(1)] = (5));

} else {
var statearr_39549_42233 = state_39538__$1;
(statearr_39549_42233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39539 === (5))){
var state_39538__$1 = state_39538;
var statearr_39550_42234 = state_39538__$1;
(statearr_39550_42234[(2)] = null);

(statearr_39550_42234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39539 === (6))){
var state_39538__$1 = state_39538;
var statearr_39552_42240 = state_39538__$1;
(statearr_39552_42240[(2)] = null);

(statearr_39552_42240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39539 === (7))){
var inst_39534 = (state_39538[(2)]);
var state_39538__$1 = state_39538;
var statearr_39556_42241 = state_39538__$1;
(statearr_39556_42241[(2)] = inst_39534);

(statearr_39556_42241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__42179,c__25807__auto___42217,G__39487_42182,G__39487_42183__$1,n__4613__auto___42177,jobs,results,process,async))
;
return ((function (__42179,switch__25722__auto__,c__25807__auto___42217,G__39487_42182,G__39487_42183__$1,n__4613__auto___42177,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25723__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25723__auto____0 = (function (){
var statearr_39559 = [null,null,null,null,null,null,null];
(statearr_39559[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25723__auto__);

(statearr_39559[(1)] = (1));

return statearr_39559;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25723__auto____1 = (function (state_39538){
while(true){
var ret_value__25724__auto__ = (function (){try{while(true){
var result__25725__auto__ = switch__25722__auto__(state_39538);
if(cljs.core.keyword_identical_QMARK_(result__25725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25725__auto__;
}
break;
}
}catch (e39562){var ex__25726__auto__ = e39562;
var statearr_39563_42248 = state_39538;
(statearr_39563_42248[(2)] = ex__25726__auto__);


if(cljs.core.seq((state_39538[(4)]))){
var statearr_39565_42249 = state_39538;
(statearr_39565_42249[(1)] = cljs.core.first((state_39538[(4)])));

} else {
throw ex__25726__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42250 = state_39538;
state_39538 = G__42250;
continue;
} else {
return ret_value__25724__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25723__auto__ = function(state_39538){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25723__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25723__auto____1.call(this,state_39538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25723__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25723__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25723__auto__;
})()
;})(__42179,switch__25722__auto__,c__25807__auto___42217,G__39487_42182,G__39487_42183__$1,n__4613__auto___42177,jobs,results,process,async))
})();
var state__25809__auto__ = (function (){var statearr_39569 = f__25808__auto__();
(statearr_39569[(6)] = c__25807__auto___42217);

return statearr_39569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25809__auto__);
});})(__42179,c__25807__auto___42217,G__39487_42182,G__39487_42183__$1,n__4613__auto___42177,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39487_42183__$1)].join('')));

}

var G__42257 = (__42179 + (1));
__42179 = G__42257;
continue;
} else {
}
break;
}

var c__25807__auto___42259 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25808__auto__ = (function (){var switch__25722__auto__ = (function (state_39595){
var state_val_39596 = (state_39595[(1)]);
if((state_val_39596 === (7))){
var inst_39590 = (state_39595[(2)]);
var state_39595__$1 = state_39595;
var statearr_39603_42261 = state_39595__$1;
(statearr_39603_42261[(2)] = inst_39590);

(statearr_39603_42261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39596 === (1))){
var state_39595__$1 = state_39595;
var statearr_39605_42262 = state_39595__$1;
(statearr_39605_42262[(2)] = null);

(statearr_39605_42262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39596 === (4))){
var inst_39575 = (state_39595[(7)]);
var inst_39575__$1 = (state_39595[(2)]);
var inst_39576 = (inst_39575__$1 == null);
var state_39595__$1 = (function (){var statearr_39612 = state_39595;
(statearr_39612[(7)] = inst_39575__$1);

return statearr_39612;
})();
if(cljs.core.truth_(inst_39576)){
var statearr_39613_42268 = state_39595__$1;
(statearr_39613_42268[(1)] = (5));

} else {
var statearr_39617_42269 = state_39595__$1;
(statearr_39617_42269[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39596 === (6))){
var inst_39575 = (state_39595[(7)]);
var inst_39580 = (state_39595[(8)]);
var inst_39580__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_39581 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39582 = [inst_39575,inst_39580__$1];
var inst_39583 = (new cljs.core.PersistentVector(null,2,(5),inst_39581,inst_39582,null));
var state_39595__$1 = (function (){var statearr_39619 = state_39595;
(statearr_39619[(8)] = inst_39580__$1);

return statearr_39619;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39595__$1,(8),jobs,inst_39583);
} else {
if((state_val_39596 === (3))){
var inst_39592 = (state_39595[(2)]);
var state_39595__$1 = state_39595;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39595__$1,inst_39592);
} else {
if((state_val_39596 === (2))){
var state_39595__$1 = state_39595;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39595__$1,(4),from);
} else {
if((state_val_39596 === (9))){
var inst_39587 = (state_39595[(2)]);
var state_39595__$1 = (function (){var statearr_39626 = state_39595;
(statearr_39626[(9)] = inst_39587);

return statearr_39626;
})();
var statearr_39627_42275 = state_39595__$1;
(statearr_39627_42275[(2)] = null);

(statearr_39627_42275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39596 === (5))){
var inst_39578 = cljs.core.async.close_BANG_(jobs);
var state_39595__$1 = state_39595;
var statearr_39628_42279 = state_39595__$1;
(statearr_39628_42279[(2)] = inst_39578);

(statearr_39628_42279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39596 === (8))){
var inst_39580 = (state_39595[(8)]);
var inst_39585 = (state_39595[(2)]);
var state_39595__$1 = (function (){var statearr_39629 = state_39595;
(statearr_39629[(10)] = inst_39585);

return statearr_39629;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39595__$1,(9),results,inst_39580);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25723__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25723__auto____0 = (function (){
var statearr_39634 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39634[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25723__auto__);

(statearr_39634[(1)] = (1));

return statearr_39634;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25723__auto____1 = (function (state_39595){
while(true){
var ret_value__25724__auto__ = (function (){try{while(true){
var result__25725__auto__ = switch__25722__auto__(state_39595);
if(cljs.core.keyword_identical_QMARK_(result__25725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25725__auto__;
}
break;
}
}catch (e39635){var ex__25726__auto__ = e39635;
var statearr_39636_42286 = state_39595;
(statearr_39636_42286[(2)] = ex__25726__auto__);


if(cljs.core.seq((state_39595[(4)]))){
var statearr_39637_42291 = state_39595;
(statearr_39637_42291[(1)] = cljs.core.first((state_39595[(4)])));

} else {
throw ex__25726__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42292 = state_39595;
state_39595 = G__42292;
continue;
} else {
return ret_value__25724__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25723__auto__ = function(state_39595){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25723__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25723__auto____1.call(this,state_39595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25723__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25723__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25723__auto__;
})()
})();
var state__25809__auto__ = (function (){var statearr_39642 = f__25808__auto__();
(statearr_39642[(6)] = c__25807__auto___42259);

return statearr_39642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25809__auto__);
}));


var c__25807__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25808__auto__ = (function (){var switch__25722__auto__ = (function (state_39685){
var state_val_39686 = (state_39685[(1)]);
if((state_val_39686 === (7))){
var inst_39680 = (state_39685[(2)]);
var state_39685__$1 = state_39685;
var statearr_39691_42302 = state_39685__$1;
(statearr_39691_42302[(2)] = inst_39680);

(statearr_39691_42302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (20))){
var state_39685__$1 = state_39685;
var statearr_39692_42303 = state_39685__$1;
(statearr_39692_42303[(2)] = null);

(statearr_39692_42303[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (1))){
var state_39685__$1 = state_39685;
var statearr_39693_42304 = state_39685__$1;
(statearr_39693_42304[(2)] = null);

(statearr_39693_42304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (4))){
var inst_39648 = (state_39685[(7)]);
var inst_39648__$1 = (state_39685[(2)]);
var inst_39649 = (inst_39648__$1 == null);
var state_39685__$1 = (function (){var statearr_39694 = state_39685;
(statearr_39694[(7)] = inst_39648__$1);

return statearr_39694;
})();
if(cljs.core.truth_(inst_39649)){
var statearr_39695_42305 = state_39685__$1;
(statearr_39695_42305[(1)] = (5));

} else {
var statearr_39696_42306 = state_39685__$1;
(statearr_39696_42306[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (15))){
var inst_39662 = (state_39685[(8)]);
var state_39685__$1 = state_39685;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39685__$1,(18),to,inst_39662);
} else {
if((state_val_39686 === (21))){
var inst_39675 = (state_39685[(2)]);
var state_39685__$1 = state_39685;
var statearr_39698_42308 = state_39685__$1;
(statearr_39698_42308[(2)] = inst_39675);

(statearr_39698_42308[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (13))){
var inst_39677 = (state_39685[(2)]);
var state_39685__$1 = (function (){var statearr_39699 = state_39685;
(statearr_39699[(9)] = inst_39677);

return statearr_39699;
})();
var statearr_39701_42317 = state_39685__$1;
(statearr_39701_42317[(2)] = null);

(statearr_39701_42317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (6))){
var inst_39648 = (state_39685[(7)]);
var state_39685__$1 = state_39685;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39685__$1,(11),inst_39648);
} else {
if((state_val_39686 === (17))){
var inst_39670 = (state_39685[(2)]);
var state_39685__$1 = state_39685;
if(cljs.core.truth_(inst_39670)){
var statearr_39704_42323 = state_39685__$1;
(statearr_39704_42323[(1)] = (19));

} else {
var statearr_39705_42327 = state_39685__$1;
(statearr_39705_42327[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (3))){
var inst_39682 = (state_39685[(2)]);
var state_39685__$1 = state_39685;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39685__$1,inst_39682);
} else {
if((state_val_39686 === (12))){
var inst_39659 = (state_39685[(10)]);
var state_39685__$1 = state_39685;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39685__$1,(14),inst_39659);
} else {
if((state_val_39686 === (2))){
var state_39685__$1 = state_39685;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39685__$1,(4),results);
} else {
if((state_val_39686 === (19))){
var state_39685__$1 = state_39685;
var statearr_39709_42332 = state_39685__$1;
(statearr_39709_42332[(2)] = null);

(statearr_39709_42332[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (11))){
var inst_39659 = (state_39685[(2)]);
var state_39685__$1 = (function (){var statearr_39710 = state_39685;
(statearr_39710[(10)] = inst_39659);

return statearr_39710;
})();
var statearr_39711_42333 = state_39685__$1;
(statearr_39711_42333[(2)] = null);

(statearr_39711_42333[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (9))){
var state_39685__$1 = state_39685;
var statearr_39712_42338 = state_39685__$1;
(statearr_39712_42338[(2)] = null);

(statearr_39712_42338[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (5))){
var state_39685__$1 = state_39685;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39713_42339 = state_39685__$1;
(statearr_39713_42339[(1)] = (8));

} else {
var statearr_39714_42340 = state_39685__$1;
(statearr_39714_42340[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (14))){
var inst_39662 = (state_39685[(8)]);
var inst_39662__$1 = (state_39685[(2)]);
var inst_39663 = (inst_39662__$1 == null);
var inst_39664 = cljs.core.not(inst_39663);
var state_39685__$1 = (function (){var statearr_39716 = state_39685;
(statearr_39716[(8)] = inst_39662__$1);

return statearr_39716;
})();
if(inst_39664){
var statearr_39719_42346 = state_39685__$1;
(statearr_39719_42346[(1)] = (15));

} else {
var statearr_39720_42347 = state_39685__$1;
(statearr_39720_42347[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (16))){
var state_39685__$1 = state_39685;
var statearr_39725_42348 = state_39685__$1;
(statearr_39725_42348[(2)] = false);

(statearr_39725_42348[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (10))){
var inst_39656 = (state_39685[(2)]);
var state_39685__$1 = state_39685;
var statearr_39729_42349 = state_39685__$1;
(statearr_39729_42349[(2)] = inst_39656);

(statearr_39729_42349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (18))){
var inst_39667 = (state_39685[(2)]);
var state_39685__$1 = state_39685;
var statearr_39733_42350 = state_39685__$1;
(statearr_39733_42350[(2)] = inst_39667);

(statearr_39733_42350[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (8))){
var inst_39653 = cljs.core.async.close_BANG_(to);
var state_39685__$1 = state_39685;
var statearr_39736_42351 = state_39685__$1;
(statearr_39736_42351[(2)] = inst_39653);

(statearr_39736_42351[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25723__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25723__auto____0 = (function (){
var statearr_39737 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39737[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25723__auto__);

(statearr_39737[(1)] = (1));

return statearr_39737;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25723__auto____1 = (function (state_39685){
while(true){
var ret_value__25724__auto__ = (function (){try{while(true){
var result__25725__auto__ = switch__25722__auto__(state_39685);
if(cljs.core.keyword_identical_QMARK_(result__25725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25725__auto__;
}
break;
}
}catch (e39739){var ex__25726__auto__ = e39739;
var statearr_39740_42353 = state_39685;
(statearr_39740_42353[(2)] = ex__25726__auto__);


if(cljs.core.seq((state_39685[(4)]))){
var statearr_39743_42354 = state_39685;
(statearr_39743_42354[(1)] = cljs.core.first((state_39685[(4)])));

} else {
throw ex__25726__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42355 = state_39685;
state_39685 = G__42355;
continue;
} else {
return ret_value__25724__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25723__auto__ = function(state_39685){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25723__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25723__auto____1.call(this,state_39685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25723__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25723__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25723__auto__;
})()
})();
var state__25809__auto__ = (function (){var statearr_39748 = f__25808__auto__();
(statearr_39748[(6)] = c__25807__auto__);

return statearr_39748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25809__auto__);
}));

return c__25807__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__39753 = arguments.length;
switch (G__39753) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__39767 = arguments.length;
switch (G__39767) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__39775 = arguments.length;
switch (G__39775) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__25807__auto___42364 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25808__auto__ = (function (){var switch__25722__auto__ = (function (state_39808){
var state_val_39809 = (state_39808[(1)]);
if((state_val_39809 === (7))){
var inst_39804 = (state_39808[(2)]);
var state_39808__$1 = state_39808;
var statearr_39813_42365 = state_39808__$1;
(statearr_39813_42365[(2)] = inst_39804);

(statearr_39813_42365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39809 === (1))){
var state_39808__$1 = state_39808;
var statearr_39815_42366 = state_39808__$1;
(statearr_39815_42366[(2)] = null);

(statearr_39815_42366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39809 === (4))){
var inst_39782 = (state_39808[(7)]);
var inst_39782__$1 = (state_39808[(2)]);
var inst_39785 = (inst_39782__$1 == null);
var state_39808__$1 = (function (){var statearr_39816 = state_39808;
(statearr_39816[(7)] = inst_39782__$1);

return statearr_39816;
})();
if(cljs.core.truth_(inst_39785)){
var statearr_39817_42367 = state_39808__$1;
(statearr_39817_42367[(1)] = (5));

} else {
var statearr_39818_42368 = state_39808__$1;
(statearr_39818_42368[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39809 === (13))){
var state_39808__$1 = state_39808;
var statearr_39819_42369 = state_39808__$1;
(statearr_39819_42369[(2)] = null);

(statearr_39819_42369[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39809 === (6))){
var inst_39782 = (state_39808[(7)]);
var inst_39791 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_39782) : p.call(null,inst_39782));
var state_39808__$1 = state_39808;
if(cljs.core.truth_(inst_39791)){
var statearr_39823_42377 = state_39808__$1;
(statearr_39823_42377[(1)] = (9));

} else {
var statearr_39825_42378 = state_39808__$1;
(statearr_39825_42378[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39809 === (3))){
var inst_39806 = (state_39808[(2)]);
var state_39808__$1 = state_39808;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39808__$1,inst_39806);
} else {
if((state_val_39809 === (12))){
var state_39808__$1 = state_39808;
var statearr_39826_42382 = state_39808__$1;
(statearr_39826_42382[(2)] = null);

(statearr_39826_42382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39809 === (2))){
var state_39808__$1 = state_39808;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39808__$1,(4),ch);
} else {
if((state_val_39809 === (11))){
var inst_39782 = (state_39808[(7)]);
var inst_39795 = (state_39808[(2)]);
var state_39808__$1 = state_39808;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39808__$1,(8),inst_39795,inst_39782);
} else {
if((state_val_39809 === (9))){
var state_39808__$1 = state_39808;
var statearr_39831_42383 = state_39808__$1;
(statearr_39831_42383[(2)] = tc);

(statearr_39831_42383[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39809 === (5))){
var inst_39787 = cljs.core.async.close_BANG_(tc);
var inst_39789 = cljs.core.async.close_BANG_(fc);
var state_39808__$1 = (function (){var statearr_39835 = state_39808;
(statearr_39835[(8)] = inst_39787);

return statearr_39835;
})();
var statearr_39836_42387 = state_39808__$1;
(statearr_39836_42387[(2)] = inst_39789);

(statearr_39836_42387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39809 === (14))){
var inst_39802 = (state_39808[(2)]);
var state_39808__$1 = state_39808;
var statearr_39837_42388 = state_39808__$1;
(statearr_39837_42388[(2)] = inst_39802);

(statearr_39837_42388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39809 === (10))){
var state_39808__$1 = state_39808;
var statearr_39838_42392 = state_39808__$1;
(statearr_39838_42392[(2)] = fc);

(statearr_39838_42392[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39809 === (8))){
var inst_39797 = (state_39808[(2)]);
var state_39808__$1 = state_39808;
if(cljs.core.truth_(inst_39797)){
var statearr_39839_42393 = state_39808__$1;
(statearr_39839_42393[(1)] = (12));

} else {
var statearr_39840_42394 = state_39808__$1;
(statearr_39840_42394[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__25723__auto__ = null;
var cljs$core$async$state_machine__25723__auto____0 = (function (){
var statearr_39841 = [null,null,null,null,null,null,null,null,null];
(statearr_39841[(0)] = cljs$core$async$state_machine__25723__auto__);

(statearr_39841[(1)] = (1));

return statearr_39841;
});
var cljs$core$async$state_machine__25723__auto____1 = (function (state_39808){
while(true){
var ret_value__25724__auto__ = (function (){try{while(true){
var result__25725__auto__ = switch__25722__auto__(state_39808);
if(cljs.core.keyword_identical_QMARK_(result__25725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25725__auto__;
}
break;
}
}catch (e39842){var ex__25726__auto__ = e39842;
var statearr_39843_42398 = state_39808;
(statearr_39843_42398[(2)] = ex__25726__auto__);


if(cljs.core.seq((state_39808[(4)]))){
var statearr_39845_42399 = state_39808;
(statearr_39845_42399[(1)] = cljs.core.first((state_39808[(4)])));

} else {
throw ex__25726__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42400 = state_39808;
state_39808 = G__42400;
continue;
} else {
return ret_value__25724__auto__;
}
break;
}
});
cljs$core$async$state_machine__25723__auto__ = function(state_39808){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25723__auto____1.call(this,state_39808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25723__auto____0;
cljs$core$async$state_machine__25723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25723__auto____1;
return cljs$core$async$state_machine__25723__auto__;
})()
})();
var state__25809__auto__ = (function (){var statearr_39852 = f__25808__auto__();
(statearr_39852[(6)] = c__25807__auto___42364);

return statearr_39852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25809__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__25807__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25808__auto__ = (function (){var switch__25722__auto__ = (function (state_39877){
var state_val_39878 = (state_39877[(1)]);
if((state_val_39878 === (7))){
var inst_39873 = (state_39877[(2)]);
var state_39877__$1 = state_39877;
var statearr_39885_42408 = state_39877__$1;
(statearr_39885_42408[(2)] = inst_39873);

(statearr_39885_42408[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39878 === (1))){
var inst_39856 = init;
var inst_39857 = inst_39856;
var state_39877__$1 = (function (){var statearr_39886 = state_39877;
(statearr_39886[(7)] = inst_39857);

return statearr_39886;
})();
var statearr_39887_42409 = state_39877__$1;
(statearr_39887_42409[(2)] = null);

(statearr_39887_42409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39878 === (4))){
var inst_39860 = (state_39877[(8)]);
var inst_39860__$1 = (state_39877[(2)]);
var inst_39861 = (inst_39860__$1 == null);
var state_39877__$1 = (function (){var statearr_39888 = state_39877;
(statearr_39888[(8)] = inst_39860__$1);

return statearr_39888;
})();
if(cljs.core.truth_(inst_39861)){
var statearr_39889_42410 = state_39877__$1;
(statearr_39889_42410[(1)] = (5));

} else {
var statearr_39891_42411 = state_39877__$1;
(statearr_39891_42411[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39878 === (6))){
var inst_39860 = (state_39877[(8)]);
var inst_39864 = (state_39877[(9)]);
var inst_39857 = (state_39877[(7)]);
var inst_39864__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_39857,inst_39860) : f.call(null,inst_39857,inst_39860));
var inst_39865 = cljs.core.reduced_QMARK_(inst_39864__$1);
var state_39877__$1 = (function (){var statearr_39893 = state_39877;
(statearr_39893[(9)] = inst_39864__$1);

return statearr_39893;
})();
if(inst_39865){
var statearr_39894_42415 = state_39877__$1;
(statearr_39894_42415[(1)] = (8));

} else {
var statearr_39895_42416 = state_39877__$1;
(statearr_39895_42416[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39878 === (3))){
var inst_39875 = (state_39877[(2)]);
var state_39877__$1 = state_39877;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39877__$1,inst_39875);
} else {
if((state_val_39878 === (2))){
var state_39877__$1 = state_39877;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39877__$1,(4),ch);
} else {
if((state_val_39878 === (9))){
var inst_39864 = (state_39877[(9)]);
var inst_39857 = inst_39864;
var state_39877__$1 = (function (){var statearr_39897 = state_39877;
(statearr_39897[(7)] = inst_39857);

return statearr_39897;
})();
var statearr_39898_42428 = state_39877__$1;
(statearr_39898_42428[(2)] = null);

(statearr_39898_42428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39878 === (5))){
var inst_39857 = (state_39877[(7)]);
var state_39877__$1 = state_39877;
var statearr_39899_42436 = state_39877__$1;
(statearr_39899_42436[(2)] = inst_39857);

(statearr_39899_42436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39878 === (10))){
var inst_39871 = (state_39877[(2)]);
var state_39877__$1 = state_39877;
var statearr_39902_42437 = state_39877__$1;
(statearr_39902_42437[(2)] = inst_39871);

(statearr_39902_42437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39878 === (8))){
var inst_39864 = (state_39877[(9)]);
var inst_39867 = cljs.core.deref(inst_39864);
var state_39877__$1 = state_39877;
var statearr_39915_42448 = state_39877__$1;
(statearr_39915_42448[(2)] = inst_39867);

(statearr_39915_42448[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__25723__auto__ = null;
var cljs$core$async$reduce_$_state_machine__25723__auto____0 = (function (){
var statearr_39918 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39918[(0)] = cljs$core$async$reduce_$_state_machine__25723__auto__);

(statearr_39918[(1)] = (1));

return statearr_39918;
});
var cljs$core$async$reduce_$_state_machine__25723__auto____1 = (function (state_39877){
while(true){
var ret_value__25724__auto__ = (function (){try{while(true){
var result__25725__auto__ = switch__25722__auto__(state_39877);
if(cljs.core.keyword_identical_QMARK_(result__25725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25725__auto__;
}
break;
}
}catch (e39921){var ex__25726__auto__ = e39921;
var statearr_39922_42450 = state_39877;
(statearr_39922_42450[(2)] = ex__25726__auto__);


if(cljs.core.seq((state_39877[(4)]))){
var statearr_39923_42451 = state_39877;
(statearr_39923_42451[(1)] = cljs.core.first((state_39877[(4)])));

} else {
throw ex__25726__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42452 = state_39877;
state_39877 = G__42452;
continue;
} else {
return ret_value__25724__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__25723__auto__ = function(state_39877){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__25723__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__25723__auto____1.call(this,state_39877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__25723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__25723__auto____0;
cljs$core$async$reduce_$_state_machine__25723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__25723__auto____1;
return cljs$core$async$reduce_$_state_machine__25723__auto__;
})()
})();
var state__25809__auto__ = (function (){var statearr_39926 = f__25808__auto__();
(statearr_39926[(6)] = c__25807__auto__);

return statearr_39926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25809__auto__);
}));

return c__25807__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__25807__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25808__auto__ = (function (){var switch__25722__auto__ = (function (state_39946){
var state_val_39947 = (state_39946[(1)]);
if((state_val_39947 === (1))){
var inst_39940 = cljs.core.async.reduce(f__$1,init,ch);
var state_39946__$1 = state_39946;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39946__$1,(2),inst_39940);
} else {
if((state_val_39947 === (2))){
var inst_39942 = (state_39946[(2)]);
var inst_39944 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_39942) : f__$1.call(null,inst_39942));
var state_39946__$1 = state_39946;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39946__$1,inst_39944);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__25723__auto__ = null;
var cljs$core$async$transduce_$_state_machine__25723__auto____0 = (function (){
var statearr_39961 = [null,null,null,null,null,null,null];
(statearr_39961[(0)] = cljs$core$async$transduce_$_state_machine__25723__auto__);

(statearr_39961[(1)] = (1));

return statearr_39961;
});
var cljs$core$async$transduce_$_state_machine__25723__auto____1 = (function (state_39946){
while(true){
var ret_value__25724__auto__ = (function (){try{while(true){
var result__25725__auto__ = switch__25722__auto__(state_39946);
if(cljs.core.keyword_identical_QMARK_(result__25725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25725__auto__;
}
break;
}
}catch (e39962){var ex__25726__auto__ = e39962;
var statearr_39963_42460 = state_39946;
(statearr_39963_42460[(2)] = ex__25726__auto__);


if(cljs.core.seq((state_39946[(4)]))){
var statearr_39964_42461 = state_39946;
(statearr_39964_42461[(1)] = cljs.core.first((state_39946[(4)])));

} else {
throw ex__25726__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42462 = state_39946;
state_39946 = G__42462;
continue;
} else {
return ret_value__25724__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__25723__auto__ = function(state_39946){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__25723__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__25723__auto____1.call(this,state_39946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__25723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__25723__auto____0;
cljs$core$async$transduce_$_state_machine__25723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__25723__auto____1;
return cljs$core$async$transduce_$_state_machine__25723__auto__;
})()
})();
var state__25809__auto__ = (function (){var statearr_39966 = f__25808__auto__();
(statearr_39966[(6)] = c__25807__auto__);

return statearr_39966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25809__auto__);
}));

return c__25807__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__39969 = arguments.length;
switch (G__39969) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__25807__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25808__auto__ = (function (){var switch__25722__auto__ = (function (state_40007){
var state_val_40008 = (state_40007[(1)]);
if((state_val_40008 === (7))){
var inst_39989 = (state_40007[(2)]);
var state_40007__$1 = state_40007;
var statearr_40012_42466 = state_40007__$1;
(statearr_40012_42466[(2)] = inst_39989);

(statearr_40012_42466[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40008 === (1))){
var inst_39980 = cljs.core.seq(coll);
var inst_39981 = inst_39980;
var state_40007__$1 = (function (){var statearr_40013 = state_40007;
(statearr_40013[(7)] = inst_39981);

return statearr_40013;
})();
var statearr_40014_42467 = state_40007__$1;
(statearr_40014_42467[(2)] = null);

(statearr_40014_42467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40008 === (4))){
var inst_39981 = (state_40007[(7)]);
var inst_39987 = cljs.core.first(inst_39981);
var state_40007__$1 = state_40007;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40007__$1,(7),ch,inst_39987);
} else {
if((state_val_40008 === (13))){
var inst_40001 = (state_40007[(2)]);
var state_40007__$1 = state_40007;
var statearr_40015_42470 = state_40007__$1;
(statearr_40015_42470[(2)] = inst_40001);

(statearr_40015_42470[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40008 === (6))){
var inst_39992 = (state_40007[(2)]);
var state_40007__$1 = state_40007;
if(cljs.core.truth_(inst_39992)){
var statearr_40016_42471 = state_40007__$1;
(statearr_40016_42471[(1)] = (8));

} else {
var statearr_40017_42474 = state_40007__$1;
(statearr_40017_42474[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40008 === (3))){
var inst_40005 = (state_40007[(2)]);
var state_40007__$1 = state_40007;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40007__$1,inst_40005);
} else {
if((state_val_40008 === (12))){
var state_40007__$1 = state_40007;
var statearr_40018_42476 = state_40007__$1;
(statearr_40018_42476[(2)] = null);

(statearr_40018_42476[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40008 === (2))){
var inst_39981 = (state_40007[(7)]);
var state_40007__$1 = state_40007;
if(cljs.core.truth_(inst_39981)){
var statearr_40019_42480 = state_40007__$1;
(statearr_40019_42480[(1)] = (4));

} else {
var statearr_40020_42481 = state_40007__$1;
(statearr_40020_42481[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40008 === (11))){
var inst_39998 = cljs.core.async.close_BANG_(ch);
var state_40007__$1 = state_40007;
var statearr_40021_42483 = state_40007__$1;
(statearr_40021_42483[(2)] = inst_39998);

(statearr_40021_42483[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40008 === (9))){
var state_40007__$1 = state_40007;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40022_42484 = state_40007__$1;
(statearr_40022_42484[(1)] = (11));

} else {
var statearr_40023_42486 = state_40007__$1;
(statearr_40023_42486[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40008 === (5))){
var inst_39981 = (state_40007[(7)]);
var state_40007__$1 = state_40007;
var statearr_40024_42488 = state_40007__$1;
(statearr_40024_42488[(2)] = inst_39981);

(statearr_40024_42488[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40008 === (10))){
var inst_40003 = (state_40007[(2)]);
var state_40007__$1 = state_40007;
var statearr_40025_42490 = state_40007__$1;
(statearr_40025_42490[(2)] = inst_40003);

(statearr_40025_42490[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40008 === (8))){
var inst_39981 = (state_40007[(7)]);
var inst_39994 = cljs.core.next(inst_39981);
var inst_39981__$1 = inst_39994;
var state_40007__$1 = (function (){var statearr_40027 = state_40007;
(statearr_40027[(7)] = inst_39981__$1);

return statearr_40027;
})();
var statearr_40028_42492 = state_40007__$1;
(statearr_40028_42492[(2)] = null);

(statearr_40028_42492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__25723__auto__ = null;
var cljs$core$async$state_machine__25723__auto____0 = (function (){
var statearr_40030 = [null,null,null,null,null,null,null,null];
(statearr_40030[(0)] = cljs$core$async$state_machine__25723__auto__);

(statearr_40030[(1)] = (1));

return statearr_40030;
});
var cljs$core$async$state_machine__25723__auto____1 = (function (state_40007){
while(true){
var ret_value__25724__auto__ = (function (){try{while(true){
var result__25725__auto__ = switch__25722__auto__(state_40007);
if(cljs.core.keyword_identical_QMARK_(result__25725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25725__auto__;
}
break;
}
}catch (e40031){var ex__25726__auto__ = e40031;
var statearr_40032_42493 = state_40007;
(statearr_40032_42493[(2)] = ex__25726__auto__);


if(cljs.core.seq((state_40007[(4)]))){
var statearr_40033_42494 = state_40007;
(statearr_40033_42494[(1)] = cljs.core.first((state_40007[(4)])));

} else {
throw ex__25726__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42495 = state_40007;
state_40007 = G__42495;
continue;
} else {
return ret_value__25724__auto__;
}
break;
}
});
cljs$core$async$state_machine__25723__auto__ = function(state_40007){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25723__auto____1.call(this,state_40007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25723__auto____0;
cljs$core$async$state_machine__25723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25723__auto____1;
return cljs$core$async$state_machine__25723__auto__;
})()
})();
var state__25809__auto__ = (function (){var statearr_40034 = f__25808__auto__();
(statearr_40034[(6)] = c__25807__auto__);

return statearr_40034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25809__auto__);
}));

return c__25807__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__40036 = arguments.length;
switch (G__40036) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_42509 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_42509(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_42525 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_42525(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_42533 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_42533(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_42534 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_42534(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40063 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40063 = (function (ch,cs,meta40064){
this.ch = ch;
this.cs = cs;
this.meta40064 = meta40064;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40065,meta40064__$1){
var self__ = this;
var _40065__$1 = this;
return (new cljs.core.async.t_cljs$core$async40063(self__.ch,self__.cs,meta40064__$1));
}));

(cljs.core.async.t_cljs$core$async40063.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40065){
var self__ = this;
var _40065__$1 = this;
return self__.meta40064;
}));

(cljs.core.async.t_cljs$core$async40063.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40063.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async40063.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40063.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async40063.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async40063.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async40063.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta40064","meta40064",1336500143,null)], null);
}));

(cljs.core.async.t_cljs$core$async40063.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40063.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40063");

(cljs.core.async.t_cljs$core$async40063.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async40063");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40063.
 */
cljs.core.async.__GT_t_cljs$core$async40063 = (function cljs$core$async$mult_$___GT_t_cljs$core$async40063(ch__$1,cs__$1,meta40064){
return (new cljs.core.async.t_cljs$core$async40063(ch__$1,cs__$1,meta40064));
});

}

return (new cljs.core.async.t_cljs$core$async40063(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__25807__auto___42544 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25808__auto__ = (function (){var switch__25722__auto__ = (function (state_40220){
var state_val_40221 = (state_40220[(1)]);
if((state_val_40221 === (7))){
var inst_40216 = (state_40220[(2)]);
var state_40220__$1 = state_40220;
var statearr_40222_42545 = state_40220__$1;
(statearr_40222_42545[(2)] = inst_40216);

(statearr_40222_42545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40221 === (20))){
var inst_40113 = (state_40220[(7)]);
var inst_40131 = cljs.core.first(inst_40113);
var inst_40132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40131,(0),null);
var inst_40133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40131,(1),null);
var state_40220__$1 = (function (){var statearr_40224 = state_40220;
(statearr_40224[(8)] = inst_40132);

return statearr_40224;
})();
if(cljs.core.truth_(inst_40133)){
var statearr_40225_42552 = state_40220__$1;
(statearr_40225_42552[(1)] = (22));

} else {
var statearr_40226_42553 = state_40220__$1;
(statearr_40226_42553[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40221 === (27))){
var inst_40161 = (state_40220[(9)]);
var inst_40082 = (state_40220[(10)]);
var inst_40163 = (state_40220[(11)]);
var inst_40168 = (state_40220[(12)]);
var inst_40168__$1 = cljs.core._nth(inst_40161,inst_40163);
var inst_40169 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_40168__$1,inst_40082,done);
var state_40220__$1 = (function (){var statearr_40230 = state_40220;
(statearr_40230[(12)] = inst_40168__$1);

return statearr_40230;
})();
if(cljs.core.truth_(inst_40169)){
var statearr_40231_42554 = state_40220__$1;
(statearr_40231_42554[(1)] = (30));

} else {
var statearr_40232_42555 = state_40220__$1;
(statearr_40232_42555[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40221 === (1))){
var state_40220__$1 = state_40220;
var statearr_40233_42556 = state_40220__$1;
(statearr_40233_42556[(2)] = null);

(statearr_40233_42556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40221 === (24))){
var inst_40113 = (state_40220[(7)]);
var inst_40138 = (state_40220[(2)]);
var inst_40139 = cljs.core.next(inst_40113);
var inst_40091 = inst_40139;
var inst_40092 = null;
var inst_40093 = (0);
var inst_40094 = (0);
var state_40220__$1 = (function (){var statearr_40234 = state_40220;
(statearr_40234[(13)] = inst_40092);

(statearr_40234[(14)] = inst_40094);

(statearr_40234[(15)] = inst_40093);

(statearr_40234[(16)] = inst_40091);

(statearr_40234[(17)] = inst_40138);

return statearr_40234;
})();
var statearr_40235_42557 = state_40220__$1;
(statearr_40235_42557[(2)] = null);

(statearr_40235_42557[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40221 === (39))){
var state_40220__$1 = state_40220;
var statearr_40239_42558 = state_40220__$1;
(statearr_40239_42558[(2)] = null);

(statearr_40239_42558[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40221 === (4))){
var inst_40082 = (state_40220[(10)]);
var inst_40082__$1 = (state_40220[(2)]);
var inst_40083 = (inst_40082__$1 == null);
var state_40220__$1 = (function (){var statearr_40240 = state_40220;
(statearr_40240[(10)] = inst_40082__$1);

return statearr_40240;
})();
if(cljs.core.truth_(inst_40083)){
var statearr_40241_42560 = state_40220__$1;
(statearr_40241_42560[(1)] = (5));

} else {
var statearr_40242_42561 = state_40220__$1;
(statearr_40242_42561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40221 === (15))){
var inst_40092 = (state_40220[(13)]);
var inst_40094 = (state_40220[(14)]);
var inst_40093 = (state_40220[(15)]);
var inst_40091 = (state_40220[(16)]);
var inst_40109 = (state_40220[(2)]);
var inst_40110 = (inst_40094 + (1));
var tmp40236 = inst_40092;
var tmp40237 = inst_40093;
var tmp40238 = inst_40091;
var inst_40091__$1 = tmp40238;
var inst_40092__$1 = tmp40236;
var inst_40093__$1 = tmp40237;
var inst_40094__$1 = inst_40110;
var state_40220__$1 = (function (){var statearr_40243 = state_40220;
(statearr_40243[(13)] = inst_40092__$1);

(statearr_40243[(14)] = inst_40094__$1);

(statearr_40243[(18)] = inst_40109);

(statearr_40243[(15)] = inst_40093__$1);

(statearr_40243[(16)] = inst_40091__$1);

return statearr_40243;
})();
var statearr_40244_42569 = state_40220__$1;
(statearr_40244_42569[(2)] = null);

(statearr_40244_42569[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40221 === (21))){
var inst_40142 = (state_40220[(2)]);
var state_40220__$1 = state_40220;
var statearr_40249_42571 = state_40220__$1;
(statearr_40249_42571[(2)] = inst_40142);

(statearr_40249_42571[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40221 === (31))){
var inst_40168 = (state_40220[(12)]);
var inst_40173 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_40168);
var state_40220__$1 = state_40220;
var statearr_40250_42572 = state_40220__$1;
(statearr_40250_42572[(2)] = inst_40173);

(statearr_40250_42572[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40221 === (32))){
var inst_40161 = (state_40220[(9)]);
var inst_40162 = (state_40220[(19)]);
var inst_40160 = (state_40220[(20)]);
var inst_40163 = (state_40220[(11)]);
var inst_40175 = (state_40220[(2)]);
var inst_40176 = (inst_40163 + (1));
var tmp40245 = inst_40161;
var tmp40246 = inst_40162;
var tmp40247 = inst_40160;
var inst_40160__$1 = tmp40247;
var inst_40161__$1 = tmp40245;
var inst_40162__$1 = tmp40246;
var inst_40163__$1 = inst_40176;
var state_40220__$1 = (function (){var statearr_40254 = state_40220;
(statearr_40254[(9)] = inst_40161__$1);

(statearr_40254[(21)] = inst_40175);

(statearr_40254[(19)] = inst_40162__$1);

(statearr_40254[(20)] = inst_40160__$1);

(statearr_40254[(11)] = inst_40163__$1);

return statearr_40254;
})();
var statearr_40256_42573 = state_40220__$1;
(statearr_40256_42573[(2)] = null);

(statearr_40256_42573[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40221 === (40))){
var inst_40189 = (state_40220[(22)]);
var inst_40193 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_40189);
var state_40220__$1 = state_40220;
var statearr_40258_42574 = state_40220__$1;
(statearr_40258_42574[(2)] = inst_40193);

(statearr_40258_42574[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40221 === (33))){
var inst_40179 = (state_40220[(23)]);
var inst_40181 = cljs.core.chunked_seq_QMARK_(inst_40179);
var state_40220__$1 = state_40220;
if(inst_40181){
var statearr_40259_42581 = state_40220__$1;
(statearr_40259_42581[(1)] = (36));

} else {
var statearr_40260_42582 = state_40220__$1;
(statearr_40260_42582[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40221 === (13))){
var inst_40103 = (state_40220[(24)]);
var inst_40106 = cljs.core.async.close_BANG_(inst_40103);
var state_40220__$1 = state_40220;
var statearr_40264_42583 = state_40220__$1;
(statearr_40264_42583[(2)] = inst_40106);

(statearr_40264_42583[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40221 === (22))){
var inst_40132 = (state_40220[(8)]);
var inst_40135 = cljs.core.async.close_BANG_(inst_40132);
var state_40220__$1 = state_40220;
var statearr_40265_42584 = state_40220__$1;
(statearr_40265_42584[(2)] = inst_40135);

(statearr_40265_42584[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40221 === (36))){
var inst_40179 = (state_40220[(23)]);
var inst_40184 = cljs.core.chunk_first(inst_40179);
var inst_40185 = cljs.core.chunk_rest(inst_40179);
var inst_40186 = cljs.core.count(inst_40184);
var inst_40160 = inst_40185;
var inst_40161 = inst_40184;
var inst_40162 = inst_40186;
var inst_40163 = (0);
var state_40220__$1 = (function (){var statearr_40266 = state_40220;
(statearr_40266[(9)] = inst_40161);

(statearr_40266[(19)] = inst_40162);

(statearr_40266[(20)] = inst_40160);

(statearr_40266[(11)] = inst_40163);

return statearr_40266;
})();
var statearr_40271_42587 = state_40220__$1;
(statearr_40271_42587[(2)] = null);

(statearr_40271_42587[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40221 === (41))){
var inst_40179 = (state_40220[(23)]);
var inst_40195 = (state_40220[(2)]);
var inst_40196 = cljs.core.next(inst_40179);
var inst_40160 = inst_40196;
var inst_40161 = null;
var inst_40162 = (0);
var inst_40163 = (0);
var state_40220__$1 = (function (){var statearr_40275 = state_40220;
(statearr_40275[(9)] = inst_40161);

(statearr_40275[(25)] = inst_40195);

(statearr_40275[(19)] = inst_40162);

(statearr_40275[(20)] = inst_40160);

(statearr_40275[(11)] = inst_40163);

return statearr_40275;
})();
var statearr_40276_42592 = state_40220__$1;
(statearr_40276_42592[(2)] = null);

(statearr_40276_42592[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40221 === (43))){
var state_40220__$1 = state_40220;
var statearr_40277_42593 = state_40220__$1;
(statearr_40277_42593[(2)] = null);

(statearr_40277_42593[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40221 === (29))){
var inst_40204 = (state_40220[(2)]);
var state_40220__$1 = state_40220;
var statearr_40278_42594 = state_40220__$1;
(statearr_40278_42594[(2)] = inst_40204);

(statearr_40278_42594[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40221 === (44))){
var inst_40213 = (state_40220[(2)]);
var state_40220__$1 = (function (){var statearr_40279 = state_40220;
(statearr_40279[(26)] = inst_40213);

return statearr_40279;
})();
var statearr_40280_42595 = state_40220__$1;
(statearr_40280_42595[(2)] = null);

(statearr_40280_42595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40221 === (6))){
var inst_40152 = (state_40220[(27)]);
var inst_40151 = cljs.core.deref(cs);
var inst_40152__$1 = cljs.core.keys(inst_40151);
var inst_40153 = cljs.core.count(inst_40152__$1);
var inst_40154 = cljs.core.reset_BANG_(dctr,inst_40153);
var inst_40159 = cljs.core.seq(inst_40152__$1);
var inst_40160 = inst_40159;
var inst_40161 = null;
var inst_40162 = (0);
var inst_40163 = (0);
var state_40220__$1 = (function (){var statearr_40281 = state_40220;
(statearr_40281[(27)] = inst_40152__$1);

(statearr_40281[(9)] = inst_40161);

(statearr_40281[(28)] = inst_40154);

(statearr_40281[(19)] = inst_40162);

(statearr_40281[(20)] = inst_40160);

(statearr_40281[(11)] = inst_40163);

return statearr_40281;
})();
var statearr_40283_42597 = state_40220__$1;
(statearr_40283_42597[(2)] = null);

(statearr_40283_42597[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40221 === (28))){
var inst_40179 = (state_40220[(23)]);
var inst_40160 = (state_40220[(20)]);
var inst_40179__$1 = cljs.core.seq(inst_40160);
var state_40220__$1 = (function (){var statearr_40293 = state_40220;
(statearr_40293[(23)] = inst_40179__$1);

return statearr_40293;
})();
if(inst_40179__$1){
var statearr_40294_42600 = state_40220__$1;
(statearr_40294_42600[(1)] = (33));

} else {
var statearr_40296_42603 = state_40220__$1;
(statearr_40296_42603[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40221 === (25))){
var inst_40162 = (state_40220[(19)]);
var inst_40163 = (state_40220[(11)]);
var inst_40165 = (inst_40163 < inst_40162);
var inst_40166 = inst_40165;
var state_40220__$1 = state_40220;
if(cljs.core.truth_(inst_40166)){
var statearr_40297_42606 = state_40220__$1;
(statearr_40297_42606[(1)] = (27));

} else {
var statearr_40298_42608 = state_40220__$1;
(statearr_40298_42608[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40221 === (34))){
var state_40220__$1 = state_40220;
var statearr_40304_42610 = state_40220__$1;
(statearr_40304_42610[(2)] = null);

(statearr_40304_42610[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40221 === (17))){
var state_40220__$1 = state_40220;
var statearr_40309_42613 = state_40220__$1;
(statearr_40309_42613[(2)] = null);

(statearr_40309_42613[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40221 === (3))){
var inst_40218 = (state_40220[(2)]);
var state_40220__$1 = state_40220;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40220__$1,inst_40218);
} else {
if((state_val_40221 === (12))){
var inst_40147 = (state_40220[(2)]);
var state_40220__$1 = state_40220;
var statearr_40312_42618 = state_40220__$1;
(statearr_40312_42618[(2)] = inst_40147);

(statearr_40312_42618[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40221 === (2))){
var state_40220__$1 = state_40220;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40220__$1,(4),ch);
} else {
if((state_val_40221 === (23))){
var state_40220__$1 = state_40220;
var statearr_40313_42623 = state_40220__$1;
(statearr_40313_42623[(2)] = null);

(statearr_40313_42623[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40221 === (35))){
var inst_40202 = (state_40220[(2)]);
var state_40220__$1 = state_40220;
var statearr_40318_42625 = state_40220__$1;
(statearr_40318_42625[(2)] = inst_40202);

(statearr_40318_42625[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40221 === (19))){
var inst_40113 = (state_40220[(7)]);
var inst_40117 = cljs.core.chunk_first(inst_40113);
var inst_40118 = cljs.core.chunk_rest(inst_40113);
var inst_40119 = cljs.core.count(inst_40117);
var inst_40091 = inst_40118;
var inst_40092 = inst_40117;
var inst_40093 = inst_40119;
var inst_40094 = (0);
var state_40220__$1 = (function (){var statearr_40339 = state_40220;
(statearr_40339[(13)] = inst_40092);

(statearr_40339[(14)] = inst_40094);

(statearr_40339[(15)] = inst_40093);

(statearr_40339[(16)] = inst_40091);

return statearr_40339;
})();
var statearr_40340_42633 = state_40220__$1;
(statearr_40340_42633[(2)] = null);

(statearr_40340_42633[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40221 === (11))){
var inst_40113 = (state_40220[(7)]);
var inst_40091 = (state_40220[(16)]);
var inst_40113__$1 = cljs.core.seq(inst_40091);
var state_40220__$1 = (function (){var statearr_40341 = state_40220;
(statearr_40341[(7)] = inst_40113__$1);

return statearr_40341;
})();
if(inst_40113__$1){
var statearr_40344_42640 = state_40220__$1;
(statearr_40344_42640[(1)] = (16));

} else {
var statearr_40345_42641 = state_40220__$1;
(statearr_40345_42641[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40221 === (9))){
var inst_40149 = (state_40220[(2)]);
var state_40220__$1 = state_40220;
var statearr_40348_42642 = state_40220__$1;
(statearr_40348_42642[(2)] = inst_40149);

(statearr_40348_42642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40221 === (5))){
var inst_40089 = cljs.core.deref(cs);
var inst_40090 = cljs.core.seq(inst_40089);
var inst_40091 = inst_40090;
var inst_40092 = null;
var inst_40093 = (0);
var inst_40094 = (0);
var state_40220__$1 = (function (){var statearr_40350 = state_40220;
(statearr_40350[(13)] = inst_40092);

(statearr_40350[(14)] = inst_40094);

(statearr_40350[(15)] = inst_40093);

(statearr_40350[(16)] = inst_40091);

return statearr_40350;
})();
var statearr_40351_42643 = state_40220__$1;
(statearr_40351_42643[(2)] = null);

(statearr_40351_42643[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40221 === (14))){
var state_40220__$1 = state_40220;
var statearr_40355_42644 = state_40220__$1;
(statearr_40355_42644[(2)] = null);

(statearr_40355_42644[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40221 === (45))){
var inst_40210 = (state_40220[(2)]);
var state_40220__$1 = state_40220;
var statearr_40357_42645 = state_40220__$1;
(statearr_40357_42645[(2)] = inst_40210);

(statearr_40357_42645[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40221 === (26))){
var inst_40152 = (state_40220[(27)]);
var inst_40206 = (state_40220[(2)]);
var inst_40207 = cljs.core.seq(inst_40152);
var state_40220__$1 = (function (){var statearr_40358 = state_40220;
(statearr_40358[(29)] = inst_40206);

return statearr_40358;
})();
if(inst_40207){
var statearr_40360_42646 = state_40220__$1;
(statearr_40360_42646[(1)] = (42));

} else {
var statearr_40361_42647 = state_40220__$1;
(statearr_40361_42647[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40221 === (16))){
var inst_40113 = (state_40220[(7)]);
var inst_40115 = cljs.core.chunked_seq_QMARK_(inst_40113);
var state_40220__$1 = state_40220;
if(inst_40115){
var statearr_40364_42648 = state_40220__$1;
(statearr_40364_42648[(1)] = (19));

} else {
var statearr_40365_42649 = state_40220__$1;
(statearr_40365_42649[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40221 === (38))){
var inst_40199 = (state_40220[(2)]);
var state_40220__$1 = state_40220;
var statearr_40367_42650 = state_40220__$1;
(statearr_40367_42650[(2)] = inst_40199);

(statearr_40367_42650[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40221 === (30))){
var state_40220__$1 = state_40220;
var statearr_40368_42651 = state_40220__$1;
(statearr_40368_42651[(2)] = null);

(statearr_40368_42651[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40221 === (10))){
var inst_40092 = (state_40220[(13)]);
var inst_40094 = (state_40220[(14)]);
var inst_40102 = cljs.core._nth(inst_40092,inst_40094);
var inst_40103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40102,(0),null);
var inst_40104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40102,(1),null);
var state_40220__$1 = (function (){var statearr_40369 = state_40220;
(statearr_40369[(24)] = inst_40103);

return statearr_40369;
})();
if(cljs.core.truth_(inst_40104)){
var statearr_40370_42654 = state_40220__$1;
(statearr_40370_42654[(1)] = (13));

} else {
var statearr_40371_42655 = state_40220__$1;
(statearr_40371_42655[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40221 === (18))){
var inst_40145 = (state_40220[(2)]);
var state_40220__$1 = state_40220;
var statearr_40372_42656 = state_40220__$1;
(statearr_40372_42656[(2)] = inst_40145);

(statearr_40372_42656[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40221 === (42))){
var state_40220__$1 = state_40220;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40220__$1,(45),dchan);
} else {
if((state_val_40221 === (37))){
var inst_40189 = (state_40220[(22)]);
var inst_40179 = (state_40220[(23)]);
var inst_40082 = (state_40220[(10)]);
var inst_40189__$1 = cljs.core.first(inst_40179);
var inst_40190 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_40189__$1,inst_40082,done);
var state_40220__$1 = (function (){var statearr_40373 = state_40220;
(statearr_40373[(22)] = inst_40189__$1);

return statearr_40373;
})();
if(cljs.core.truth_(inst_40190)){
var statearr_40374_42659 = state_40220__$1;
(statearr_40374_42659[(1)] = (39));

} else {
var statearr_40375_42660 = state_40220__$1;
(statearr_40375_42660[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40221 === (8))){
var inst_40094 = (state_40220[(14)]);
var inst_40093 = (state_40220[(15)]);
var inst_40096 = (inst_40094 < inst_40093);
var inst_40097 = inst_40096;
var state_40220__$1 = state_40220;
if(cljs.core.truth_(inst_40097)){
var statearr_40376_42666 = state_40220__$1;
(statearr_40376_42666[(1)] = (10));

} else {
var statearr_40377_42668 = state_40220__$1;
(statearr_40377_42668[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__25723__auto__ = null;
var cljs$core$async$mult_$_state_machine__25723__auto____0 = (function (){
var statearr_40379 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40379[(0)] = cljs$core$async$mult_$_state_machine__25723__auto__);

(statearr_40379[(1)] = (1));

return statearr_40379;
});
var cljs$core$async$mult_$_state_machine__25723__auto____1 = (function (state_40220){
while(true){
var ret_value__25724__auto__ = (function (){try{while(true){
var result__25725__auto__ = switch__25722__auto__(state_40220);
if(cljs.core.keyword_identical_QMARK_(result__25725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25725__auto__;
}
break;
}
}catch (e40380){var ex__25726__auto__ = e40380;
var statearr_40382_42673 = state_40220;
(statearr_40382_42673[(2)] = ex__25726__auto__);


if(cljs.core.seq((state_40220[(4)]))){
var statearr_40384_42674 = state_40220;
(statearr_40384_42674[(1)] = cljs.core.first((state_40220[(4)])));

} else {
throw ex__25726__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42675 = state_40220;
state_40220 = G__42675;
continue;
} else {
return ret_value__25724__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__25723__auto__ = function(state_40220){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__25723__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__25723__auto____1.call(this,state_40220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__25723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__25723__auto____0;
cljs$core$async$mult_$_state_machine__25723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__25723__auto____1;
return cljs$core$async$mult_$_state_machine__25723__auto__;
})()
})();
var state__25809__auto__ = (function (){var statearr_40389 = f__25808__auto__();
(statearr_40389[(6)] = c__25807__auto___42544);

return statearr_40389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25809__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__40391 = arguments.length;
switch (G__40391) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_42682 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_42682(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_42685 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_42685(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_42690 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_42690(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_42692 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_42692(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_42697 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_42697(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42709 = arguments.length;
var i__4737__auto___42710 = (0);
while(true){
if((i__4737__auto___42710 < len__4736__auto___42709)){
args__4742__auto__.push((arguments[i__4737__auto___42710]));

var G__42711 = (i__4737__auto___42710 + (1));
i__4737__auto___42710 = G__42711;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__40441){
var map__40442 = p__40441;
var map__40442__$1 = (((((!((map__40442 == null))))?(((((map__40442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40442):map__40442);
var opts = map__40442__$1;
var statearr_40444_42727 = state;
(statearr_40444_42727[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_40445_42728 = state;
(statearr_40445_42728[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_40449_42729 = state;
(statearr_40449_42729[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq40434){
var G__40435 = cljs.core.first(seq40434);
var seq40434__$1 = cljs.core.next(seq40434);
var G__40436 = cljs.core.first(seq40434__$1);
var seq40434__$2 = cljs.core.next(seq40434__$1);
var G__40437 = cljs.core.first(seq40434__$2);
var seq40434__$3 = cljs.core.next(seq40434__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40435,G__40436,G__40437,seq40434__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40457 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40457 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta40458){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta40458 = meta40458;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40457.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40459,meta40458__$1){
var self__ = this;
var _40459__$1 = this;
return (new cljs.core.async.t_cljs$core$async40457(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta40458__$1));
}));

(cljs.core.async.t_cljs$core$async40457.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40459){
var self__ = this;
var _40459__$1 = this;
return self__.meta40458;
}));

(cljs.core.async.t_cljs$core$async40457.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40457.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async40457.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40457.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async40457.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async40457.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async40457.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async40457.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async40457.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta40458","meta40458",-2110606549,null)], null);
}));

(cljs.core.async.t_cljs$core$async40457.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40457.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40457");

(cljs.core.async.t_cljs$core$async40457.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async40457");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40457.
 */
cljs.core.async.__GT_t_cljs$core$async40457 = (function cljs$core$async$mix_$___GT_t_cljs$core$async40457(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta40458){
return (new cljs.core.async.t_cljs$core$async40457(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta40458));
});

}

return (new cljs.core.async.t_cljs$core$async40457(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25807__auto___42753 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25808__auto__ = (function (){var switch__25722__auto__ = (function (state_40572){
var state_val_40573 = (state_40572[(1)]);
if((state_val_40573 === (7))){
var inst_40486 = (state_40572[(2)]);
var state_40572__$1 = state_40572;
var statearr_40574_42758 = state_40572__$1;
(statearr_40574_42758[(2)] = inst_40486);

(statearr_40574_42758[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40573 === (20))){
var inst_40498 = (state_40572[(7)]);
var state_40572__$1 = state_40572;
var statearr_40575_42761 = state_40572__$1;
(statearr_40575_42761[(2)] = inst_40498);

(statearr_40575_42761[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40573 === (27))){
var state_40572__$1 = state_40572;
var statearr_40576_42765 = state_40572__$1;
(statearr_40576_42765[(2)] = null);

(statearr_40576_42765[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40573 === (1))){
var inst_40473 = (state_40572[(8)]);
var inst_40473__$1 = calc_state();
var inst_40475 = (inst_40473__$1 == null);
var inst_40476 = cljs.core.not(inst_40475);
var state_40572__$1 = (function (){var statearr_40577 = state_40572;
(statearr_40577[(8)] = inst_40473__$1);

return statearr_40577;
})();
if(inst_40476){
var statearr_40578_42768 = state_40572__$1;
(statearr_40578_42768[(1)] = (2));

} else {
var statearr_40579_42769 = state_40572__$1;
(statearr_40579_42769[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40573 === (24))){
var inst_40546 = (state_40572[(9)]);
var inst_40532 = (state_40572[(10)]);
var inst_40523 = (state_40572[(11)]);
var inst_40546__$1 = (inst_40523.cljs$core$IFn$_invoke$arity$1 ? inst_40523.cljs$core$IFn$_invoke$arity$1(inst_40532) : inst_40523.call(null,inst_40532));
var state_40572__$1 = (function (){var statearr_40580 = state_40572;
(statearr_40580[(9)] = inst_40546__$1);

return statearr_40580;
})();
if(cljs.core.truth_(inst_40546__$1)){
var statearr_40581_42773 = state_40572__$1;
(statearr_40581_42773[(1)] = (29));

} else {
var statearr_40582_42774 = state_40572__$1;
(statearr_40582_42774[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40573 === (4))){
var inst_40489 = (state_40572[(2)]);
var state_40572__$1 = state_40572;
if(cljs.core.truth_(inst_40489)){
var statearr_40586_42775 = state_40572__$1;
(statearr_40586_42775[(1)] = (8));

} else {
var statearr_40587_42776 = state_40572__$1;
(statearr_40587_42776[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40573 === (15))){
var inst_40517 = (state_40572[(2)]);
var state_40572__$1 = state_40572;
if(cljs.core.truth_(inst_40517)){
var statearr_40589_42778 = state_40572__$1;
(statearr_40589_42778[(1)] = (19));

} else {
var statearr_40590_42779 = state_40572__$1;
(statearr_40590_42779[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40573 === (21))){
var inst_40522 = (state_40572[(12)]);
var inst_40522__$1 = (state_40572[(2)]);
var inst_40523 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40522__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40524 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40522__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40525 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40522__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_40572__$1 = (function (){var statearr_40596 = state_40572;
(statearr_40596[(13)] = inst_40524);

(statearr_40596[(11)] = inst_40523);

(statearr_40596[(12)] = inst_40522__$1);

return statearr_40596;
})();
return cljs.core.async.ioc_alts_BANG_(state_40572__$1,(22),inst_40525);
} else {
if((state_val_40573 === (31))){
var inst_40554 = (state_40572[(2)]);
var state_40572__$1 = state_40572;
if(cljs.core.truth_(inst_40554)){
var statearr_40597_42780 = state_40572__$1;
(statearr_40597_42780[(1)] = (32));

} else {
var statearr_40598_42781 = state_40572__$1;
(statearr_40598_42781[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40573 === (32))){
var inst_40531 = (state_40572[(14)]);
var state_40572__$1 = state_40572;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40572__$1,(35),out,inst_40531);
} else {
if((state_val_40573 === (33))){
var inst_40522 = (state_40572[(12)]);
var inst_40498 = inst_40522;
var state_40572__$1 = (function (){var statearr_40599 = state_40572;
(statearr_40599[(7)] = inst_40498);

return statearr_40599;
})();
var statearr_40600_42782 = state_40572__$1;
(statearr_40600_42782[(2)] = null);

(statearr_40600_42782[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40573 === (13))){
var inst_40498 = (state_40572[(7)]);
var inst_40505 = inst_40498.cljs$lang$protocol_mask$partition0$;
var inst_40506 = (inst_40505 & (64));
var inst_40507 = inst_40498.cljs$core$ISeq$;
var inst_40508 = (cljs.core.PROTOCOL_SENTINEL === inst_40507);
var inst_40509 = ((inst_40506) || (inst_40508));
var state_40572__$1 = state_40572;
if(cljs.core.truth_(inst_40509)){
var statearr_40603_42785 = state_40572__$1;
(statearr_40603_42785[(1)] = (16));

} else {
var statearr_40604_42786 = state_40572__$1;
(statearr_40604_42786[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40573 === (22))){
var inst_40532 = (state_40572[(10)]);
var inst_40531 = (state_40572[(14)]);
var inst_40530 = (state_40572[(2)]);
var inst_40531__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40530,(0),null);
var inst_40532__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40530,(1),null);
var inst_40533 = (inst_40531__$1 == null);
var inst_40534 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_40532__$1,change);
var inst_40535 = ((inst_40533) || (inst_40534));
var state_40572__$1 = (function (){var statearr_40623 = state_40572;
(statearr_40623[(10)] = inst_40532__$1);

(statearr_40623[(14)] = inst_40531__$1);

return statearr_40623;
})();
if(cljs.core.truth_(inst_40535)){
var statearr_40625_42787 = state_40572__$1;
(statearr_40625_42787[(1)] = (23));

} else {
var statearr_40634_42788 = state_40572__$1;
(statearr_40634_42788[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40573 === (36))){
var inst_40522 = (state_40572[(12)]);
var inst_40498 = inst_40522;
var state_40572__$1 = (function (){var statearr_40639 = state_40572;
(statearr_40639[(7)] = inst_40498);

return statearr_40639;
})();
var statearr_40646_42789 = state_40572__$1;
(statearr_40646_42789[(2)] = null);

(statearr_40646_42789[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40573 === (29))){
var inst_40546 = (state_40572[(9)]);
var state_40572__$1 = state_40572;
var statearr_40656_42790 = state_40572__$1;
(statearr_40656_42790[(2)] = inst_40546);

(statearr_40656_42790[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40573 === (6))){
var state_40572__$1 = state_40572;
var statearr_40657_42791 = state_40572__$1;
(statearr_40657_42791[(2)] = false);

(statearr_40657_42791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40573 === (28))){
var inst_40542 = (state_40572[(2)]);
var inst_40543 = calc_state();
var inst_40498 = inst_40543;
var state_40572__$1 = (function (){var statearr_40664 = state_40572;
(statearr_40664[(7)] = inst_40498);

(statearr_40664[(15)] = inst_40542);

return statearr_40664;
})();
var statearr_40665_42792 = state_40572__$1;
(statearr_40665_42792[(2)] = null);

(statearr_40665_42792[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40573 === (25))){
var inst_40568 = (state_40572[(2)]);
var state_40572__$1 = state_40572;
var statearr_40672_42793 = state_40572__$1;
(statearr_40672_42793[(2)] = inst_40568);

(statearr_40672_42793[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40573 === (34))){
var inst_40566 = (state_40572[(2)]);
var state_40572__$1 = state_40572;
var statearr_40676_42797 = state_40572__$1;
(statearr_40676_42797[(2)] = inst_40566);

(statearr_40676_42797[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40573 === (17))){
var state_40572__$1 = state_40572;
var statearr_40677_42799 = state_40572__$1;
(statearr_40677_42799[(2)] = false);

(statearr_40677_42799[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40573 === (3))){
var state_40572__$1 = state_40572;
var statearr_40681_42800 = state_40572__$1;
(statearr_40681_42800[(2)] = false);

(statearr_40681_42800[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40573 === (12))){
var inst_40570 = (state_40572[(2)]);
var state_40572__$1 = state_40572;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40572__$1,inst_40570);
} else {
if((state_val_40573 === (2))){
var inst_40473 = (state_40572[(8)]);
var inst_40478 = inst_40473.cljs$lang$protocol_mask$partition0$;
var inst_40479 = (inst_40478 & (64));
var inst_40480 = inst_40473.cljs$core$ISeq$;
var inst_40481 = (cljs.core.PROTOCOL_SENTINEL === inst_40480);
var inst_40482 = ((inst_40479) || (inst_40481));
var state_40572__$1 = state_40572;
if(cljs.core.truth_(inst_40482)){
var statearr_40682_42802 = state_40572__$1;
(statearr_40682_42802[(1)] = (5));

} else {
var statearr_40683_42803 = state_40572__$1;
(statearr_40683_42803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40573 === (23))){
var inst_40531 = (state_40572[(14)]);
var inst_40537 = (inst_40531 == null);
var state_40572__$1 = state_40572;
if(cljs.core.truth_(inst_40537)){
var statearr_40684_42808 = state_40572__$1;
(statearr_40684_42808[(1)] = (26));

} else {
var statearr_40685_42809 = state_40572__$1;
(statearr_40685_42809[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40573 === (35))){
var inst_40557 = (state_40572[(2)]);
var state_40572__$1 = state_40572;
if(cljs.core.truth_(inst_40557)){
var statearr_40687_42814 = state_40572__$1;
(statearr_40687_42814[(1)] = (36));

} else {
var statearr_40688_42815 = state_40572__$1;
(statearr_40688_42815[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40573 === (19))){
var inst_40498 = (state_40572[(7)]);
var inst_40519 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_40498);
var state_40572__$1 = state_40572;
var statearr_40689_42820 = state_40572__$1;
(statearr_40689_42820[(2)] = inst_40519);

(statearr_40689_42820[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40573 === (11))){
var inst_40498 = (state_40572[(7)]);
var inst_40502 = (inst_40498 == null);
var inst_40503 = cljs.core.not(inst_40502);
var state_40572__$1 = state_40572;
if(inst_40503){
var statearr_40694_42821 = state_40572__$1;
(statearr_40694_42821[(1)] = (13));

} else {
var statearr_40696_42822 = state_40572__$1;
(statearr_40696_42822[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40573 === (9))){
var inst_40473 = (state_40572[(8)]);
var state_40572__$1 = state_40572;
var statearr_40697_42823 = state_40572__$1;
(statearr_40697_42823[(2)] = inst_40473);

(statearr_40697_42823[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40573 === (5))){
var state_40572__$1 = state_40572;
var statearr_40698_42828 = state_40572__$1;
(statearr_40698_42828[(2)] = true);

(statearr_40698_42828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40573 === (14))){
var state_40572__$1 = state_40572;
var statearr_40699_42829 = state_40572__$1;
(statearr_40699_42829[(2)] = false);

(statearr_40699_42829[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40573 === (26))){
var inst_40532 = (state_40572[(10)]);
var inst_40539 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_40532);
var state_40572__$1 = state_40572;
var statearr_40703_42832 = state_40572__$1;
(statearr_40703_42832[(2)] = inst_40539);

(statearr_40703_42832[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40573 === (16))){
var state_40572__$1 = state_40572;
var statearr_40704_42833 = state_40572__$1;
(statearr_40704_42833[(2)] = true);

(statearr_40704_42833[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40573 === (38))){
var inst_40562 = (state_40572[(2)]);
var state_40572__$1 = state_40572;
var statearr_40705_42836 = state_40572__$1;
(statearr_40705_42836[(2)] = inst_40562);

(statearr_40705_42836[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40573 === (30))){
var inst_40524 = (state_40572[(13)]);
var inst_40532 = (state_40572[(10)]);
var inst_40523 = (state_40572[(11)]);
var inst_40549 = cljs.core.empty_QMARK_(inst_40523);
var inst_40550 = (inst_40524.cljs$core$IFn$_invoke$arity$1 ? inst_40524.cljs$core$IFn$_invoke$arity$1(inst_40532) : inst_40524.call(null,inst_40532));
var inst_40551 = cljs.core.not(inst_40550);
var inst_40552 = ((inst_40549) && (inst_40551));
var state_40572__$1 = state_40572;
var statearr_40709_42838 = state_40572__$1;
(statearr_40709_42838[(2)] = inst_40552);

(statearr_40709_42838[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40573 === (10))){
var inst_40473 = (state_40572[(8)]);
var inst_40494 = (state_40572[(2)]);
var inst_40495 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40494,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40496 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40494,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40497 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40494,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_40498 = inst_40473;
var state_40572__$1 = (function (){var statearr_40711 = state_40572;
(statearr_40711[(16)] = inst_40495);

(statearr_40711[(17)] = inst_40496);

(statearr_40711[(7)] = inst_40498);

(statearr_40711[(18)] = inst_40497);

return statearr_40711;
})();
var statearr_40713_42846 = state_40572__$1;
(statearr_40713_42846[(2)] = null);

(statearr_40713_42846[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40573 === (18))){
var inst_40514 = (state_40572[(2)]);
var state_40572__$1 = state_40572;
var statearr_40716_42848 = state_40572__$1;
(statearr_40716_42848[(2)] = inst_40514);

(statearr_40716_42848[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40573 === (37))){
var state_40572__$1 = state_40572;
var statearr_40717_42850 = state_40572__$1;
(statearr_40717_42850[(2)] = null);

(statearr_40717_42850[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40573 === (8))){
var inst_40473 = (state_40572[(8)]);
var inst_40491 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_40473);
var state_40572__$1 = state_40572;
var statearr_40718_42851 = state_40572__$1;
(statearr_40718_42851[(2)] = inst_40491);

(statearr_40718_42851[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__25723__auto__ = null;
var cljs$core$async$mix_$_state_machine__25723__auto____0 = (function (){
var statearr_40719 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40719[(0)] = cljs$core$async$mix_$_state_machine__25723__auto__);

(statearr_40719[(1)] = (1));

return statearr_40719;
});
var cljs$core$async$mix_$_state_machine__25723__auto____1 = (function (state_40572){
while(true){
var ret_value__25724__auto__ = (function (){try{while(true){
var result__25725__auto__ = switch__25722__auto__(state_40572);
if(cljs.core.keyword_identical_QMARK_(result__25725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25725__auto__;
}
break;
}
}catch (e40720){var ex__25726__auto__ = e40720;
var statearr_40721_42876 = state_40572;
(statearr_40721_42876[(2)] = ex__25726__auto__);


if(cljs.core.seq((state_40572[(4)]))){
var statearr_40722_42877 = state_40572;
(statearr_40722_42877[(1)] = cljs.core.first((state_40572[(4)])));

} else {
throw ex__25726__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42878 = state_40572;
state_40572 = G__42878;
continue;
} else {
return ret_value__25724__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__25723__auto__ = function(state_40572){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__25723__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__25723__auto____1.call(this,state_40572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__25723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__25723__auto____0;
cljs$core$async$mix_$_state_machine__25723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__25723__auto____1;
return cljs$core$async$mix_$_state_machine__25723__auto__;
})()
})();
var state__25809__auto__ = (function (){var statearr_40723 = f__25808__auto__();
(statearr_40723[(6)] = c__25807__auto___42753);

return statearr_40723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25809__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_42879 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_42879(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_42893 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_42893(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_42900 = (function() {
var G__42902 = null;
var G__42902__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__42902__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__42902 = function(p,v){
switch(arguments.length){
case 1:
return G__42902__1.call(this,p);
case 2:
return G__42902__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__42902.cljs$core$IFn$_invoke$arity$1 = G__42902__1;
G__42902.cljs$core$IFn$_invoke$arity$2 = G__42902__2;
return G__42902;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__40735 = arguments.length;
switch (G__40735) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_42900(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_42900(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__40743 = arguments.length;
switch (G__40743) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__40741_SHARP_){
if(cljs.core.truth_((p1__40741_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__40741_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__40741_SHARP_.call(null,topic)))){
return p1__40741_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40741_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40749 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40749 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta40750){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta40750 = meta40750;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40749.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40751,meta40750__$1){
var self__ = this;
var _40751__$1 = this;
return (new cljs.core.async.t_cljs$core$async40749(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta40750__$1));
}));

(cljs.core.async.t_cljs$core$async40749.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40751){
var self__ = this;
var _40751__$1 = this;
return self__.meta40750;
}));

(cljs.core.async.t_cljs$core$async40749.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40749.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async40749.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40749.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async40749.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async40749.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async40749.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async40749.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta40750","meta40750",1181596992,null)], null);
}));

(cljs.core.async.t_cljs$core$async40749.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40749.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40749");

(cljs.core.async.t_cljs$core$async40749.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async40749");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40749.
 */
cljs.core.async.__GT_t_cljs$core$async40749 = (function cljs$core$async$__GT_t_cljs$core$async40749(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40750){
return (new cljs.core.async.t_cljs$core$async40749(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40750));
});

}

return (new cljs.core.async.t_cljs$core$async40749(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25807__auto___42933 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25808__auto__ = (function (){var switch__25722__auto__ = (function (state_40877){
var state_val_40879 = (state_40877[(1)]);
if((state_val_40879 === (7))){
var inst_40860 = (state_40877[(2)]);
var state_40877__$1 = state_40877;
var statearr_40900_42934 = state_40877__$1;
(statearr_40900_42934[(2)] = inst_40860);

(statearr_40900_42934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40879 === (20))){
var state_40877__$1 = state_40877;
var statearr_40901_42935 = state_40877__$1;
(statearr_40901_42935[(2)] = null);

(statearr_40901_42935[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40879 === (1))){
var state_40877__$1 = state_40877;
var statearr_40904_42937 = state_40877__$1;
(statearr_40904_42937[(2)] = null);

(statearr_40904_42937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40879 === (24))){
var inst_40843 = (state_40877[(7)]);
var inst_40852 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_40843);
var state_40877__$1 = state_40877;
var statearr_40915_42938 = state_40877__$1;
(statearr_40915_42938[(2)] = inst_40852);

(statearr_40915_42938[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40879 === (4))){
var inst_40790 = (state_40877[(8)]);
var inst_40790__$1 = (state_40877[(2)]);
var inst_40793 = (inst_40790__$1 == null);
var state_40877__$1 = (function (){var statearr_40925 = state_40877;
(statearr_40925[(8)] = inst_40790__$1);

return statearr_40925;
})();
if(cljs.core.truth_(inst_40793)){
var statearr_40931_42942 = state_40877__$1;
(statearr_40931_42942[(1)] = (5));

} else {
var statearr_40932_42943 = state_40877__$1;
(statearr_40932_42943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40879 === (15))){
var inst_40836 = (state_40877[(2)]);
var state_40877__$1 = state_40877;
var statearr_40936_42944 = state_40877__$1;
(statearr_40936_42944[(2)] = inst_40836);

(statearr_40936_42944[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40879 === (21))){
var inst_40857 = (state_40877[(2)]);
var state_40877__$1 = (function (){var statearr_40942 = state_40877;
(statearr_40942[(9)] = inst_40857);

return statearr_40942;
})();
var statearr_40944_42945 = state_40877__$1;
(statearr_40944_42945[(2)] = null);

(statearr_40944_42945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40879 === (13))){
var inst_40818 = (state_40877[(10)]);
var inst_40820 = cljs.core.chunked_seq_QMARK_(inst_40818);
var state_40877__$1 = state_40877;
if(inst_40820){
var statearr_40958_42946 = state_40877__$1;
(statearr_40958_42946[(1)] = (16));

} else {
var statearr_40964_42947 = state_40877__$1;
(statearr_40964_42947[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40879 === (22))){
var inst_40849 = (state_40877[(2)]);
var state_40877__$1 = state_40877;
if(cljs.core.truth_(inst_40849)){
var statearr_40967_42948 = state_40877__$1;
(statearr_40967_42948[(1)] = (23));

} else {
var statearr_40969_42949 = state_40877__$1;
(statearr_40969_42949[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40879 === (6))){
var inst_40790 = (state_40877[(8)]);
var inst_40843 = (state_40877[(7)]);
var inst_40845 = (state_40877[(11)]);
var inst_40843__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_40790) : topic_fn.call(null,inst_40790));
var inst_40844 = cljs.core.deref(mults);
var inst_40845__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40844,inst_40843__$1);
var state_40877__$1 = (function (){var statearr_40970 = state_40877;
(statearr_40970[(7)] = inst_40843__$1);

(statearr_40970[(11)] = inst_40845__$1);

return statearr_40970;
})();
if(cljs.core.truth_(inst_40845__$1)){
var statearr_40971_42951 = state_40877__$1;
(statearr_40971_42951[(1)] = (19));

} else {
var statearr_40972_42952 = state_40877__$1;
(statearr_40972_42952[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40879 === (25))){
var inst_40854 = (state_40877[(2)]);
var state_40877__$1 = state_40877;
var statearr_40973_42953 = state_40877__$1;
(statearr_40973_42953[(2)] = inst_40854);

(statearr_40973_42953[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40879 === (17))){
var inst_40818 = (state_40877[(10)]);
var inst_40827 = cljs.core.first(inst_40818);
var inst_40828 = cljs.core.async.muxch_STAR_(inst_40827);
var inst_40829 = cljs.core.async.close_BANG_(inst_40828);
var inst_40830 = cljs.core.next(inst_40818);
var inst_40802 = inst_40830;
var inst_40803 = null;
var inst_40804 = (0);
var inst_40805 = (0);
var state_40877__$1 = (function (){var statearr_40975 = state_40877;
(statearr_40975[(12)] = inst_40829);

(statearr_40975[(13)] = inst_40802);

(statearr_40975[(14)] = inst_40805);

(statearr_40975[(15)] = inst_40804);

(statearr_40975[(16)] = inst_40803);

return statearr_40975;
})();
var statearr_40984_42955 = state_40877__$1;
(statearr_40984_42955[(2)] = null);

(statearr_40984_42955[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40879 === (3))){
var inst_40863 = (state_40877[(2)]);
var state_40877__$1 = state_40877;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40877__$1,inst_40863);
} else {
if((state_val_40879 === (12))){
var inst_40838 = (state_40877[(2)]);
var state_40877__$1 = state_40877;
var statearr_40987_42956 = state_40877__$1;
(statearr_40987_42956[(2)] = inst_40838);

(statearr_40987_42956[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40879 === (2))){
var state_40877__$1 = state_40877;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40877__$1,(4),ch);
} else {
if((state_val_40879 === (23))){
var state_40877__$1 = state_40877;
var statearr_40992_42957 = state_40877__$1;
(statearr_40992_42957[(2)] = null);

(statearr_40992_42957[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40879 === (19))){
var inst_40790 = (state_40877[(8)]);
var inst_40845 = (state_40877[(11)]);
var inst_40847 = cljs.core.async.muxch_STAR_(inst_40845);
var state_40877__$1 = state_40877;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40877__$1,(22),inst_40847,inst_40790);
} else {
if((state_val_40879 === (11))){
var inst_40802 = (state_40877[(13)]);
var inst_40818 = (state_40877[(10)]);
var inst_40818__$1 = cljs.core.seq(inst_40802);
var state_40877__$1 = (function (){var statearr_40995 = state_40877;
(statearr_40995[(10)] = inst_40818__$1);

return statearr_40995;
})();
if(inst_40818__$1){
var statearr_40996_42958 = state_40877__$1;
(statearr_40996_42958[(1)] = (13));

} else {
var statearr_40997_42965 = state_40877__$1;
(statearr_40997_42965[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40879 === (9))){
var inst_40840 = (state_40877[(2)]);
var state_40877__$1 = state_40877;
var statearr_41004_42966 = state_40877__$1;
(statearr_41004_42966[(2)] = inst_40840);

(statearr_41004_42966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40879 === (5))){
var inst_40799 = cljs.core.deref(mults);
var inst_40800 = cljs.core.vals(inst_40799);
var inst_40801 = cljs.core.seq(inst_40800);
var inst_40802 = inst_40801;
var inst_40803 = null;
var inst_40804 = (0);
var inst_40805 = (0);
var state_40877__$1 = (function (){var statearr_41014 = state_40877;
(statearr_41014[(13)] = inst_40802);

(statearr_41014[(14)] = inst_40805);

(statearr_41014[(15)] = inst_40804);

(statearr_41014[(16)] = inst_40803);

return statearr_41014;
})();
var statearr_41022_42972 = state_40877__$1;
(statearr_41022_42972[(2)] = null);

(statearr_41022_42972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40879 === (14))){
var state_40877__$1 = state_40877;
var statearr_41030_42973 = state_40877__$1;
(statearr_41030_42973[(2)] = null);

(statearr_41030_42973[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40879 === (16))){
var inst_40818 = (state_40877[(10)]);
var inst_40822 = cljs.core.chunk_first(inst_40818);
var inst_40823 = cljs.core.chunk_rest(inst_40818);
var inst_40824 = cljs.core.count(inst_40822);
var inst_40802 = inst_40823;
var inst_40803 = inst_40822;
var inst_40804 = inst_40824;
var inst_40805 = (0);
var state_40877__$1 = (function (){var statearr_41041 = state_40877;
(statearr_41041[(13)] = inst_40802);

(statearr_41041[(14)] = inst_40805);

(statearr_41041[(15)] = inst_40804);

(statearr_41041[(16)] = inst_40803);

return statearr_41041;
})();
var statearr_41042_42976 = state_40877__$1;
(statearr_41042_42976[(2)] = null);

(statearr_41042_42976[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40879 === (10))){
var inst_40802 = (state_40877[(13)]);
var inst_40805 = (state_40877[(14)]);
var inst_40804 = (state_40877[(15)]);
var inst_40803 = (state_40877[(16)]);
var inst_40810 = cljs.core._nth(inst_40803,inst_40805);
var inst_40811 = cljs.core.async.muxch_STAR_(inst_40810);
var inst_40812 = cljs.core.async.close_BANG_(inst_40811);
var inst_40813 = (inst_40805 + (1));
var tmp41027 = inst_40802;
var tmp41028 = inst_40804;
var tmp41029 = inst_40803;
var inst_40802__$1 = tmp41027;
var inst_40803__$1 = tmp41029;
var inst_40804__$1 = tmp41028;
var inst_40805__$1 = inst_40813;
var state_40877__$1 = (function (){var statearr_41046 = state_40877;
(statearr_41046[(17)] = inst_40812);

(statearr_41046[(13)] = inst_40802__$1);

(statearr_41046[(14)] = inst_40805__$1);

(statearr_41046[(15)] = inst_40804__$1);

(statearr_41046[(16)] = inst_40803__$1);

return statearr_41046;
})();
var statearr_41048_42978 = state_40877__$1;
(statearr_41048_42978[(2)] = null);

(statearr_41048_42978[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40879 === (18))){
var inst_40833 = (state_40877[(2)]);
var state_40877__$1 = state_40877;
var statearr_41050_42979 = state_40877__$1;
(statearr_41050_42979[(2)] = inst_40833);

(statearr_41050_42979[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40879 === (8))){
var inst_40805 = (state_40877[(14)]);
var inst_40804 = (state_40877[(15)]);
var inst_40807 = (inst_40805 < inst_40804);
var inst_40808 = inst_40807;
var state_40877__$1 = state_40877;
if(cljs.core.truth_(inst_40808)){
var statearr_41064_42980 = state_40877__$1;
(statearr_41064_42980[(1)] = (10));

} else {
var statearr_41067_42981 = state_40877__$1;
(statearr_41067_42981[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__25723__auto__ = null;
var cljs$core$async$state_machine__25723__auto____0 = (function (){
var statearr_41069 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41069[(0)] = cljs$core$async$state_machine__25723__auto__);

(statearr_41069[(1)] = (1));

return statearr_41069;
});
var cljs$core$async$state_machine__25723__auto____1 = (function (state_40877){
while(true){
var ret_value__25724__auto__ = (function (){try{while(true){
var result__25725__auto__ = switch__25722__auto__(state_40877);
if(cljs.core.keyword_identical_QMARK_(result__25725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25725__auto__;
}
break;
}
}catch (e41071){var ex__25726__auto__ = e41071;
var statearr_41072_42986 = state_40877;
(statearr_41072_42986[(2)] = ex__25726__auto__);


if(cljs.core.seq((state_40877[(4)]))){
var statearr_41074_42987 = state_40877;
(statearr_41074_42987[(1)] = cljs.core.first((state_40877[(4)])));

} else {
throw ex__25726__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42989 = state_40877;
state_40877 = G__42989;
continue;
} else {
return ret_value__25724__auto__;
}
break;
}
});
cljs$core$async$state_machine__25723__auto__ = function(state_40877){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25723__auto____1.call(this,state_40877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25723__auto____0;
cljs$core$async$state_machine__25723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25723__auto____1;
return cljs$core$async$state_machine__25723__auto__;
})()
})();
var state__25809__auto__ = (function (){var statearr_41077 = f__25808__auto__();
(statearr_41077[(6)] = c__25807__auto___42933);

return statearr_41077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25809__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__41084 = arguments.length;
switch (G__41084) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__41091 = arguments.length;
switch (G__41091) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__41101 = arguments.length;
switch (G__41101) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__25807__auto___43020 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25808__auto__ = (function (){var switch__25722__auto__ = (function (state_41165){
var state_val_41166 = (state_41165[(1)]);
if((state_val_41166 === (7))){
var state_41165__$1 = state_41165;
var statearr_41167_43024 = state_41165__$1;
(statearr_41167_43024[(2)] = null);

(statearr_41167_43024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41166 === (1))){
var state_41165__$1 = state_41165;
var statearr_41170_43025 = state_41165__$1;
(statearr_41170_43025[(2)] = null);

(statearr_41170_43025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41166 === (4))){
var inst_41114 = (state_41165[(7)]);
var inst_41119 = (state_41165[(8)]);
var inst_41121 = (inst_41119 < inst_41114);
var state_41165__$1 = state_41165;
if(cljs.core.truth_(inst_41121)){
var statearr_41172_43026 = state_41165__$1;
(statearr_41172_43026[(1)] = (6));

} else {
var statearr_41173_43027 = state_41165__$1;
(statearr_41173_43027[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41166 === (15))){
var inst_41151 = (state_41165[(9)]);
var inst_41156 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_41151);
var state_41165__$1 = state_41165;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41165__$1,(17),out,inst_41156);
} else {
if((state_val_41166 === (13))){
var inst_41151 = (state_41165[(9)]);
var inst_41151__$1 = (state_41165[(2)]);
var inst_41152 = cljs.core.some(cljs.core.nil_QMARK_,inst_41151__$1);
var state_41165__$1 = (function (){var statearr_41176 = state_41165;
(statearr_41176[(9)] = inst_41151__$1);

return statearr_41176;
})();
if(cljs.core.truth_(inst_41152)){
var statearr_41177_43033 = state_41165__$1;
(statearr_41177_43033[(1)] = (14));

} else {
var statearr_41178_43034 = state_41165__$1;
(statearr_41178_43034[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41166 === (6))){
var state_41165__$1 = state_41165;
var statearr_41179_43039 = state_41165__$1;
(statearr_41179_43039[(2)] = null);

(statearr_41179_43039[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41166 === (17))){
var inst_41158 = (state_41165[(2)]);
var state_41165__$1 = (function (){var statearr_41186 = state_41165;
(statearr_41186[(10)] = inst_41158);

return statearr_41186;
})();
var statearr_41187_43040 = state_41165__$1;
(statearr_41187_43040[(2)] = null);

(statearr_41187_43040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41166 === (3))){
var inst_41163 = (state_41165[(2)]);
var state_41165__$1 = state_41165;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41165__$1,inst_41163);
} else {
if((state_val_41166 === (12))){
var _ = (function (){var statearr_41193 = state_41165;
(statearr_41193[(4)] = cljs.core.rest((state_41165[(4)])));

return statearr_41193;
})();
var state_41165__$1 = state_41165;
var ex41184 = (state_41165__$1[(2)]);
var statearr_41194_43044 = state_41165__$1;
(statearr_41194_43044[(5)] = ex41184);


if((ex41184 instanceof Object)){
var statearr_41195_43045 = state_41165__$1;
(statearr_41195_43045[(1)] = (11));

(statearr_41195_43045[(5)] = null);

} else {
throw ex41184;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41166 === (2))){
var inst_41112 = cljs.core.reset_BANG_(dctr,cnt);
var inst_41114 = cnt;
var inst_41119 = (0);
var state_41165__$1 = (function (){var statearr_41196 = state_41165;
(statearr_41196[(7)] = inst_41114);

(statearr_41196[(8)] = inst_41119);

(statearr_41196[(11)] = inst_41112);

return statearr_41196;
})();
var statearr_41197_43050 = state_41165__$1;
(statearr_41197_43050[(2)] = null);

(statearr_41197_43050[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41166 === (11))){
var inst_41123 = (state_41165[(2)]);
var inst_41124 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_41165__$1 = (function (){var statearr_41202 = state_41165;
(statearr_41202[(12)] = inst_41123);

return statearr_41202;
})();
var statearr_41203_43051 = state_41165__$1;
(statearr_41203_43051[(2)] = inst_41124);

(statearr_41203_43051[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41166 === (9))){
var inst_41119 = (state_41165[(8)]);
var _ = (function (){var statearr_41208 = state_41165;
(statearr_41208[(4)] = cljs.core.cons((12),(state_41165[(4)])));

return statearr_41208;
})();
var inst_41130 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_41119) : chs__$1.call(null,inst_41119));
var inst_41131 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_41119) : done.call(null,inst_41119));
var inst_41132 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_41130,inst_41131);
var ___$1 = (function (){var statearr_41209 = state_41165;
(statearr_41209[(4)] = cljs.core.rest((state_41165[(4)])));

return statearr_41209;
})();
var state_41165__$1 = state_41165;
var statearr_41210_43054 = state_41165__$1;
(statearr_41210_43054[(2)] = inst_41132);

(statearr_41210_43054[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41166 === (5))){
var inst_41149 = (state_41165[(2)]);
var state_41165__$1 = (function (){var statearr_41215 = state_41165;
(statearr_41215[(13)] = inst_41149);

return statearr_41215;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41165__$1,(13),dchan);
} else {
if((state_val_41166 === (14))){
var inst_41154 = cljs.core.async.close_BANG_(out);
var state_41165__$1 = state_41165;
var statearr_41216_43056 = state_41165__$1;
(statearr_41216_43056[(2)] = inst_41154);

(statearr_41216_43056[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41166 === (16))){
var inst_41161 = (state_41165[(2)]);
var state_41165__$1 = state_41165;
var statearr_41217_43057 = state_41165__$1;
(statearr_41217_43057[(2)] = inst_41161);

(statearr_41217_43057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41166 === (10))){
var inst_41119 = (state_41165[(8)]);
var inst_41135 = (state_41165[(2)]);
var inst_41137 = (inst_41119 + (1));
var inst_41119__$1 = inst_41137;
var state_41165__$1 = (function (){var statearr_41218 = state_41165;
(statearr_41218[(8)] = inst_41119__$1);

(statearr_41218[(14)] = inst_41135);

return statearr_41218;
})();
var statearr_41219_43058 = state_41165__$1;
(statearr_41219_43058[(2)] = null);

(statearr_41219_43058[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41166 === (8))){
var inst_41144 = (state_41165[(2)]);
var state_41165__$1 = state_41165;
var statearr_41220_43059 = state_41165__$1;
(statearr_41220_43059[(2)] = inst_41144);

(statearr_41220_43059[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__25723__auto__ = null;
var cljs$core$async$state_machine__25723__auto____0 = (function (){
var statearr_41226 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41226[(0)] = cljs$core$async$state_machine__25723__auto__);

(statearr_41226[(1)] = (1));

return statearr_41226;
});
var cljs$core$async$state_machine__25723__auto____1 = (function (state_41165){
while(true){
var ret_value__25724__auto__ = (function (){try{while(true){
var result__25725__auto__ = switch__25722__auto__(state_41165);
if(cljs.core.keyword_identical_QMARK_(result__25725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25725__auto__;
}
break;
}
}catch (e41228){var ex__25726__auto__ = e41228;
var statearr_41229_43075 = state_41165;
(statearr_41229_43075[(2)] = ex__25726__auto__);


if(cljs.core.seq((state_41165[(4)]))){
var statearr_41230_43076 = state_41165;
(statearr_41230_43076[(1)] = cljs.core.first((state_41165[(4)])));

} else {
throw ex__25726__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43077 = state_41165;
state_41165 = G__43077;
continue;
} else {
return ret_value__25724__auto__;
}
break;
}
});
cljs$core$async$state_machine__25723__auto__ = function(state_41165){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25723__auto____1.call(this,state_41165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25723__auto____0;
cljs$core$async$state_machine__25723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25723__auto____1;
return cljs$core$async$state_machine__25723__auto__;
})()
})();
var state__25809__auto__ = (function (){var statearr_41231 = f__25808__auto__();
(statearr_41231[(6)] = c__25807__auto___43020);

return statearr_41231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25809__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__41236 = arguments.length;
switch (G__41236) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__25807__auto___43082 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25808__auto__ = (function (){var switch__25722__auto__ = (function (state_41278){
var state_val_41279 = (state_41278[(1)]);
if((state_val_41279 === (7))){
var inst_41256 = (state_41278[(7)]);
var inst_41258 = (state_41278[(8)]);
var inst_41256__$1 = (state_41278[(2)]);
var inst_41258__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41256__$1,(0),null);
var inst_41259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41256__$1,(1),null);
var inst_41260 = (inst_41258__$1 == null);
var state_41278__$1 = (function (){var statearr_41280 = state_41278;
(statearr_41280[(7)] = inst_41256__$1);

(statearr_41280[(9)] = inst_41259);

(statearr_41280[(8)] = inst_41258__$1);

return statearr_41280;
})();
if(cljs.core.truth_(inst_41260)){
var statearr_41281_43088 = state_41278__$1;
(statearr_41281_43088[(1)] = (8));

} else {
var statearr_41282_43089 = state_41278__$1;
(statearr_41282_43089[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41279 === (1))){
var inst_41238 = cljs.core.vec(chs);
var inst_41239 = inst_41238;
var state_41278__$1 = (function (){var statearr_41283 = state_41278;
(statearr_41283[(10)] = inst_41239);

return statearr_41283;
})();
var statearr_41284_43090 = state_41278__$1;
(statearr_41284_43090[(2)] = null);

(statearr_41284_43090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41279 === (4))){
var inst_41239 = (state_41278[(10)]);
var state_41278__$1 = state_41278;
return cljs.core.async.ioc_alts_BANG_(state_41278__$1,(7),inst_41239);
} else {
if((state_val_41279 === (6))){
var inst_41274 = (state_41278[(2)]);
var state_41278__$1 = state_41278;
var statearr_41286_43091 = state_41278__$1;
(statearr_41286_43091[(2)] = inst_41274);

(statearr_41286_43091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41279 === (3))){
var inst_41276 = (state_41278[(2)]);
var state_41278__$1 = state_41278;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41278__$1,inst_41276);
} else {
if((state_val_41279 === (2))){
var inst_41239 = (state_41278[(10)]);
var inst_41243 = cljs.core.count(inst_41239);
var inst_41244 = (inst_41243 > (0));
var state_41278__$1 = state_41278;
if(cljs.core.truth_(inst_41244)){
var statearr_41288_43092 = state_41278__$1;
(statearr_41288_43092[(1)] = (4));

} else {
var statearr_41289_43093 = state_41278__$1;
(statearr_41289_43093[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41279 === (11))){
var inst_41239 = (state_41278[(10)]);
var inst_41267 = (state_41278[(2)]);
var tmp41287 = inst_41239;
var inst_41239__$1 = tmp41287;
var state_41278__$1 = (function (){var statearr_41295 = state_41278;
(statearr_41295[(10)] = inst_41239__$1);

(statearr_41295[(11)] = inst_41267);

return statearr_41295;
})();
var statearr_41296_43096 = state_41278__$1;
(statearr_41296_43096[(2)] = null);

(statearr_41296_43096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41279 === (9))){
var inst_41258 = (state_41278[(8)]);
var state_41278__$1 = state_41278;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41278__$1,(11),out,inst_41258);
} else {
if((state_val_41279 === (5))){
var inst_41272 = cljs.core.async.close_BANG_(out);
var state_41278__$1 = state_41278;
var statearr_41301_43097 = state_41278__$1;
(statearr_41301_43097[(2)] = inst_41272);

(statearr_41301_43097[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41279 === (10))){
var inst_41270 = (state_41278[(2)]);
var state_41278__$1 = state_41278;
var statearr_41302_43101 = state_41278__$1;
(statearr_41302_43101[(2)] = inst_41270);

(statearr_41302_43101[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41279 === (8))){
var inst_41256 = (state_41278[(7)]);
var inst_41239 = (state_41278[(10)]);
var inst_41259 = (state_41278[(9)]);
var inst_41258 = (state_41278[(8)]);
var inst_41262 = (function (){var cs = inst_41239;
var vec__41252 = inst_41256;
var v = inst_41258;
var c = inst_41259;
return (function (p1__41232_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__41232_SHARP_);
});
})();
var inst_41263 = cljs.core.filterv(inst_41262,inst_41239);
var inst_41239__$1 = inst_41263;
var state_41278__$1 = (function (){var statearr_41303 = state_41278;
(statearr_41303[(10)] = inst_41239__$1);

return statearr_41303;
})();
var statearr_41304_43103 = state_41278__$1;
(statearr_41304_43103[(2)] = null);

(statearr_41304_43103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__25723__auto__ = null;
var cljs$core$async$state_machine__25723__auto____0 = (function (){
var statearr_41309 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41309[(0)] = cljs$core$async$state_machine__25723__auto__);

(statearr_41309[(1)] = (1));

return statearr_41309;
});
var cljs$core$async$state_machine__25723__auto____1 = (function (state_41278){
while(true){
var ret_value__25724__auto__ = (function (){try{while(true){
var result__25725__auto__ = switch__25722__auto__(state_41278);
if(cljs.core.keyword_identical_QMARK_(result__25725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25725__auto__;
}
break;
}
}catch (e41311){var ex__25726__auto__ = e41311;
var statearr_41312_43105 = state_41278;
(statearr_41312_43105[(2)] = ex__25726__auto__);


if(cljs.core.seq((state_41278[(4)]))){
var statearr_41313_43106 = state_41278;
(statearr_41313_43106[(1)] = cljs.core.first((state_41278[(4)])));

} else {
throw ex__25726__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43110 = state_41278;
state_41278 = G__43110;
continue;
} else {
return ret_value__25724__auto__;
}
break;
}
});
cljs$core$async$state_machine__25723__auto__ = function(state_41278){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25723__auto____1.call(this,state_41278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25723__auto____0;
cljs$core$async$state_machine__25723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25723__auto____1;
return cljs$core$async$state_machine__25723__auto__;
})()
})();
var state__25809__auto__ = (function (){var statearr_41315 = f__25808__auto__();
(statearr_41315[(6)] = c__25807__auto___43082);

return statearr_41315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25809__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__41325 = arguments.length;
switch (G__41325) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__25807__auto___43124 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25808__auto__ = (function (){var switch__25722__auto__ = (function (state_41364){
var state_val_41365 = (state_41364[(1)]);
if((state_val_41365 === (7))){
var inst_41341 = (state_41364[(7)]);
var inst_41341__$1 = (state_41364[(2)]);
var inst_41342 = (inst_41341__$1 == null);
var inst_41343 = cljs.core.not(inst_41342);
var state_41364__$1 = (function (){var statearr_41370 = state_41364;
(statearr_41370[(7)] = inst_41341__$1);

return statearr_41370;
})();
if(inst_41343){
var statearr_41371_43130 = state_41364__$1;
(statearr_41371_43130[(1)] = (8));

} else {
var statearr_41372_43131 = state_41364__$1;
(statearr_41372_43131[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41365 === (1))){
var inst_41336 = (0);
var state_41364__$1 = (function (){var statearr_41373 = state_41364;
(statearr_41373[(8)] = inst_41336);

return statearr_41373;
})();
var statearr_41374_43132 = state_41364__$1;
(statearr_41374_43132[(2)] = null);

(statearr_41374_43132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41365 === (4))){
var state_41364__$1 = state_41364;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41364__$1,(7),ch);
} else {
if((state_val_41365 === (6))){
var inst_41357 = (state_41364[(2)]);
var state_41364__$1 = state_41364;
var statearr_41375_43134 = state_41364__$1;
(statearr_41375_43134[(2)] = inst_41357);

(statearr_41375_43134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41365 === (3))){
var inst_41361 = (state_41364[(2)]);
var inst_41362 = cljs.core.async.close_BANG_(out);
var state_41364__$1 = (function (){var statearr_41376 = state_41364;
(statearr_41376[(9)] = inst_41361);

return statearr_41376;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_41364__$1,inst_41362);
} else {
if((state_val_41365 === (2))){
var inst_41336 = (state_41364[(8)]);
var inst_41338 = (inst_41336 < n);
var state_41364__$1 = state_41364;
if(cljs.core.truth_(inst_41338)){
var statearr_41378_43135 = state_41364__$1;
(statearr_41378_43135[(1)] = (4));

} else {
var statearr_41379_43136 = state_41364__$1;
(statearr_41379_43136[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41365 === (11))){
var inst_41336 = (state_41364[(8)]);
var inst_41347 = (state_41364[(2)]);
var inst_41348 = (inst_41336 + (1));
var inst_41336__$1 = inst_41348;
var state_41364__$1 = (function (){var statearr_41382 = state_41364;
(statearr_41382[(8)] = inst_41336__$1);

(statearr_41382[(10)] = inst_41347);

return statearr_41382;
})();
var statearr_41384_43141 = state_41364__$1;
(statearr_41384_43141[(2)] = null);

(statearr_41384_43141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41365 === (9))){
var state_41364__$1 = state_41364;
var statearr_41386_43146 = state_41364__$1;
(statearr_41386_43146[(2)] = null);

(statearr_41386_43146[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41365 === (5))){
var state_41364__$1 = state_41364;
var statearr_41387_43173 = state_41364__$1;
(statearr_41387_43173[(2)] = null);

(statearr_41387_43173[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41365 === (10))){
var inst_41352 = (state_41364[(2)]);
var state_41364__$1 = state_41364;
var statearr_41388_43174 = state_41364__$1;
(statearr_41388_43174[(2)] = inst_41352);

(statearr_41388_43174[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41365 === (8))){
var inst_41341 = (state_41364[(7)]);
var state_41364__$1 = state_41364;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41364__$1,(11),out,inst_41341);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__25723__auto__ = null;
var cljs$core$async$state_machine__25723__auto____0 = (function (){
var statearr_41394 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41394[(0)] = cljs$core$async$state_machine__25723__auto__);

(statearr_41394[(1)] = (1));

return statearr_41394;
});
var cljs$core$async$state_machine__25723__auto____1 = (function (state_41364){
while(true){
var ret_value__25724__auto__ = (function (){try{while(true){
var result__25725__auto__ = switch__25722__auto__(state_41364);
if(cljs.core.keyword_identical_QMARK_(result__25725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25725__auto__;
}
break;
}
}catch (e41395){var ex__25726__auto__ = e41395;
var statearr_41396_43176 = state_41364;
(statearr_41396_43176[(2)] = ex__25726__auto__);


if(cljs.core.seq((state_41364[(4)]))){
var statearr_41399_43177 = state_41364;
(statearr_41399_43177[(1)] = cljs.core.first((state_41364[(4)])));

} else {
throw ex__25726__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43181 = state_41364;
state_41364 = G__43181;
continue;
} else {
return ret_value__25724__auto__;
}
break;
}
});
cljs$core$async$state_machine__25723__auto__ = function(state_41364){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25723__auto____1.call(this,state_41364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25723__auto____0;
cljs$core$async$state_machine__25723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25723__auto____1;
return cljs$core$async$state_machine__25723__auto__;
})()
})();
var state__25809__auto__ = (function (){var statearr_41406 = f__25808__auto__();
(statearr_41406[(6)] = c__25807__auto___43124);

return statearr_41406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25809__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41410 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41410 = (function (f,ch,meta41411){
this.f = f;
this.ch = ch;
this.meta41411 = meta41411;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41410.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41412,meta41411__$1){
var self__ = this;
var _41412__$1 = this;
return (new cljs.core.async.t_cljs$core$async41410(self__.f,self__.ch,meta41411__$1));
}));

(cljs.core.async.t_cljs$core$async41410.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41412){
var self__ = this;
var _41412__$1 = this;
return self__.meta41411;
}));

(cljs.core.async.t_cljs$core$async41410.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41410.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async41410.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async41410.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41410.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41427 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41427 = (function (f,ch,meta41411,_,fn1,meta41428){
this.f = f;
this.ch = ch;
this.meta41411 = meta41411;
this._ = _;
this.fn1 = fn1;
this.meta41428 = meta41428;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41429,meta41428__$1){
var self__ = this;
var _41429__$1 = this;
return (new cljs.core.async.t_cljs$core$async41427(self__.f,self__.ch,self__.meta41411,self__._,self__.fn1,meta41428__$1));
}));

(cljs.core.async.t_cljs$core$async41427.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41429){
var self__ = this;
var _41429__$1 = this;
return self__.meta41428;
}));

(cljs.core.async.t_cljs$core$async41427.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41427.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async41427.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async41427.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__41409_SHARP_){
var G__41437 = (((p1__41409_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__41409_SHARP_) : self__.f.call(null,p1__41409_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__41437) : f1.call(null,G__41437));
});
}));

(cljs.core.async.t_cljs$core$async41427.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41411","meta41411",-1211838857,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async41410","cljs.core.async/t_cljs$core$async41410",978636465,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta41428","meta41428",-1136939211,null)], null);
}));

(cljs.core.async.t_cljs$core$async41427.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41427.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41427");

(cljs.core.async.t_cljs$core$async41427.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async41427");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41427.
 */
cljs.core.async.__GT_t_cljs$core$async41427 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async41427(f__$1,ch__$1,meta41411__$1,___$2,fn1__$1,meta41428){
return (new cljs.core.async.t_cljs$core$async41427(f__$1,ch__$1,meta41411__$1,___$2,fn1__$1,meta41428));
});

}

return (new cljs.core.async.t_cljs$core$async41427(self__.f,self__.ch,self__.meta41411,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__41454 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__41454) : self__.f.call(null,G__41454));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async41410.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41410.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async41410.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41411","meta41411",-1211838857,null)], null);
}));

(cljs.core.async.t_cljs$core$async41410.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41410.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41410");

(cljs.core.async.t_cljs$core$async41410.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async41410");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41410.
 */
cljs.core.async.__GT_t_cljs$core$async41410 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async41410(f__$1,ch__$1,meta41411){
return (new cljs.core.async.t_cljs$core$async41410(f__$1,ch__$1,meta41411));
});

}

return (new cljs.core.async.t_cljs$core$async41410(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41463 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41463 = (function (f,ch,meta41464){
this.f = f;
this.ch = ch;
this.meta41464 = meta41464;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41465,meta41464__$1){
var self__ = this;
var _41465__$1 = this;
return (new cljs.core.async.t_cljs$core$async41463(self__.f,self__.ch,meta41464__$1));
}));

(cljs.core.async.t_cljs$core$async41463.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41465){
var self__ = this;
var _41465__$1 = this;
return self__.meta41464;
}));

(cljs.core.async.t_cljs$core$async41463.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41463.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async41463.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41463.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async41463.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41463.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async41463.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41464","meta41464",-932868252,null)], null);
}));

(cljs.core.async.t_cljs$core$async41463.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41463.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41463");

(cljs.core.async.t_cljs$core$async41463.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async41463");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41463.
 */
cljs.core.async.__GT_t_cljs$core$async41463 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async41463(f__$1,ch__$1,meta41464){
return (new cljs.core.async.t_cljs$core$async41463(f__$1,ch__$1,meta41464));
});

}

return (new cljs.core.async.t_cljs$core$async41463(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41478 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41478 = (function (p,ch,meta41479){
this.p = p;
this.ch = ch;
this.meta41479 = meta41479;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41480,meta41479__$1){
var self__ = this;
var _41480__$1 = this;
return (new cljs.core.async.t_cljs$core$async41478(self__.p,self__.ch,meta41479__$1));
}));

(cljs.core.async.t_cljs$core$async41478.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41480){
var self__ = this;
var _41480__$1 = this;
return self__.meta41479;
}));

(cljs.core.async.t_cljs$core$async41478.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41478.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async41478.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async41478.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41478.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async41478.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41478.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async41478.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41479","meta41479",116484685,null)], null);
}));

(cljs.core.async.t_cljs$core$async41478.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41478.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41478");

(cljs.core.async.t_cljs$core$async41478.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async41478");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41478.
 */
cljs.core.async.__GT_t_cljs$core$async41478 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async41478(p__$1,ch__$1,meta41479){
return (new cljs.core.async.t_cljs$core$async41478(p__$1,ch__$1,meta41479));
});

}

return (new cljs.core.async.t_cljs$core$async41478(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__41508 = arguments.length;
switch (G__41508) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__25807__auto___43214 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25808__auto__ = (function (){var switch__25722__auto__ = (function (state_41531){
var state_val_41532 = (state_41531[(1)]);
if((state_val_41532 === (7))){
var inst_41527 = (state_41531[(2)]);
var state_41531__$1 = state_41531;
var statearr_41533_43215 = state_41531__$1;
(statearr_41533_43215[(2)] = inst_41527);

(statearr_41533_43215[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41532 === (1))){
var state_41531__$1 = state_41531;
var statearr_41534_43217 = state_41531__$1;
(statearr_41534_43217[(2)] = null);

(statearr_41534_43217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41532 === (4))){
var inst_41512 = (state_41531[(7)]);
var inst_41512__$1 = (state_41531[(2)]);
var inst_41514 = (inst_41512__$1 == null);
var state_41531__$1 = (function (){var statearr_41536 = state_41531;
(statearr_41536[(7)] = inst_41512__$1);

return statearr_41536;
})();
if(cljs.core.truth_(inst_41514)){
var statearr_41537_43219 = state_41531__$1;
(statearr_41537_43219[(1)] = (5));

} else {
var statearr_41538_43222 = state_41531__$1;
(statearr_41538_43222[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41532 === (6))){
var inst_41512 = (state_41531[(7)]);
var inst_41518 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_41512) : p.call(null,inst_41512));
var state_41531__$1 = state_41531;
if(cljs.core.truth_(inst_41518)){
var statearr_41540_43226 = state_41531__$1;
(statearr_41540_43226[(1)] = (8));

} else {
var statearr_41541_43231 = state_41531__$1;
(statearr_41541_43231[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41532 === (3))){
var inst_41529 = (state_41531[(2)]);
var state_41531__$1 = state_41531;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41531__$1,inst_41529);
} else {
if((state_val_41532 === (2))){
var state_41531__$1 = state_41531;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41531__$1,(4),ch);
} else {
if((state_val_41532 === (11))){
var inst_41521 = (state_41531[(2)]);
var state_41531__$1 = state_41531;
var statearr_41542_43234 = state_41531__$1;
(statearr_41542_43234[(2)] = inst_41521);

(statearr_41542_43234[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41532 === (9))){
var state_41531__$1 = state_41531;
var statearr_41543_43235 = state_41531__$1;
(statearr_41543_43235[(2)] = null);

(statearr_41543_43235[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41532 === (5))){
var inst_41516 = cljs.core.async.close_BANG_(out);
var state_41531__$1 = state_41531;
var statearr_41544_43237 = state_41531__$1;
(statearr_41544_43237[(2)] = inst_41516);

(statearr_41544_43237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41532 === (10))){
var inst_41524 = (state_41531[(2)]);
var state_41531__$1 = (function (){var statearr_41547 = state_41531;
(statearr_41547[(8)] = inst_41524);

return statearr_41547;
})();
var statearr_41548_43243 = state_41531__$1;
(statearr_41548_43243[(2)] = null);

(statearr_41548_43243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41532 === (8))){
var inst_41512 = (state_41531[(7)]);
var state_41531__$1 = state_41531;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41531__$1,(11),out,inst_41512);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__25723__auto__ = null;
var cljs$core$async$state_machine__25723__auto____0 = (function (){
var statearr_41550 = [null,null,null,null,null,null,null,null,null];
(statearr_41550[(0)] = cljs$core$async$state_machine__25723__auto__);

(statearr_41550[(1)] = (1));

return statearr_41550;
});
var cljs$core$async$state_machine__25723__auto____1 = (function (state_41531){
while(true){
var ret_value__25724__auto__ = (function (){try{while(true){
var result__25725__auto__ = switch__25722__auto__(state_41531);
if(cljs.core.keyword_identical_QMARK_(result__25725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25725__auto__;
}
break;
}
}catch (e41551){var ex__25726__auto__ = e41551;
var statearr_41552_43248 = state_41531;
(statearr_41552_43248[(2)] = ex__25726__auto__);


if(cljs.core.seq((state_41531[(4)]))){
var statearr_41553_43249 = state_41531;
(statearr_41553_43249[(1)] = cljs.core.first((state_41531[(4)])));

} else {
throw ex__25726__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43250 = state_41531;
state_41531 = G__43250;
continue;
} else {
return ret_value__25724__auto__;
}
break;
}
});
cljs$core$async$state_machine__25723__auto__ = function(state_41531){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25723__auto____1.call(this,state_41531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25723__auto____0;
cljs$core$async$state_machine__25723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25723__auto____1;
return cljs$core$async$state_machine__25723__auto__;
})()
})();
var state__25809__auto__ = (function (){var statearr_41556 = f__25808__auto__();
(statearr_41556[(6)] = c__25807__auto___43214);

return statearr_41556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25809__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__41559 = arguments.length;
switch (G__41559) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__25807__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25808__auto__ = (function (){var switch__25722__auto__ = (function (state_41641){
var state_val_41642 = (state_41641[(1)]);
if((state_val_41642 === (7))){
var inst_41637 = (state_41641[(2)]);
var state_41641__$1 = state_41641;
var statearr_41643_43252 = state_41641__$1;
(statearr_41643_43252[(2)] = inst_41637);

(statearr_41643_43252[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41642 === (20))){
var inst_41604 = (state_41641[(7)]);
var inst_41617 = (state_41641[(2)]);
var inst_41618 = cljs.core.next(inst_41604);
var inst_41590 = inst_41618;
var inst_41591 = null;
var inst_41592 = (0);
var inst_41593 = (0);
var state_41641__$1 = (function (){var statearr_41644 = state_41641;
(statearr_41644[(8)] = inst_41617);

(statearr_41644[(9)] = inst_41590);

(statearr_41644[(10)] = inst_41592);

(statearr_41644[(11)] = inst_41591);

(statearr_41644[(12)] = inst_41593);

return statearr_41644;
})();
var statearr_41645_43253 = state_41641__$1;
(statearr_41645_43253[(2)] = null);

(statearr_41645_43253[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41642 === (1))){
var state_41641__$1 = state_41641;
var statearr_41648_43254 = state_41641__$1;
(statearr_41648_43254[(2)] = null);

(statearr_41648_43254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41642 === (4))){
var inst_41578 = (state_41641[(13)]);
var inst_41578__$1 = (state_41641[(2)]);
var inst_41580 = (inst_41578__$1 == null);
var state_41641__$1 = (function (){var statearr_41649 = state_41641;
(statearr_41649[(13)] = inst_41578__$1);

return statearr_41649;
})();
if(cljs.core.truth_(inst_41580)){
var statearr_41650_43256 = state_41641__$1;
(statearr_41650_43256[(1)] = (5));

} else {
var statearr_41651_43257 = state_41641__$1;
(statearr_41651_43257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41642 === (15))){
var state_41641__$1 = state_41641;
var statearr_41657_43258 = state_41641__$1;
(statearr_41657_43258[(2)] = null);

(statearr_41657_43258[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41642 === (21))){
var state_41641__$1 = state_41641;
var statearr_41662_43259 = state_41641__$1;
(statearr_41662_43259[(2)] = null);

(statearr_41662_43259[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41642 === (13))){
var inst_41590 = (state_41641[(9)]);
var inst_41592 = (state_41641[(10)]);
var inst_41591 = (state_41641[(11)]);
var inst_41593 = (state_41641[(12)]);
var inst_41600 = (state_41641[(2)]);
var inst_41601 = (inst_41593 + (1));
var tmp41654 = inst_41590;
var tmp41655 = inst_41592;
var tmp41656 = inst_41591;
var inst_41590__$1 = tmp41654;
var inst_41591__$1 = tmp41656;
var inst_41592__$1 = tmp41655;
var inst_41593__$1 = inst_41601;
var state_41641__$1 = (function (){var statearr_41664 = state_41641;
(statearr_41664[(9)] = inst_41590__$1);

(statearr_41664[(10)] = inst_41592__$1);

(statearr_41664[(14)] = inst_41600);

(statearr_41664[(11)] = inst_41591__$1);

(statearr_41664[(12)] = inst_41593__$1);

return statearr_41664;
})();
var statearr_41669_43262 = state_41641__$1;
(statearr_41669_43262[(2)] = null);

(statearr_41669_43262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41642 === (22))){
var state_41641__$1 = state_41641;
var statearr_41670_43263 = state_41641__$1;
(statearr_41670_43263[(2)] = null);

(statearr_41670_43263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41642 === (6))){
var inst_41578 = (state_41641[(13)]);
var inst_41588 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_41578) : f.call(null,inst_41578));
var inst_41589 = cljs.core.seq(inst_41588);
var inst_41590 = inst_41589;
var inst_41591 = null;
var inst_41592 = (0);
var inst_41593 = (0);
var state_41641__$1 = (function (){var statearr_41671 = state_41641;
(statearr_41671[(9)] = inst_41590);

(statearr_41671[(10)] = inst_41592);

(statearr_41671[(11)] = inst_41591);

(statearr_41671[(12)] = inst_41593);

return statearr_41671;
})();
var statearr_41672_43266 = state_41641__$1;
(statearr_41672_43266[(2)] = null);

(statearr_41672_43266[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41642 === (17))){
var inst_41604 = (state_41641[(7)]);
var inst_41609 = cljs.core.chunk_first(inst_41604);
var inst_41610 = cljs.core.chunk_rest(inst_41604);
var inst_41611 = cljs.core.count(inst_41609);
var inst_41590 = inst_41610;
var inst_41591 = inst_41609;
var inst_41592 = inst_41611;
var inst_41593 = (0);
var state_41641__$1 = (function (){var statearr_41673 = state_41641;
(statearr_41673[(9)] = inst_41590);

(statearr_41673[(10)] = inst_41592);

(statearr_41673[(11)] = inst_41591);

(statearr_41673[(12)] = inst_41593);

return statearr_41673;
})();
var statearr_41674_43267 = state_41641__$1;
(statearr_41674_43267[(2)] = null);

(statearr_41674_43267[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41642 === (3))){
var inst_41639 = (state_41641[(2)]);
var state_41641__$1 = state_41641;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41641__$1,inst_41639);
} else {
if((state_val_41642 === (12))){
var inst_41627 = (state_41641[(2)]);
var state_41641__$1 = state_41641;
var statearr_41675_43269 = state_41641__$1;
(statearr_41675_43269[(2)] = inst_41627);

(statearr_41675_43269[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41642 === (2))){
var state_41641__$1 = state_41641;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41641__$1,(4),in$);
} else {
if((state_val_41642 === (23))){
var inst_41635 = (state_41641[(2)]);
var state_41641__$1 = state_41641;
var statearr_41676_43273 = state_41641__$1;
(statearr_41676_43273[(2)] = inst_41635);

(statearr_41676_43273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41642 === (19))){
var inst_41621 = (state_41641[(2)]);
var state_41641__$1 = state_41641;
var statearr_41679_43274 = state_41641__$1;
(statearr_41679_43274[(2)] = inst_41621);

(statearr_41679_43274[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41642 === (11))){
var inst_41590 = (state_41641[(9)]);
var inst_41604 = (state_41641[(7)]);
var inst_41604__$1 = cljs.core.seq(inst_41590);
var state_41641__$1 = (function (){var statearr_41683 = state_41641;
(statearr_41683[(7)] = inst_41604__$1);

return statearr_41683;
})();
if(inst_41604__$1){
var statearr_41684_43276 = state_41641__$1;
(statearr_41684_43276[(1)] = (14));

} else {
var statearr_41685_43277 = state_41641__$1;
(statearr_41685_43277[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41642 === (9))){
var inst_41629 = (state_41641[(2)]);
var inst_41630 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_41641__$1 = (function (){var statearr_41687 = state_41641;
(statearr_41687[(15)] = inst_41629);

return statearr_41687;
})();
if(cljs.core.truth_(inst_41630)){
var statearr_41688_43279 = state_41641__$1;
(statearr_41688_43279[(1)] = (21));

} else {
var statearr_41689_43280 = state_41641__$1;
(statearr_41689_43280[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41642 === (5))){
var inst_41582 = cljs.core.async.close_BANG_(out);
var state_41641__$1 = state_41641;
var statearr_41690_43281 = state_41641__$1;
(statearr_41690_43281[(2)] = inst_41582);

(statearr_41690_43281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41642 === (14))){
var inst_41604 = (state_41641[(7)]);
var inst_41607 = cljs.core.chunked_seq_QMARK_(inst_41604);
var state_41641__$1 = state_41641;
if(inst_41607){
var statearr_41691_43286 = state_41641__$1;
(statearr_41691_43286[(1)] = (17));

} else {
var statearr_41692_43287 = state_41641__$1;
(statearr_41692_43287[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41642 === (16))){
var inst_41625 = (state_41641[(2)]);
var state_41641__$1 = state_41641;
var statearr_41693_43288 = state_41641__$1;
(statearr_41693_43288[(2)] = inst_41625);

(statearr_41693_43288[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41642 === (10))){
var inst_41591 = (state_41641[(11)]);
var inst_41593 = (state_41641[(12)]);
var inst_41598 = cljs.core._nth(inst_41591,inst_41593);
var state_41641__$1 = state_41641;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41641__$1,(13),out,inst_41598);
} else {
if((state_val_41642 === (18))){
var inst_41604 = (state_41641[(7)]);
var inst_41614 = cljs.core.first(inst_41604);
var state_41641__$1 = state_41641;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41641__$1,(20),out,inst_41614);
} else {
if((state_val_41642 === (8))){
var inst_41592 = (state_41641[(10)]);
var inst_41593 = (state_41641[(12)]);
var inst_41595 = (inst_41593 < inst_41592);
var inst_41596 = inst_41595;
var state_41641__$1 = state_41641;
if(cljs.core.truth_(inst_41596)){
var statearr_41694_43290 = state_41641__$1;
(statearr_41694_43290[(1)] = (10));

} else {
var statearr_41695_43291 = state_41641__$1;
(statearr_41695_43291[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__25723__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__25723__auto____0 = (function (){
var statearr_41697 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41697[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__25723__auto__);

(statearr_41697[(1)] = (1));

return statearr_41697;
});
var cljs$core$async$mapcat_STAR__$_state_machine__25723__auto____1 = (function (state_41641){
while(true){
var ret_value__25724__auto__ = (function (){try{while(true){
var result__25725__auto__ = switch__25722__auto__(state_41641);
if(cljs.core.keyword_identical_QMARK_(result__25725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25725__auto__;
}
break;
}
}catch (e41704){var ex__25726__auto__ = e41704;
var statearr_41705_43293 = state_41641;
(statearr_41705_43293[(2)] = ex__25726__auto__);


if(cljs.core.seq((state_41641[(4)]))){
var statearr_41706_43294 = state_41641;
(statearr_41706_43294[(1)] = cljs.core.first((state_41641[(4)])));

} else {
throw ex__25726__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43295 = state_41641;
state_41641 = G__43295;
continue;
} else {
return ret_value__25724__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__25723__auto__ = function(state_41641){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__25723__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__25723__auto____1.call(this,state_41641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__25723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__25723__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__25723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__25723__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__25723__auto__;
})()
})();
var state__25809__auto__ = (function (){var statearr_41715 = f__25808__auto__();
(statearr_41715[(6)] = c__25807__auto__);

return statearr_41715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25809__auto__);
}));

return c__25807__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__41717 = arguments.length;
switch (G__41717) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__41724 = arguments.length;
switch (G__41724) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__41733 = arguments.length;
switch (G__41733) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__25807__auto___43302 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25808__auto__ = (function (){var switch__25722__auto__ = (function (state_41761){
var state_val_41762 = (state_41761[(1)]);
if((state_val_41762 === (7))){
var inst_41756 = (state_41761[(2)]);
var state_41761__$1 = state_41761;
var statearr_41763_43313 = state_41761__$1;
(statearr_41763_43313[(2)] = inst_41756);

(statearr_41763_43313[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41762 === (1))){
var inst_41738 = null;
var state_41761__$1 = (function (){var statearr_41766 = state_41761;
(statearr_41766[(7)] = inst_41738);

return statearr_41766;
})();
var statearr_41767_43314 = state_41761__$1;
(statearr_41767_43314[(2)] = null);

(statearr_41767_43314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41762 === (4))){
var inst_41741 = (state_41761[(8)]);
var inst_41741__$1 = (state_41761[(2)]);
var inst_41742 = (inst_41741__$1 == null);
var inst_41743 = cljs.core.not(inst_41742);
var state_41761__$1 = (function (){var statearr_41772 = state_41761;
(statearr_41772[(8)] = inst_41741__$1);

return statearr_41772;
})();
if(inst_41743){
var statearr_41773_43321 = state_41761__$1;
(statearr_41773_43321[(1)] = (5));

} else {
var statearr_41775_43326 = state_41761__$1;
(statearr_41775_43326[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41762 === (6))){
var state_41761__$1 = state_41761;
var statearr_41778_43327 = state_41761__$1;
(statearr_41778_43327[(2)] = null);

(statearr_41778_43327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41762 === (3))){
var inst_41758 = (state_41761[(2)]);
var inst_41759 = cljs.core.async.close_BANG_(out);
var state_41761__$1 = (function (){var statearr_41779 = state_41761;
(statearr_41779[(9)] = inst_41758);

return statearr_41779;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_41761__$1,inst_41759);
} else {
if((state_val_41762 === (2))){
var state_41761__$1 = state_41761;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41761__$1,(4),ch);
} else {
if((state_val_41762 === (11))){
var inst_41741 = (state_41761[(8)]);
var inst_41750 = (state_41761[(2)]);
var inst_41738 = inst_41741;
var state_41761__$1 = (function (){var statearr_41780 = state_41761;
(statearr_41780[(10)] = inst_41750);

(statearr_41780[(7)] = inst_41738);

return statearr_41780;
})();
var statearr_41785_43332 = state_41761__$1;
(statearr_41785_43332[(2)] = null);

(statearr_41785_43332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41762 === (9))){
var inst_41741 = (state_41761[(8)]);
var state_41761__$1 = state_41761;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41761__$1,(11),out,inst_41741);
} else {
if((state_val_41762 === (5))){
var inst_41741 = (state_41761[(8)]);
var inst_41738 = (state_41761[(7)]);
var inst_41745 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41741,inst_41738);
var state_41761__$1 = state_41761;
if(inst_41745){
var statearr_41787_43337 = state_41761__$1;
(statearr_41787_43337[(1)] = (8));

} else {
var statearr_41788_43338 = state_41761__$1;
(statearr_41788_43338[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41762 === (10))){
var inst_41753 = (state_41761[(2)]);
var state_41761__$1 = state_41761;
var statearr_41789_43343 = state_41761__$1;
(statearr_41789_43343[(2)] = inst_41753);

(statearr_41789_43343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41762 === (8))){
var inst_41738 = (state_41761[(7)]);
var tmp41786 = inst_41738;
var inst_41738__$1 = tmp41786;
var state_41761__$1 = (function (){var statearr_41790 = state_41761;
(statearr_41790[(7)] = inst_41738__$1);

return statearr_41790;
})();
var statearr_41791_43348 = state_41761__$1;
(statearr_41791_43348[(2)] = null);

(statearr_41791_43348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__25723__auto__ = null;
var cljs$core$async$state_machine__25723__auto____0 = (function (){
var statearr_41793 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41793[(0)] = cljs$core$async$state_machine__25723__auto__);

(statearr_41793[(1)] = (1));

return statearr_41793;
});
var cljs$core$async$state_machine__25723__auto____1 = (function (state_41761){
while(true){
var ret_value__25724__auto__ = (function (){try{while(true){
var result__25725__auto__ = switch__25722__auto__(state_41761);
if(cljs.core.keyword_identical_QMARK_(result__25725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25725__auto__;
}
break;
}
}catch (e41797){var ex__25726__auto__ = e41797;
var statearr_41798_43349 = state_41761;
(statearr_41798_43349[(2)] = ex__25726__auto__);


if(cljs.core.seq((state_41761[(4)]))){
var statearr_41800_43354 = state_41761;
(statearr_41800_43354[(1)] = cljs.core.first((state_41761[(4)])));

} else {
throw ex__25726__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43355 = state_41761;
state_41761 = G__43355;
continue;
} else {
return ret_value__25724__auto__;
}
break;
}
});
cljs$core$async$state_machine__25723__auto__ = function(state_41761){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25723__auto____1.call(this,state_41761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25723__auto____0;
cljs$core$async$state_machine__25723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25723__auto____1;
return cljs$core$async$state_machine__25723__auto__;
})()
})();
var state__25809__auto__ = (function (){var statearr_41804 = f__25808__auto__();
(statearr_41804[(6)] = c__25807__auto___43302);

return statearr_41804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25809__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__41806 = arguments.length;
switch (G__41806) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__25807__auto___43381 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25808__auto__ = (function (){var switch__25722__auto__ = (function (state_41846){
var state_val_41847 = (state_41846[(1)]);
if((state_val_41847 === (7))){
var inst_41842 = (state_41846[(2)]);
var state_41846__$1 = state_41846;
var statearr_41849_43382 = state_41846__$1;
(statearr_41849_43382[(2)] = inst_41842);

(statearr_41849_43382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41847 === (1))){
var inst_41807 = (new Array(n));
var inst_41808 = inst_41807;
var inst_41809 = (0);
var state_41846__$1 = (function (){var statearr_41850 = state_41846;
(statearr_41850[(7)] = inst_41808);

(statearr_41850[(8)] = inst_41809);

return statearr_41850;
})();
var statearr_41851_43384 = state_41846__$1;
(statearr_41851_43384[(2)] = null);

(statearr_41851_43384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41847 === (4))){
var inst_41812 = (state_41846[(9)]);
var inst_41812__$1 = (state_41846[(2)]);
var inst_41814 = (inst_41812__$1 == null);
var inst_41815 = cljs.core.not(inst_41814);
var state_41846__$1 = (function (){var statearr_41852 = state_41846;
(statearr_41852[(9)] = inst_41812__$1);

return statearr_41852;
})();
if(inst_41815){
var statearr_41853_43385 = state_41846__$1;
(statearr_41853_43385[(1)] = (5));

} else {
var statearr_41854_43386 = state_41846__$1;
(statearr_41854_43386[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41847 === (15))){
var inst_41835 = (state_41846[(2)]);
var state_41846__$1 = state_41846;
var statearr_41855_43387 = state_41846__$1;
(statearr_41855_43387[(2)] = inst_41835);

(statearr_41855_43387[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41847 === (13))){
var state_41846__$1 = state_41846;
var statearr_41856_43389 = state_41846__$1;
(statearr_41856_43389[(2)] = null);

(statearr_41856_43389[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41847 === (6))){
var inst_41809 = (state_41846[(8)]);
var inst_41831 = (inst_41809 > (0));
var state_41846__$1 = state_41846;
if(cljs.core.truth_(inst_41831)){
var statearr_41860_43390 = state_41846__$1;
(statearr_41860_43390[(1)] = (12));

} else {
var statearr_41862_43391 = state_41846__$1;
(statearr_41862_43391[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41847 === (3))){
var inst_41844 = (state_41846[(2)]);
var state_41846__$1 = state_41846;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41846__$1,inst_41844);
} else {
if((state_val_41847 === (12))){
var inst_41808 = (state_41846[(7)]);
var inst_41833 = cljs.core.vec(inst_41808);
var state_41846__$1 = state_41846;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41846__$1,(15),out,inst_41833);
} else {
if((state_val_41847 === (2))){
var state_41846__$1 = state_41846;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41846__$1,(4),ch);
} else {
if((state_val_41847 === (11))){
var inst_41825 = (state_41846[(2)]);
var inst_41826 = (new Array(n));
var inst_41808 = inst_41826;
var inst_41809 = (0);
var state_41846__$1 = (function (){var statearr_41868 = state_41846;
(statearr_41868[(7)] = inst_41808);

(statearr_41868[(10)] = inst_41825);

(statearr_41868[(8)] = inst_41809);

return statearr_41868;
})();
var statearr_41870_43392 = state_41846__$1;
(statearr_41870_43392[(2)] = null);

(statearr_41870_43392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41847 === (9))){
var inst_41808 = (state_41846[(7)]);
var inst_41823 = cljs.core.vec(inst_41808);
var state_41846__$1 = state_41846;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41846__$1,(11),out,inst_41823);
} else {
if((state_val_41847 === (5))){
var inst_41808 = (state_41846[(7)]);
var inst_41812 = (state_41846[(9)]);
var inst_41818 = (state_41846[(11)]);
var inst_41809 = (state_41846[(8)]);
var inst_41817 = (inst_41808[inst_41809] = inst_41812);
var inst_41818__$1 = (inst_41809 + (1));
var inst_41819 = (inst_41818__$1 < n);
var state_41846__$1 = (function (){var statearr_41872 = state_41846;
(statearr_41872[(12)] = inst_41817);

(statearr_41872[(11)] = inst_41818__$1);

return statearr_41872;
})();
if(cljs.core.truth_(inst_41819)){
var statearr_41873_43393 = state_41846__$1;
(statearr_41873_43393[(1)] = (8));

} else {
var statearr_41874_43394 = state_41846__$1;
(statearr_41874_43394[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41847 === (14))){
var inst_41838 = (state_41846[(2)]);
var inst_41840 = cljs.core.async.close_BANG_(out);
var state_41846__$1 = (function (){var statearr_41880 = state_41846;
(statearr_41880[(13)] = inst_41838);

return statearr_41880;
})();
var statearr_41881_43395 = state_41846__$1;
(statearr_41881_43395[(2)] = inst_41840);

(statearr_41881_43395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41847 === (10))){
var inst_41829 = (state_41846[(2)]);
var state_41846__$1 = state_41846;
var statearr_41882_43397 = state_41846__$1;
(statearr_41882_43397[(2)] = inst_41829);

(statearr_41882_43397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41847 === (8))){
var inst_41808 = (state_41846[(7)]);
var inst_41818 = (state_41846[(11)]);
var tmp41879 = inst_41808;
var inst_41808__$1 = tmp41879;
var inst_41809 = inst_41818;
var state_41846__$1 = (function (){var statearr_41885 = state_41846;
(statearr_41885[(7)] = inst_41808__$1);

(statearr_41885[(8)] = inst_41809);

return statearr_41885;
})();
var statearr_41889_43399 = state_41846__$1;
(statearr_41889_43399[(2)] = null);

(statearr_41889_43399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__25723__auto__ = null;
var cljs$core$async$state_machine__25723__auto____0 = (function (){
var statearr_41891 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41891[(0)] = cljs$core$async$state_machine__25723__auto__);

(statearr_41891[(1)] = (1));

return statearr_41891;
});
var cljs$core$async$state_machine__25723__auto____1 = (function (state_41846){
while(true){
var ret_value__25724__auto__ = (function (){try{while(true){
var result__25725__auto__ = switch__25722__auto__(state_41846);
if(cljs.core.keyword_identical_QMARK_(result__25725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25725__auto__;
}
break;
}
}catch (e41895){var ex__25726__auto__ = e41895;
var statearr_41896_43400 = state_41846;
(statearr_41896_43400[(2)] = ex__25726__auto__);


if(cljs.core.seq((state_41846[(4)]))){
var statearr_41897_43401 = state_41846;
(statearr_41897_43401[(1)] = cljs.core.first((state_41846[(4)])));

} else {
throw ex__25726__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43402 = state_41846;
state_41846 = G__43402;
continue;
} else {
return ret_value__25724__auto__;
}
break;
}
});
cljs$core$async$state_machine__25723__auto__ = function(state_41846){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25723__auto____1.call(this,state_41846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25723__auto____0;
cljs$core$async$state_machine__25723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25723__auto____1;
return cljs$core$async$state_machine__25723__auto__;
})()
})();
var state__25809__auto__ = (function (){var statearr_41904 = f__25808__auto__();
(statearr_41904[(6)] = c__25807__auto___43381);

return statearr_41904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25809__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__41909 = arguments.length;
switch (G__41909) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__25807__auto___43411 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25808__auto__ = (function (){var switch__25722__auto__ = (function (state_41959){
var state_val_41960 = (state_41959[(1)]);
if((state_val_41960 === (7))){
var inst_41955 = (state_41959[(2)]);
var state_41959__$1 = state_41959;
var statearr_41962_43417 = state_41959__$1;
(statearr_41962_43417[(2)] = inst_41955);

(statearr_41962_43417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41960 === (1))){
var inst_41918 = [];
var inst_41919 = inst_41918;
var inst_41920 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_41959__$1 = (function (){var statearr_41963 = state_41959;
(statearr_41963[(7)] = inst_41920);

(statearr_41963[(8)] = inst_41919);

return statearr_41963;
})();
var statearr_41964_43426 = state_41959__$1;
(statearr_41964_43426[(2)] = null);

(statearr_41964_43426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41960 === (4))){
var inst_41923 = (state_41959[(9)]);
var inst_41923__$1 = (state_41959[(2)]);
var inst_41924 = (inst_41923__$1 == null);
var inst_41925 = cljs.core.not(inst_41924);
var state_41959__$1 = (function (){var statearr_41968 = state_41959;
(statearr_41968[(9)] = inst_41923__$1);

return statearr_41968;
})();
if(inst_41925){
var statearr_41969_43428 = state_41959__$1;
(statearr_41969_43428[(1)] = (5));

} else {
var statearr_41970_43430 = state_41959__$1;
(statearr_41970_43430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41960 === (15))){
var inst_41949 = (state_41959[(2)]);
var state_41959__$1 = state_41959;
var statearr_41971_43432 = state_41959__$1;
(statearr_41971_43432[(2)] = inst_41949);

(statearr_41971_43432[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41960 === (13))){
var state_41959__$1 = state_41959;
var statearr_41972_43435 = state_41959__$1;
(statearr_41972_43435[(2)] = null);

(statearr_41972_43435[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41960 === (6))){
var inst_41919 = (state_41959[(8)]);
var inst_41944 = inst_41919.length;
var inst_41945 = (inst_41944 > (0));
var state_41959__$1 = state_41959;
if(cljs.core.truth_(inst_41945)){
var statearr_41973_43442 = state_41959__$1;
(statearr_41973_43442[(1)] = (12));

} else {
var statearr_41974_43443 = state_41959__$1;
(statearr_41974_43443[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41960 === (3))){
var inst_41957 = (state_41959[(2)]);
var state_41959__$1 = state_41959;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41959__$1,inst_41957);
} else {
if((state_val_41960 === (12))){
var inst_41919 = (state_41959[(8)]);
var inst_41947 = cljs.core.vec(inst_41919);
var state_41959__$1 = state_41959;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41959__$1,(15),out,inst_41947);
} else {
if((state_val_41960 === (2))){
var state_41959__$1 = state_41959;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41959__$1,(4),ch);
} else {
if((state_val_41960 === (11))){
var inst_41927 = (state_41959[(10)]);
var inst_41923 = (state_41959[(9)]);
var inst_41937 = (state_41959[(2)]);
var inst_41938 = [];
var inst_41939 = inst_41938.push(inst_41923);
var inst_41919 = inst_41938;
var inst_41920 = inst_41927;
var state_41959__$1 = (function (){var statearr_41975 = state_41959;
(statearr_41975[(7)] = inst_41920);

(statearr_41975[(8)] = inst_41919);

(statearr_41975[(11)] = inst_41937);

(statearr_41975[(12)] = inst_41939);

return statearr_41975;
})();
var statearr_41976_43475 = state_41959__$1;
(statearr_41976_43475[(2)] = null);

(statearr_41976_43475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41960 === (9))){
var inst_41919 = (state_41959[(8)]);
var inst_41935 = cljs.core.vec(inst_41919);
var state_41959__$1 = state_41959;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41959__$1,(11),out,inst_41935);
} else {
if((state_val_41960 === (5))){
var inst_41920 = (state_41959[(7)]);
var inst_41927 = (state_41959[(10)]);
var inst_41923 = (state_41959[(9)]);
var inst_41927__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_41923) : f.call(null,inst_41923));
var inst_41928 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41927__$1,inst_41920);
var inst_41929 = cljs.core.keyword_identical_QMARK_(inst_41920,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_41930 = ((inst_41928) || (inst_41929));
var state_41959__$1 = (function (){var statearr_41978 = state_41959;
(statearr_41978[(10)] = inst_41927__$1);

return statearr_41978;
})();
if(cljs.core.truth_(inst_41930)){
var statearr_41979_43493 = state_41959__$1;
(statearr_41979_43493[(1)] = (8));

} else {
var statearr_41980_43498 = state_41959__$1;
(statearr_41980_43498[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41960 === (14))){
var inst_41952 = (state_41959[(2)]);
var inst_41953 = cljs.core.async.close_BANG_(out);
var state_41959__$1 = (function (){var statearr_41982 = state_41959;
(statearr_41982[(13)] = inst_41952);

return statearr_41982;
})();
var statearr_41983_43503 = state_41959__$1;
(statearr_41983_43503[(2)] = inst_41953);

(statearr_41983_43503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41960 === (10))){
var inst_41942 = (state_41959[(2)]);
var state_41959__$1 = state_41959;
var statearr_41984_43512 = state_41959__$1;
(statearr_41984_43512[(2)] = inst_41942);

(statearr_41984_43512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41960 === (8))){
var inst_41919 = (state_41959[(8)]);
var inst_41927 = (state_41959[(10)]);
var inst_41923 = (state_41959[(9)]);
var inst_41932 = inst_41919.push(inst_41923);
var tmp41981 = inst_41919;
var inst_41919__$1 = tmp41981;
var inst_41920 = inst_41927;
var state_41959__$1 = (function (){var statearr_41985 = state_41959;
(statearr_41985[(7)] = inst_41920);

(statearr_41985[(8)] = inst_41919__$1);

(statearr_41985[(14)] = inst_41932);

return statearr_41985;
})();
var statearr_41986_43516 = state_41959__$1;
(statearr_41986_43516[(2)] = null);

(statearr_41986_43516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__25723__auto__ = null;
var cljs$core$async$state_machine__25723__auto____0 = (function (){
var statearr_41987 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41987[(0)] = cljs$core$async$state_machine__25723__auto__);

(statearr_41987[(1)] = (1));

return statearr_41987;
});
var cljs$core$async$state_machine__25723__auto____1 = (function (state_41959){
while(true){
var ret_value__25724__auto__ = (function (){try{while(true){
var result__25725__auto__ = switch__25722__auto__(state_41959);
if(cljs.core.keyword_identical_QMARK_(result__25725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25725__auto__;
}
break;
}
}catch (e41988){var ex__25726__auto__ = e41988;
var statearr_41989_43524 = state_41959;
(statearr_41989_43524[(2)] = ex__25726__auto__);


if(cljs.core.seq((state_41959[(4)]))){
var statearr_41990_43529 = state_41959;
(statearr_41990_43529[(1)] = cljs.core.first((state_41959[(4)])));

} else {
throw ex__25726__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43538 = state_41959;
state_41959 = G__43538;
continue;
} else {
return ret_value__25724__auto__;
}
break;
}
});
cljs$core$async$state_machine__25723__auto__ = function(state_41959){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25723__auto____1.call(this,state_41959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25723__auto____0;
cljs$core$async$state_machine__25723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25723__auto____1;
return cljs$core$async$state_machine__25723__auto__;
})()
})();
var state__25809__auto__ = (function (){var statearr_41992 = f__25808__auto__();
(statearr_41992[(6)] = c__25807__auto___43411);

return statearr_41992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25809__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
