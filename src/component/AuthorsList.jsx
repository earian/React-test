const AuthorsList = ( { data , handleFilter } ) => {
    let authors = [];
    let authorsArr = data.blogs?.map(blog => blog.author);
    let filteredArr = authorsArr?.filter((author, ind) => {
        if(authorsArr.indexOf(author) != ind) return false;
        else return true;
    })
    
    
    return (
        <>
        <h2>Filter blogs by author: </h2>
        <div className="authors-cont" >
            {filteredArr?.map(author => {
                return (
                    <p data-author={ author } onClick={ (e)=> handleFilter(e) }>{ author }</p>
                )
            })}
        </div>
        </>
    )
}

export default AuthorsList;