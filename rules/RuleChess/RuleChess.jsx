import { useRef } from 'react';
import styles from "./RuleChess.module.css";
import Rule from "../Rule";
import Image from 'next/image';
import chessImage from "./imageChess.png";


export default class Rulechess extends Rule {
    constructor() {
        super("Your gift must include the best move in the chess");
        this.chessName = 'Ne5';
        console.log("Chess:", this.chessName);
        this.renderItem = ({ regenerateRule, correct }) => (
            <div>
                <span>The format is: The type of Chess + The move(alphalbet + number) || R = Rook, N = Knight, B = Bishop, Q = Queen, K = King,
                P = Pawn.</span>
                <Chess chessName={this.chessName} regenerate={() => regenerateRule(this.num)} correct={correct} />
                <p style={{ marginTop: '10px', marginLeft:'37%' }}>White to move</p>
            </div>
        );
    }

    check = (txt) => {
        let r = RegExp(`(?:${this.chessName})`, "i");
        return r.test(txt);
    }
}

function Chess() {
    return (
        <div className={styles.chess_wrapper}>
            {/* Google Map iframe without title */}
            <div >
                <Image src={chessImage}
                width="500"
                height="500"
                />
            </div>
        </div>
    )
}

