import CommentItem from './CommentItem'

const Comments = ({ comments=[] }) => {
    return (
        <div className='comments-container'>
            {comments.map((comment, i) => (
                <CommentItem key={i} userName={comment.creator.name} rate={comment.rate} avatar={comment.creator.avatar} content={comment.content}/>
            ))}
        </div>
    )
}

export default Comments