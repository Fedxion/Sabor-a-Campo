import React from "react";
import campo from "../img/campo.png"


function Test(){
    return <div>
    <h1>La cdlr</h1>
    <footer>
            <div className="main-footer">
                <div className='container'>
                    <div className='row'>
                        
                        <div className='col-md-3 col-sm-6'>
                            <h4>Sabor a Campo</h4>
                            <ul className='list-unstyled'>
                                <li><img src={campo} alt="" /></li>
                                <li>Tucumán, Argentina</li>
                                <li>Monteagudo 345</li>
                            </ul>
                        </div>

                        <div className='col-md-3 col-sm-6'>
                            <h4>This is my page</h4>
                            <ul className='list-unstyled'>
                                <li>33759440</li>
                                <li>Monteagudo 345</li>
                            </ul>
                        </div>

                        <div className='col-md-3 col-sm-6'>
                            <h4>This is my page</h4>
                            <ul className='list-unstyled'>
                                <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                <li><a href="#"><i class="fab fa-github"></i></a></li>
                                <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                                <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                            </ul>
                        </div>
                   


                    </div>


                    <div className='row'>
                        <p className='col-sm'>
                             &copy;{new Date().getFullYear()} Copyright
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    
     
    
    </div>
}

export default Test;