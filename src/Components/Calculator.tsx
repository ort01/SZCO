import './calculator.scss'
import Button from '@mui/material/Button';

export function Calculator() {
    return (
        <div className="calculatorBody">
            <h3>Vložte informácie</h3>
            <div className='form'>
                <label>Hodinová mzda</label>
                <input
                    name="Money"
                    placeholder="eur/hod"
                    type='number'
                />
                <label>Počet odpracovaných hodín za mesiac</label>
                <input
                    name="Hours"
                    placeholder="Počet Hodín"
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
            <input
                name="Checkbox"
                type='checkbox'
            />
            <label>Beriem na vedomie, že prevádzkovateľ tejto webovej stránky na informácie uvedené na tejto stránke neposkytuje žiadne záruky a nenesie žiadnu zodpovednosť za škody akéhokoľvek druhu súvisiace s obsahom na tejto webovej stránke!</label>
            <Button variant="contained">Potvrdit</Button>

        </div>
    )
}