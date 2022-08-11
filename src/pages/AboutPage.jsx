import Card from "../components/shared/Card"
import {Link} from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
        <div>
            <h1>About this Project</h1>
            <p>This is a React app to leave feedback for our product</p>
        </div>
        <p><Link to='/'>Back to Home</Link></p>
    </Card>
  )
}

export default AboutPage