montageDefine("17d80b2","ui/video.reel/video",{dependencies:["montage/core/core","montage/ui/component","montage/composer/press-composer","montage/core/media-controller","montage/ui/base/abstract-video"],factory:function(e,t){var n=e("montage/core/core").Montage;e("montage/ui/component").Component;var i=e("montage/composer/press-composer").PressComposer;e("montage/core/media-controller").MediaController;var r=e("montage/ui/base/abstract-video").AbstractVideo;t.Video=n.create(r,{constructor:{value:function(){r.constructor.call(this),this.addPathChangeListener("videoController.status",this,"handleControllerStatusChange")}},enterDocument:{value:function(e){r.enterDocument&&r.enterDocument.call(this,e),e&&(this.setupFirstPlay(),this.addOwnPropertyChangeListener("src",this),this.addOwnPropertyChangeListener("posterSrc",this))}},prepareForActivationEvents:{value:function(){this._pressComposer.addEventListener("pressStart",this,!1),this._pressComposer.addEventListener("press",this,!1),this._pressComposer.addEventListener("pressCancel",this,!1)}},handlePlayAction:{value:function(){this.loadMedia(),this.videoController.play(),this.classList.remove("digit-Video--firstPlay")}},handleVideoPress:{value:function(){this.videoController.status===this.videoController.EMPTY&&(this.loadMedia(),this.classList.remove("digit-Video--firstPlay"),this._pressComposer.unload(),this._pressComposer.removeEventListener("pressStart",this,!1),this._pressComposer.removeEventListener("press",this,!1),this._pressComposer.removeEventListener("pressCancel",this,!1),this._pressComposer=null)}},handleTouchstart:{value:function(){this.clearHideControlsTimeout(),this.classList.add("digit-Video--showControls"),document.addEventListener("touchend",this,!1)}},handleTouchend:{value:function(){this.setHideControlsTimeout()}},handleMousedown:{value:function(){this.clearHideControlsTimeout(),this.classList.add("digit-Video--showControls"),document.addEventListener("mouseup",this,!1)}},handleMouseup:{value:function(){this.setHideControlsTimeout()}},handleControllerStatusChange:{value:function(e){this.videoController&&(this._firstPlay||e===this.videoController.PLAYING?this._firstPlay&&e===this.videoController.PLAYING&&this.doFirstPlay():(this.clearHideControlsTimeout(),this.classList.add("digit-Video--showControls")))}},handleSrcChange:{value:function(){var e=this.mediaElement,t=document.createElement("video");t.className=e.className,this.element.replaceChild(t,e),this.mediaElement=t,this.setupFirstPlay()}},handlePostersrcChange:{value:function(){this.showPoster()}},setupFirstPlay:{value:function(){this.element.removeEventListener("touchstart",this,!1),this.element.removeEventListener("mousedown",this,!1),this._firstPlay=!0,this.videoController.stop(),this.classList.add("digit-Video--firstPlay"),this.classList.remove("digit-Video--showControls"),this._pressComposer=i.create(),this._pressComposer.identifier="video",this.addComposerForElement(this._pressComposer,this.mediaElement),this.showPoster()}},draw:{value:function(){r.draw&&r.draw.call(this),this.supportsFullScreen?this.isFullScreen?this.element.classList.add("fullscreen"):this.element.classList.remove("fullscreen"):this.element.classList.remove("fullscreen")}},doFirstPlay:{value:function(){this.element.addEventListener("touchstart",this,!1),this.element.addEventListener("mousedown",this,!1),this._firstPlay=!1}},setHideControlsTimeout:{value:function(){var e=this;this.clearHideControlsTimeout(),this._hideControlsTimeout=setTimeout(function(){e.classList.remove("digit-Video--showControls")},2500)}},clearHideControlsTimeout:{value:function(){this._hideControlsTimeout&&clearTimeout(this._hideControlsTimeout)}},_firstPlay:{value:!0},_hideControlsTimeout:{value:null}})}});