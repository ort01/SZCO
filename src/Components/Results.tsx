import './results.scss'
import { DataContent } from './Interfaces';

export function Results({ data }: { data: DataContent }) {
    return (
        <div className="results" >
            <h1>Výsledky</h1>
            <table>
                <thead>
                    <tr>
                        <td>Hodinová mzda</td>
                        <td>Počet odpracovaných hodín za mesiac</td>
                        <td>Odvody do Sociálnej poisťovne</td>
                        <td>Odvody do zdravotnej poisťovne</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{data.recievedMoney}</td>
                        <td>235</td>
                        <td>3446</td>
                        <td>3453</td>
                    </tr>
                </tbody>
            </table>
            <h3> Vaša mesačná mzda pri zadaných údajoch predstavuje <span style={{ fontSize: 25, fontWeight: 900 }}>2300</span> eur.</h3>

        </div>
    )
}

