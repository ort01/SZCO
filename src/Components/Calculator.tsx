import './calculator.css'
import Button from '@mui/material/Button';

export function Calculator() {
    return (
        <div className="calculatorBody">
            <h3>Enter informations</h3>
            <div className='label-and-input'>
                <label>Hodinova mzda</label>
                <input
                    name="Money"
                    placeholder="eur/hod"
                    type='number'
                />
            </div>
            <div className='label-and-input'>
                <label>Pocet odpracovanych hodin za mesiac</label>
                <input
                    name="Hours"
                    placeholder="Počet Hodín"
                    type='number'
                />
            </div>
            <div className='label-and-input'>
                <label>Odvody do SP</label>
                <input
                    name="Social"
                    placeholder="Sociálna poisťovňa"
                    type='number'
                />
            </div>
            <div className='label-and-input'>
                <label>Odvody do ZP</label>
                <input
                    name="Health"
                    placeholder="Zdravotná poisťovňa"
                    type='number'
                />
            </div>
            <div className='label-and-input'>
                <input
                    name="Checkbox"
                    type='checkbox'
                />
                <label>suhlasim</label>
            </div>
            <Button variant="contained">Potvrdit</Button>

        </div>
    )
}