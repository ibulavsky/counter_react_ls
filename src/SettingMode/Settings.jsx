import React from 'react';
import '../App.css';
import Button from "../Button";

class Settings extends React.Component {

    state = {
        minValue: this.props.minValue,
        maxValue: this.props.maxValue,
        errorMax: false,
        errorMin: false,
    };

    onChangeMax = (e) => {

        if (+e.currentTarget.value < 1) {
            this.setState(
                {
                    errorMax: true,
                }
            )
        } else if (+e.currentTarget.value <= +this.state.minValue) {
            this.setState(
                {
                    errorMax: true,
                }
            )
        } else {
            this.setState(
                {
                    errorMax: false,
                    maxValue: +e.currentTarget.value
                }
            )
        }
    };

    onChangeMin = (e) => {
        if (+e.currentTarget.value >= +this.state.maxValue) {
            this.setState(
                {
                    errorMin: true,
                }
            )
        } else if (+e.currentTarget.value < 0) {
            this.setState(
                {
                    minValue: 0,
                    errorMin: true
                }
            )
        } else {
            this.setState(
                {
                    errorMin: false,
                    minValue: +e.currentTarget.value
                }
            )
        }
    };

    onApplySetting = () => {
        let maxValue = this.state.maxValue;
        let minValue = this.state.minValue;
        this.setState(
            {
                errorMin: false,
                errorMax: false
            }
        );
        this.props.applySetting(minValue, maxValue)
    };

    render = () => {

        let classForInputMax = this.state.errorMax ? 'error' : '';
        let classForInputMin = this.state.errorMin ? 'error' : '';

        return (

            <div className="settings">
                <div>MAX VALUE</div>
                <div>MIN VALUE</div>
                <input className={classForInputMax}
                       type='number'
                       value={this.state.maxValue}
                       onChange={this.onChangeMax}
                />
                <input className={classForInputMin}
                       type='number'
                       value={this.state.minValue}
                       onChange={this.onChangeMin}
                />
                <Button name='apply'
                        onClick={this.onApplySetting}
                />
                <br/>
            </div>
        )
    }
}

export default Settings;

