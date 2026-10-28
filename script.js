'use strict';
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#site-nav');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');}));}
const year=document.querySelector('#year');if(year)year.textContent=new Date().getFullYear();
const form=document.querySelector('#quote-form');if(form){form.addEventListener('submit',event=>{event.preventDefault();if(!form.reportValidity())return;const name=document.querySelector('#name').value.trim();const property=document.querySelector('#property').value;const work=document.querySelector('#work').value.trim();const message=`Hi SG Reno Solution, I would like a quotation.\n${name?'Name: '+name+'\n':''}Property type: ${property}\nWork required: ${work}`;window.open('https://wa.me/6593405457?text='+encodeURIComponent(message),'_blank','noopener,noreferrer');});}
