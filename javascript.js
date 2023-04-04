/*function validar (Usuario, Senha){
    if (label.getAttruibute(Usuario ==='luciano') && (Senha === '1234')){
        return true;
    }else{
        return false;
    }
}
 let Usuario = 'luciano';
 let Senha = '1234';
 let validação = validar(Usuario, Senha);
 
 if (validação){
    console.log (`acesso concedido` );
 }else{
    console.log(`acesso negado`)
 }*/

 function clicou (){
    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;

    if (login == 'luciano' && senha == 'luciano'){
        alert('sucesso')
        location.href = "burgertime.html";
    }else{
        alert('usuario ou senha incorreta');
    }
 }