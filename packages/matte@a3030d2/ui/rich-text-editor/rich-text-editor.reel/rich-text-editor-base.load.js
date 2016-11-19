montageDefine("a3030d2","ui/rich-text-editor/rich-text-editor.reel/rich-text-editor-base",{dependencies:["montage/ui/component","./rich-text-sanitizer","../overlays/rich-text-linkpopup.reel","../overlays/rich-text-resizer.reel","montage/core/promise","montage/core/undo-manager"],factory:function(e,t){var n=e("montage/ui/component").Component,r=e("./rich-text-sanitizer").Sanitizer,i=e("../overlays/rich-text-linkpopup.reel").RichTextLinkPopup,a=e("../overlays/rich-text-resizer.reel").RichTextResizer,s=e("montage/core/promise").Promise,o=e("montage/core/undo-manager").defaultUndoManager;t.RichTextEditorBase=n.specialize({_COMMANDS:{enumerable:!1,value:null},COMMANDS:{enumerable:!1,get:function(){return this._COMMANDS||(this._COMMANDS=[{property:"bold"},{property:"underline"},{property:"italic"},{property:"strikeThrough"},{property:"baselineShift",method:this._baselineShiftGetState},{property:"justify",method:this._justifyGetState},{property:"listStyle",method:this._listStyleGetState},{property:"fontName",method:this._fontNameGetState},{property:"fontSize"},{property:"backColor"},{property:"foreColor"}]),this._COMMANDS}},_overlays:{enumerable:!1,value:void 0},_overlaySlot:{enumerable:!1,value:null},_activeOverlay:{enumerable:!1,value:null},_innerElement:{enumerable:!1,value:null},_originalDomContent:{value:null},_undoManager:{enumerable:!1,value:void 0},_isTyping:{enumerable:!1,value:!1},_startTyping:{enumerable:!1,value:function(){return this._doingUndoRedo?(this._isTyping=!1,void 0):(this._isTyping||(this._isTyping=!0,this.undoManager&&this.undoManager.register("Typing",s.resolve([this._undo,this,"Typing",this._innerElement]))),void 0)}},_stopTyping:{enumerable:!1,value:function(){this._isTyping&&(this._isTyping=!1)}},_hasSelectionChangeEvent:{enumerable:!1,value:null},_uniqueId:{enumerable:!1,value:Math.floor(1e3*Math.random())+"-"+Math.floor(1e3*Math.random())},_contentInitialized:{enumerable:!1,value:!1},_needsAssignOriginalContent:{enumerable:!1,value:!0},_needsAssingValue:{enumerable:!1,value:!1},_setCaretAtEndOfContent:{enumerable:!1,value:!1},_selectionChangeTimer:{enumerable:!1,value:null},_hasFocus:{enumerable:!1,value:!1},_needsFocus:{value:!1},_isActiveElement:{enumerable:!1,value:!1},_readOnly:{enumerable:!1,value:!1},_value:{enumerable:!1,value:""},_textValue:{enumerable:!1,value:""},delegate:{enumerable:!0,value:null},_sanitizer:{enumerable:!1,value:void 0},_allowDrop:{enumerable:!1,value:!0},_getState:{value:function(e,t){var n,r=document.activeElement,i=this._innerElement;return i&&!this["_"+e+"_locked"]?(i&&i!=r&&i.focus(),n=document.queryCommandValue(t),"true"==n&&(n=!0),"false"==n&&(n=!1),i&&i!=r&&r.focus(),n):this["_"+e]}},_genericCommandGetter:{value:function(e,t){var n="_"+e;return this[n]=this._getState(e,t),this[n]}},_genericCommandSetter:{value:function(e,t,n){var r=this._getState(e,t);r!==n&&this.doAction(t,"boolean"==typeof n?!1:n)}},_bold:{value:!1},_underline:{value:!1},_italic:{value:!1},_strikeThrough:{value:!1},_baselineShiftGetState:{enumerable:!1,value:function(){var e=document.activeElement,t=this._innerElement;return t&&!this._baselineShift_locked?(t!=e&&t.focus(),this._getState("baselineShift","subscript")?"subscript":this._getState("baselineShift","superscript")?"superscript":"baseline"):this._baselineShift}},_baselineShift:{value:"baseline"},_listStyleGetState:{enumerable:!1,value:function(){var e=document.activeElement,t=this._innerElement;return t&&!this._listStyle_locked?(t!=e&&t.focus(),this._getState("listStyle","insertorderedlist")?"ordered":this._getState("listStyle","insertunorderedlist")?"unordered":"none"):this._listStyle}},_listStyle:{value:"none"},_justifyGetState:{enumerable:!1,value:function(){var e=document.activeElement,t=this._innerElement;return t&&!this._justify_locked?(t!=e&&t.focus(),this._getState("justify","justifyleft")?"left":this._getState("justify","justifycenter")?"center":this._getState("justify","justifyright")?"right":this._getState("justify","justifyfull")?"full":"left"):this._justify}},_justify:{value:"left"},_fontNameGetState:{enumerable:!1,value:function(){var e=this._getState("fontName","fontname");return e&&(e=e.replace(/\"|\'/g,"")),e}},_fontName:{value:""},_fontSize:{value:0},_backColor:{value:""},_foreColor:{value:""},_updateStates:{enumerable:!0,value:function(){var e,t,n,r,i,a,s,o,l=this,c=this.COMMANDS,u=c.length;for(o=0;u>o;o++)e=c[o],"object"==typeof e&&(n=e.property,t=e.name||n.toLowerCase(),a=e.method||this._getState,s=this.getOwnPropertyChangeDescriptor(n),s&&(i=this["_"+n],r=a.call(this,n,t),r!==i&&(this["_"+n+"_locked"]=!0,this.dispatchBeforeOwnPropertyChange(n,i),this["_"+n]=r,this.dispatchOwnPropertyChange(n,r),l["_"+n+"_locked"]=!1)))}},enterDocument:{value:function(e){var t;e&&(t=this.element,t.classList.add("montage-Editor-container"),t.addEventListener("focus",this,!0),t.addEventListener("dragstart",this,!1),t.addEventListener("dragenter",this,!1),t.addEventListener("dragover",this,!1),t.addEventListener("drop",this,!1),t.addEventListener("dragend",this,!1),void 0===this._sanitizer&&(this._sanitizer=new r),void 0===this._undoManager&&(this._undoManager=o),void 0===this._overlays&&(this._overlays=[new a,new i]),this._callOverlays("initWithEditor",this,!0))}},draw:{enumerable:!1,value:function(){var e,t,n,r,i,a=this.element;if(this._needsAssingValue||this._needsAssignOriginalContent){if(e=this._innerElement=a.querySelector(".matte-Editor"),this._contentInitialized&&(a.replaceChild(e.cloneNode(!0),e),e=this._innerElement=a.querySelector(".matte-Editor")),e.setAttribute("contenteditable",this._readOnly?"false":"true"),e.classList.add("editor-"+this._uniqueId),e.innerHTML="",this._needsAssingValue)this._value&&!this._dirtyValue?e.innerHTML=this._value:this._textValue&&!this._dirtyTextValue&&(e.innerText?e.innerText=this._textValue:e.textContent=this._textValue);else if(this._needsAssignOriginalContent){if(t=this._originalDomContent,r=!1,t instanceof Element)e.appendChild(t),r=!0;else for(i=0;t&&(n=t[i]);i++)e.appendChild(n),r=!0;r&&(this._dirtyValue=!0,this._dirtyTextValue=!0)}this._adjustPadding(),this.markDirty(),this._needsAssingValue=!1,this._needsAssignOriginalContent=!1,this._contentInitialized=!0,this._setCaretAtEndOfContent=!0,this.hasFocus&&this.focus()}else e=this._innerElement;this._readOnly?(e.setAttribute("contentEditable","false"),a.classList.add("readonly")):(e.setAttribute("contentEditable","true"),a.classList.remove("readonly"))}},didDraw:{value:function(){if(this._needsFocus)if(this._innerElement.focus(),document.activeElement==this._innerElement)this._needsFocus=!1;else{var e=window.getComputedStyle(this.element);"hidden"==e.getPropertyValue("visibility")||"none"==e.getPropertyValue("display")?this._needsFocus=!1:this.needsDraw=!0}}},slotDidSwitchContent:{enumerable:!1,value:function(e,t,n,r,i){i&&"function"==typeof i.didBecomeInactive&&i.didBecomeInactive(),n&&"function"==typeof n.didBecomeActive&&n.didBecomeActive()}},_adjustPadding:{enumerable:!1,value:function(){var e=this._innerElement,t=0,n=0,r=function(e,i,a){var s,o=e?e.childNodes:[],l=o.length,c=e.offsetLeft,u=e.offsetTop;for(e.offsetParent&&(c+=i,u+=a),t>c&&(t=c),n>u&&(n=u),s=0;l>s;s++)r(o[s],c,u)};r(e,e.offsetLeft,e.offsetTop);var i=document.defaultView.getComputedStyle(e),a=i.paddingLeft,s=i.paddingTop;a=a.match(/%$/)?parseInt(a,10)*e.clientWidth:parseInt(a,10),s=s.match(/%$/)?parseInt(s,10)*e.clientHeight:parseInt(s,10),0>t&&(e.style.paddingLeft=-t-a+"px"),0>n&&(e.style.paddingTop=-n-s+"px")}},captureFocus:{enumerable:!1,value:function(){var e,t,n,r=this,i=this.element,a=this._innerElement;if(this.dispatchBeforeOwnPropertyChange("hasFocus",r._hasFocus),r._hasFocus=!0,this.dispatchOwnPropertyChange("hasFocus",r._hasFocus),e=a&&a===document.activeElement,e!=this._isActiveElement&&(this.dispatchBeforeOwnPropertyChange("isActiveElement",this._isActiveElement),r._isActiveElement=e,this.dispatchOwnPropertyChange("isActiveElement",this._isActiveElement)),this._setCaretAtEndOfContent){var s,o,l=this._lastInnerNode(),c=["#text","BR","IMG"];l&&(-1!==c.indexOf(l.nodeName)&&(l=l.parentNode),s=document.createRange(),o=l.childNodes?l.childNodes.length:0,s.setStart(l,o),s.setEnd(l,o),this._selectedRange=s),t=this._selectedRange,n=setInterval(function(){r._equalRange(r._selectedRange,t)&&a.scrollTop+a.offsetHeight!=a.scrollHeight&&(a.scrollTop=a.scrollHeight-a.offsetHeight)},10),setTimeout(function(){clearInterval(n)},1e3),this._setCaretAtEndOfContent=!1}if(i.addEventListener("blur",this,!0),i.addEventListener("input",this),i.addEventListener("keydown",this),i.addEventListener("keypress",this),i.addEventListener("cut",this),i.addEventListener("paste",this),i.addEventListener(window.Touch?"touchstart":"mousedown",this),document.addEventListener(window.Touch?"touchend":"mouseup",this),document.addEventListener("selectionchange",this,!1),null===this._hasSelectionChangeEvent){var r=this;setTimeout(function(){null===r._hasSelectionChangeEvent&&(r._hasSelectionChangeEvent=!1)},0)}this._hasSelectionChangeEvent===!1&&i.addEventListener("keydup",this),document.execCommand("enableObjectResizing",!1,!1),document.execCommand("styleWithCSS",!1,!0),this._updateStates()}},captureBlur:{enumerable:!1,value:function(){var e,t=this,n=this.element,r=this._innerElement;this.dispatchBeforeOwnPropertyChange("hasFocus",t._hasFocus),t._hasFocus=!1,this.dispatchOwnPropertyChange("hasFocus",t._hasFocus),e=r&&r===document.activeElement,e!=this._isActiveElement&&(this.dispatchBeforeOwnPropertyChange("isActiveElement",this._isActiveElement),t._isActiveElement=e,this.dispatchOwnPropertyChange("isActiveElement",this._isActiveElement)),this._selectionChangeTimer&&clearTimeout(this._selectionChangeTimer),n.removeEventListener("blur",this,!0),n.removeEventListener("input",this),n.removeEventListener("keydown",this),n.removeEventListener("keypress",this),n.removeEventListener("cut",this),n.removeEventListener("paste",this),n.removeEventListener(window.Touch?"touchstart":"mousedown",this),document.removeEventListener(window.Touch?"touchend":"mouseup",this),document.removeEventListener("selectionchange",this),this._hasSelectionChangeEvent===!1&&n.removeEventListener("keydup",this)}},handleKeydown:{enumerable:!1,value:function(e){-1!=["Left","Right","Up","Down","Home","End"].indexOf(e.keyIdentifier)&&this._stopTyping()}},handleKeypress:{enumerable:!1,value:function(){this._hasSelectionChangeEvent===!1&&this.handleSelectionchange(),this.markDirty()}},handleInput:{enumerable:!1,value:function(e){this._executingCommand||this._ignoreNextInputEvent||this._startTyping(),delete this._ignoreNextInputEvent,this._hasSelectionChangeEvent===!1&&this.handleSelectionchange(),this.handleDragend(e),this.markDirty()}},handleShortcut:{enumerable:!1,value:function(e,t){return this.doAction(t),!0}},handleMousedown:{enumerable:!1,value:function(e){this._savedSelection=this._selectedRange,this._callOverlays("mousedown"==e.type?"editorMouseDown":"editorTouchStart",e)}},handleMouseup:{enumerable:!1,value:function(e){this._equalRange(this._savedSelection,this._selectedRange)||this._stopTyping(),this._hasSelectionChangeEvent===!1&&this.handleSelectionchange(),this.handleDragend(e),this._callOverlays("mouseup"==e.type?"editorMouseUp":"editorTouchEnd",e)}},handleTouchstart:{enumerable:!1,value:function(){this.handleMousedown(event)}},handleTouchend:{enumerable:!1,value:function(){this.handleMouseup(event)}},handleSelectionchange:{enumerable:!1,value:function(){var e=this;null==this._hasSelectionChangeEvent&&(this._hasSelectionChangeEvent=!0),this._ignoreSelectionchange||this._equalRange(this._selectedRange,this._savedSelectedRange)||(this._savedSelectedRange=this._selectedRange,this._selectionChangeTimer&&clearTimeout(this._selectionChangeTimer),this._selectionChangeTimer=setTimeout(function(){e._updateStates(),e._dispatchEditorEvent("editorSelect")},100),this._callOverlays("editorSelectionDidChange",this._savedSelectedRange))}},handleDragstart:{enumerable:!1,value:function(e){var t=this._delegateMethod("canDrag");return t&&!t.call(this.delegate,this,e.srcElement)?(e.preventDefault(),e.stopPropagation(),void 0):(this._dragSourceElement=e.srcElement,void 0)}},handleDragenter:{enumerable:!1,value:function(e){this.hideOverlay();var t=this._delegateMethod("canDrop");this._allowDrop=t?t.call(this.delegate,this,e,this._dragSourceElement):!0,e.dataTransfer.dropEffect=this._allowDrop?"copy":"none"}},handleDragend:{enumerable:!1,value:function(){delete this._dragSourceElement,delete this._dragOverX,delete this._dragOverY,this.handleSelectionchange()}},handleDragover:{enumerable:!1,value:function(e){var t,n=this;this._dragSourceElement&&this._allowDrop||(e.dataTransfer.dropEffect=this._allowDrop?"copy":"none",e.preventDefault(),e.stopPropagation(),!this._allowDrop||e.x===this._dragOverX&&e.y===this._dragOverY||(this._dragOverX=e.x,this._dragOverY=e.y,this._ignoreSelectionchange=!0,document.caretRangeFromPoint?t=document.caretRangeFromPoint(e.x,e.y):e.rangeParent&&e.rangeOffset&&(t=document.createRange(),t.setStart(e.rangeParent,e.rangeOffset),t.setEnd(e.rangeParent,e.rangeOffset)),t&&(this._selectedRange=t),this._ignoreSelectionchangeTimer&&clearTimeout(this._ignoreSelectionchangeTimer),this._ignoreSelectionchangeTimer=setTimeout(function(){delete n._ignoreSelectionchange,n._ignoreSelectionchangeTimer=null},0)))}},handleDrop:{enumerable:!1,value:function(e){var t,n,r,i,a,o,l=this,c=e.dataTransfer.files,u=c.length;if(this._dragSourceElement)return this._stopTyping(),this.undoManager&&this.undoManager.register("Move",s.resolve([this._undo,this,"Move",this._innerElement])),this._ignoreNextInputEvent=!0,this.handleDragend(e),this.handleSelectionchange(),void 0;if(e.preventDefault(),e.stopPropagation(),u)for(i=0;u>i;i++)t=c[i],a=this._delegateMethod("shouldDropFile"),o=!0,window.FileReader?(r=new FileReader,r.onload=function(){n=r.result,a&&(o=a.call(l.delegate,l,t,n)),o===!0?t.type.match(/^image\//i)&&(l.execCommand("insertimage",!1,n,"Drop"),l.markDirty()):"string"==typeof o&&(l.execCommand("inserthtml",!1,o,"Drop"),l.markDirty())},r.onprogress=function(){},r.onerror=function(){},r.readAsDataURL(t)):(a&&(o=a.call(this.delegate,this,t)),"string"==typeof o&&(l.execCommand("inserthtml",!1,o,"Drop"),l.markDirty()));else{if(n=e.dataTransfer.getData("text/html"))this._sanitizer&&(n=this._sanitizer.willInsertHtmlData(n,this._uniqueId));else if(n=e.dataTransfer.getData("text/plain")||e.dataTransfer.getData("text")){var h=document.createElement("div");h.innerText?h.innerText=n:h.textContent=n,n=h.innerHTML}if(n){var o,a=this._delegateMethod("shouldDrop");a?(o=a.call(this.delegate,this,e,n,"text/html"),n=o===!0?n.replace(/\<meta [^>]+>/gi,""):o===!1?null:o):n=n.replace(/\<meta [^>]+>/gi,""),n&&n.length&&(this.execCommand("inserthtml",!1,n,"Drop"),this.markDirty())}}this.handleDragend(e)}},handleCut:{enumerable:!1,value:function(){this._stopTyping(),this.undoManager&&this.undoManager.register("Cut",s.resolve([this._undo,this,"Cut",this._innerElement])),this._ignoreNextInputEvent=!0}},handlePaste:{enumerable:!1,value:function(e){var t,n,r,i,a,s,o,l=this,c=e.clipboardData,u=c.getData("text/html");i=u&&u.match(/^(<meta [^>]*>|<html>)/i),u&&i?this._sanitizer&&(u=this._sanitizer.willInsertHtmlData(u,this._uniqueId)):(u=c.getData("text/plain")||c.getData("text"),u&&(r=document.createElement("div"),r.innerText?r.innerText=u:r.textContent=u,u=r.innerHTML)),u?(t=this._delegateMethod("shouldPaste"),t?(n=t.call(this.delegate,this,e,u,"text/html"),u=n===!0?u.replace(/\<meta [^>]+>/gi,""):n===!1?null:n):u=u.replace(/\<meta [^>]+>/gi,""),u&&u.length&&(this.execCommand("inserthtml",!1,u,"Paste"),this.markDirty())):c.items.length&&(a=c.items[0],"file"==a.kind&&a.type.match(/^image\/.*$/)&&(s=a.getAsFile(),n=!0,t=l._delegateMethod("shouldPasteFile"),window.FileReader?(o=new FileReader,o.onload=function(){u=o.result,t&&(n=t.call(l.delegate,l,s,u)),n===!0&&s.type.match(/^image\//i)&&(l.execCommand("insertimage",!1,u,"Paste"),l.markDirty())},o.onprogress=function(){},o.onerror=function(){},o.readAsDataURL(s)):t&&(n=t.call(this.delegate,this,s)))),e.preventDefault(),e.stopPropagation()}},handleAction:{enumerable:!1,value:function(e){var t=e.currentTarget,n=t.action||t.identifier,r=!1;n&&this.doAction(n,r)}},doAction:{enumerable:!0,value:function(e,t){this.execCommand(e,!1,t),this._updateStates()}},_undo:{enumerable:!1,value:function(e,t){var n=this._innerElement;t&&t!==n||(this._doingUndoRedo=!0,this._ignoreNextInputEvent=!0,document.execCommand("undo",!1,null),this.markDirty(),this.undoManager&&this.undoManager.register(e,s.resolve([this._redo,this,e,n])),this._doingUndoRedo=!1)}},_redo:{enumerable:!1,value:function(e,t){var n=this._innerElement;t&&t!==n||(this._doingUndoRedo=!0,this._ignoreNextInputEvent=!0,document.execCommand("redo",!1,null),this.markDirty(),this.undoManager&&this.undoManager.register(e,s.resolve([this._undo,this,e,n])),this._doingUndoRedo=!1)}},_execCommandLabel:{enumerable:!1,value:{bold:"Bold",italic:"Italic",underline:"Underline",strikethrough:"strikeThrough",subscript:"Subscript",superscript:"Superscript",indent:"Indent",outdent:"Outdent",insertorderedlist:"Ordered List",insertunorderedlist:"Unordered List",justifyleft:"Left Align",justifycenter:"Center",justifyright:"Right Align",justifyfull:"Justify",fontname:"Set Font",fontsize:"Set Size",forecolor:"Set Color",backcolor:"Set Color"}},_dispatchEditorEvent:{enumerable:!1,value:function(e,t){var n=document.createEvent("CustomEvent");n.initCustomEvent(e,!0,!1,void 0===t?null:t),n.type=e,this.dispatchEvent(n)}},_delegateMethod:{enumerable:!1,value:function(e){var t,n,r;return n="string"==typeof this.identifier?this.identifier+e.toCapitalized():e,(t=this.delegate)&&"function"==typeof(r=t[n])?r:null}},_callOverlays:{value:function(e,t,n){var r,i,a=this._activeOverlay;if(a&&"function"==typeof a[e]&&a[e](t)&&!n)return!0;for(r in this._overlays)if(i=this._overlays[r],i!==a&&"function"==typeof i[e]&&i[e](t)&&!n)return!0;return!1}},_nodeOffset:{enumerable:!1,value:function(e){var t,n=e.parentNode,r=n.childNodes;for(t in r)if(r[t]===e)return parseInt(t,10);return-1}},_lastInnerNode:{enumerable:!1,value:function(){for(var e=this._innerElement.childNodes,t=e.length,n=null;e&&(t=e.length);)n=e[t-1],e=n.childNodes;return n}},_selectedRange:{enumerable:!1,set:function(e){if(window.getSelection){var t=window.getSelection();t.removeAllRanges(),t.addRange(e)}else e.select()},get:function(){var e,t;if(window.getSelection?e=window.getSelection():document.selection&&(e=document.selection.createRange()),e.getRangeAt)return e.rangeCount?e.getRangeAt(0):document.createRange();var t=document.createRange();return t.setStart(e.anchorNode,e.anchorOffset),t.setEnd(e.focusNode,e.focusOffset),t}},_equalRange:{enumerable:!1,value:function(e,t){return e===t?!0:e&&t?e.startContainer==t.startContainer&&e.startOffset==t.startOffset&&e.endContainer==t.endContainer&&e.endOffset==t.endOffset:!1}},_innerText:{enumerable:!1,value:function(e){var t="",n=[],r="",i=!1,a=function(e){var t,s=e.nodeName;if(!s.match(/^(TITLE|STYLE|SCRIPT)$/)){for(i&&s.match(/^(P|DIV|BR|TR|LI)$/)&&(r+="\n"),t=e.firstChild;t;t=t.nextSibling)3==t.nodeType?(n.push(r+t.nodeValue),r="",i=!0):("BR"!=t.nodeName||t.nextSibling)&&a(t);i&&s.match(/^(TABLE|UL|OL)$/)&&(r+="\n")}};return e&&(a(e),t=n.join("")),t}},deserializedFromTemplate:{value:function(){this._originalDomContent=this.domContent}}})}});