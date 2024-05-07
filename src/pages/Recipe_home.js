import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import './Recipe_home.css'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Recipe_home() {
  const [sdata,setSdata]=useState("")

  const [recipe,setRecipe] = useState([])

  const[recipeCopy,setrecipeCopy]=useState([])


  const fetchData = async () => {
    const { data } = await axios.get('https://dummyjson.com/recipes')
    setRecipe(data.recipes)
    // console.log(data.recipes);
    setrecipeCopy(data.recipes)
  }
  console.log(recipeCopy);

  useEffect(() => {
    fetchData()
  }, [sdata])

  const searchRecipe=()=>{
    const res=recipe.filter(i=>(i.name+i.difficulty+i.cuisine+i.tags+i.mealType).toLowerCase().trim().includes(sdata.toLowerCase().trim()))
    setrecipeCopy(res)
  }

  const filterAll=()=>{
    setrecipeCopy(recipe)
  }

  const filterSearch=(fdata)=>{
    const res=recipe.filter(i=>i.mealType.join("").toLowerCase().trim().includes(fdata.toLowerCase().trim()))
    setrecipeCopy(res);
  }






  return (
    <div>
        <div style={{backgroundColor:"#cbe1b5"}} >
          <Row className='container-fluid'>
            <Col lg={1}>

            </Col>

            <Col lg={5} className='d-flex justify-content-center flex-column p-5'>
              <h1 className='hero_head' style={{color:"#537c34"}}>Unlock Your Culinary Creativity with <span style={{color:"#364d27"}}>RecipeRadar!</span></h1>
              <h3 className='navb' style={{color:"#537c34"}}>
                "Introducing <span style={{color:"#304324"}}>RecipeRadar</span>: your ultimate culinary companion! Explore a universe of flavor with our curated recipes, designed to inspire and delight. Whether you're a seasoned chef or a kitchen novice, let RecipeRadar guide you on your delicious journey. Discover, cook, and savor with ease, all at your fingertips."
              </h3>
            </Col>
            <Col lg={5} className='d-flex justify-content-center p-5'>
              <img
              style={{width:"100%"}}
               src="https://i.postimg.cc/3RZN3zT7/delicious-burger-with-many-ingredients-isolated-white-background-tasty-cheeseburger-splash-sauce-1.png" alt="" />
            </Col>

            <Col lg={1}>
            </Col>
          </Row>
        </div>
      

      <div style={{backgroundColor:"#e5efd8"}} className='pt-3'>
        <Container>


          <Row className=''>

          <Col lg={5} className='d-flex'>
          <input onChange={(e)=>setSdata(e.target.value)} variant="outline-success" placeholder='Search Your Recipes Here' className='form-control rounded-5' type="text"/>
          <button onClick={searchRecipe} className='ms-2 rounded-5 px-3'style={{backgroundColor:"#8bb863"}} variant="outline-success"><i className="fa-solid fa-magnifying-glass fa-lg" style={{color:"#0000000"}}></i></button>{' '}
          </Col>

          <Col lg={7} className='d-flex align-items-center flex-wrap gap-2 mt-2'>
            <button onClick={filterAll} className='ms-2 rounded-5  px-3' style={{backgroundColor:"#8bb863"}}><i className="fa-solid fa-sliders fa-lg" style={{color:"#000000"}}></i> All</button>{' '}
            <button onClick={()=>{filterSearch("Breakfast")}} className='ms-2 rounded-5  px-3' style={{backgroundColor:"#8bb863"}}><i className="fa-solid fa-sliders fa-lg" style={{color:"#000000"}}></i> Breakfast</button>{' '}
            <button onClick={()=>{filterSearch("Lunch")}} className='ms-2 rounded-5  px-3' style={{backgroundColor:"#8bb863"}}><i className="fa-solid fa-sliders fa-lg" style={{color:"#000000"}}></i> Lunch</button>{' '}
            <button onClick={()=>{filterSearch("Dinner")}} className='ms-2 rounded-5  px-3' style={{backgroundColor:"#8bb863"}}><i className="fa-solid fa-sliders fa-lg" style={{color:"#000000"}}></i> Dinner</button>{' '}
          </Col>
          </Row>

        </Container>
      </div>

{recipeCopy.length>0?(     
 <div className='d-flex flex-wrap justify-content-around container-fluid' style={{backgroundColor:"#e5efd8"}}>
      
        {
          recipeCopy.map(i => (
            <div>
              <Link to={`/single-view/${i?.id}`} style={{textDecoration:"none"}}>
                <Card style={{ width: '17rem',backgroundColor:"#f3f8ed"}} className='card-style my-4 shadow'>
                  <Card.Img style={{ height: '14rem' }} variant="top" src={i?.image} className='' />
                  <Card.Body>
                    <Card.Title style={{ height: "45px" }}><h5><strong>{i?.name}</strong></h5></Card.Title>
                    <Card.Text>
                      <div className='d-flex justify-content-between align-content-center mt-2'>
                        <h6><b>{i?.cuisine}</b></h6>
                        <h6><i className="fa-solid fa-hourglass-end" style={{ color: "#000000" }}></i> {i?.prepTimeMinutes} min</h6>
                      </div>
  
                      <div className='d-flex justify-content-between align-content-center mt-2'>
                        <h6><i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i> {i?.rating} ({i.reviewCount})</h6>
                        <h6 className={i?.difficulty === "Easy" ? "text-success" : "text-warning"}>{i.difficulty}</h6>
                      </div>
  
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          ))
        }
      </div>)
      :
      (
        
        <div style={{height:"100vh",backgroundColor:"#e5efd8"}}>
        <div className='d-flex justify-content-center align-items-center'>
          <img
          style={{width:"300px", marginTop:"250px"}}
         src="https://cdn.dribbble.com/users/655390/screenshots/3174374/food-app-loader-2.gif" alt="" />
         </div>
      </div>
      )
}    </div>
  )
}

export default Recipe_home
