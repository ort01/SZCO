import './calculator.scss'
import { useState } from 'react';
import Button from '@mui/material/Button';
import { Tooltip } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import HelpIcon from '@mui/icons-material/Help';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { grey } from '@mui/material/colors';

export function Calculator() {

    const getTooltip = (tooltipText: string): ReactJSXElement => {
        return (
            <Tooltip className='tooltip' title={tooltipText}>
                <IconButton sx={{ color: grey[500] }}>
                    <HelpIcon sx={{ fontSize: 15 }} />
                </IconButton>
            </Tooltip>
        )
    }

    const [inputState, setInputState] = useState(false)

    function handleInput() {
        return setInputState(!inputState)
    }


    return (
        <div className="calculatorBody">
            <h3>Vložte informácie</h3>
            <div className='form'>
                <label className='left-col'>Hodinová mzda</label>
                <input className='right-col'
                    name="Money"
                    placeholder="€/hod."
                    type='number'
                />
                {getTooltip("Ponúkaná hodinová mzda bez akýchkoľvek úprav.")}
                <label className='left-col'>Počet odpracovaných hodín za mesiac</label>
                <input className='right-col'
                    name="Hours"
                    placeholder="napr. 160"
                    type='number'
                />
                {getTooltip("Počet hodín reálne odpracovaných za jeden mesiac.")}
                <label className='left-col'>Odvody do Sociálnej poisťovne</label>
                <input className='right-col'
                    name="Social"
                    placeholder="Min. 187,78€ za Mesiac"
                    type='number'
                />
                {getTooltip("Výška odvodov do sociálnej poisťovne. V prvý rok podnikania sa odvody do sociálnej poisťovne neplatia. Výška odvodov určuje aj mieru sociálnej starostlivosti v prípade nezamestnanosti alebo pracovnej neschonosti.")}
                <label className='left-col'>Odvody do Zdravotnej poisťovne</label>
                <input className='right-col'
                    name="Health"
                    placeholder="Min. 84,77€ za Mesiac"
                    type='number'
                />
                {getTooltip("Výška odvodov do zdravotnej poisťovne.")}

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