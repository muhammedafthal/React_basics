function Welcome(props) {
    console.log(props)
    return <h1>Hello, {props.user.firstname} from welcome component</h1>
}

export default Welcome;