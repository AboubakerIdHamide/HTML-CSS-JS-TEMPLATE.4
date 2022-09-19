// Global Variables
let HeaderUl=document.querySelector("header .container ul"),
Headerlis=document.querySelectorAll("header .container ul li"),
searchIcon=document.querySelector(".search-icon"),
searchInput=document.querySelector(".search-icon + input"),
menuI=document.querySelector(".brgrI"),
fspan=document.querySelector(".brgrI span:first-child"),
lspan=document.querySelector(".brgrI span:last-child"),
secondSpan=document.querySelector(".brgrI span:nth-child(2)"),
headerForm=document.querySelector("#hForm"),
plaIcon=document.querySelector("#playBtn")
;

//============================================== scrolling ============================
function toWhite(){
    let headerLinks=document.querySelectorAll("header ul li a")
    headerLinks.forEach((headerA)=>{
        headerA.style.color="white";
    })
}
window.onscroll = () => {
    if(window.scrollY <  784){
        toWhite();
        document.querySelector("a[href='#home']").style.color="#57c654";
    }
    else if(window.scrollY <  2712){
        toWhite();
        document.querySelector("a[href='#services']").style.color="#57c654";
    }else if(window.scrollY <  4328){
        toWhite();
        document.querySelector("a[href='#work']").style.color="#57c654";
    }
    else if(window.scrollY <  4986){
        toWhite();
        document.querySelector("a[href='#about']").style.color="#57c654";
    }
    else if(window.scrollY <  5984){
        toWhite();
        document.querySelector("a[href='#skills']").style.color="#57c654";
    }
    else if(window.scrollY <  6128){
        toWhite();
        document.querySelector("a[href='#contact']").style.color="#57c654";
    }
  };

//==============================================  search  =============================
searchIcon.addEventListener("click", ()=>{
    var m=window.matchMedia("(min-width: 768px)");
    if(m.matches){
        Headerlis.forEach((li)=>{
            li.classList.toggle("searchC");
        });
        searchInput.focus();
    }else{
        headerForm.submit();
    }
    })


//================================ Menu Icon =============================================
function myOwnToglle(){
    if(menuI.classList.contains("emm")){
        menuI.classList.remove("emm");
        secondSpan.style.display='block';
        secondSpan.style.removeProperty("position");
        fspan.style.removeProperty("position");
        lspan.style.removeProperty("position");
        fspan.style.cssText=`transform: rotate(0deg);`;
        lspan.style.cssText=`transform: rotate(0deg);`;
    }else{
        menuI.classList.add("emm");
        secondSpan.cssText='position: absolute;';
        secondSpan.style.display='none';
        fspan.style.cssText=`position: absolute;transform: rotate(50deg);background-color:#57c654;`;
        lspan.style.cssText=`position: absolute;transform: rotate(-50deg);background-color:#57c654;`;
    }
}

menuI.addEventListener("click", ()=>{
    myOwnToglle();
    HeaderUl.classList.toggle("showMenu");
})

Headerlis.forEach((li)=>{
    li.addEventListener("click", ()=>{
        var phoneMedia=window.matchMedia("(max-width: 768px)");
        if(phoneMedia.matches){
            myOwnToglle();
            HeaderUl.classList.toggle("showMenu");
        }
    })
});
// ============================== video ==================
let ex=true;
plaIcon.addEventListener("click", ()=>{
    if(ex==true){
        vContainer=document.querySelector(".video .container")
        document.getElementById("video-real").remove();
        video=document.createElement("video");
        video.src="images/videoT.mp4";
        video.id="video-real";
        vContainer.prepend(video)
        ex=false
    }
    if(plaIcon.classList.contains("fa-play")){
        plaIcon.classList.replace("fa-play", "fa-pause");
        document.querySelector("#video-real").play();
    }else{
        plaIcon.classList.replace("fa-pause", "fa-play");
        document.querySelector("#video-real").pause();
    }
})
let volumeIn=document.querySelector("#volume")
volumeIn.addEventListener("change", (e)=>{
    document.querySelector("#video-real").volume=volumeIn.value;
})


let addSpeed=document.querySelector("#addSp"),
minSpeed=document.querySelector("#minSp");

minSpeed.addEventListener('click', ()=>{
    document.querySelector("#video-real").defaultPlaybackRate+=1
})
addSpeed.addEventListener('click', ()=>{
    document.querySelector("#video-real").defaultPlaybackRate-=1
})

let socialI=document.querySelector(".video .container .ctrl-label .share-label i:first-of-type"),
labelIcons=document.querySelector(".video .container .ctrl-label .share-label .social");
socialI.addEventListener("click", ()=>{
    labelIcons.classList.toggle("socialUp")
})



// ======================== Gallary ========================
let all=document.querySelector(".all"),
photography=document.querySelector(".photography"),
graphic_design=document.querySelector(".graphic-design"),
app=document.querySelector(".app"),
programming=document.querySelector(".programming"),
web=document.querySelector(".web"),
gallary=document.querySelector(".gallery");

all.addEventListener("click", ()=>{
    let imgc=document.querySelectorAll(".img-c");
    imgc.forEach((img)=>{
            img.style.display="block"
    })
})

photography.addEventListener("click", ()=>{
    let imgc=document.querySelectorAll(".img-c");
    imgc.forEach((img)=>{
        img.style.display="block"
    })
    imgc.forEach((img, i)=>{
        if(i!=5){
            img.style.display="none"
        }
    })
})

graphic_design.addEventListener("click", ()=>{
    let imgc=document.querySelectorAll(".img-c");
    imgc.forEach((img)=>{
            img.style.display="block"
    })
    imgc.forEach((img, i)=>{
        if(i!=3 && i!=2){
            img.style.display="none"
        }
    })
})

app.addEventListener("click", ()=>{
    let imgc=document.querySelectorAll(".img-c");
    imgc.forEach((img)=>{
            img.style.display="block"
    })
    imgc.forEach((img, i)=>{
        if(i!=0){
            img.style.display="none"
        }
    })
})

programming.addEventListener("click", ()=>{
    let imgc=document.querySelectorAll(".img-c");
    imgc.forEach((img)=>{
            img.style.display="block"
    })
    imgc.forEach((img, i)=>{
        if(i!=1){
            img.style.display="none"
        }
    })
})


web.addEventListener("click", ()=>{
    let imgc=document.querySelectorAll(".img-c");
    imgc.forEach((img)=>{
            img.style.display="block"
    })
    imgc.forEach((img, i)=>{
        if(i!=4){
            img.style.display="none"
        }
    })
})