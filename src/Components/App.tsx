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
      hourlyRate: event.target.name == 'mzda' ? Number(event.target.value) : form.hourlyRate,
      hours: event.target.name == 'hodiny' ? Number(event.target.value) : form.hours,
      socialInsurance: event.target.name == 'socialka' ? Number(event.target.value) : form.socialInsurance,
      healthInsurance: event.target.name == 'zdravotka' ? Number(event.target.value) : form.healthInsurance,
    });

  }

  const getResults = () => {
    if (form.healthInsurance == undefined || form.hourlyRate == undefined || form.hours == undefined || form.socialInsurance == undefined) {
      return "Je potrebne zadat parametre"
    } else {
      const recievedMoney = form.hourlyRate * form.hours
      const insurancePaid = form.socialInsurance + form.healthInsurance
      const lumpSumPayment = recievedMoney * 0.6
      const nonTaxableIncome = 410.24
      const iCameForTheMoney = recievedMoney - (insurancePaid + lumpSumPayment + nonTaxableIncome)

      return {
        recievedMoney: recievedMoney,
        insurancePaid: insurancePaid,
        lumpSumPayment: lumpSumPayment,
        nonTaxableIncome: nonTaxableIncome,
        iCameForTheMoney: iCameForTheMoney
      }
    }
  }

  return (
    <div>
      <Header />
      <div className='calculator'>
        <Calculator form={form} handleFormChange={handleFormChange} getResults={getResults} />
      </div>
      <Results />
    </div>
  )
}

export default App
