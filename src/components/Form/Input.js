export default function Input({id, label, placeholder, type}) {
    return(
        <div className="input-group">
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} placeholder={placeholder} />
        </div>
    )
}