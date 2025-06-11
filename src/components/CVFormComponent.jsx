import { useState } from "react";
import styles from "./CVFormComponent.module.css";
import { useEffect } from "react";

export function CVFormComponent(props)
{

    const [CV, setCV] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        address: '',

        degree: '',
        institution: '',
        yearOfCompletion: '',

        experience: [],
        skills: []
    });

    const [skillsNumber, setSkillsNumber] = useState(1);
    const [experienceNumber, setExperienceNumber] = useState(1);

    useEffect(()=>
    {
        const localStorageData = { ...localStorage };

        const CVCopy = {
            name: localStorageData.name,
            email: localStorageData.email,
            phoneNumber: localStorageData.phoneNumber,
            address: localStorageData.address,
    
            degree: localStorageData.degree,
            institution: localStorageData.institution,
            yearOfCompletion: localStorageData.yearOfCompletion,

            experience: [],

            skills: []
        }

        if (localStorageData.experience)
        {
            CVCopy.experience = JSON.parse(localStorageData.experience)
        }

        if (localStorageData.skills)
        {
            CVCopy.skills = JSON.parse(localStorageData.skills)
        }

        setCV(CVCopy);
    }, [])

    useEffect(()=>
    {
        props.setCV(CV);
    }, [CV])

    const handleSaveCV = () =>
    {
        let saveCV = true;

        for (let x in CV)
        {
            if (CV[x] === '' || CV[x].length == 0)
            {
                alert("Please fill out " + x);
                saveCV = false;
            }
        }

        if (saveCV)
        {
            localStorage.setItem("name", CV.name);
            localStorage.setItem("email", CV.email);
            localStorage.setItem("phoneNumber", CV.phoneNumber);
            localStorage.setItem("address", CV.address);

            localStorage.setItem("degree", CV.degree);
            localStorage.setItem("institution", CV.institution);
            localStorage.setItem("yearOfCompletion", CV.yearOfCompletion);

            localStorage.setItem("experience", JSON.stringify(CV.experience));

            localStorage.setItem("skills", JSON.stringify(CV.skills));
        }
    }

    return(
        <div className={styles.cvFormContainer}>
            <h3 className="mb-3 text-center">CV Form</h3>
            <form action="" className={styles.cvForm}>
                <div className={styles.section}>
                    <span className="font-bold">Personal Information</span>
                    <input className="form-control" type="text" placeholder="Enter your name" onChange={(e)=>
                        {
                            setCV((currentState)=>({...currentState, name: e.target.value}))
                        }
                    }/>
                    <input className="form-control" type="email" placeholder="Enter your email" onChange={(e)=>
                        {
                            setCV((currentState)=>({...currentState, email: e.target.value}))
                        }
                    }/>
                    <input className="form-control" type="text" placeholder="Enter your phone number" onChange={(e)=>
                        {
                            setCV((currentState)=>({...currentState, phoneNumber: e.target.value}))
                        }
                    }/>
                    <input className="form-control" type="text" placeholder="Enter your adress" onChange={(e)=>
                        {
                            setCV((currentState)=>({...currentState, address: e.target.value}))
                        }
                    }/>
                </div>
                <div className={styles.section}>
                    <span>Education</span>
                    <input className="form-control" type="text" placeholder="Enter your degree" onChange={(e)=>
                        {
                            setCV((currentState)=>({...currentState, degree: e.target.value}))
                        }
                    }/>
                    <input className="form-control" type="text" placeholder="Enter your institution name" onChange={(e)=>
                        {
                            setCV((currentState)=>({...currentState, institution: e.target.value}))
                        }
                    }/>
                    <input className="form-control" type="text" placeholder="Enter your year of completion" onChange={(e)=>
                        {
                            setCV((currentState)=>({...currentState, yearOfCompletion: e.target.value}))
                        }
                    }/>
                </div>
                <div className={styles.section}>
                    <span>Experience</span>
                    {CV.experience.map((exp)=>{
                        return (
                        <div key={exp.id}>
                            <input className="form-control" type="text" placeholder="Enter your job title" onChange={(e)=>
                            {
                                setCV((currentState)=> ({...currentState, 
                                    experience: currentState.experience.map((currentExp)=>
                                        {
                                            if (currentExp.id === exp.id)
                                            {
                                                return ({...currentExp, jobTitle: e.target.value});
                                            }
                                            
                                            else
                                            {
                                                return currentExp;
                                            }
                                        })
                                    })
                                )
                            }}/>
                            <input className="form-control" type="text" placeholder="Enter the name of the company" onChange={(e)=>
                            {
                                setCV((currentState)=> ({...currentState, 
                                    experience: currentState.experience.map((currentExp)=>
                                        {
                                            if (currentExp.id === exp.id)
                                            {
                                                return ({...currentExp, company: e.target.value});
                                            }
                                            
                                            else
                                            {
                                                return currentExp;
                                            }
                                        })
                                    })
                                )
                            }}/>
                            <input className="form-control" type="text" placeholder="Enter the duration of the job" onChange={(e)=>
                            {
                                setCV((currentState)=> ({...currentState, 
                                    experience: currentState.experience.map((currentExp)=>
                                        {
                                            if (currentExp.id === exp.id)
                                            {
                                                return ({...currentExp, duration: e.target.value});
                                            }
                                            
                                            else
                                            {
                                                return currentExp;
                                            }
                                        })
                                    })
                                )
                            }}/>
                            <textarea className="form-control" type="text" placeholder="Enter your responsabilities on the job" onChange={(e)=>
                            {
                                setCV((currentState)=> ({...currentState, 
                                    experience: currentState.experience.map((currentExp)=>
                                        {
                                            if (currentExp.id === exp.id)
                                            {
                                                return ({...currentExp, responsabilities: e.target.value});
                                            }
                                            
                                            else
                                            {
                                                return currentExp;
                                            }
                                        })
                                    })
                                )
                            }}></textarea>
                        </div>
                        )
                    })}
                    <button className="btn btn-secondary" onClick={(e)=>
                        {
                            e.preventDefault();
                            const newExperience = {id: experienceNumber, jobTitle: '', company: '', duration: '', responsabilities: ''}; 
                            setExperienceNumber((currentState)=> currentState += 1);
                            setCV((currentState)=>({...currentState, experience: [...currentState.experience, newExperience]}))
                        }
                    }>Add new experience</button>
                </div>
                <div className={styles.section}>
                    <span>Skills</span>
                    {CV.skills.map((skill)=>
                    {
                        return (<input className="form-control" key={skill.id} type="text" placeholder="Enter your skill" onChange={(e)=>
                        {
                            setCV((currentState)=> ({...currentState, 
                                skills: currentState.skills.map((currentSkill)=>
                                    {
                                        if (currentSkill.id === skill.id)
                                        {
                                            return ({...currentSkill, description: e.target.value});
                                        }
                                        
                                        else
                                        {
                                            return currentSkill;
                                        }
                                    })
                                })
                            )
                        }
                        } />)
                    })}
                    <button className="btn btn-secondary" onClick={(e)=>
                        {
                            e.preventDefault();
                            const newSkill = {id: skillsNumber, description: ''}; 
                            setSkillsNumber((currentState)=> currentState += 1);
                            setCV((currentState)=>({...currentState, skills: [...currentState.skills, newSkill]}))
                        }
                    }>Add new skill</button>
                </div>
                <button className="btn btn-primary mt-4" onClick={(e) =>
                    {
                        e.preventDefault();
                        handleSaveCV();
                    }
                    }>Save resume</button>
            </form>
        </div>
    )
}