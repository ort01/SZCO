import './App.scss'
import { Header } from "./Header"
import { Calculator } from './Calculator'
import { Results } from './Results'
import { useState } from 'react';
import { FormContent } from './FormState';

function App() {

  const [form, setForm] = useState<FormContent>({
    hourlyRate: undefined,
    hours: undefined,
    socialInsurance: undefined,
    healthInsurance: undefined
});


function handleFormChange(event: React.ChangeEvent<HTMLInputElement>) {

    setForm({
        hourlyRate: event.target.name == 'mzda' ?  event.target.value : form.hourlyRate,
        hours: event.target.name == 'hodiny' ?  event.target.value : form.hours,
        socialInsurance: event.target.name == 'socialka' ?  event.target.value : form.socialInsurance,
        healthInsurance: event.target.name == 'zdravotka' ?  event.target.value : form.healthInsurance,
    });
    
}

  return (
    <div>
      <Header />
      <div className='calculator'>
        <Calculator form = {form} handleFormChange = {handleFormChange} />
      </div>
      <Results />
    </div>
  )
}

export default App
