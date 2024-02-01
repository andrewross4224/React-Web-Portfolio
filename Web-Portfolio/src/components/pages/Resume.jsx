import resume from '../../assets/resume.pdf'

export default function Resume() {
    return (
        <div className="card">
            <h1>Click <a className="resumeLink" href={resume} download={'Andrew_Ross_Resume'}>Here</a> to download my resume. You can also find my Github and Linkedin profiles at the bottom of the page</h1>
        </div>
    )
}