import React from 'react'
import {createUseStyles} from 'react-jss'
// import sop from './../../assets/sop.jpg'

const Skill = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
        <div>
            <ul className={classes.ul}>
                <li className={classes.title}><a href="/" className={classes.a}> Portofolio </a></li>
                <li><a href="/"                           className={classes.a}> Resume     </a></li>
                <li><a href="/api/projects"                    className={classes.a}> Project    </a></li>
                <li><a href="/skill"                      className={classes.a}> Skill      </a></li>
            </ul>
        </div>

        <h1 className={classes.judul}>Skill</h1> 
        <div className={classes.page1}>
            <div className={classes.wraph1}>
                <h1 className={classes.introduce}> 1. Programming</h1>
                {/* <h2 className={classes.introduce2}> I am Sophia</h2> */}
            </div>
            <div className={classes.wrapFoto}>
                <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&w=1000&q=80" className={classes.foto} alt="Sophia" />
            </div>
        </div>   

        <div className={classes.page1}>
            <div className={classes.wraph1}>
                <h1 className={classes.introduce}> 2. Desain</h1>
                {/* <h2 className={classes.introduce2}> I am Sophia</h2> */}
            </div>
            <div className={classes.wrapFoto}>
                <img src="https://fastwork.id/blog/wp-content/uploads/2019/08/jasa-ilustrasi.jpg" className={classes.foto} alt="Sophia" />
            </div>
        </div>       

        <div className={classes.page1}>
            <div className={classes.wraph1}>
                <h1 className={classes.introduce}> 3. Makan</h1>
                {/* <h2 className={classes.introduce2}> I am Sophia</h2> */}
            </div>
            <div className={classes.wrapFoto}>
                <img src="https://siedoo.com/wp-content/uploads/2019/05/anak-makan-1200x900.jpg" className={classes.foto} alt="Sophia" />
            </div>
        </div>   

        <div className={classes.page1}>
            <div className={classes.wraph1}>
                <h1 className={classes.introduce}> 4. Tidur</h1>
                {/* <h2 className={classes.introduce2}> I am Sophia</h2> */}
            </div>
            <div className={classes.wrapFoto}>
                <img src="https://cdn0-production-images-kly.akamaized.net/CE9foK-f1NfoNecydx3qE0n-FZo=/1200x900/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3623067/original/040498500_1636019223-pexels-photo-5357334.jpeg" className={classes.foto} alt="Sophia" />
            </div>
        </div>   
    </div>
  )
}

const useStyles = createUseStyles({
    container: {
        backgroundColor : '#fff',
        margin: 'auto',
        color : 'white',
        // alignItems : 'center',
    },
    gallery : {
        margin: '10px',
        padding : '5px',
        border: '2px solid #9FC088',
        width : '20%',
    },
    galleryImg : {
        width : '100%',
        height : 'auto',
    },
    desc : {
        padding : '15px',
        textAlign : 'center',
        color : 'black',
        backgroundColor :'white',
    },
    wrapGallery : {
        display : 'flex',
        flexDirection : 'row',
        alignItems :'center',
        textAlign : 'center',
        top : '50%',
        left : '50%',
    },
    judul : {
        fontSize : 40,
        // marginTop : '50px',
        margin: 0,
        padding: 0, 
        width : '100%',
        alignItems :'center',
        textAlign : 'center',
        top : '50%',
        left : '50%',
        color : '#9FC088',
    },
    page1 : {
        display : 'flex',
        flexDirection : 'row',

    },
    introduce : {
        fontSize : 20,
        // marginTop : '50px',
        margin: 0,
        marginLeft : '100px',
        padding: 0, 
        width : '100%',
        alignItems :'center',
        // textAlign : 'center',
        top : '50%',
        left : '50%',
        color : '#9FC088',
    },
    foto : {
        width : '100%',
        height : '100%', 
        margin: '10px',
        padding : '5px',
        border: '2px solid #9FC088', 
    },
    wraph1 : {
        width : '60%',
        height : '100%',
        alignItems : 'center',  
        alignSelf : 'center',     
    },
    wrapFoto : {
        width : '30%',
        height : '100%',       
    },
    ul : {
        position : 'fixed', 
        width : '100%',
        listStyle : 'none',
        marginTop: 0,
        padding: 0,
        backgroundColor : '#fff',
    }, 
    a : {
        float : 'right',
        alignItems : 'center',
        textAlign : 'center',
        color : '#9FC088',
        padding : '16px',
        textDecoration : 'none',
        fontWeight :'bold',
        fontSize: 20,
    },
    title : {
        float : 'left',
        color : '#9FC088',
        fontSize : 40,
        fontWeight : 'bold',
    }
})

export default Skill;