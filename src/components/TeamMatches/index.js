// Write your code here
import {Component} from 'react'
import './index.css'

class TeamMatches extends Component {
  componentDidMount() {
    this.getTeamMatchData()
  }

  getTeamMatchData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
  }

  render() {
    return <h1>wait</h1>
  }
}

export default TeamMatches
