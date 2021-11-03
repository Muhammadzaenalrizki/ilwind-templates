import './style.css'

const hamburger=document.querySelector('#hamburger')

hamburger.addEventListener('click',function(){
	const navbar=document.querySelector('#navbar')
	if(navbar.classList.contains('block')){
		navbar.classList.remove('block')
		navbar.classList.add('hidden')
	}else{
		navbar.classList.remove('hidden')	
	navbar.classList.add('block')

	}
})