SET_DHTML("main"+MAXOFFLEFT+200+MAXOFFRIGHT+200+MAXOFFTOP+200+MAXOFFBOTTOM+200, "lefttop"+CURSOR_NW_RESIZE, "righttop", "rightbottom"+CURSOR_SE_RESIZE, "leftbottom"+CURSOR_SW_RESIZE);
  document.sig.x.value = dd.elements.main.w;
  document.sig.y.value = dd.elements.main.h;

var main = dd.elements.main;
var lt = dd.elements.lefttop;
var rt = dd.elements.righttop;
var rb = dd.elements.rightbottom;
var lb = dd.elements.leftbottom;
var grips = [lt, rt, rb, lb];

function init()
{
   // main.setZ(main.z+1);
   // showGrips(); 
}

function my_PickFunc()
{
    if (dd.obj.name != "main")
    {
        var i = 4; while (i--)
        {
            if (grips[i] != dd.obj)
                grips[i].hide();
        }
    } 
}

function my_DropFunc()
{
    showGrips();
    document.sig.x.value = rb.x-lb.x;
    document.sig.y.value =  rb.y-rt.y;
}

function my_DragFunc()
{
    if (dd.obj == rb)
    {
        main.resizeTo(rb.x-lb.x, rb.y-rt.y);
    }
    else if (dd.obj == rt)
    {
        main.resizeTo(rt.x-lt.x, rb.y-rt.y);
        main.moveTo(rt.x-main.w+rt.w/2, rt.y+rt.h/2);
    }
    else if (dd.obj == lb)
    {
        main.moveTo(lb.x+lb.w/2, lt.y+lt.h/2);
        main.resizeTo(rb.x-lb.x, lb.y-lt.y);
    }
    else if (dd.obj == lt)
    {
        main.moveTo(lt.x+lt.w/2, lt.y+lt.h/2);
        main.resizeTo(rt.x-lt.x, lb.y-lt.y);
    }
}

function showGrips()
{
    moveGripsToCorners();
    var i = 4; while(i--)
    {
        grips[i].setZ(main.z+1);
        grips[i].show();
    }
}

function moveGripsToCorners()
{
    lt.moveTo(main.x-lt.w/2, main.y-lt.h/2);
    rt.moveTo(main.x+main.w-lt.w/2, main.y-lt.h/2);
    rb.moveTo(main.x+main.w-lt.w/2, main.y+main.h-lt.h/2);
    lb.moveTo(main.x-lt.w/2, main.y+main.h-lt.h/2);
}
 showGrips();

