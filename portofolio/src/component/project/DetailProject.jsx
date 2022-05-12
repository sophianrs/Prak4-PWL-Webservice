import React from 'react'
import {createUseStyles} from 'react-jss'
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';
import { useState, useEffect } from 'react';



const DetailProject = () => {
  const classes = useStyles()
  let navigate = useNavigate();

  const [komentar, setKomentar] = useState({
      komentar: '',
      error_list: [],
  });

  const handleInput = (e) => {
      e.persist();
      setKomentar({...komentar, [e.target.name] : e.target.value});
  }

  const save = (e) => {
      e.persist();
      e.preventDefault();

      const data = {
          komentar: komentar.komentar,
      }

      axios.post('http://127.0.0.1:8000/api/detailProject', data).then(res => {
          if(res.data.status === 200)
          {
            swal('success', res.data.message, "success");
            document.getElementById('formKomen').reset();
          }
          else if(res.data.status === 400)
          {
            setKomentar({...komentar, error_list:res.data.errors});
          }
      });
  }



  //keluarin komennya
//   const [proyek, setProyek] = useState([]);
//   const [loading, setLoading] = useState(1);
    
//   useEffect (() => {
//     const fetchData = async () => {
//         const res = await axios.get('http://localhost:8000/api/detailProject');
//         console.log(res);
//         if(res.data.status === 200) 
//         {            
//             setProyek(res.data.projects); 
//             setLoading(0); 
//         }
//      }
//      fetchData()
//     });

//     // const [openModal, setOpenModal] = useState(false)
//     let oldComment = "";
//     if (loading)
//     {
//         oldComment = <h2>loading..</h2>
//     }
//     else 
//     {
//         oldComment = 
//         proyek.map( (item) => {
//             return (
//                 <p className={classes.oldComment}>{item.komentar}</p>  
//             )
//         });
//     }

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

        <div className={classes.body}>
            <h1 className={classes.judul}>Project</h1>
            <form action="" onSubmit={save} method="post" id="formKomen">
                <div className={classes.wrapGallery}> 
                    <label htmlFor="komentar" className={classes.komentar}> Tambah Komentar : </label>
                    <input type="text" placeholder='Masukkan Komentar Anda' className={classes.input} onChange={handleInput} value={komentar.komentar} name="komentar"/>
                </div>
                <button type="submit" className={classes.btn}> Tambah Komentar </button>
            </form>
            <div>
                <div>
                    <p className={classes.komentar}>Komentar terdahulu : </p>
                    <div>
                        {/* {oldComment} */}
                    </div>
                    
                </div>
            </div>
                
            </div>
        </div>
  )
}

const useStyles = createUseStyles({
    container: {
        backgroundColor : '#fff',
        margin: 0,
        color : 'white',
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
        margin: 0,
        padding: 0, 
        width : '100%',
        alignItems :'center',
        textAlign : 'center',
        top : '50%',
        left : '50%',
        color : '#9FC088',
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
    },
    komentar : {
        color  : '#9FC088',
        marginLeft : '50px',
        fontWeight : 'bold',
        fontSize : '20px',
        alignItems : 'center',
        padding : '10px'
    },
    input : {
        width : '70%',
        height : '70px',
        top : '50%',
        marginTop: '50px',
    },
    btn : {
        float : 'right',
        marginRight : '100px',
        backgroundColor : '#9FC088',
        padding: '10px',
        borderRadius : '8px',
        marginTop : '20px',
        color : 'white',
        fontWeight : 'bold',
    }
})
export default DetailProject;