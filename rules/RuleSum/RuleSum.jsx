import Rule from "../Rule";


export default class RuleSum extends Rule{
    constructor(){
        super("The digits in your gift must add up to ");
        // this.target = Math.ceil(Math.random()*6)*5;
        this.target = 25;
        this.renderItem = () => <span>{this.target}.</span>
    }

    check = (txt) => {
        let s = (txt.match(/-?\d/g)?.map(x => +x).reduce((acc, v) => acc+v, 0));
        console.log("sum:", s);
        return s === this.target;
    }
}