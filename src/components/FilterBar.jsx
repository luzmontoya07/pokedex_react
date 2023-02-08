//barra para filtrar los pokemon de acuerdo a su tipo

import React,{ useContext } from "react";
import { PokemonContext } from '../context/PokemonContext';

export const FilterBar = () => {

    const { active, handleCheckbox } = useContext(PokemonContext);
 //checkbox que pueden marcar de acuerdo al tipo de pokemon que quieran ver

    return(
     <div className={`container-filters ${active ? 'active' : ''}`}>
    <div className='filter-by-type'>
        <span>Tipo</span>

        <div className='group-type'>
            <input
                type='checkbox'
                onChange={handleCheckbox} 
                name='grass'
                id='grass'
            />
            <label htmlFor='grass'>Planta / grass</label>
        </div>
        <div className='group-type'>
            <input
                type='checkbox'
                onChange={handleCheckbox}
                name='fire'
                id='fire'
            />
            <label htmlFor='fire'>Fuego / fire</label>
        </div>
        <div className='group-type'>
            <input
                type='checkbox'
                onChange={handleCheckbox}
                name='bug'
                id='bug'
            />
            <label htmlFor='bug'>Bicho / bug</label>
        </div>
        <div className='group-type'>
            <input
                type='checkbox'
                onChange={handleCheckbox}
                name='fairy'
                id='fairy'
            />
            <label htmlFor='fairy'>Hada / fairy</label>
        </div>
        <div className='group-type'>
            <input
                type='checkbox'
                onChange={handleCheckbox}
                name='dragon'
                id='dragon'
            />
            <label htmlFor='dragon'>Dragón</label>
        </div>
        <div className='group-type'>
            <input
                type='checkbox'
                onChange={handleCheckbox}
                name='shadow'
                id='shadow'
            />
            <label htmlFor='shadow'>Fantasma / shadow</label>
        </div>
        <div className='group-type'>
            <input
                type='checkbox'
                onChange={handleCheckbox}
                name='ground'
                id='ground'
            />
            <label htmlFor='ground'>Tierra / Ground</label>
        </div>
        <div className='group-type'>
            <input
                type='checkbox'
                onChange={handleCheckbox}
                name='normal'
                id='normal'
            />
            <label htmlFor='normal'>Normal </label>
        </div>
        <div className='group-type'>
            <input
                type='checkbox'
                onChange={handleCheckbox}
                name='psychic'
                id='psychic'
            />
            <label htmlFor='psychic'>Psíquico / psychic</label>
        </div>
        <div className='group-type'>
            <input
                type='checkbox'
                onChange={handleCheckbox}
                name='steel'
                id='steel'
            />
            <label htmlFor='steel'>Acero / steel</label>
        </div>
        <div className='group-type'>
            <input
                type='checkbox'
                onChange={handleCheckbox}
                name='dark'
                id='dark'
            />
            <label htmlFor='dark'>Siniestro / dark</label>
        </div>
        <div className='group-type'>
            <input
                type='checkbox'
                onChange={handleCheckbox}
                name='electric'
                id='electric'
            />
            <label htmlFor='electric'>Eléctrico / Electric</label>
        </div>
        <div className='group-type'>
            <input
                type='checkbox'
                onChange={handleCheckbox}
                name='fighting'
                id='fighting'
            />
            <label htmlFor='fighting'>Lucha / fighting</label>
        </div>
        <div className='group-type'>
            <input
                type='checkbox'
                onChange={handleCheckbox}
                name='flying'
                id='flying'
            />
            <label htmlFor='flying'>Volador / flying</label>
        </div>
        <div className='group-type'>
            <input
                type='checkbox'
                onChange={handleCheckbox}
                name='ice'
                id='ice'
            />
            <label htmlFor='ice'>Hielo / ice</label>
        </div>
        <div className='group-type'>
            <input
                type='checkbox'
                onChange={handleCheckbox}
                name='poison'
                id='poison'
            />
            <label htmlFor='poison'>Veneno / poison</label>
        </div>
        <div className='group-type'>
            <input
                type='checkbox'
                onChange={handleCheckbox}
                name='rock'
                id='rock'
            />
            <label htmlFor='rock'>Roca / rock</label>
        </div>
        <div className='group-type'>
            <input
                type='checkbox'
                onChange={handleCheckbox}
                name='water'
                id='water'
            />
            <label htmlFor='water'>Agua / water</label>
        </div>
    </div>
</div>
);
    
}