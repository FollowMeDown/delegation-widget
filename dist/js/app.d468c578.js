(function(e){function t(t){for(var a,i,o=t[0],c=t[1],l=t[2],d=0,g=[];d<o.length;d++)i=o[d],r[i]&&g.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);h&&h(t);while(g.length)g.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],a=!0,o=1;o<s.length;o++){var c=s[o];0!==r[c]&&(a=!1)}a&&(n.splice(t--,1),e=i(i.s=s[0]))}return e}var a={},r={app:0},n=[];function i(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=a,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(s,a,function(t){return e[t]}.bind(null,a));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var h=c;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var a=s("64a9"),r=s.n(a);r.a},1:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("f751"),s("097d");var a=s("2b0e"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticStyle:{"vertical-align":"top"},attrs:{id:"app"}},[s("h3",[e._v("Validating Networks")]),s("CosmosLedger",{attrs:{msg:"Delegation"}}),s("TerraLedger",{attrs:{msg:"Delegation"}}),s("IrisLedger",{attrs:{msg:"Delegation"}})],1)},n=[],i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"irisLedger",staticStyle:{width:"300px",display:"inline-block","vertical-align":"top"}},[s("img",{attrs:{src:"/img/logo-irisnet.svg",alt:"IrisNet",title:"IrisNet",width:"145",height:"46"}}),s("br"),""!=this.staked?s("span",[s("label",[e._v("Staked by ChainLayer: ")]),s("br"),s("span",[e._v(e._s(e.staked)+" "+e._s(e.denom)+" ("+e._s(e.stakedUSD)+")")]),s("br")]):e._e(),""!=this.price?s("span",[e._v("Price "+e._s(e.denom)+": $ "+e._s(e.price))]):e._e(),s("br"),s("button",{staticClass:"btn btn-outline-success",on:{click:e.show}},[e._v("Delegate")]),s("modal",{attrs:{name:"iris-modal",width:600,draggable:!0,scrollable:!0,height:"auto"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title"},[e._v("Ledger Delegation ChainLayer")]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:e.hide}},[s("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])]),s("div",{staticClass:"modal-body"},[s("p",[s("span",{staticStyle:{color:"forestgreen"}},[s("i",{staticClass:"fas fa-plug fa-3x"})]),e._v("                  \n                    "),this.readytodelegate?s("span",{staticStyle:{color:"forestgreen"}},[s("i",{staticClass:"fas fa-coins fa-3x"})]):e._e(),this.readytodelegate?e._e():s("span",[s("i",{staticClass:"fas fa-coins fa-3x"})])]),1==this.connecting?s("span",[s("div",{staticClass:"alert alert-info"},[e._v("Looking for ledger")]),s("br"),s("img",{attrs:{src:"/img/Spinner.gif",height:"93",width:"93"}}),s("br")]):e._e(),1==this.isdelegating?s("span",[s("div",{staticClass:"alert alert-info"},[e._v("Delegating, please check ledger")]),s("br"),s("img",{attrs:{src:"/img/Spinner.gif",height:"93",width:"93"}}),s("br")]):e._e(),""!=this.success?s("span",[s("div",{staticClass:"alert alert-success"},[e._v(e._s(e.success))])]):e._e(),""!=this.error?s("span",[s("div",{staticClass:"alert alert-warning"},[e._v(e._s(e.error))])]):e._e(),0==this.connecting&&0==this.connected?s("span",[s("button",{staticClass:"btn btn-outline-success",on:{click:e.tryConnect}},[e._v("Connect Ledger")]),s("br")]):e._e(),""!=this.bech32?s("span",[s("b",[e._v("Your Adress")]),s("br")]):e._e(),""!=this.bech32?s("span",[s("b",[e._v(e._s(e.bech32))]),s("br"),s("br")]):e._e(),""!=this.balance_available?s("label",[e._v("Available Balance: ")]):e._e(),""!=this.balance_available?s("span",[e._v(e._s(e.balance_available)+" "+e._s(e.denom)),s("br")]):e._e(),""!=this.balance_delegated?s("label",[e._v("Delegated Balance: ")]):e._e(),""!=this.balance_delegated?s("span",[e._v(e._s(e.balance_delegated)+" "+e._s(e.denom)),s("br")]):e._e(),""!=this.balance_total?s("label",[e._v("Total Balance: ")]):e._e(),""!=this.balance_total?s("span",[e._v(e._s(e.balance_total)+" "+e._s(e.denom)),s("br"),s("br")]):e._e(),this.readytodelegate?s("label",[e._v("Amount to delegate to ChainLayer (in "+e._s(e.denom)+"): ")]):e._e(),this.readytodelegate?s("input",{directives:[{name:"model",rawName:"v-model.number",value:e.delegation,expression:"delegation",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:e.delegation},on:{keypress:e.onlyNumber,input:function(t){t.target.composing||(e.delegation=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}):e._e(),s("br"),s("br")]),s("div",{staticClass:"modal-footer"},[this.readytodelegate?s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:e.delegate}},[e._v("Delegate")]):e._e(),e._v(" \n                "),this.readytodelegate?s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:e.tryConnect}},[e._v("Refresh")]):e._e(),e._v(" \n                "),s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:e.hide}},[e._v("Done")])])])])],1)},o=[],c=(s("96cf"),s("3b8d")),l=s("7fe4"),h=s.n(l),d=s("9dcd"),g=s.n(d),u=s("14f7"),b=u.IrisDelegateTool,p=new h.a,m=new b(p);m.setNodeURL("https://irishub-lcd.chainlayer.net");var v=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),f=new Intl.NumberFormat("en-US",{style:"decimal",minimumFractionDigits:3,maximumFractionDigits:3}),_={name:"IrisLedger",props:{restUrl:String},data:function(){return{myAddr:"",bech32:"",pk:"",path:"",accInfo:"",sequence:"",delegation:"",reply:"",balance_available:"",balance_delegated:"",balance_total:"",connected:!1,connecting:!1,readytodelegate:!1,debug:!0,denom:"",staked:"",stakedUSD:"",error:"",price:"",chainId:"",validator:"",rewards:"",isdelegating:"",success:"",hrp:""}},computed:{consoleStatus:function(){return this.consoleLog}},created:function(){this.init()},methods:{show:function(){this.$modal.show("iris-modal")},hide:function(){this.$modal.hide("iris-modal")},onlyNumber:function(e){var t=e.keyCode?e.keyCode:e.which;(t<48||t>57)&&46===t&&e.preventDefault()},log:function(e,t){this.debug&&console.log(t)},init:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.success="",this.error="",this.myAddr=null,this.denom="Iris",this.isdelegating=!1,this.readytodelegate=!1,this.baseamount=1e18,this.validator="iva1kgddca7qj96z0qcxr2c45z73cfl0c75pmw0meu",this.chainId="irishub",this.log(this.consoleLog,"Trying to connect..."),e.next=12,m.retrieveValidators();case 12:return this.validators=e.sent,this.staked=f.format(g()(this.validators[this.validator].totalShares)),e.next=16,m.getPrice();case 16:this.price=e.sent,this.stakedUSD=v.format(g()(this.validators[this.validator].totalShares*this.price)),this.$emit("irisStake",g()(this.validators[this.validator].totalShares*this.price));case 19:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),tryConnect:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.success="",this.isdelegating=!1,this.error="",e.prev=3,this.connecting=!0,e.next=7,m.connect();case 7:e.next=16;break;case 9:return e.prev=9,e.t0=e["catch"](3),"Error: Unknown Status Code: undefined"==e.t0&&(this.error="Can't find Ledger! Please connect Ledger, enter your pin code and start Terra app. Then click connect again..."),this.log(this.consoleLog,e.t0),this.connected=!1,this.connecting=!1,e.abrupt("return");case 16:if(m.connected){e.next=20;break}return this.connected=!1,this.log(this.consoleLog,m.lastError),e.abrupt("return");case 20:return this.log(this.consoleLog,"Connected!"),e.prev=21,e.next=24,m.retrieveAddress(0,0);case 24:this.myAddr=e.sent,e.next=34;break;case 27:return e.prev=27,e.t1=e["catch"](21),this.log(this.consoleLog,e.t1),"Error: Unknown Status Code: 26628"==e.t1&&(this.error="Enter Pin on Ledger"),this.connected=!1,this.connecting=!1,e.abrupt("return");case 34:return this.bech32=this.myAddr.bech32,this.pk=this.myAddr.pk,this.path=this.myAddr.path,this.log(this.consoleLog,this.myAddr),this.log(this.consoleLog,"Address  : ".concat(this.myAddr.bech32)),this.log(this.consoleLog,"PublicKey: ".concat(this.myAddr.pk)),this.log(this.consoleLog,"Query ".concat(this.myAddr.bech32)),e.next=43,m.getAccountInfo(this.myAddr);case 43:if(this.accInfo=e.sent,!this.accInfo.error){e.next=50;break}return this.log(this.consoleLog,"getAccountInfo error"),this.log(this.consoleLog,this.accInfo.error),e.abrupt("return");case 50:this.log(this.consoleLog,this.accInfo.error),this.log(this.consoleLog,this.accInfo),this.sequence=this.accInfo.sequence,this.balance_available=f.format(g()(this.accInfo.balance/this.baseamount)),this.delegation=parseInt(this.balance_available);case 55:return e.next=57,m.retrieveBalances([this.myAddr]);case 57:if(this.reply=e.sent,!this.reply.error){e.next=64;break}return this.log(this.consoleLog,"retrieveBalances error"),this.log(this.consoleLog,this.reply.error),e.abrupt("return");case 64:this.log(this.consoleLog,this.reply),this.balance_delegated=f.format(g()(this.reply[0].delegationsTotal)),this.balance_total=f.format(g()(this.reply[0].delegationsTotal/this.baseamount).add(g()(this.accInfo.balance/this.baseamount))),this.log(this.consoleLog,this.reply[0].delegationsTotal);case 68:this.readytodelegate=!0,this.connecting=!1,this.connected=!0;case 71:case"end":return e.stop()}},e,this,[[3,9],[21,27]])}));function t(){return e.apply(this,arguments)}return t}(),delegate:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){var t,s,a,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.error="",!(this.delegation>this.balance_available)){e.next=5;break}return this.error="You cannot delegate more than available balance",this.isdelegating=!1,e.abrupt("return");case 5:if(!(this.delegation<=0)){e.next=9;break}return this.error="You need to delegate more than 0",this.isdelegating=!1,e.abrupt("return");case 9:return this.isdelegating=!0,t={chainId:this.chainId,path:this.myAddr.path,bech32:this.myAddr.bech32,pk:this.myAddr.pk},e.next=13,m.txCreateDelegate(t,this.validator,this.delegation*this.baseamount,"Delegation to ChainLayer.io");case 13:return s=e.sent,this.log(this.consoleLog,"Waiting for device to sign"),a="",e.prev=16,e.next=19,m.sign(s,t);case 19:a=e.sent,e.next=28;break;case 22:return e.prev=22,e.t0=e["catch"](16),this.log(this.consoleLog,e.t0),"Error: Transaction rejected"==e.t0?this.error="Transaction rejected":"Error: Cosmos app does not seem to be open"==e.t0?this.error="Ledger App does not seem to be open":this.error="Unknown Error",this.isdelegating=!1,e.abrupt("return");case 28:return this.log(this.consoleLog,"Broadcasting signed tx"),r="",e.prev=30,e.next=33,m.txSubmit(a);case 33:if(r=e.sent,!r.error){e.next=39;break}return this.error=r.error,this.log(this.consoleLog,r),this.isdelegating=!1,e.abrupt("return");case 39:e.next=47;break;case 41:return e.prev=41,e.t1=e["catch"](30),this.log(this.consoleLog,e.t1),"Error: Transaction rejected"==e.t1?this.error="Transaction rejected":this.error="Unknown Error",this.isdelegating=!1,e.abrupt("return");case 47:this.success="Delegation successfull! Please wait 30 seconds to refresh",this.log(this.consoleLog,r),this.isdelegating=!1;case 50:case"end":return e.stop()}},e,this,[[16,22],[30,41]])}));function t(){return e.apply(this,arguments)}return t}()}},y=_,k=s("2877"),L=Object(k["a"])(y,i,o,!1,null,null,null),C=L.exports,x=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"cosmosLedger",staticStyle:{width:"300px",display:"inline-block","vertical-align":"top"}},[s("img",{attrs:{src:"/img/logo-cosmos.svg",alt:"Cosmos",title:"Cosmos",width:"145",height:"46"}}),s("br"),""!=this.staked?s("span",[s("label",[e._v("Staked by ChainLayer: ")]),s("br"),s("span",[e._v(e._s(e.staked)+" "+e._s(e.denom)+" ("+e._s(e.stakedUSD)+")")]),s("br")]):e._e(),""!=this.price?s("span",[e._v("Price "+e._s(e.denom)+": $ "+e._s(e.price))]):e._e(),s("br"),s("button",{staticClass:"btn btn-outline-success",on:{click:e.show}},[e._v("Delegate")]),s("modal",{attrs:{name:"cosmos-modal",width:600,draggable:!0,scrollable:!0,height:"auto"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title"},[e._v("Ledger Delegation ChainLayer")]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:e.hide}},[s("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])]),s("div",{staticClass:"modal-body"},[s("p",[s("span",{staticStyle:{color:"forestgreen"}},[s("i",{staticClass:"fas fa-plug fa-3x"})]),e._v("                  \n                    "),this.readytodelegate?s("span",{staticStyle:{color:"forestgreen"}},[s("i",{staticClass:"fas fa-coins fa-3x"})]):e._e(),this.readytodelegate?e._e():s("span",[s("i",{staticClass:"fas fa-coins fa-3x"})])]),1==this.connecting?s("span",[s("div",{staticClass:"alert alert-info"},[e._v("Looking for ledger")]),s("br"),s("img",{attrs:{src:"/img/Spinner.gif",height:"93",width:"93"}}),s("br")]):e._e(),1==this.isdelegating?s("span",[s("div",{staticClass:"alert alert-info"},[e._v("Delegating, please check ledger")]),s("br"),s("img",{attrs:{src:"/img/Spinner.gif",height:"93",width:"93"}}),s("br")]):e._e(),""!=this.success?s("span",[s("div",{staticClass:"alert alert-success"},[e._v(e._s(e.success))])]):e._e(),""!=this.error?s("span",[s("div",{staticClass:"alert alert-warning"},[e._v(e._s(e.error))])]):e._e(),0==this.connecting&&0==this.connected?s("span",[s("button",{staticClass:"btn btn-outline-success",on:{click:e.tryConnect}},[e._v("Connect Ledger")]),s("br")]):e._e(),""!=this.bech32?s("span",[s("b",[e._v("Your Adress")]),s("br")]):e._e(),""!=this.bech32?s("span",[s("b",[e._v(e._s(e.bech32))]),s("br"),s("br")]):e._e(),""!=this.balance_available?s("label",[e._v("Available Balance: ")]):e._e(),""!=this.balance_available?s("span",[e._v(e._s(e.balance_available)+" "+e._s(e.denom)),s("br")]):e._e(),""!=this.balance_delegated?s("label",[e._v("Delegated Balance: ")]):e._e(),""!=this.balance_delegated?s("span",[e._v(e._s(e.balance_delegated)+" "+e._s(e.denom)),s("br")]):e._e(),""!=this.balance_total?s("label",[e._v("Total Balance: ")]):e._e(),""!=this.balance_total?s("span",[e._v(e._s(e.balance_total)+" "+e._s(e.denom)),s("br"),s("br")]):e._e(),this.readytodelegate?s("label",[e._v("Amount to delegate to ChainLayer (in "+e._s(e.denom)+"): ")]):e._e(),this.readytodelegate?s("input",{directives:[{name:"model",rawName:"v-model.number",value:e.delegation,expression:"delegation",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:e.delegation},on:{keypress:e.onlyNumber,input:function(t){t.target.composing||(e.delegation=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}):e._e(),s("br"),s("br")]),s("div",{staticClass:"modal-footer"},[this.readytodelegate?s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:e.delegate}},[e._v("Delegate")]):e._e(),e._v(" \n                "),this.readytodelegate?s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:e.tryConnect}},[e._v("Refresh")]):e._e(),e._v(" \n                "),s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:e.hide}},[e._v("Done")])])])])],1)},w=[],S=s("14f7"),A=S.CosmosDelegateTool,I=new h.a,D=new A(I);D.setNodeURL("https://cosmoshub-lcd.chainlayer.net");var T=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),U=new Intl.NumberFormat("en-US",{style:"decimal",minimumFractionDigits:3,maximumFractionDigits:3}),j={name:"CosmosLedger",props:{restUrl:String},data:function(){return{myAddr:"",bech32:"",pk:"",path:"",accInfo:"",sequence:"",delegation:"",reply:"",balance_available:"",balance_delegated:"",balance_total:"",connected:!1,connecting:!1,readytodelegate:!1,debug:!0,denom:"",staked:"",stakedUSD:"",error:"",price:"",chainId:"",validator:"",rewards:"",isdelegating:"",success:"",hrp:""}},computed:{consoleStatus:function(){return this.consoleLog}},created:function(){this.init()},methods:{show:function(){this.$modal.show("cosmos-modal")},hide:function(){this.$modal.hide("cosmos-modal")},onlyNumber:function(e){var t=e.keyCode?e.keyCode:e.which;(t<48||t>57)&&46===t&&e.preventDefault()},log:function(e,t){this.debug&&console.log(t)},init:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.success="",this.error="",this.myAddr=null,this.denom="Atom",this.isdelegating=!1,this.readytodelegate=!1,this.baseamount=1e6,this.validator="cosmosvaloper1kgddca7qj96z0qcxr2c45z73cfl0c75p7f3s2e",this.chainId="cosmoshub-2",this.log(this.consoleLog,"Trying to connect..."),e.next=12,D.retrieveValidators();case 12:return this.validators=e.sent,this.staked=U.format(g()(this.validators[this.validator].totalShares/this.baseamount)),e.next=16,D.getPrice();case 16:this.price=e.sent,this.stakedUSD=T.format(g()(this.validators[this.validator].totalShares/this.baseamount*this.price)),this.$emit("cosmosStake",g()(this.validators[this.validator].totalShares/this.baseamount*this.price));case 19:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),tryConnect:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.success="",this.isdelegating=!1,this.error="",e.prev=3,this.connecting=!0,e.next=7,D.connect();case 7:e.next=16;break;case 9:return e.prev=9,e.t0=e["catch"](3),"Error: Unknown Status Code: undefined"==e.t0&&(this.error="Can't find Ledger! Please connect Ledger, enter your pin code and start Terra app. Then click connect again..."),this.log(this.consoleLog,e.t0),this.connected=!1,this.connecting=!1,e.abrupt("return");case 16:if(D.connected){e.next=20;break}return this.connected=!1,this.log(this.consoleLog,D.lastError),e.abrupt("return");case 20:return this.log(this.consoleLog,"Connected!"),e.prev=21,e.next=24,D.retrieveAddress(0,0);case 24:this.myAddr=e.sent,e.next=34;break;case 27:return e.prev=27,e.t1=e["catch"](21),this.log(this.consoleLog,e.t1),"Error: Unknown Status Code: 26628"==e.t1&&(this.error="Enter Pin on Ledger"),this.connected=!1,this.connecting=!1,e.abrupt("return");case 34:return this.bech32=this.myAddr.bech32,this.pk=this.myAddr.pk,this.path=this.myAddr.path,this.log(this.consoleLog,this.myAddr),this.log(this.consoleLog,"Address  : ".concat(this.myAddr.bech32)),this.log(this.consoleLog,"PublicKey: ".concat(this.myAddr.pk)),this.log(this.consoleLog,"Query ".concat(this.myAddr.bech32)),e.next=43,D.getAccountInfo(this.myAddr);case 43:if(this.accInfo=e.sent,!this.accInfo.error){e.next=50;break}return this.log(this.consoleLog,"getAccountInfo error"),this.log(this.consoleLog,this.accInfo.error),e.abrupt("return");case 50:this.log(this.consoleLog,this.accInfo.error),this.log(this.consoleLog,this.accInfo),this.sequence=this.accInfo.sequence,this.balance_available=U.format(g()(this.accInfo.balance/this.baseamount)),this.delegation=parseInt(this.balance_available);case 55:return e.next=57,D.retrieveBalances([this.myAddr]);case 57:if(this.reply=e.sent,!this.reply.error){e.next=64;break}return this.log(this.consoleLog,"retrieveBalances error"),this.log(this.consoleLog,this.reply.error),e.abrupt("return");case 64:this.log(this.consoleLog,this.reply),this.balance_delegated=U.format(g()(this.reply[0].delegationsTotal/this.baseamount)),this.balance_total=U.format(g()(this.reply[0].delegationsTotal/this.baseamount).add(g()(this.accInfo.balance/this.baseamount))),this.log(this.consoleLog,this.reply[0].delegationsTotal);case 68:this.readytodelegate=!0,this.connecting=!1,this.connected=!0;case 71:case"end":return e.stop()}},e,this,[[3,9],[21,27]])}));function t(){return e.apply(this,arguments)}return t}(),delegate:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){var t,s,a,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.error="",!(this.delegation>this.balance_available)){e.next=5;break}return this.error="You cannot delegate more than available balance",this.isdelegating=!1,e.abrupt("return");case 5:if(!(this.delegation<=0)){e.next=9;break}return this.error="You need to delegate more than 0",this.isdelegating=!1,e.abrupt("return");case 9:return this.isdelegating=!0,t={chainId:this.chainId,path:this.myAddr.path,bech32:this.myAddr.bech32,pk:this.myAddr.pk},e.next=13,D.txCreateDelegate(t,this.validator,this.delegation*this.baseamount,"Delegation to ChainLayer.io");case 13:return s=e.sent,this.log(this.consoleLog,"Waiting for device to sign"),a="",e.prev=16,e.next=19,D.sign(s,t);case 19:a=e.sent,e.next=28;break;case 22:return e.prev=22,e.t0=e["catch"](16),this.log(this.consoleLog,e.t0),"Error: Transaction rejected"==e.t0?this.error="Transaction rejected":"Error: Cosmos app does not seem to be open"==e.t0?this.error="Ledger App does not seem to be open":this.error="Unknown Error",this.isdelegating=!1,e.abrupt("return");case 28:return this.log(this.consoleLog,"Broadcasting signed tx"),r="",e.prev=30,e.next=33,D.txSubmit(a);case 33:if(r=e.sent,!r.error){e.next=39;break}return this.error=r.error,this.log(this.consoleLog,r),this.isdelegating=!1,e.abrupt("return");case 39:e.next=47;break;case 41:return e.prev=41,e.t1=e["catch"](30),this.log(this.consoleLog,e.t1),"Error: Transaction rejected"==e.t1?this.error="Transaction rejected":this.error="Unknown Error",this.isdelegating=!1,e.abrupt("return");case 47:this.success="Delegation successfull! Please wait 30 seconds to refresh",this.log(this.consoleLog,r),this.isdelegating=!1;case 50:case"end":return e.stop()}},e,this,[[16,22],[30,41]])}));function t(){return e.apply(this,arguments)}return t}()}},E=j,P=Object(k["a"])(E,x,w,!1,null,null,null),R=P.exports,O=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"terraLedger",staticStyle:{width:"300px",display:"inline-block","vertical-align":"top"}},[s("img",{attrs:{src:"/img/logo-terra.svg",alt:"Terra",title:"Terra",width:"145",height:"46"}}),s("br"),""!=this.staked?s("span",[s("label",[e._v("Staked by ChainLayer: ")]),s("br"),s("span",[e._v(e._s(e.staked)+" "+e._s(e.denom)+" ("+e._s(e.stakedUSD)+")")]),s("br")]):e._e(),""!=this.price?s("span",[e._v("Price "+e._s(e.denom)+": $ "+e._s(e.price))]):e._e(),s("br"),s("button",{staticClass:"btn btn-outline-success",on:{click:e.show}},[e._v("Delegate")]),s("modal",{attrs:{name:"terra-modal",width:600,draggable:!0,scrollable:!0,height:"auto"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title"},[e._v("Ledger Delegation ChainLayer")]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:e.hide}},[s("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])]),s("div",{staticClass:"modal-body"},[s("p",[s("span",{staticStyle:{color:"forestgreen"}},[s("i",{staticClass:"fas fa-plug fa-3x"})]),e._v("                  \n                    "),this.readytodelegate?s("span",{staticStyle:{color:"forestgreen"}},[s("i",{staticClass:"fas fa-coins fa-3x"})]):e._e(),this.readytodelegate?e._e():s("span",[s("i",{staticClass:"fas fa-coins fa-3x"})])]),1==this.connecting?s("span",[s("div",{staticClass:"alert alert-info"},[e._v("Looking for ledger")]),s("br"),s("img",{attrs:{src:"/img/Spinner.gif",height:"93",width:"93"}}),s("br")]):e._e(),1==this.isdelegating?s("span",[s("div",{staticClass:"alert alert-info"},[e._v("Delegating, please check ledger")]),s("br"),s("img",{attrs:{src:"/img/Spinner.gif",height:"93",width:"93"}}),s("br")]):e._e(),""!=this.success?s("span",[s("div",{staticClass:"alert alert-success"},[e._v(e._s(e.success))])]):e._e(),""!=this.error?s("span",[s("div",{staticClass:"alert alert-warning"},[e._v(e._s(e.error))])]):e._e(),0==this.connecting&&0==this.connected?s("span",[s("button",{staticClass:"btn btn-outline-success",on:{click:e.tryConnect}},[e._v("Connect Ledger")]),s("br")]):e._e(),""!=this.bech32?s("span",[s("b",[e._v("Your Adress")]),s("br")]):e._e(),""!=this.bech32?s("span",[s("b",[e._v(e._s(e.bech32))]),s("br"),s("br")]):e._e(),""!=this.balance_available?s("label",[e._v("Available Balance: ")]):e._e(),""!=this.balance_available?s("span",[e._v(e._s(e.balance_available)+" "+e._s(e.denom)),s("br")]):e._e(),""!=this.balance_delegated?s("label",[e._v("Delegated Balance: ")]):e._e(),""!=this.balance_delegated?s("span",[e._v(e._s(e.balance_delegated)+" "+e._s(e.denom)),s("br")]):e._e(),""!=this.balance_total?s("label",[e._v("Total Balance: ")]):e._e(),""!=this.balance_total?s("span",[e._v(e._s(e.balance_total)+" "+e._s(e.denom)),s("br"),s("br")]):e._e(),this.readytodelegate?s("label",[e._v("Amount to delegate to ChainLayer (in "+e._s(e.denom)+"): ")]):e._e(),this.readytodelegate?s("input",{directives:[{name:"model",rawName:"v-model.number",value:e.delegation,expression:"delegation",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:e.delegation},on:{keypress:e.onlyNumber,input:function(t){t.target.composing||(e.delegation=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}):e._e(),s("br"),s("br")]),s("div",{staticClass:"modal-footer"},[this.readytodelegate?s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:e.delegate}},[e._v("Delegate")]):e._e(),e._v(" \n                "),this.readytodelegate?s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:e.tryConnect}},[e._v("Refresh")]):e._e(),e._v(" \n                "),s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:e.hide}},[e._v("Done")])])])])],1)},N=[],$=s("14f7"),B=$.TerraDelegateTool,q=new h.a,F=new B(q);F.setNodeURL("https://columbus-lcd.chainlayer.net");var Y=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),z=new Intl.NumberFormat("en-US",{style:"decimal",minimumFractionDigits:3,maximumFractionDigits:3}),M={name:"TerraLedger",props:{restUrl:String},data:function(){return{myAddr:"",bech32:"",pk:"",path:"",accInfo:"",sequence:"",delegation:"",reply:"",balance_available:"",balance_delegated:"",balance_total:"",connected:!1,connecting:!1,readytodelegate:!1,debug:!0,denom:"",staked:"",stakedUSD:"",error:"",price:"",chainId:"",validator:"",rewards:"",isdelegating:"",success:"",hrp:""}},computed:{consoleStatus:function(){return this.consoleLog}},created:function(){this.init()},methods:{show:function(){this.$modal.show("terra-modal")},hide:function(){this.$modal.hide("terra-modal")},onlyNumber:function(e){var t=e.keyCode?e.keyCode:e.which;(t<48||t>57)&&46!==t&&e.preventDefault()},log:function(e,t){this.debug&&console.log(t)},init:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.success="",this.error="",this.myAddr=null,this.denom="Luna",this.isdelegating=!1,this.readytodelegate=!1,this.baseamount=1e6,this.validator="terravaloper1kgddca7qj96z0qcxr2c45z73cfl0c75paknc5e",this.chainId="columbus-2",this.log(this.consoleLog,"Trying to connect..."),e.next=12,F.retrieveValidators();case 12:return this.validators=e.sent,this.staked=z.format(g()(this.validators[this.validator].totalShares/this.baseamount)),e.next=16,F.getPrice();case 16:this.price=e.sent,this.stakedUSD=Y.format(g()(this.validators[this.validator].totalShares/this.baseamount*this.price)),this.$emit("terraStake",g()(this.validators[this.validator].totalShares/this.baseamount*this.price));case 19:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),tryConnect:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.success="",this.isdelegating=!1,this.error="",e.prev=3,this.connecting=!0,e.next=7,F.connect();case 7:e.next=16;break;case 9:return e.prev=9,e.t0=e["catch"](3),"Error: Unknown Status Code: undefined"==e.t0&&(this.error="Can't find Ledger! Please connect Ledger, enter your pin code and start Terra app. Then click connect again..."),this.log(this.consoleLog,e.t0),this.connected=!1,this.connecting=!1,e.abrupt("return");case 16:if(F.connected){e.next=20;break}return this.connected=!1,this.log(this.consoleLog,F.lastError),e.abrupt("return");case 20:return this.log(this.consoleLog,"Connected!"),e.prev=21,e.next=24,F.retrieveAddress(0,0);case 24:this.myAddr=e.sent,e.next=34;break;case 27:return e.prev=27,e.t1=e["catch"](21),this.log(this.consoleLog,e.t1),"Error: Unknown Status Code: 26628"==e.t1&&(this.error="Enter Pin on Ledger"),this.connected=!1,this.connecting=!1,e.abrupt("return");case 34:return this.bech32=this.myAddr.bech32,this.pk=this.myAddr.pk,this.path=this.myAddr.path,this.log(this.consoleLog,this.myAddr),this.log(this.consoleLog,"Address  : ".concat(this.myAddr.bech32)),this.log(this.consoleLog,"PublicKey: ".concat(this.myAddr.pk)),this.log(this.consoleLog,"Query ".concat(this.myAddr.bech32)),e.next=43,F.getAccountInfo(this.myAddr);case 43:if(this.accInfo=e.sent,!this.accInfo.error){e.next=50;break}return this.log(this.consoleLog,"getAccountInfo error"),this.log(this.consoleLog,this.accInfo.error),e.abrupt("return");case 50:this.log(this.consoleLog,this.accInfo.error),this.log(this.consoleLog,this.accInfo),this.sequence=this.accInfo.sequence,this.balance_available=z.format(g()(this.accInfo.balance/this.baseamount)),this.delegation=parseInt(this.balance_available);case 55:return e.next=57,F.retrieveBalances([this.myAddr]);case 57:if(this.reply=e.sent,!this.reply.error){e.next=64;break}return this.log(this.consoleLog,"retrieveBalances error"),this.log(this.consoleLog,this.reply.error),e.abrupt("return");case 64:this.log(this.consoleLog,this.reply),this.balance_delegated=z.format(g()(this.reply[0].delegationsTotal/this.baseamount)),this.balance_total=z.format(g()(this.reply[0].delegationsTotal/this.baseamount).add(g()(this.accInfo.balance/this.baseamount))),this.log(this.consoleLog,this.reply[0].delegationsTotal);case 68:this.readytodelegate=!0,this.connecting=!1,this.connected=!0;case 71:case"end":return e.stop()}},e,this,[[3,9],[21,27]])}));function t(){return e.apply(this,arguments)}return t}(),delegate:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){var t,s,a,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.error="",!(this.delegation>this.balance_available)){e.next=5;break}return this.error="You cannot delegate more than available balance",this.isdelegating=!1,e.abrupt("return");case 5:if(!(this.delegation<=0)){e.next=9;break}return this.error="You need to delegate more than 0",this.isdelegating=!1,e.abrupt("return");case 9:return this.isdelegating=!0,t={chainId:this.chainId,path:this.myAddr.path,bech32:this.myAddr.bech32,pk:this.myAddr.pk},e.next=13,F.txCreateDelegate(t,this.validator,this.delegation*this.baseamount,"Delegation to ChainLayer.io");case 13:return s=e.sent,this.log(this.consoleLog,"Waiting for device to sign"),a="",e.prev=16,e.next=19,F.sign(s,t);case 19:a=e.sent,e.next=28;break;case 22:return e.prev=22,e.t0=e["catch"](16),this.log(this.consoleLog,e.t0),"Error: Transaction rejected"==e.t0?this.error="Transaction rejected":"Error: Cosmos app does not seem to be open"==e.t0?this.error="Ledger App does not seem to be open":this.error="Unknown Error",this.isdelegating=!1,e.abrupt("return");case 28:return this.log(this.consoleLog,"Broadcasting signed tx"),r="",e.prev=30,e.next=33,F.txSubmit(a);case 33:if(r=e.sent,!r.error){e.next=39;break}return this.error=r.error,this.log(this.consoleLog,r),this.isdelegating=!1,e.abrupt("return");case 39:e.next=47;break;case 41:return e.prev=41,e.t1=e["catch"](30),this.log(this.consoleLog,e.t1),"Error: Transaction rejected"==e.t1?this.error="Transaction rejected":this.error="Unknown Error",this.isdelegating=!1,e.abrupt("return");case 47:this.success="Delegation successfull! Please wait 30 seconds to refresh",this.log(this.consoleLog,r),this.isdelegating=!1;case 50:case"end":return e.stop()}},e,this,[[16,22],[30,41]])}));function t(){return e.apply(this,arguments)}return t}()}},V=M,K=Object(k["a"])(V,O,N,!1,null,null,null),Q=K.exports,W={name:"app",components:{IrisLedger:C,CosmosLedger:R,TerraLedger:Q},data:function(){return{cosmosStake:g()(0),terraStake:g()(0),irisStake:g()(0)}},methods:{}},J=W,G=(s("034f"),Object(k["a"])(J,r,n,!1,null,null,null)),H=G.exports,X=s("1881"),Z=s.n(X);a["a"].use(Z.a),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(H)}}).$mount("#app")},"64a9":function(e,t,s){}});
//# sourceMappingURL=app.d468c578.js.map