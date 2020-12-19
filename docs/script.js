function strToMagnet()
{
    let str=new String(document.getElementById("source").value);
    let out=document.getElementById("out");
    let result=str.match(/[0-9a-zA-Z]{40}/g)
    for(let i=0;i<result.length;i++)
    {
        let ele=document.createElement("input");
        ele.value="magnet:?xt=urn:btih:"+result[i];
        out.appendChild(ele);
        out.appendChild(document.createElement("br"));
    }
    let items=out.childNodes;
    for(let i=0;i<items.length;i++)
    {
        if(items[i].nodeName=="INPUT")
        {
            items[i].onclick=()=>{items[i].select();document.execCommand("copy");}
        }
    }
}
function textClear()
{
    document.getElementById("source").value="";
    let out=document.getElementById("out");
    out.remove();
    // let outs=out.childNodes;
    // for(let i=0;i<outs.length;i++)
    // {
    //     out.removeChild(outs[i]);
    // }
    let newout=document.createElement("div");
    newout.id="out";
    document.body.appendChild(newout);
}