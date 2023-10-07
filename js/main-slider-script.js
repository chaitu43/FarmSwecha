    
var revapi2,
    tpj;    
(function() {           
    if (!/loaded|interactive|complete/.test(document.readyState)) document.addEventListener("DOMContentLoaded",onLoad); else onLoad();  
    function onLoad() {             
        if (tpj===undefined) { tpj = jQuery; if("off" == "on") tpj.noConflict();}
    if(tpj("#rev_slider_one").revolution == undefined){
        revslider_showDoubleJqueryError("#rev_slider_one");
    }else{
        revapi2 = tpj("#rev_slider_one").show().revolution({
            sliderType:"standard",
            jsFileLocation:"plugins/revolution/js/",
            sliderLayout:"fullwidth",
            dottedOverlay:"none",
            delay:6000,
            navigation: {
                keyboardNavigation:"off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation:"off",
                            mouseScrollReverse:"default",
                onHoverStop:"on",
                touch:{
                    touchenabled:"on",
                    touchOnDesktop:"off",
                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                }
                ,
                arrows: {
                    style:"uranus",
                    enable:true,
                    hide_onmobile:false,
                    hide_onleave:true,
                    hide_delay:200,
                    hide_delay_mobile:1200,
                    tmp:'',
                    left: {
                        h_align:"left",
                        v_align:"center",
                        h_offset:20,
                        v_offset:0
                    },
                    right: {
                        h_align:"right",
                        v_align:"center",
                        h_offset:20,
                        v_offset:0
                    }
                }
            },
            visibilityLevels:[1240,1024,778,480],
            responsiveLevels:[1200,1040,778,480],
            gridheight:[850,850,850,850],
            gridwidth:[1920,1920,1280,800],
            lazyType:"none",
            shadow:0,
            spinner:"spinner2",
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",
            autoHeight:"off",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
                simplifyAll:"off",
                nextSlideOnWindowFocus:"off",
                disableFocusListener:false,
            }
        });
    }; /* END OF revapi call */
    
 }; /* END OF ON LOAD FUNCTION */
}()); /* END OF WRAPPING FUNCTION */