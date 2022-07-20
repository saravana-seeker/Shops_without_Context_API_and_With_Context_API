const SingleProduct = ({ data , cart, setCart}) => {
  const style = {
    width: 300,
    minHeight: 400,
  };
console.log(cart)
  return (
    <div className="container">
      <div className="row ">
        {data.map((value) => (
          <div className="col-lg-4 col-6">
            <div className="card m-2" style={{ style }}>
              <img
                src={value.image}
                alt="img"
                className="img-fluid"
                style={{ width: 350, height: 350 }}
              />
              <div className="card-body">
                <p>{value.title}</p>
                <p style={{fontSize:25}}>${value.price}</p>
                {cart.includes(value)?(
                    <button className="btn btn-primary" onClick={
                        () =>setCart(cart.filter((c)=>c.id !==value.id))
                    }>Remove From cart</button>
                ):(
                    <button className="btn btn-primary" onClick={
                        () =>setCart([...cart,value])
                    }>Add to cart</button>  
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleProduct;
