import React, {useState} from 'react'

// Created LightSwitch logic component
const LightSwitch = () => {

    // State Values set at false = light switch 'Off'
    const [lightSwitchStatus, setLightSwitchStatus] = useState(false)

    // Function that updates State Values (sets it value to either true / false)
    const lightsOnOff = () => {
        setLightSwitchStatus(lightSwitchStatus === false ? true : false)  
    }

    // if light switch is true = 'On', else 'Off'
    let switchOnOff = lightSwitchStatus === true ? 'On' : 'Off'
    // if light switch is true = 'yellow', else 'white'
    let bulbOnOff = lightSwitchStatus === true ? 'yellow' : 'white'

    return (
        <>
            <div className='lightbulb' onClick={lightsOnOff} style={{background: bulbOnOff}}>
                <h3>{switchOnOff}</h3>
            </div>
        </>
    )
}

export default LightSwitch
