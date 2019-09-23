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

    del:function(id,callBack){
        $.post(urlList.category_del,{id,id},function(result){
            callBack(result);
        })
    },
}