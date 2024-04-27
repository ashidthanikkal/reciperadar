import React, { useEffect, useState } from 'react'
import './Single_view.css'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Accordion from 'react-bootstrap/Accordion';


function Single_view() {
  const [recipe, setRecipe] = useState({})

  const params = useParams()
  console.log(params);

  const singleData = async () => {
    const { data } = await axios.get(`https://dummyjson.com/recipes/${params.id}`)
    setRecipe(data);
  }
  useEffect(() => {
    singleData()
    window.scrollTo(0,0);
  }, [])


  return (
    <div>
      {
        recipe.id ?
          <div className='s_view'>
            <Container>
              <Row>
                <Col lg={6} className='d-flex justify-content-center'>
                  <div style={{ width: "100%" }}><img src={recipe?.image} style={{ width: "100%" }} alt="" className='shadow rounded' /></div>
                </Col>
                <Col lg={6} className='d-flex-col justify-content-center mt-3'>
                  <h1>{recipe?.name}</h1>
                  <div className='d-flex align-items-center'>
                    <h6 className={recipe?.difficulty === "Easy" ? "bg-success rounded-2 p-1" : "bg-warning rounded-2 p-1"} style={{ backgroundColor: "#f3f8ed" }}>{recipe?.difficulty}</h6>
                    <h6 className='d-flex align-items-center ms-3'>Rating: {recipe?.rating} <i className="fa-solid fa-star text-warning"></i> ({recipe.reviewCount})</h6>
                  </div>
                  <p>
                    <b> #{recipe?.tags?.join(" #")}</b>
                  </p>

                  <div className='meal_p d-flex gap-2 mt-2'>
                    <p className="rounded-5 p-2" style={{ backgroundColor: "#f3f8ed" }}>{recipe?.cuisine}</p>
                    <p className='d-flex gap-2 '>{recipe?.mealType?.map(i => <div style={{ backgroundColor: "#f3f8ed" }} className='d-flex gap-2 p-2 rounded-5'>{i}</div>)}</p>
                  </div>
                  <hr />

                  <Row>
                    <Col lg={3} md={6} className='g-1'>
                      <h6 className='text-center'><b>{recipe?.prepTimeMinutes} Min</b></h6>
                      <h6 className='text-center'>Preparation Time</h6>
                    </Col>
                    <Col lg={3} md={6} className='g-1'>
                      <h6 className='text-center'><b>{recipe?.cookTimeMinutes} Min</b></h6>
                      <h6 className='text-center'>Cook Time</h6>
                    </Col>
                    <Col lg={3} md={6} className='g-1'>
                      <h6 className='text-center'><b>{recipe?.servings}</b></h6>
                      <h6 className='text-center'>Servings</h6>
                    </Col>
                    <Col lg={3} md={6} className='g-1'>
                      <h6 className='text-center'><b>{recipe?.caloriesPerServing}</b></h6>
                      <h6 className='text-center'>Calories Per Serving</h6>
                    </Col>
                  </Row>

                  <hr />

                  <Accordion defaultActiveKey="1">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Ingredients</Accordion.Header>
                      <Accordion.Body>
                        {recipe?.ingredients?.map(i => <li>{i}</li>)}
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Instructions</Accordion.Header>
                      <Accordion.Body>
                        {recipe?.instructions?.map(i => i)}
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>


                </Col>
              </Row>
            </Container>

          </div>
          :
          <div style={{ height: "100vh", backgroundColor: "#f3f8ed" }}>
            <div className='d-flex justify-content-center align-items-center'>
              <img
                style={{ width: "300px", marginTop: "250px" }}
                src="https://cdn.dribbble.com/users/655390/screenshots/3174374/food-app-loader-2.gif" alt="" />
            </div>
          </div>
      }
    </div>
  )
}

export default Single_view
