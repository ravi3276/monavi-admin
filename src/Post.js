import React from 'react'
import Footer from './Footer'
import './Post.css'
function Post() {
    return (
        <div className="post">
            <div className="post__header">
                <h1>All User Post</h1>

                <div className="post__headerright">
                    <h3>Show</h3>
                    <div className="post__btns">
                    <button>Popular Post</button>
                    <button>Freedom</button>
                    <button>humuor</button>
                    <button>Most Commented</button>
                    </div>
                </div>
            </div>

            <table className="post__table">
            <tr>
             <th>S.no</th>
             <th>Title</th> 
             <th>Post</th>
             <th>Writer</th>
             <th>Type</th>
             <th>Comments</th>
             <th>Send Date</th>
             <th>Actions</th>
             </tr>

             <tr>
             <th>01</th>
             <th>A paragraph of color:red tex</th> 
             <th>A paragraph of color:red tex</th>
             <th>Desvi yang</th>
             <th>Popular Post</th>
             <th>1212</th>
             <th>20 June, 2019</th>
             <th>
             <button>Edit</button>
             <button>Delete</button>
             </th>
             </tr>

             <tr>
             <th>02</th>
             <th>A paragraph of color:red tex</th> 
             <th>A paragraph of color:red tex</th>
             <th>Desvi yang</th>
             <th>Humuor</th>
             <th>43</th>
             <th>20 June, 2019</th>
             <th>
             <button>Edit</button>
             <button>Delete</button>
             </th>
             </tr>

             <tr>
             <th>03</th>
             <th>A paragraph of color:red tex</th> 
             <th>A paragraph of color:red tex</th>
             <th>Desvi yang</th>
             <th>freedom</th>
             <th>12</th>
             <th>20 June, 2019</th>
             <th>
             <button>Edit</button>
             <button>Delete</button>
             </th>
             </tr>

             <tr>
             <th>04</th>
             <th>A paragraph of color:red tex</th> 
             <th>A paragraph of color:red tex</th>
             <th>Desvi yang</th>
             <th>Popular Post</th>
             <th>8</th>
             <th>20 June, 2019</th>
             <th>
             <button>Edit</button>
             <button>Delete</button>
             </th>
             </tr>

             <tr>
             <th>05</th>
             <th>A paragraph of color:red tex</th> 
             <th>A paragraph of color:red tex</th>
             <th>All Users</th>
             <th>Popular Post</th>
             <th>0</th>
             <th>20 June, 2019</th>
             <th>
             <button>Edit</button>
             <button>Delete</button>
             </th>
             </tr>

             <tr>
             <th>06</th>
             <th>A paragraph of color:red tex</th> 
             <th>A paragraph of color:red tex</th>
             <th>Desvi yang</th>
             <th>Popular Post</th>
             <th>0</th>
             <th>20 June, 2019</th>
             <th>
             <button>Edit</button>
             <button>Delete</button>
             </th>
             </tr>

             <tr>
             <th>07</th>
             <th>A paragraph of color:red tex</th> 
             <th>A paragraph of color:red tex</th>
             <th>Desvi yang</th>
             <th>Popular Post</th>
             <th>0</th>
             <th>20 June, 2019</th>
             <th>
             <button>Edit</button>
             <button>Delete</button>
             </th>
             </tr>
            </table>
            
            <Footer />
        </div>
    )
}

export default Post
