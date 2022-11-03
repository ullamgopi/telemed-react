import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import './Scroll.css'

function Scroll() {
    const [backToTopButton,setBackToTopButton] = useState(false);
    useEffect(() => {
     window.addEventListener('scroll',() => {
        if(window.scrollY > 100) {
            setBackToTopButton(true)
        }else {
             setBackToTopButton(false)
            }
        
     })
    },[])

    const scrollUp = () => {
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    }

  return (
    <div>
    {backToTopButton && (
        <Button style={{
        position:'fixed',
        bottom:'50px',
        right:'50px',
        height:'50px',
        width:'50px',
        fontSize: '50px'
      }}
      onClick={scrollUp}
      variant='danger'
      >^</Button>
    )}
      
    </div>
  )
}

export default Scroll
