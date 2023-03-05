const model = document.querySelector('.model');
const overlay = document.querySelector('.overlay');
const showButton = document.querySelectorAll('.showButton');
const closeButton = document.querySelector('.closeButton');

for(let i =0 ; i<showButton.length; i++)
{
    showButton[i].addEventListener('click', function()
    {
        model.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
}

const removeModel = function(){
    model.classList.add('hidden');
    overlay.classList.add('hidden');

}

closeButton.addEventListener('click', removeModel);
overlay.addEventListener('click', removeModel)

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape')
    {
        if(!model.classList.contains('hidden'))
        {
            removeModel();
        }
    }
})