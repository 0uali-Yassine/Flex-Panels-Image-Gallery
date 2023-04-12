let img1 = document.querySelector('.image_one');
let img2 = document.querySelector('.image_two');
let img3 = document.querySelector('.image_three');
let img4 = document.querySelector('.image_four');
let img5 = document.querySelector('.image_five');

let p1 = document.querySelector('.image_one p');
let p2 = document.querySelector('.image_two p');
let p3 = document.querySelector('.image_three p');
let p4 = document.querySelector('.image_four p');
let p5 = document.querySelector('.image_five p');

img1.style.transition = ' all 0.6s ease-out';
img2.style.transition = ' all 0.6s ease-out';
img3.style.transition = ' all 0.6s ease-out';
img4.style.transition = ' all 0.6s ease-out';
img5.style.transition = ' all 0.6s ease-out';
img1.addEventListener('mouseover',()=>{
    img1.style.width = '45%';
    img2.style.width = '20%';
    img3.style.width = '20%';
    img4.style.width = '20%';
    img5.style.width = '20%';
    p1.style.fontSize = '3rem';
    p2.style.fontSize = '1.5rem';
    p3.style.fontSize = '1.5rem';
    p4.style.fontSize = '1.5rem';
    p5.style.fontSize = '1.5rem';
    document.querySelector('.h1_one').style.top = '10px';
    document.querySelector('.h2_one').style.bottom = '10px';
});
img1.addEventListener('mouseout',()=>{
    img1.style.width = '20%';
    p1.style.fontSize = '1.5rem';
    document.querySelector('.h1_one').style.top = '-65px';
    document.querySelector('.h2_one').style.bottom = '-60px';
})
img2.addEventListener('mouseover',()=>{
    img1.style.width = '20%';
    img2.style.width = '45%';
    img3.style.width = '20%';
    img4.style.width = '20%';
    img5.style.width = '20%';
    p1.style.fontSize = '1.5rem';
    p2.style.fontSize = '3rem';
    p3.style.fontSize = '1.5rem';
    p4.style.fontSize = '1.5rem';
    p5.style.fontSize = '1.5rem';
    document.querySelector('.h1_two').style.top = '10px';
    document.querySelector('.h2_two').style.bottom = '10px';
});
img2.addEventListener('mouseout',()=>{
    img2.style.width = '20%';
    img1.style.fontSize = '1.5rem';
    p2.style.fontSize = '1.5rem';
    document.querySelector('.h1_two').style.top = '-65px';
    document.querySelector('.h2_two').style.bottom = '-60px';
    
});
img3.addEventListener('mouseover',()=>{
    img1.style.width = '20%';
    img2.style.width = '20%';
    img3.style.width = '45%';
    img4.style.width = '20%';
    img5.style.width = '20%';
    p1.style.fontSize = '1.5rem';
    p2.style.fontSize = '1.5rem';
    p3.style.fontSize = '3rem';
    p4.style.fontSize = '1.5rem';
    p5.style.fontSize = '1.5rem';
    document.querySelector('.h1_three').style.top = '10px';
    document.querySelector('.h2_three').style.bottom = '10px';
});
img3.addEventListener('mouseout',()=>{
    img3.style.width = '20%';
    p3.style.fontSize = '1.5rem';
    document.querySelector('.h1_three').style.top = '-65px';
    document.querySelector('.h2_three').style.bottom = '-60px';
});
img4.addEventListener('mouseover',()=>{
    img1.style.width = '20%';
    img2.style.width = '20%';
    img3.style.width = '20%';
    img4.style.width = '45%';
    img5.style.width = '20%';
    p1.style.fontSize = '1.5rem';
    p2.style.fontSize = '1.5rem';
    p3.style.fontSize = '1.5rem';
    p4.style.fontSize = '3rem';
    p5.style.fontSize = '1.5rem';
    document.querySelector('.h1_four').style.top = '10px';
    document.querySelector('.h2_four').style.bottom = '10px';
});
img4.addEventListener('mouseout',()=>{
    img4.style.width = '20%';
    p4.style.fontSize = '1.5rem';
    document.querySelector('.h1_four').style.top = '-65px';
    document.querySelector('.h2_four').style.bottom = '-85px';
});
img5.addEventListener('mouseover',()=>{
    img1.style.width = '20%';
    img2.style.width = '20%';
    img3.style.width = '20%';
    img4.style.width = '20%';
    img5.style.width = '45%';
    p1.style.fontSize = '1.5rem';
    p2.style.fontSize = '1.5rem';
    p3.style.fontSize = '1.5rem';
    p4.style.fontSize = '1.5rem';
    p5.style.fontSize = '3rem';
    document.querySelector('.h1_five').style.top = '10px';
    document.querySelector('.h2_five').style.bottom = '10px';
});
img5.addEventListener('mouseout',()=>{
    img5.style.width = '20%';
    p5.style.fontSize = '1.5rem';
    document.querySelector('.h1_five').style.top = '-65px';
    document.querySelector('.h2_five').style.bottom = '-60px';
});