jQuery( document ).ready(function() {
    jQuery(document).on('gform_post_render', function(event, form_id, current_page){
        // console.log("sss");
        // code to trigger on form or form page render
        jQuery(".single_range_slider").each(function() {
            var step=jQuery(this).attr("step");
            var min=jQuery(this).attr("min");
            var max=jQuery(this).attr("max");   
            var prefixx=jQuery(this).attr("prefix");
            var prefixpos=jQuery(this).attr("sliderposition");
            var color=jQuery(this).attr("color");
            var defaultval=jQuery(this).attr("defaultval"); 
            var tooltipposition=jQuery(this).attr("tooltipposition");
            var rangeshow=jQuery(this).attr("rangeshow");
            var istep = parseInt(step);
            var imin = parseInt(min);
            var imax = parseInt(max);

            var curr = jQuery(this);
            if(rangeshow=="disable"){
                if(prefixpos == "left"){
                    jQuery(this).slider({
                        step:istep,
                        range: "min",
                        min: imin,
                        max:imax,
                        animate: 400,
                        value: defaultval 
                    })
                    .slider("pips", {
                        rest:false,
                        prefix:prefixx,
                    }) 
                    .slider("float", {
                       prefix:prefixx,
                    })
                    .on("slidechange", function(e,ui) {
                        curr.find("input").val(ui.value);
                    });
                }else{
                    jQuery(this).slider({
                        step:istep,
                        range: "min",
                        min: imin,
                        max:imax,
                        animate: 400,
                        value: defaultval 
                    })
                    .slider("pips", {
                        rest:false,
                        suffix:prefixx,
                    }) 
                    .slider("float", {
                        suffix:prefixx,
                    })
                    .on("slidechange", function(e,ui) {
                        curr.find("input").val(ui.value);
                    });
                }
                    
            }else{
                if(prefixpos == "left"){
                    jQuery(this).slider({
                        range: "min",
                        step:istep,
                        max:imax ,
                        animate: 400,
                        min:imin,
                        value:defaultval
                    })
                    .slider("pips", {
                        prefix:prefixx,
                        rest: "label",
                      
                    }) 
                    .slider("float", {
                        prefix:prefixx,
                    })
                    .on("slidechange", function(e,ui) {
                        curr.find("input").val(ui.value);
                    }); 
                }else{
                    jQuery(this).slider({
                        range: "min",
                        step:istep,
                        min: imin,
                        max:imax,
                        animate: 400,
                        value: defaultval
                    })
                    .slider("pips", {
                        suffix:prefixx,
                        rest: "label",
                    }) 
                    .slider("float", {
                        suffix:prefixx,
                    })
                    .on("slidechange", function(e,ui) {
                        curr.find("input").val(ui.value);
                    }); 
                }
            } 
        });
    });
});