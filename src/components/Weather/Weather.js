import React, { Component } from 'react'
import './Weather.css'

export default class Weather extends Component {
    state = {
        loading: true,
        location: '',
        temp: '',
        icon: '',
        description: '',
        name: ''
    }
    async getWeather(data) {
        const appid = process.env.REACT_APP_WEATHER_API_KEY
        const wapi = process.env.REACT_APP_WEATHER_API_ENDPOINT
        let lat = data.lat
        let lon = data.lon

        try {
            if(this.state.temp === '') {
                const response = await fetch(`${wapi}lat=${lat}&lon=${lon}&units=imperial&appid=${appid}`)
                const json = await response.json()
                this.setState({ 
                    temp: json.main.temp, 
                    icon: json.weather[0].icon, 
                    description: json.weather[0].description, 
                    name: json.name 
                })
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    
    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                let updateLocation = {
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                }
                this.setState({ location: updateLocation, loading: false })
                this.getWeather(updateLocation)
            })
        } else {
            console.log(`Can't get your location`)
            this.setState({ temp: '', description: '', icon: '' })
        } 
    }
    renderWeather() {
        return (
            <div className='banner-weather-container'>
                <div className='weather-details'>
                    <img src={`http://openweathermap.org/img/w/${this.state.icon}.png`} alt={this.state.description} className='weather-icon' ></img>
                    <p className='weather-temp'>{this.state.temp === '' ? '' : `${Math.round(this.state.temp)}`}&deg;</p>
                </div>
                <div className='weather-name'>
                    <span>{this.state.name}</span>
                </div>
            </div>
        )
    }
    render() {
        return (
            <>
            {this.state.temp === ''
                ? ''
                : this.renderWeather()
            }
            </>
        )
    }
}
