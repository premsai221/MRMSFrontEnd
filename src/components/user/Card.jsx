import surgery from '../../assets/images/surgery.png'

export function Card({cardObj}) {
    return (
        <div className="card" onClick={() => {console.log("Hello")}}>
            <div className="card-top">
                <img className='card-type-logo' src={cardObj.type==='surgery'?surgery:null} alt={`${cardObj.type}-logo`} />
                <div className="card-subject">{cardObj.subject}</div>
                <div className={`severity-${cardObj.severity}`}>&#9679;</div>
            </div>
            <div className="severity-info">Severity: {cardObj.severity}</div>
            <div className="date-issued-info">Date Issued: {String(cardObj.dateIssued).slice(0, 10)}</div>
        </div>
    )
}