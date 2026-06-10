import './ExperienceBlock.scss';

/* Import Data */
import { experience, careerFeatures, internFeatures } from '../../data/experience';
import { experienceIcons, starIcons } from '../../data/icons';

function ExperienceBlock () {
    var featureData;

    const setFeatureData = (position) => {
        if (position === 0)
        {
            featureData = careerFeatures;
        }
        else if (position === 1)
        {
            featureData = internFeatures;
        }
    }

    return (
        <div className='experience-block'>
            {experience.map(({ id, position, company, ip, location, dates}) => {
                setFeatureData(id);
                return (
                    <div key={id}>
                        <div className='subheader-row'>
                            <h2>{position} @</h2>
                            <h2 className='wisteria-text'>&nbsp;<strong>{company}</strong></h2>
                        </div>
                        <div className='subheader-row'>
                            <svg xmlns={experienceIcons[0].xmlns} viewBox={experienceIcons[0].viewBox} className={experienceIcons[1].class}>
                                <path d={experienceIcons[1].d} />
                            </svg>
                            <p>{location}</p>
                            <div className='icon-spacer'></div>
                            <svg xmlns={experienceIcons[0].xmlns} viewBox={experienceIcons[0].viewBox} className={experienceIcons[2].class}>
                                <path d={experienceIcons[2].d} />
                            </svg>
                            <p>{dates}</p>
                        </div>
                        <div className='ip-text' hidden={!ip}>
                            <p className='small-p bold-text wisteria-text'>Important:</p>
                            <p className='small-p'>&nbsp;Due to Intellectual Property (IP) agreements, images of features cannot be shared.</p>
                        </div>
                        <div className='job-desc-bullets'>
                            {featureData.map(({ id, description}) => (
                                <div className='job-desc-grid' key={id}>
                                    <svg xmlns={starIcons[0].xmlns} viewBox={starIcons[0].viewBox} className='bullet-star-icon'>
                                        <path d={starIcons[2].d}></path>
                                    </svg>
                                    <p className='small-p'>{description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="experience-break" hidden={(id + 1) === experience.length}></div>
                    </div>
                );
            })}
        </div>
    );
}

export default ExperienceBlock;