"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2752],{2401:function(t,e,i){var n=this&&this.__extends||function(){var t=function(e,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])},t(e,i)};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}(),r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var r in e=arguments[i])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},r.apply(this,arguments)},o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var s=o(i(67294)),a=i(16403),u=s.default.createContext({ms:0,s:0,m:0,h:0,d:0,formatValue:function(t){return String(t)}}),c=function(t){var e=t.unit,i=t.formatValue;return s.default.createElement(d.Consumer,null,(function(t){return(i||t.formatValue)(t[e])||null}))},p=function(t){return s.default.createElement(c,r({unit:"ms"},t))},f=function(t){return s.default.createElement(c,r({unit:"s"},t))},h=function(t){return s.default.createElement(c,r({unit:"m"},t))},l=function(t){return s.default.createElement(c,r({unit:"h"},t))},m=function(t){return s.default.createElement(c,r({unit:"d"},t))},d=function(t){function e(e){var i=t.call(this,e)||this,n=i.props,o=n.initialTime,s=n.direction,u=n.timeToUpdate,c=n.lastUnit,p=n.checkpoints;return i.timer=new a.TimerModel({initialTime:o,direction:s,timeToUpdate:u,lastUnit:c,checkpoints:p,onChange:i.setState.bind(i)}),i.state=r({},i.timer.timeParts,{timerState:"INITED"}),i.start=i.start.bind(i),i.pause=i.pause.bind(i),i.resume=i.resume.bind(i),i.stop=i.stop.bind(i),i.reset=i.reset.bind(i),i.setTime=i.setTime.bind(i),i.getTime=i.getTime.bind(i),i.getTimerState=i.getTimerState.bind(i),i.setDirection=i.setDirection.bind(i),i.setCheckpoints=i.setCheckpoints.bind(i),i}return n(e,t),e.getUI=function(t,e){if(null===t)return null;if(Array.isArray(t)||s.default.isValidElement(t))return t;if(t.prototype&&t.prototype.isReactComponent)return s.default.createElement(t,e);if("function"===typeof t)return t(e);throw new Error("Please use one of the supported APIs for children")},e.prototype.componentDidMount=function(){this.props.startImmediately&&this.timer.start()},e.prototype.componentWillUnmount=function(){this.timer.stop()},e.prototype.render=function(){var t=this,i=t.start,n=t.pause,r=t.resume,o=t.stop,a=t.reset,c=t.getTime,p=t.getTimerState,f=t.setTime,h=t.setDirection,l=t.setCheckpoints,m=this.state,d=m.ms,T=m.s,y=m.m,g=m.h,P=m.d,v=m.timerState,b=this.props,I=b.formatValue,_=b.children;return s.default.createElement(u.Provider,{value:{ms:d,s:T,m:y,h:g,d:P,formatValue:I}},e.getUI(_,{start:i,resume:r,pause:n,stop:o,reset:a,getTime:c,getTimerState:p,setTime:f,setDirection:h,setCheckpoints:l,timerState:v}))},e.prototype.setTime=function(t){this.timer.setTime(t)},e.prototype.getTime=function(){return this.timer.getTime()},e.prototype.getTimerState=function(){return this.timer.state},e.prototype.setDirection=function(t){this.timer.setDirection(t)},e.prototype.setCheckpoints=function(t){this.timer.setCheckpoints(t)},e.prototype.start=function(){this.timer.start(),this.props.onStart()},e.prototype.stop=function(){this.timer.stop(),this.props.onStop()},e.prototype.pause=function(){this.timer.pause(),this.props.onPause()},e.prototype.reset=function(){this.timer.reset(),this.props.onReset()},e.prototype.resume=function(){this.timer.resume(),this.props.onResume()},e.Consumer=u.Consumer,e.Milliseconds=p,e.Seconds=f,e.Minutes=h,e.Hours=l,e.Days=m,e.defaultProps={timeToUpdate:1e3,direction:"forward",initialTime:0,startImmediately:!0,lastUnit:"d",checkpoints:[],children:null,formatValue:function(t){return String(t)},onStart:function(){},onResume:function(){},onPause:function(){},onStop:function(){},onReset:function(){}},e}(s.default.PureComponent);e.default=d},47396:function(t,e,i){var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var r in e=arguments[i])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},n.apply(this,arguments)},r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=i(67294),s=i(16403),a=r(i(33166));e.useTimer=function(t){var e=void 0===t?{}:t,i=e.initialTime,r=void 0===i?0:i,u=e.direction,c=void 0===u?"forward":u,p=e.timeToUpdate,f=void 0===p?1e3:p,h=e.startImmediately,l=void 0===h||h,m=e.lastUnit,d=void 0===m?"d":m,T=e.checkpoints,y=void 0===T?[]:T,g=e.onStart,P=e.onResume,v=e.onPause,b=e.onStop,I=e.onReset,_=o.useState(n({},a.default(r<0?0:r,d),{state:"INITED"})),S=_[0],C=_[1],k=o.useMemo((function(){return new s.TimerModel({initialTime:r,direction:c,timeToUpdate:f,lastUnit:d,checkpoints:y,onChange:function(t){return C((function(e){return n({},e,t)}))}})}),[]),D=o.useCallback((function(t){return k.setTime(t)}),[k]),U=o.useCallback((function(){return k.getTime()}),[k]),E=o.useCallback((function(){return k.state}),[k]),w=o.useCallback((function(t){return k.setDirection(t)}),[k]),O=o.useCallback((function(t){return k.setLastUnit(t)}),[k]),M=o.useCallback((function(t){return k.setCheckpoints(t)}),[k]),N=o.useCallback((function(t){return k.setTimeToUpdate(t)}),[k]),j=o.useCallback((function(){k.start(),g&&g()}),[k,g]),A=o.useCallback((function(){k.stop(),b&&b()}),[k,b]),L=o.useCallback((function(){k.pause(),v&&v()}),[k,v]),R=o.useCallback((function(){k.reset(),I&&I()}),[k,I]),V=o.useCallback((function(){k.resume(),P&&P()}),[k,P]),G=o.useMemo((function(){return{start:j,stop:A,pause:L,reset:R,resume:V,setTime:D,getTime:U,getTimerState:E,setDirection:w,setLastUnit:O,setTimeToUpdate:N,setCheckpoints:M}}),[j,A,L,R,V,D,U,E,w,O,N,M]);return o.useEffect((function(){return l&&j(),function(){A()}}),[]),{controls:G,value:S}}},82752:function(t,e,i){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var r=n(i(2401)),o=n(i(33166));e.getTimeParts=o.default;var s=i(47396);e.useTimer=s.useTimer,e.default=r.default},33166:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var i=["ms","s","m","h","d"],n=i.findIndex((function(t){return t===e})),r=[1e3,60,60,24,1],o=[1,1e3,6e4,36e5,864e5];return i.reduce((function(e,i,s){return e[i]=s>n?0:s===n?Math.floor(t/o[s]):Math.floor(t/o[s])%r[s],e}),{ms:0,s:0,m:0,h:0,d:0})}},55898:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return"undefined"!==typeof window&&"performance"in window?performance.now():Date.now()}},16403:function(t,e,i){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var r=n(i(33166)),o=n(i(55898)),s=n(i(20708)),a=function(){function t(t){var e=t.initialTime,i=t.direction,n=t.timeToUpdate,r=t.lastUnit,a=t.checkpoints,u=t.onChange;this.internalTime=o.default(),this.initialTime=e,this.time=e,this.direction=i,this.timeToUpdate=n,this.lastUnit=r,this.checkpoints=a,this.innerState=new s.default(u),this.onChange=u,this.timerId=null}return Object.defineProperty(t.prototype,"state",{get:function(){return this.innerState.getState()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"timeParts",{get:function(){return this.getTimeParts(this.computeTime())},enumerable:!0,configurable:!0}),t.prototype.getTimeParts=function(t){return r.default(t,this.lastUnit)},t.prototype.setTime=function(t){this.internalTime=o.default(),this.initialTime=t,this.time=this.initialTime,this.onChange(this.getTimeParts(this.time))},t.prototype.getTime=function(){return this.time},t.prototype.setLastUnit=function(t){this.innerState.isPlaying()?(this.pause(),this.lastUnit=t,this.resume(!0)):this.lastUnit=t},t.prototype.setTimeToUpdate=function(t){this.innerState.isPlaying()?(this.pause(),this.timeToUpdate=t,this.resume()):this.timeToUpdate=t},t.prototype.setDirection=function(t){this.direction=t},t.prototype.setCheckpoints=function(t){this.checkpoints=t},t.prototype.start=function(){this.innerState.setPlaying()&&this.setTimerInterval(!0)},t.prototype.resume=function(t){void 0===t&&(t=!1),!this.innerState.isStopped()&&this.innerState.setPlaying()&&this.setTimerInterval(t)},t.prototype.pause=function(){this.innerState.setPaused()&&clearInterval(this.timerId)},t.prototype.stop=function(){this.innerState.setStopped()&&clearInterval(this.timerId)},t.prototype.reset=function(){this.time=this.initialTime,this.onChange(this.getTimeParts(this.time))},t.prototype.setTimerInterval=function(t){var e=this;void 0===t&&(t=!1),this.timerId&&clearInterval(this.timerId),this.internalTime=o.default();t&&this.onChange(this.getTimeParts(this.time)),this.timerId=window.setInterval((function(){var t=e.time,i=e.computeTime();e.onChange(e.getTimeParts(i)),e.checkpoints.map((function(n){var r=n.time,o=n.callback,s=r>t&&r<=i,a=r<t&&r>=i;("backward"===e.direction?a:s)&&o()}))}),this.timeToUpdate)},t.prototype.computeTime=function(){if(this.innerState.isPlaying()){var t=o.default(),e=Math.abs(t-this.internalTime);switch(this.direction){case"forward":return this.time=this.time+e,this.internalTime=t,this.time;case"backward":return this.time=this.time-e,this.internalTime=t,this.time<0?(this.stop(),0):this.time;default:return this.time}}return this.time},t}();e.TimerModel=a},20708:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.INITED="INITED",e.PLAYING="PLAYING",e.PAUSED="PAUSED",e.STOPPED="STOPPED";var i=function(){function t(t){var i=this;void 0===t&&(t=function(t){}),this.state=e.INITED,this.onChange=function(){return t({state:i.state})},this.state=e.INITED}return t.prototype.getState=function(){return this.state},t.prototype.setInited=function(){return this.state!==e.INITED&&(this.state=e.INITED,this.onChange(),!0)},t.prototype.isInited=function(){return this.state===e.INITED},t.prototype.setPlaying=function(){return this.state!==e.PLAYING&&(this.state=e.PLAYING,this.onChange(),!0)},t.prototype.isPlaying=function(){return this.state===e.PLAYING},t.prototype.setPaused=function(){return this.state===e.PLAYING&&(this.state=e.PAUSED,this.onChange(),!0)},t.prototype.isPaused=function(){return this.state===e.PAUSED},t.prototype.setStopped=function(){return this.state!==e.INITED&&(this.state=e.STOPPED,this.onChange(),!0)},t.prototype.isStopped=function(){return this.state===e.STOPPED},t}();e.default=i}}]);