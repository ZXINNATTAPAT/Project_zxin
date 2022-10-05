import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react';



export default	function Class(){

		let [a, seta]=useState(0)
		let [b, setb]=useState(0)
		const [equation,setequation]=useState('')
		const [root1,setroot]=useState('')
		
		let calBisection2 = (event) => {
			event.preventDefault()

		//############################################ BISECTION METHOD ###################################################
			
		// 
		
		 function func(x)    
        {
			    return equation;
		    } 
		let Error_rate = 0.000001;
		let xm = a;
			while (((b-a)/b)*100 >= Error_rate)
			{
       
	
				xm = (a+b)/2;// Find middle point

					if (func(xm) === 0.0000){// Check if middle point is root
						break;
					}
					else if (func(xm) * func(a) < 0){// Decide the side to repeat the steps
						b = xm;
					}
					else{
						a = xm;
					}
			}
			let rootvalue = xm;
			setroot(rootvalue.toFixed(6));//function have a problem!!!!
		}
		

		//############################################ reload pages ############################################
		let reload=()=>{
			window.location.reload()
		}
		  return (
			<>
				<div className='class'>
				<div class="container-fluid">
					<div class="border rounded-4 bg-light position-absolute top-50 start-50 translate-middle w-70  p-3 shadow p-3 mb-5 bg-body rounded" >
                    
					<center><h1>Bisection Method</h1></center>
                     
				{/* ############################################ FORM INPUT ############################################ */}
				<form onSubmit ={calBisection2} >
					<div class="mb-3">
								<label >Input Equation</label>
								<input type="text" class="form-control w-85 p-3 " id="formGroupExampleInput" 
									value={equation} onChange={(event)=> setequation(event.target.value)} />
							</div>
								<div class="mb-3 row g-3">
									<div class="col">
										<label>Input A</label>
											<input type="text" class="form-control w-45 p-3 " id="formGroupExampleInput" 
												value={a} onChange={(e)=> seta(e.target.value)}/>	
									</div>

							<div class="col">
								<label>Input B</label>
									<input type="text" class="form-control w-45 p-3" id="formGroupExampleInput"
										value={b} onChange={(e)=> setb(e.target.value)} />
								</div>
												
							</div>
								
					<div class="mb-3 row g-3">
						<div class="col">
							<button type="button submit" class="btn btn-primary border border-2 
							form-control w-35 p-3" >Calculate</button>
						</div>

						<div class="col">
							<button type="button" class="btn btn-secondary border border-2 form-control w-35 p-3" 
									onClick={reload}>Reload</button>
						</div>
					</div>						
			</form>	
					<h5>Equation {equation}</h5>
					<h5> A is {a} </h5>
					<h5>B is {b} </h5> 
					<h5>Root is {root1}</h5>
			</div>
	</div>
	</div>
						
						</>
		  );
		};
		
	