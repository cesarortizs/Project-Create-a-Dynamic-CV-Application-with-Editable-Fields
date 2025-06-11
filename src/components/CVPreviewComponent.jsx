import styles from "./CVPreviewComponent.module.css";

export function CVPreviewComponent(props)
{
    return(
        <div className={styles.livePreview}>
            <h3 className="mb-4 text-center">Live preview</h3>
            <div className={styles.section}>
                <h4 className="mb-3">Personal Information</h4>
                <span>{props.cv.name ? props.cv.name : 'Your name goes here'}</span>
                <span>{props.cv.email ? props.cv.email : 'Your email goes here'}</span>
                <span>{props.cv.phoneNumber ? props.cv.phoneNumber : 'Your phone number goes here'}</span>
                <span>{props.cv.address ? props.cv.address : 'Your address goes here'}</span>
            </div>
            <hr />
            <div className={styles.section}>
                <h4 className="mb-3">Education</h4>
                <span>{props.cv.degree ? props.cv.degree : 'Your degree goes here'}</span>
                <span>{props.cv.institution ? props.cv.institution : 'The name of your institution goes here'}</span>
                <span>{props.cv.yearOfCompletion ? props.cv.yearOfCompletion : 'Your year of completion goes here'}</span>
            </div>
            <hr />
            <div className={styles.section}>
                <h4>Experience</h4>
                {props.cv.experience && props.cv.experience.map((exp, index)=>{
                    return (
                        <div key={exp.id} className={styles.section}>
                            <h5 className="my-3">Job {index + 1}</h5>
                            <span>{exp.jobTitle}</span>
                            <span>{exp.company}</span>
                            <span>{exp.duration}</span>
                            <span>{exp.responsabilities}</span>
                        </div>
                    )
                })}
                {props.cv.experience && props.cv.experience.length == 0 &&
                <div className={styles.section}>
                    <span>Your job title goes here</span>
                    <span>The company name goes here</span>
                    <span>The position duration goes here</span>
                    <span>The responsabilities go here</span>
                </div>}
            </div>
            <hr />
            <div className={styles.section}>
                <h4 className="mb-3">Skills</h4>
                {props.cv.skills && props.cv.skills.map((skill)=>{
                    return (
                        <div key={skill.id} className={styles.section}>
                            <span>{skill.description}</span>
                        </div>
                    )
                })}
                {props.cv.skills && props.cv.skills.length == 0 &&
                <div  className={styles.section}>
                    <span>Your skills go here</span>
                </div>}
            </div>
            <hr />
        </div>
    )
}