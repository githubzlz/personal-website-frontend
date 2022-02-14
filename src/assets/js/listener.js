export function startOnresizeFun() {
    resize();
    window.onresize = resize;
}
export function resize(){
    // headerBack
    let back = document.getElementById('back');
    if(back){
        back.style.height = document.documentElement.clientHeight+"px";
    }
    // window-next
    let next = document.getElementById('window-next');
    if(next){
        next.style.top = document.documentElement.clientHeight-100 +"px";
    }
    // home_banner
    let items = document.getElementsByClassName('home_banner');
    if (items) {
        for (let i = 0; i < items.length; i++) {
            if (items[i]) {
                items[i].style.height = document.body.clientHeight + 'px';
            }
        }
    }
}
