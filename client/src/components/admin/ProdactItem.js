import { NavLink} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { removeProdFeatures } from '../redux/product/ProductAction';

function ProdactItem({popColor, popFeature}) {

    const dispatch = useDispatch()
    const product = useSelector((state)=>state.products.product)
    const category = useSelector((state)=>state.products.product.category)
    const features = useSelector((state)=>state.products.features)
    const productColors = useSelector((state)=>state.products.prodColors)
    console.log(features)

    const productColor = productColors.map((color)=>{
        return <div className='prod-image col-3 me-auto my-2'><img src = {color.image_url} alt = "" className = "h-100 w-100"></img></div>
    })

    function deleteFeature(id){
        fetch(`/features/${id}`,{
            method:"DELETE"
        })
        .then((r)=>r.json())
        .then((data)=>dispatch(removeProdFeatures(data.id)))

    }

    const productFeatures = features.map((feature)=>{
        return <div key={feature.id} className='ms-3 row'><li className = "col-9">{feature.faeture_name}</li>
        <button 
            onClick={()=>{
                deleteFeature(feature.id)
            }} 
            className='col-2 text-danger border-0 bg-white'>
                X
        </button>
        </div>
    })



     
  return (
    <div className='container'>
    <div className='d-flex'>          
    
    <button className='m-1 border-0 bg-white'><NavLink  className='text-decoration-none text-dark'>{category.protected_area}</NavLink></button>
    <button className='m-1 border-0 bg-white'><NavLink to={`/category/${category.name}`} className='text-decoration-none'>{category.name}</NavLink></button>
    <button className='m-1 border-0 bg-white'><NavLink className='text-decoration-none'>{`${product.name}`}</NavLink></button>
    </div>
    <hr/>

    <div className = "row g-0 my-2 mx-auto">
        
        <div className = "product-img col-sm-12 col-lg-6">
            <img src = {product.image_url} alt = "" className = "img-fluid d-block mx-auto"></img>
            <span className = "heart-icon">
                <i className = "far fa-heart"></i>
            </span>

            <div className='row mt-2 product-type'>
                <div className='row'>
                    <h6 className='text-primary col-11'>product colors</h6>
                    <button onClick={popColor} className = "col-1 border-0 bg-dark">
                        <i className = "text-white fa fa-plus"></i>
                    </button>
                </div>
            </div>
            <div className = "product-type px-3 row">                
                {productColor}
            </div>
        </div>

        <div className = "col-sm-12 col-lg-6 p-3">
            {/* <p className = "product-type">{`${category.name}`}</p> */}
            <p className = "d-block text-dark py-2 product-name">{product.name}</p>
            <span className = "product-price">$ 100.50</span>
            <div className = "product-type">{`origin: ${product.origin}`}</div>
            <div className = "product-type">{`dimensions: ${product.dimensions}`}</div>
            <div className = "product-type">{`weight: ${product.weight}`}</div>
            <div className = "product-type">{`standards: ${product.standards}`}</div>

            <div className='row mt-2 product-type'>
                <div className='row'>
                <h6 className='text-primary col-11'>product features</h6>
                <button onClick={popFeature} className = "col-1 border-0 bg-dark">
                    <i className = "text-white fa fa-plus"> </i>
                </button>
                </div>

                <ul className='row'>
                {productFeatures}
                </ul>
            </div>          
        </div>
    </div>       
    </div>
  )
}

export default ProdactItem