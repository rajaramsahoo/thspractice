function Alert(props){
    return(
        <>
        {props.alert?<h1 className='alert'>{props.alert.msg}</h1>:null}
        </>
    )
}

export default Alert
