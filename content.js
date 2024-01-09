document.cookie = "last-change-contents=true; expires:999, path:'/"
$('html').on('mouseleave', ()=>{	//zostawiam to na wypadek gdyby ciasteczko nie zadziałało
	document.querySelector(".lastChanceCloseTrigger").click()
	document.querySelector(".last-chance").remove()
});	