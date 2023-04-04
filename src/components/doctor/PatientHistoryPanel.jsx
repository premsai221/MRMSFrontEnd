export default function PatientHistoryPanel() {
    return (
        <div className="patient-history-panel">
            <div className="patient-id-search">
                <label htmlFor="patient-id">Patient ID: </label>
                <input type="text" id="patient-id-inp" />
            </div>
        </div>
    )
}