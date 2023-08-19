// Write your code here
import {Component} from 'react'
import './index.css'

class TeamMatches extends Component {
  state = {latestMatchDetails: {}, recentMatches: {}, teamBannerUrl: ''}

  componentDidMount() {
    this.getTeamMatchData()
  }

  getTeamMatchData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
      teamBannerUrl: data.team_banner_url,
    }

    const {latestMatchDetails, recentMatches, teamBannerUrl} = updatedData
    const updatedLatestMatchDetails = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }

    const updatedRecentMatches = {
      umpires: recentMatches.umpires,
      result: recentMatches.result,
      manOfTheMatch: recentMatches.man_of_the_match,
      id: recentMatches.id,
      date: recentMatches.data,
      venue: recentMatches.venue,
      competingTeam: recentMatches.competing_team,
      competingTeamLogo: recentMatches.competing_team_logo,
      firstInnings: recentMatches.first_innings,
      secondInnings: recentMatches.second_innings,
      matchStatus: recentMatches.match_status,
    }

    this.setState({
      latestMatchDetails: updatedLatestMatchDetails,
      recentMatches: updatedRecentMatches,
      teamId: id,
      teamBannerUrl,
    })
  }

  render() {
    const {latestMatchDetails, recentMatches, teamBannerUrl, teamId} = this.state
    const {
      umpires,
      result,
      manOfTheMatch,
      id,
      date,
      venue,
      competingTeam,
      competingTeamLogo,
      firstInnings,
      secondInnings,
      matchStatus,
    } = latestMatchDetails

    return (
      <div className={}>
        <img
          className="team-banner-image"
          src={teamBannerUrl}
          alt="team banner"
        />
      </div>
    )
  }
}

export default TeamMatches
