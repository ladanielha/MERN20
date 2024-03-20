import Publish from './Publish'
import Draft from './Draft' 

const StatusPosting = (props) => {
    const isPublished = props.isPublished
    return <>{ isPublished ? <Publish /> : <Draft /> }</>
}

export default StatusPosting