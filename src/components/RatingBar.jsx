function RatingBar({rate}) {
    let stars = [];
    for (let i = 0; i < 10; i++) {
        if (i < rate) {
            stars.push(<span>&#9733;</span>)
        }
        else {
            stars.push(<span>&#9734;</span>)
        }
    }
    return ( 
        <>
            <p>{stars}</p>
        </>
     );
}

export default RatingBar;