import { NavLink } from 'react-router-dom'
import orederImg from '../../assets/images/create oreder.jpg'


export default function CreateOrder() {
  return (
    <div>
        <div className="container">
            <div className="row">
            <div className="col-md-4">
                <img src={orederImg} className='w-100' alt="" />
            </div>
            <div className="col-md-8">
                    <h2 className='my-4 text-main text-center'> Fill The Information</h2>
                <div className="row align-content-center justify-content-center mx-auto shadow-sm">
                <form className="row g-3">
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Name</label>
    <input type="email" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Phone</label>
    <input type="password" className="form-control" id="inputPassword4"/>
  </div>
  <div className="col-12">
    <label for="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="col-12">
    <label for="inputAddress2" className="form-label">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="col-md-6">
    <label for="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity"/>
  </div>
  <div className="col-md-4">
    <label for="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select">
      <option selected>Choose...</option>
      <option>Egypt</option>
      <option>Saudi Arabia</option>
      <option>Emairts</option>
      <option>Qatar</option>
      <option>Lybia</option>
      <option>Moroco</option>
      <option>Tunsia</option>
    </select>
  </div>
  <div className="col-md-2">
    <label for="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="inputZip"/>
  </div>
  <div className="col-12">
  </div>
</form>
                    <NavLink to={'/Cart'}><button type='submit' className='btn btn-success w-100 my-3  text-white'>
                            Check Out
                        </button>
                    </NavLink>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
