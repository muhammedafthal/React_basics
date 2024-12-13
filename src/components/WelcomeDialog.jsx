function WelcomeDialog() {
    return (
        <>
        <Dialog title="Welcome To React Course" content="This Is React Course"></Dialog>
        <Dialog title="Welcome To Js Course" content="This Is JS Course"></Dialog>
        </>
    )
}



export default WelcomeDialog;

function FancyBorder(props) {
    return<div>{props.children}</div>
}

function Dialog(props) {
    return (
        <FancyBorder>
            <h1 className="Dialog-title">{props.title}</h1>
            <p>{props.content}</p>
        </FancyBorder>
    )
}