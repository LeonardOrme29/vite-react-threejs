import * as THREE from 'three'
import { useSelector } from 'react-redux';
import { CuadroIluminado } from './CuadroIluminado';
import { CuadroDoble } from './CuadroDoble';
import { CuadroBox } from './CuadroBox';
import { CuadroVidrio } from './CuadroVidrio';
import { CuadroCanva } from './CuadroCanva';

//CUANDO CARGA EL CUADRO PLANO HAY UN DELAY QUE ROMPE EL PROCESO POR UN INSTANTE
export const Mascara=()=>{
    const frame=useSelector(state=>state.buildFrame)
    if (frame.frame.tipoC==='plano') {
        return(<CuadroIluminado/>)
    }else if (frame.frame.tipoC==='box') {
        return(<CuadroBox/>)
    }else if (frame.frame.tipoC==='dVidrio') {
        return(<CuadroVidrio></CuadroVidrio>)
    }else if (frame.frame.tipoC==='dMarco') {
        return(<CuadroDoble/>)
    }else if (frame.frame.tipoC==='canva') {
        return(<CuadroCanva></CuadroCanva>)
    }

    else{
      return<></>
    }
}