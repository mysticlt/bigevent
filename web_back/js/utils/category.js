var category = {
    show:function(callBack){
        $.get(urlList.category_show,function(result){
            callBack(result);
        })
    },

    add:function(name,slug,callBack){
        $.post(urlList.category_add,{name:name,slug:slug},function(result){
            callBack(result);
        })
    },
}