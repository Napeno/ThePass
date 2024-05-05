import { useRef } from 'react';
import styles from "./RuleLocation.module.css";
import Rule from "../Rule";


export default class RuleLocation extends Rule {
    constructor() {
        super("Your gift must contain the name of the country from the google map.");
        this.locationName = 'dalat';
        console.log("Country:", this.locationName);

        this.renderItem = ({ regenerateRule, correct }) => <Location locationName={this.locationName} regenerate={() => regenerateRule(this.num)} correct={correct}/>
        // this.num is the rule number that is dynamically set later
    }

    check = (txt) => {
        let r = RegExp(`(?:${this.locationName})`, "i");
        return r.test(txt);
    }
}

function Location({ locationName, regenerate, correct }) {
    const reloadsLeft = useRef(3);

    return (
        <div className={styles.location_wrapper}>
            {/* Google Map iframe without title */}
            <div className={styles.map_container}>
                <div style={{ width: '100%', overflow: 'hidden', height: '300px' }}>
                    <iframe
                        src={`https://www.google.com/maps/embed?pb=!4v1714825802752!6m8!1m7!1sCAoSLEFGMVFpcE9qdzU3SzlKYWZuX0lkYWdmWTJtY2xxOEhJa0VHeWEzMWJhaU5R!2m2!1d11.9387166!2d108.4439854!3f125.1222603242726!4f9.327534477314444!5f0.7820865974627469&output=embed`}
                        width="500"
                        height="600"
                        frameBorder="0"
                        style={{ border: '0', marginTop: '-150px' }}>
                    </iframe>
                </div>
            </div>
        </div>
    )
}

