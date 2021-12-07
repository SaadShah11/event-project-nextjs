import Link from "next/link";
import classes from './button.module.css'

export default function Button(props) {

    if(props.link) {
        return (
            <Link href={props.link}>
                <a className={classes.btn}>{props.children}</a>
                {/* Link uses anchor tag automatically, but if you want custom styling we have to use the ancher tag,
                once Link detects the ancher tag inside it it will no longer render its ancher tag automatcally
                and will instead render yours, we dont set the href in ancher tah,it is done by Link automatically */}
            </Link>
        )
    }

    return (
        <button className={classes.btn} onClick={props.onClick}>
            {props.children}
        </button>
    )
}