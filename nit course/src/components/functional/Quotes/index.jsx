import qoutes from  './qoutes.json'
let filtered = qoutes.filter ( (qoute, index) => qoute.author.includes ('Michael Jordan'))    
const Quotes = (props) => {
    return (
        filtered.map(qoute => {
            return  (<div>
            <p>
                {qoute.content} by: {qoute.author}
            </p>)
        </div>
        )
        }
        )
    )
}
export default Quotes;