import './calculator.scss'
import { useState } from 'react';
import Button from '@mui/material/Button';

export function Calculator() {

    const [inputState, setInputState] = useState(false)

    function handleInput() {
        return setInputState(!inputState)
    }


    return (
        <div className="calculatorBody">
            <h3>Vložte informácie</h3>
            <div className='form'>
                <label>Hodinová mzda</label>
                <input
                    name="Money"
                    placeholder="Eur/Hod"
                    type='number'
                />
                <label>Počet odpracovaných hodín za mesiac</label>
                <input
                    name="Hours"
                    placeholder="Hod"
                    type='number'
                />
                <label>Odvody do Sociálnej poisťovne</label>
                <input
                    name="Social"
                    placeholder="Minimálna výška 187,78€"
                    type='number'
                />
                <label>Odvody do Zdravotnej poisťovne</label>
                <input
                    name="Health"
                    placeholder="Minimálna výška 84,77€"
                    type='number'
                />

            </div>
            <div className='confirmation'>
                <input
                    name="Checkbox"
                    type='checkbox'
                    onClick={handleInput}
                />
                <label id="warranty-limitation">Beriem na vedomie, že prevádzkovateľ tejto webovej stránky na informácie uvedené na tejto stránke neposkytuje žiadne záruky a nenesie žiadnu zodpovednosť za škody akéhokoľvek druhu súvisiace s obsahom na tejto webovej stránke!</label>
            </div>
            {inputState ? <Button variant="contained">Potvrdiť</Button> : <Button variant="contained" disabled>Potvrdiť</Button>}
        </div >
    )
}