// basic interactions
console.log('App loaded');
// progressive enhancement for dialogs
document.addEventListener('click', e=>{
  const open = e.target.closest('[data-open-dialog]');
  if(open){
    const id = open.getAttribute('data-open-dialog');
    document.getElementById(id)?.showModal?.();
  }
});
