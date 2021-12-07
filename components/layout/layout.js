import { Fragment } from "react";
import MainHeader from './main-header'

export default function Layout(props) {
    return <Fragment>
        <MainHeader />
        <main>
            {props.children}
            {/* used for putting some components or data in between this component tags */}
        </main>
    </Fragment>
}