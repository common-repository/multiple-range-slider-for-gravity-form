jQuery( document ).ready(function() {
    jQuery(document).on('gform_post_render', function(event, form_id, current_page){
        // console.log("label");
        // code to trigger on form or form page render
        jQuery(".custom_label_range_slider").each(function() {
            var prefixx=jQuery(this).attr("prefix");
            var prefixpos=jQuery(this).attr("sliderposition");
            var sliderdisplay=jQuery(this).attr("slidershow");
            var rangeshow=jQuery(this).attr("rangeshow");
            var label=jQuery(this).attr("label");
            var rainbow =label.split(',');

            var curr = jQuery(this);
            if(sliderdisplay == "single_slider"){
                if(rangeshow=="disable"){
                    if(prefixpos == 'left'){
                        jQuery(this).slider({
                            range: "min",
                            min: 0,
                            max:rainbow.length-1,
                            animate: 400
                        })
                        .slider("pips", {
                            rest:false,
                            labels:rainbow,
                            prefix:prefixx,
                        }) 
                        .slider("float", {
                            labels: rainbow,
                            prefix:prefixx,
                        })
                        .on("slidechange", function(e,ui) {
                            curr.find("input").val(rainbow[ui.value]);
                        });
                    }else{
                        jQuery(this).slider({
                            range: "min",
                            min: 0,
                            max:rainbow.length-1,
                            animate: 400
                        })
                        .slider("pips", {
                            rest:false,
                            labels:rainbow,
                            suffix:prefixx,
                        }) 
                        .slider("float", {
                            labels: rainbow,
                            suffix:prefixx,
                        })
                        .on("slidechange", function(e,ui) {
                            curr.find("input").val(rainbow[ui.value]);
                        });
                    }
                }else{
                    if(prefixpos == 'left'){
                        jQuery(this).slider({
                            range: "min",
                            min: 0,
                            max:rainbow.length-1,
                            animate: 400
                        })
                        .slider("pips", {
                            rest: "label",
                            labels:rainbow,
                            prefix:prefixx,
                        }) 
                        .slider("float", {
                            labels: rainbow,
                            prefix:prefixx,
                        })
                        .on("slidechange", function(e,ui) {
                            curr.find("input").val(rainbow[ui.value]);
                        });
                    }else{
                        jQuery(this).slider({
                            range: "min",
                            min: 0,
                            max:rainbow.length-1,
                            animate: 400
                        })
                        .slider("pips", {
                            rest: "label",
                            labels:rainbow,
                            suffix:prefixx,
                        }) 
                        .slider("float", {
                            labels: rainbow,
                            suffix:prefixx,
                        })
                        .on("slidechange", function(e,ui) {
                            curr.find("input").val(rainbow[ui.value]);
                        });
                    }
                } 
            }else if(sliderdisplay == "double_slider"){
                var min = 0;
                var max = rainbow.length - 1;
                if(rangeshow=="disable"){
                    if(prefixpos == 'left'){
                        jQuery(this).slider({
                            min: min,
                            max:max,
                            animate:400,
                            range:true,
                            values:[min,max] 
                        })
                        .slider("pips", {
                            rest:false,  
                            labels:rainbow,  
                            prefix:prefixx,
                        }) 
                        .slider("float", {
                            labels: rainbow,
                            prefix:prefixx,
                        })
                        .on("slidechange", function(e,ui) {
                            curr.find("input").val(rainbow[ui.values[0]]+"-"+rainbow[ui.values[1]]); 
                        });
                    }else{
                        jQuery(this).slider({
                            min: min,
                            max:max,
                            animate:400,
                            range:true,
                            values:[min,max] 
                        })
                        .slider("pips", {
                            rest:false,  
                            labels:rainbow,  
                            suffix:prefixx,
                        }) 
                        .slider("float", {
                            labels: rainbow,
                            suffix:prefixx,
                        })
                        .on("slidechange", function(e,ui) {
                            curr.find("input").val(rainbow[ui.values[0]]+"-"+rainbow[ui.values[1]]); 
                        });
                    }
                }else{
                    if(prefixpos == 'left'){
                        jQuery(this).slider({
                            min: min,
                            max:max,
                            animate:400,
                            range:true,
                            values:[min,max] 
                        })
                        .slider("pips", {
                            rest: "label",   
                            labels:rainbow,  
                            prefix:prefixx,
                        }) 
                        .slider("float", {
                            labels: rainbow,
                            prefix:prefixx,
                        })
                        .on("slidechange", function(e,ui) {
                            curr.find("input").val(rainbow[ui.values[0]]+"-"+rainbow[ui.values[1]]); 
                        });
                    }else{
                        jQuery(this).slider({
                            min: min,
                            max:max,
                            animate:400,
                            range:true,
                            values:[min,max] 
                        })
                        .slider("pips", {
                            rest: "label",   
                            labels:rainbow,  
                            suffix:prefixx,
                        }) 
                        .slider("float", {
                            labels: rainbow,
                            suffix:prefixx,
                        })
                        .on("slidechange", function(e,ui) {
                            curr.find("input").val(rainbow[ui.values[0]]+"-"+rainbow[ui.values[1]]); 
                        });
                    }
                }
            }
        });
    });
});