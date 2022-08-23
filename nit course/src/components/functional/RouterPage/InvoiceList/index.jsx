const InvoiceList = () => {
    const arrayInvoics =  []
    return (
        arrayInvoics.map((item) => {
            return <p key={item.id}>{item.id}</p> 
        })
    );
}

export default InvoiceList;