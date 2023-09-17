import React from 'react'
import Data from './Data.js'

const PeopleReviews = () => {

    const peopleData = Data.map(person=>{
        return (
            <div className="person_review">
                <img src={person.img}/>
            </div>
        )   
    })
  return (
    <div className="persons_review">
        {peopleData}
    </div>
  )
}

export default PeopleReviews