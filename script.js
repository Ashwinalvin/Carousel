const img = document.getElementById('img');
// now 4 id has name img so it creates a list img=[] has 4 entries

const imgs = document.getElementById('imgs');


let idx=0;
function run()
{
    idx++;
    if (idx > img.length-1)
    {
        idx=0;
    }
    imgs.style.transform = `translateX(${-idx * 500}px)`;
    setTimeout(run,2000);
    
}
setTimeout(run,1000);