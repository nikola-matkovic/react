import style from './audio.module.css'

const Audio = (props) => {
    let {currentQuestion} = props
    return (
        <audio id="audio"></audio>
    )
}

export default Audio;