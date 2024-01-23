import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate();  
  return (
    <div>
      <h2>Contact page</h2>
      <p>Anim occaecat nostrud irure esse mollit deserunt tempor id sunt officia. Consequat et consequat nulla irure elit. Tempor irure Lorem dolore tempor magna sunt laborum esse non cillum eiusmod. Labore occaecat reprehenderit id elit cupidatat enim irure dolore cillum. Esse enim in ut fugiat non nisi fugiat non amet esse consequat. Voluptate anim nostrud aliquip ad culpa.
        Amet incididunt sunt pariatur Lorem do culpa consequat duis veniam nulla consequat ea. Esse est aute do cupidatat amet nostrud irure tempor culpa laboris. Voluptate enim laborum ullamco Lorem irure in do ullamco culpa culpa dolor aliqua eiusmod consectetur. Consequat irure eu nulla pariatur officia sit laborum. Eu nisi eu occaecat sunt dolore irure aute ullamco nisi veniam minim laboris dolore consectetur. Ad adipisicing aute deserunt anim. Excepteur aliqua pariatur eu cupidatat labore.
        Ad id labore irure occaecat occaecat dolore aute esse dolore non pariatur sunt. Quis minim sunt duis sit culpa consequat ullamco ea ullamco aliquip deserunt irure minim eiusmod. Pariatur veniam sunt incididunt ullamco cillum aliqua excepteur dolore proident laborum magna ea. Et voluptate non est mollit cupidatat laborum eiusmod laboris id ullamco enim aliqua.
      </p><hr/>
      <p>Tempor incididunt ut officia excepteur aute ex voluptate est tempor minim consequat. Ad ex ad officia aliqua sunt excepteur nisi irure cupidatat laboris minim minim ea nostrud. Laboris voluptate excepteur anim magna. Id labore sunt voluptate cillum sint sint irure id cillum do ipsum ut. In duis laborum sunt cupidatat quis ut fugiat voluptate.</p>
      
      <p>Fugiat reprehenderit qui non velit deserunt reprehenderit anim. Nisi elit culpa Lorem nostrud eiusmod. Fugiat do commodo aute do duis proident non labore commodo anim ex commodo commodo ut. Commodo adipisicing magna et esse sit ex consectetur dolore aute dolor aute exercitation. Enim amet tempor ullamco ut adipisicing.</p>
      <button onClick={() =>{
        navigate("/")
      }}>Go to Home Page</button>
    </div>
  )
}

export default Contact
