somar = () => {
    var numa1 = window.document.getElementById('numa1')
    var numa2 = window.document.getElementById('numa2')
    var resa = window.document.getElementById('resa')
    var n1 = Number(numa1.value)
    var n2 = Number(numa2.value)
    var s = n1 + n2 
    resa.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong>${s}</strong>`
    }
    subtrair = () => {
        var Number. = window.document.getElementById('numa1')
        var numa2 = window.document.getElementById('numa2')
        var resa = window.document.getElementById('resa')
        var n1 = Number(numa1.value)
        var n2 = Number(numa2.value)
        var s = n1 + n2 
        resa.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong>${s}</strong>`
        }
    
    console.log('Curioso ne?')
     multiplicar = () =>  {
        var numm1 = window.document.getElementById('numm1')
        var numm2 = window.document.getElementById('numm2')
        var resm = window.document.getElementById('resm')
        var nn1 = Number(numm1.value)
        var nn2 = Number(numm2.value)
        var m =  nn1 * nn2
        resm.innerHTML = ` A multiplicação entre ${nn1} e ${nn2} é igual a <strong>${m}</strong>`
    }
    dividir = () => {
        var numd1 = window.document.getElementById('numd1')
        var numd2 = window.document.getElementById('numd2')
        var resd = window.document.getElementById('resd')
        var nnn1 = Number(numd1.value)
        var nnn2 = Number(numd2.value)
        var d = nnn1 / nnn2;
        resd.innerHTML = ` A divisão entre ${nnn1} e ${nnn2} é igual a <strong>${d}</strong`
    }
    exponenciar = () => {
        var nume1 = window.document.getElementById('nume1')
        var nume2 = window.document.getElementById('nume2')
        var rese = window.document.getElementById('rese')
        var nnnn1 = Number(nume1.value)
        var nnnn2 = Number(nume2.value)
        var e = nnnn1 ** nnnn2;
        if(nnnn2 == 2){
            rese.innerHTML = `${nnnn1} elevado ao quadrado é igual a ${e}  `
        }
        else{
        rese.innerHTML = ` A exponeciação de ${nnnn1} elevado a ${nnnn2} é igual a <strong>${e}</strong>`
    }}

    