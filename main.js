function resultado() {
	var ano = document.getElementById("dn")
	var idade = 2020 - Number(ano.value)
	var resultado = document.getElementById("sexo")
	var res = document.getElementById("res")
	var sexo = document.getElementsByName("sexo")
	var foto = document.getElementById("foto")
	var genero = ""
	var img = document.createElement("img")
	img.setAttribute("id", "foto")
	if (ano.value.length == 0 || ano.value >= 2021) {
		alert("[ERRO] Verifique os dados e tente novamente!")
	} else {
		if (sexo[0].checked) {
			genero = "Homem"
		} else if (sexo[1].checked) {
			genero = "Mulher"
		}
		img.setAttribute("src", "Jhon.jpg")
		img.style.width = "120px"
		res.style.textAlign = "center"
		res.innerHTML = `Detectamos ${genero} com ${idade} anos`
		res.appendChild(img)
	} 
}
