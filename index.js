const faders=document.querySelectorAll(".qualification-items");
const fadeskills=document.querySelectorAll(".animation2");
const projectanimation=document.querySelectorAll(".items");
const fadeonScroll=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(!entry.isIntersecting)
        return;
    else{
        entry.target.classList.add("appear2");
        fadeonScroll.unobserve(entry.target);
    }
    })
},{
    threshold: 1,
}
)

faders.forEach((fader)=>{
    fadeonScroll.observe(fader);
})

const fadeonScroll2=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(!entry.isIntersecting)
        return;
    else{
        entry.target.classList.add("appear3");
        fadeonScroll.unobserve(entry.target);
    }
    })
},{
    threshold: 1,
}
)

fadeskills.forEach((fader2)=>{
    fadeonScroll2.observe(fader2);
})

const projectscroll=new IntersectionObserver((entries)=>{
    let count=1;
    entries.forEach((entry)=>{
        if(!entry.isIntersecting)
        return;
    else{
        entry.target.classList.add(`projectappear${count++}`);
        projectscroll.unobserve(entry.target);
    }
    })
},{
    threshold:1,
    rootMargin:"-50px"
})

projectanimation.forEach((item)=>{
    projectscroll.observe(item);
})


let circleprogress=document.querySelector(".circle1");
let progressvalue=document.querySelector(".innervalue1");

let progressStartvalue=0;
let progressEndvalue=75;

let progress = setInterval(()=>{
    progressStartvalue++;

    progressvalue.textContent=`${progressStartvalue}%`;
    circleprogress.style.background = `conic-gradient(rgb(255, 191, 0) ${progressStartvalue*3.6}deg, rgb(31, 31, 31) 0deg)`;
    if(progressStartvalue==progressEndvalue)
    {
        clearInterval(progress);
    }
},30);

let circleprogress2=document.querySelector(".circle2");
let progressvalue2=document.querySelector(".innervalue2");

let progressStartvalue2=0;
let progressEndvalue2=80;

let progress2 = setInterval(()=>{
    progressStartvalue2++;
    circleprogress2.style.background = `conic-gradient(rgb(255, 191, 0) ${progressStartvalue2*3.6}deg, rgb(31, 31, 31) 0deg)`;
    progressvalue2.textContent=`${progressStartvalue2}%`;
    if(progressStartvalue2==progressEndvalue2)
    {
        clearInterval(progress2);
    }
},30);

let circleprogress3=document.querySelector(".circle3");
let progressvalue3=document.querySelector(".innervalue3");

let progressStartvalue3=0;
let progressEndvalue3=100;

let progress3 = setInterval(()=>{
    progressStartvalue3++;
    circleprogress3.style.background = `conic-gradient(rgb(255, 191, 0) ${progressStartvalue3*3.6}deg, rgb(31, 31, 31) 0deg)`;
    progressvalue3.textContent=`${progressStartvalue3}%`;
    if(progressStartvalue3==progressEndvalue3)
    {
        clearInterval(progress3);
    }
},25);


const text = document.querySelector(".sec-text");

        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "Freelancer";
            }, 0);
            setTimeout(() => {
                text.textContent = "Blogger";
            }, 4000);
            setTimeout(() => {
                text.textContent = "YouTuber";
            }, 8000); //1s = 1000 milliseconds
        }

        textLoad();
        setInterval(textLoad, 12000);