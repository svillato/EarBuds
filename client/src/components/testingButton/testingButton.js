import React, { Component } from 'react';
import axios from 'axios'
import { Button } from 'semantic-ui-react';

export default class TestingButton extends Component {

    sendApi = () => {
        const data = {
            title: "testTitle",
            synopsis: "testSynopsis",
            imageURL: "URL",
            episodes: {
                title: "title",
                episodeNumber: 1,
                note: "note",
                soundUrl: "sound URL"
            },
        }

        axios.post("/api/post", data).
            then(response => {
                console.log(response)
            })
    }

    render() {
        return (
            <div>
                <Button onClick={this.sendApi.bind(this)}>Send API </Button>
            </div>
        )
    }
}
