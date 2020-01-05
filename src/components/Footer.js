import React, { Component } from 'react';

class Footer extends Component {
    
    render() {

        let d = new Date()

        return <div className="Footer">
            <p>copyright &copy; {d.getFullYear()}. All rights reseved.</p>
        </div>

    }

}

export default Footer