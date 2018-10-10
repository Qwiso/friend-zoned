import React, { Component } from 'react'

export class HelpWindow extends Component {
    state = {
        visible: this.props.visible
    }

    render() { 
        return (
            <section name="helpwindow">
                <div style={{backgroundColor: "rgba(0, 0, 0, 0.33)"}} className="position-absolute w-100 h-100 d-flex justify-content-center">
                    <div className="col-6 h-50 my-auto bg-white rounded">
                        <div className="row">
                            <div class="col">
                                <h3 className="text-center">help window</h3>
                            </div>
                        </div>

                        <div className="row">
                            <div class="col">
                                blah blah blah
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}