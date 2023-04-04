import { Link } from "react-router-dom";

const PostItem = ({ post }) => {
    return (
        <div className="post-item">
            <div className="post-item-image-wrapper">
                <img src={post.image} alt="" className="post-item-image" />
            </div>
            <div className="post-item-info-wrapper">
                <div className="post-item-info">
                    <div className="post-item-author">
                        <strong>Athor:</strong>
                        <Link to="/profile/1"><span>{post.user.username}</span></Link>
                    </div>
                    <div className="post-item-date">
                        {new Date(post.createAt).toDateString()}
                    </div>
                </div>
                <div className="post-item-details">
                    <h4 className="post-item-title">{post.title}</h4>
                    <Link className="post-item-category" to={`/posts/categories/${post.category}`}>
                        {post.category}
                    </Link>
                </div>
                <p className="post-item-description">
                    {post.description}
                    .Một ngày Cá tháng Tư có lẽ là đỉnh cao nhất khi chúng ta đã trải qua những phút giây không thể đáng nhớ hơn cùng Bộ Tộc MixiGaming.
                    Với sự tâm huyết, tình cảm cùng sự ủng hộ của hàng triệu người hâm mộ, Độ Mixi và cả ekip đã tạo nên một buổi Offline vô cùng hoành tráng, một giải đấu "Ao làng FIFA Online 4 đúng nghĩa".
                </p>
                <Link className="post-item-link" to={`/posts/detail/${post._id}`}>
                    Read More...
                </Link>
            </div>
        </div>

    );
}

export default PostItem