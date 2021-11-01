import propTypes from "prop-types"
const Muraajaco = ({title}) =>{
    //const Name='ahmed'
    //this is our header.js in youtube
    return (
        <div className="murajaco">
            {/* <h1> {props.name} </h1>
            <h1> {props.title} </h1> */}
            <h1>{title}</h1>
{/*            <h2>hello {Name}</h2>
 */}              </div>
    )
}
Muraajaco.defaultProps = {
    title :'App-tracker',
}
Muraajaco.propTypes ={
    title :propTypes.string.isRequired,
}
export default Muraajaco
