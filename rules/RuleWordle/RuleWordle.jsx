import Rule from "../Rule";

async function get_todays_wordle(){
    // let date = new Date();
    // let year = date.getFullYear();
    // let month = date.getMonth() + 1;
    // let day = date.getDate();

    // let url = `https://www.nytimes.com/svc/wordle/v2/${year}-${"0" + month}-${"0" + day}.json`;
    
    // const options = {
    //     method: 'GET',
    //     mode: 'no-cors' // Set mode to 'no-cors'
    // };

    // let response = await fetch(url, options);
    // let json = await response.json();

    return "jerky";

}

export default class RuleWordle extends Rule{
    constructor(){
        super("Your gift must contain today's ");

        get_todays_wordle()
            .then(solution => this.solution = solution)
            .catch((error) => {
                console.log(error)
            });

        this.renderItem = () => <span><a href="https://www.nytimes.com/games/wordle/index.html" target="_blank">Wordle</a> answer.</span>

    }

    check(txt){
        console.log("check", this.solution)
        let r = new RegExp(`(${this.solution})`, "i");
        return r.test(txt); 
    }
}
