Function.prototype.call2=function(context){
    var context=context||window ;//有可能传进来的是null
    context.fn=this;
    var args=[];
    for(var i=1;i<arguments.length;i++){
        args.push("arguments["+i+"]")
    }
    args = args.join(",");
    var result=eval("context.fn("+args+")");
    // delete context.fn;
    return result
}

function add(a,b){
    return a+b
}
console.log(add.call2(null,1,2))

var demo=document.getElementById("demo");
console.log(12222,demo);
traversal(demo);
function traversal(node) {
    //对node的处理
    if (node && node.nodeType === 1) {
        console.log(node.tagName);
    }
    var i = 0,
        childNodes = node.childNodes,
        item;
    for (; i < childNodes.length; i++) {
        item = childNodes[i];
        if (item.nodeType === 1) {
            //递归先序遍历子节点
            traversal(item);
        }
    }
}


function getElement(node){
    if(node&& node.nodeType===1){
        console.log(node.tagName)
    }
    var item,
        childNodes=node.childNodes;
        for(var i=0;i<childNodes.length;i++){
            item=childNodes[i];
            if(item.nodeType===1){
                getElement(item)
            }
        }
}