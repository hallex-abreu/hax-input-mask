function cpfMask(value){
  return value
  .replace(/\D/g, '')
  .replace(/(\d{3})(\d)/, '$1.$2')
  .replace(/(\d{3})(\d)/, '$1.$2')
  .replace(/(\d{3})(\d{1,2})/, '$1-$2')
  .replace(/(-\d{2})\d+?$/, '$1')
}

function ufMask(value){
  return value
  .replace(/(\d{2})\d+?$/, '$1')
}

function cepMask(value){
  return value
  .replace(/\D/g, '')
  .replace(/(\d{2})(\d)/, '$1.$2')
  .replace(/(\d{3})(\d)/, '$1-$2')
  .replace(/(-\d{3})\d+?$/, '$1')
}

function dataMask(value){
  return value
  .replace(/\D/g, '') 
  .replace(/(\d{2})(\d)/, '$1/$2')
  .replace(/(\d{2})(\d)/, '$1/$2')
  .replace(/(\d{4})(\d)/, '$1')
}

function telefoneMask(value){
  return value
  .replace(/\D/g, '') 
  .replace(/(\d{2})(\d)/, '($1)$2')
  .replace(/(\d{5})(\d)/, '$1-$2')
  .replace(/(-\d{4})\d+?$/, '$1')
}

function dataMask(value){
  return value
  .replace(/\D/g, '') 
  .replace(/(\d{2})(\d)/, '$1/$2')
  .replace(/(\d{2})(\d)/, '$1/$2')
  .replace(/(\d{4})(\d)/, '$1')
}
function horaMask(value){
  return value
  .replace(/\D/g, '') 
  .replace(/(\d{2})(\d)/, '$1:$2')
  .replace(/(\d{2})(\d)/, '$1')
}

//Convertes
function converte_data_hora(data){
  if(data == '' || data == null){
    return data;
  }else{    
    const dt = new Date(data)
    return `${dt.getDate() < 10 ? `0${dt.getDate()}` :dt.getDate()}/${dt.getMonth() + 1 < 10? `0${dt.getMonth() + 1}`: dt.getMonth() + 1}/${dt.getFullYear()} ${dt.getHours() < 10 ? `0${dt.getHours()}` : dt.getHours()}:${dt.getMinutes() < 10 ? `0${dt.getMinutes()}` : dt.getMinutes()}`
  }
}

function converte_data(data){
  if(data == '' || data == null){
    return data;
  }else{    
    const dt = new Date(data)
    return `${dt.getDate() < 10 ? `0${dt.getDate()}` :dt.getDate()}/${dt.getMonth() + 1 < 10? `0${dt.getMonth() + 1}`: dt.getMonth() + 1}/${dt.getFullYear()}` 
  }
}

function converte_hora(data){
  if(data == '' || data == null){
    return data;
  }else{    
    const dt = new Date(data)
    return `${dt.getHours() < 10 ? `0${dt.getHours()}` : dt.getHours()}:${dt.getMinutes() < 10 ? `0${dt.getMinutes()}` : dt.getMinutes()}` 
  }
}

function converte_data_envio(data){
  if(data == '' || data == null){
    return data;
  }else{    
    var arrDataExclusao = data.split('/');
    var stringFormatada = arrDataExclusao[2] + '/' + arrDataExclusao[1] + '/' + arrDataExclusao[0];
    
    return stringFormatada;     
  }
}

function soNumeroMask(value){
  return value
  .replace(/\D/g, '');
}

function convert_real(numero) {
  if(numero == '' || numero == null)
    return '';
  const moeda = String(numero);
  const formCurrency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  })
  return formCurrency.format(moeda)
}

export default {
  cpfMask,
  ufMask,
  cepMask,
  dataMask,
  telefoneMask,
  dataMask,
  horaMask,
  converte_data_hora,
  converte_data,
  converte_hora,
  converte_data_envio,
  soNumeroMask,
  convert_real
}