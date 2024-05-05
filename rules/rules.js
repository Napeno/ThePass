import Rule from "./Rule";
import RuleWordle from "./RuleWordle/RuleWordle";
import RuleSlidingPuzzle from "./RuleSlidingPuzzle/RuleSlidingPuzzle";
import RuleMorse from "./RuleMorse/RuleMorse";
import RuleRiddle from "./RuleRiddle/RuleRiddle";
import RuleLocation from "./RuleLocation/RuleLocation";
import RuleTimeEmoji from "./RuleTimeEmoji/RuleTimeEmoji";
import RuleQR from "./RuleQR/RuleQR";
import RuleSum from "./RuleSum/RuleSum";
import RuleEarthquake from "./RuleEarthquake/RuleEarthquake";
import Rulechess from "./RuleChess/RuleChess";


var rules = [
    new Rule( 
        "Your gift must be at least 6 characters.",
        (t) => t?.length >= 6
    ),
    new Rule( 
        "Your gift must include an uppercase and a lowercase letter.",
        (t) => (/[A-Z]/.test(t) && /[a-z]/.test(t))
    ),
    new Rule( 
        "Your gift must include a special character.",
        (t) => /\W/.test(t)
    ),
    new Rule( 
        "Your gift must include a negative number.",
        (t) => /-\d/.test(t)
    ),
    new Rule( 
        "Your gift must contain 4 english vowels.",
        (t) => (/a/i.test(t) && /e/i.test(t) && /i/i.test(t) && /o/i.test(t)) || (/e/i.test(t) && /i/i.test(t) && /o/i.test(t) && /u/i.test(t)) || (/a/i.test(t) && /i/i.test(t) && /o/i.test(t) && /u/i.test(t)) || (/a/i.test(t) && /e/i.test(t) && /o/i.test(t) && /u/i.test(t)) || (/a/i.test(t) && /e/i.test(t) && /i/i.test(t) && /u/i.test(t))
    ),
    new Rule(
        "Your gift must include 2-digit prime number.",
        (t) => /(?:11)|(?:13)|(?:17)|(?:19)|(?:23)|(?:29)|(?:31)|(?:37)|(?:41)|(?:43)|(?:47)|(?:53)|(?:59)|(?:61)|(?:67)|(?:71)|(?:73)|(?:79)|(?:83)|(?:89)|(?:97)/.test(t)
    ),
    new RuleSum(),
    new Rule( 
        "Your gift must include the emoji of your born's day moon phrase", //&#x1F9A0;
        (t) => /(?:🌒)/i.test(t)
    ),
    new Rule( 
        "Your gift must contain the value of pi up to first 5 decimal places.",
        (t) => /(?:3\.14159)/.test(t)
    ),    
    
    new Rulechess(),
    new RuleTimeEmoji(),  
    new RuleWordle(),
    new RuleEarthquake(),
    // new RuleQR(),
    // new RuleMorse(),
    new RuleLocation(),
    new RuleRiddle(),
    // new Rule(
    //     "Your password must have as many vowels as consonants.",
    //     (t) => (t.match(/[aeiou]/ig) || []).length === (t.match(/[bcdfghjklmnpqrstvwxys]/ig) || []).length
    // ),
    new RuleSlidingPuzzle(),
    new Rule( 
        "Your gift must contain the new age of you.",
        (t) => /(?:21)/.test(t)
    ),  
    new Rule(
        "Your gift must include the length of your password.",
        (t) => {
            let l = t.length;
            console.log(l);
            let r = new RegExp(`${l}`);
            return r.test(t);
        }
    ),
    new Rule( 
        "Your gift must bellow 51 words",
        (t) => t?.length <= 51
    )
];

function sort_rules(a, b){
    if(a.correct == b.correct){
        return b.num - a.num;
    }
    else if(!a.correct && b.correct){
        return -1;
    }
    else{
        return 1;
    }
}

export default rules;
export {sort_rules};