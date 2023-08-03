import img1 from '../toy3.webp'
import img2 from '../toy2.webp'
import img3 from '../toy4.webp'

function Self1Product() {
  return (
    <>
    <h2>React State & props</h2>

    <ul className='product'>
        <li>
            <div><img src ={img1} /></div>
            <p className='p1'>Hi my name is JESSIE</p>
            <p className='p2'>$200</p>
        </li>
        <li>
            <div><img src ={img2} /></div>
            <p className='p1'>Hi Our name is ALIEN(S)</p>
            <p className='p2'>$180</p>
        </li>
        <li>
            <div><img src ={img3} /></div>
            <p className='p1'>Hi my name is Woody</p>
            <p className='p2'>$240</p>
        </li>
    </ul>
    </>
  )
}

export default Self1Product