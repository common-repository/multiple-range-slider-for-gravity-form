jQuery( document ).ready(function() {
    jQuery(document).on('gform_post_render', function(event, form_id, current_page){
        // console.log("sss");
        // code to trigger on form or form page render
        jQuery(".multiple_range_slider").each(function() {
            var step=jQuery(this).attr("step");
            var min=jQuery(this).attr("min");
            var max=jQuery(this).attr("max");   
            var prefixx=jQuery(this).attr("prefix");
            var prefixpos=jQuery(this).attr("sliderposition");
            var color=jQuery(this).attr("color");
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
                        min: imin,
                        max:imax,
                        animate:400,
                        range:true,
                        values:[imin,imax-9] 
                    })
                    .slider("pips", {
                        rest:false,
                        prefix:prefixx,
                    }) 
                    .slider("float", {
                        prefix:prefixx,
                    })
                    .on("slidechange", function(e,ui) {
                        curr.find("input").val(ui.values);
                    });
                }else{
                    jQuery(this).slider({
                        step:istep,
                        min: imin,
                        max:imax,
                        animate:400,
                        range:true,
                        values:[imin,imax-9] 
                    })
                    .slider("pips", {
                        rest:false,
                        suffix:prefixx,
                    }) 
                    .slider("float", {
                        suffix:prefixx,
                    })
                    .on("slidechange", function(e,ui) {
                        curr.find("input").val(ui.values);
                    });
                }
            }else{
                if(prefixpos == "left"){
                    jQuery(this).slider({
                        step:istep,
                        min:imin,
                        max:imax,
                        animate: 400,
                        range:true,
                        values: [imin,imax-9] 
                    })
                    .slider("pips", {
                        prefix:prefixx,
                        rest: "label",     
                    }) 
                    .slider("float", {
                        prefix:prefixx,
                    })
                  
                    .on("slidechange", function(e,ui) {
                        curr.find("input").val(ui.values);
                       
                    });
                }else{
                    jQuery(this).slider({
                        step:istep,
                        min: imin,
                        max:imax,
                        animate: 400,
                        range:true,
                        values: [imin,imax-9]       
                    })
                    .slider("pips", {
                        suffix:prefixx,
                        rest: "label",  
                       
                    }) 
                    .slider("float", {
                        suffix:prefixx,
                    })
                  
                    .on("slidechange", function(e,ui) {
                      curr.find("input").val(ui.values);
                    });
                }   
            }   
        });
    });
});