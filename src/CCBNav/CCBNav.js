import React, {Component, Fragment} from 'react'
import DesktopNav from '../DesktopNav/DesktopNav'
import MobileNav from '../MobileNav/MobileNav'

export default class Nav extends Component {
    render() {
        return (
            <Fragment>
                <DesktopNav />
                <MobileNav />
            </Fragment>
        )
    }
}