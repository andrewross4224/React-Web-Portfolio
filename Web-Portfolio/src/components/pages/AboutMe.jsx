import profile from '../../assets/profile.jpg'

export default function AboutMe() {
    return (
        <div>
            <h1>About Me!</h1>
            <img src={profile} className='m-5'></img>
            <p>Hi my name is Andrew Ross and I am a full stack web developer</p>
        </div>
    )
}