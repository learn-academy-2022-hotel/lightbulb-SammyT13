import React, {useState} from 'react'
import lightOff from '../assets/lightOff.png'
import lightOn from '../assets/lightOn.png'
import switchOff from '../assets/switchOff.png'
import switchOn from '../assets/switchOn.png'

// Created LightSwitch logic component
const LightSwitch = () => {

    // State Values set at false = light switch & lightbulb are off
    const [lightSwitchStatus, setLightSwitchStatus] = useState(false)
    const [lightbulbStatus,setLightbulbStatus] = useState(false)

    // Function that updates State Values (sets it value to either true / false)
    const lightsOnOff = () => {
        setLightSwitchStatus(lightSwitchStatus === false ? true : false)
        setLightbulbStatus(lightbulbStatus === false ? true : false)  
    }

    // if light switch is true = image of switch on else image of switch off
    let switchOnOff = lightSwitchStatus ? switchOn : switchOff
    // if lightbulb is true = of lightbulb on else image of lightbulb off
    let bulbOnOff = lightbulbStatus ? lightOn : lightOff

    return (
        <>
            <div className='room'>
                <div onClick={lightsOnOff} className='lightswitch'
                style={{backgroundImage: `url(${switchOnOff})`}}>
                </div>
                <div className='lightbulb'
                style={{backgroundImage: `url(${bulbOnOff})`}}>
                </div>
            </div>
        </>
    )
}

export default LightSwitch

